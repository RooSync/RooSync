// useUserPoints.js 或者其他您选择的文件名
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  getFirestore,
  doc,
  onSnapshot,
  setDoc,
  getDoc
} from 'firebase/firestore'

const db = getFirestore()
const auth = getAuth()
const userPoints = ref(0)
const inviteLink = ref('')

// 获取所有用户的积分
export function useUserPoints() {
  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid
        const userRef = doc(db, 'users', userId)

        onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            userPoints.value = doc.data().points || 0
            inviteLink.value = doc.data().inviteLink || ''
            if (!inviteLink.value) {
              generateAndSaveInviteLink(userId)
            }
          }
        })
      }
    })
  })

  return { userPoints, inviteLink }
}

// link
async function generateAndSaveInviteLink(userId) {
  const newInviteLink = `https://roosync.com/invite?ref=${userId}`
  const userRef = doc(db, 'users', userId)

  // if user link
  const docSnap = await getDoc(userRef)
  if (docSnap.exists() && !docSnap.data().inviteLink) {
    await setDoc(userRef, { inviteLink: newInviteLink }, { merge: true })
    inviteLink.value = newInviteLink
  }
}
