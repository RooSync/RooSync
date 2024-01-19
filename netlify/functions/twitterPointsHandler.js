// netlify/functions/twitterPointsHandler.js
const { TwitterClient } = require('twitter-api-client')
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  })
})

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
async function getTweetsWithHashtag(hashtag) {
  try {
    const response = await twitterClient.tweets.search({
      q: hashtag,
      count: 100, 
      result_type: 'recent' 
    })

    return response.statuses; 
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
}
async function getUserIdFromTwitterUsername(twitterUsername) {
  const usersRef = admin.firestore().collection('users')
  const querySnapshot = await usersRef
    .where('twitterUsername', '==', twitterUsername.toLowerCase())
    .get()

  if (querySnapshot.empty) {
    return null
  } else {
    const userDoc = querySnapshot.docs[0]
    return userDoc.id
  }
}
async function getProcessedTweets(userId) {
  const userRef = admin.firestore().doc(`users/${userId}`);
  const userDoc = await userRef.get()
  if (userDoc.exists) {
    const userData = userDoc.data()
    return userData.processedTweetsIds || []
  }
  return []
}
async function updateUserPoints(userId, pointsToAdd, tweetId) {
  const userRef = admin.firestore().doc(`users/${userId}`);
  await admin.firestore().runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef);
    if (userDoc.exists) {
      const userData = userDoc.data();
      let processedTweetsIds = userData.processedTweetsIds || []
      if (!processedTweetsIds.includes(tweetId)) {
      
        const newPoints = (userData.points || 0) + pointsToAdd;
        transaction.update(userRef, { points: newPoints });
        processedTweetsIds.push(tweetId)
        transaction.update(userRef, { processedTweetsIds: processedTweetsIds });
      }
    }
  })
}

exports.handler = async function (event, context) {
  console.log("Function triggered to process tweets with #roosync")
  const tweets = await getTweetsWithHashtag('#roosync')
  console.log(`Fetched ${tweets.length} tweets with #roosync`)
  for (const tweet of tweets) {
    const twitterUsername = tweet.user.screen_name
    console.log(`Processing tweet by ${twitterUsername}`)
    const userId = await getUserIdFromTwitterUsername(twitterUsername)
    if (userId) {
      const processedTweets = await getProcessedTweets(userId);
      if (!processedTweets.includes(tweet.id_str)) {
        await updateUserPoints(userId, 5, tweet.id_str);
      }
    } 
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Function executed successfully' })
  }
}
