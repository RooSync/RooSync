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

async function updateUserPoints(userId, pointsToAdd) {
  const userRef = admin.firestore().doc(`users/${userId}`)
  await admin.firestore().runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef)
    if (userDoc.exists) {
      const userData = userDoc.data()
      const newPoints = (userData.points || 0) + pointsToAdd
      transaction.update(userRef, { points: newPoints })
    }
  })
}

exports.handler = async function (event, context) {
  const tweets = await getTweetsWithHashtag('#roosync')

  for (const tweet of tweets) {
    const twitterUsername = tweet.user.screen_name
    const userId = await getUserIdFromTwitterUsername(twitterUsername)
    if (userId) {
      await updateUserPoints(userId, 5)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Function executed successfully' })
  }
}
