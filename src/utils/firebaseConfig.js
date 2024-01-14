import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  //...
  apiKey: 'AIzaSyD6ge-teG3vGOR-ByKsfFdNoqePcI3GU0I',
  authDomain: 'roosync-1fdf7.firebaseapp.com',
  projectId: 'roosync-1fdf7',
  storageBucket: 'roosync-1fdf7.appspot.com',
  messagingSenderId: '1067095206010',
  appId: '1:1067095206010:web:fb81bf780dfe3eed50b3c3',
  measurementId: 'G-9RRM5RTGH9'
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)
const saveUserToFirestore = async (userData) => {
  const userRef = doc(db, 'users', userData.uid)

  // 检查用户是否已存在
  const docSnap = await getDoc(userRef)

  if (!docSnap.exists()) {
    // 如果用户不存在，则添加新用户
    await setDoc(userRef, userData)
    console.log('新用户信息已保存到 Firestore')
  } else {
    // 如果用户已存在，您可以选择更新信息
    console.log('用户已存在，信息未更新')
  }
}
const fetchUserData = async (userId) => {
  const userRef = doc(db, 'users', userId)
  try {
    const docSnap = await getDoc(userRef)
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log('No such user!')
      return null
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
    return null
  }
}

export { firebaseApp, db, auth, saveUserToFirestore, fetchUserData }
