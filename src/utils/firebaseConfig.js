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

  const docSnap = await getDoc(userRef)

  if (!docSnap.exists()) {
    await setDoc(userRef, userData)
    console.log('Firestore')
  } else {
    console.log('User already exists')
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
