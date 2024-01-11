import { initializeApp } from 'firebase/app'

// TODO: Replace the following with your app's Firebase project configuration
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
export default firebaseApp
