require('dotenv').config()
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const Twitter = require('twitter')

admin.initializeApp()
const db = admin.firestore()

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

exports.checkTwitterMentions = functions.pubsub
  .schedule('every 60 minutes')
  .onRun(async (context) => {
    try {
      const tweets = await twitterClient.get('search/tweets', {
        q: '#roosync',
        result_type: 'recent'
      })

      for (const tweet of tweets.statuses) {
        const userId = tweet.user.id_str

        const userRef = db.collection('users').doc(userId)
        await db.runTransaction(async (transaction) => {
          const doc = await transaction.get(userRef)
          const newPoints = doc.exists ? doc.data().points + 10 : 10
          transaction.set(userRef, { points: newPoints }, { merge: true })
        })
      }

      return null
    } catch (error) {
      console.error('Error updating points for Twitter mentions:', error)
      return null
    }
  })
