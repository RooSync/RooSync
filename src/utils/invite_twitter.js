import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore()

export function parseReferralLink() {
  console.log('正在执行 parseReferralLink 函数')
  const urlParams = new URLSearchParams(window.location.search)
  const referrerId = urlParams.get('ref')
  console.log('解析到的 referrerId:', referrerId)
  if (referrerId) {
    sessionStorage.setItem('referrerId', referrerId)
    console.log('referrerId sessionStorage')
  } else {
    console.log('referrerId')
  }
}

export async function updateReferrerPoints() {
  const referrerId = sessionStorage.getItem('referrerId')
  console.log('user ID:', referrerId)
  if (referrerId) {
    const referrerRef = doc(db, 'users', referrerId)
    const referrerSnap = await getDoc(referrerRef)

    if (referrerSnap.exists()) {
      const currentPoints = referrerSnap.data().points || 0
      const currentInvitesCount = referrerSnap.data().invitesCount || 0
      await setDoc(
        referrerRef,
        { points: currentPoints + 10, invitesCount: currentInvitesCount + 1 },
        { merge: true }
      )
    }
  }
}

// export function onTwitterLoginSuccess() {
//   updateReferrerPoints()
// }
