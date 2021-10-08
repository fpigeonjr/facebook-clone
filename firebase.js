import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD2LJLZzsNUCP4KLXluqE2MjWmZXNUpgYA',
  authDomain: 'facebook-clone-6db7f.firebaseapp.com',
  projectId: 'facebook-clone-6db7f',
  storageBucket: 'facebook-clone-6db7f.appspot.com',
  messagingSenderId: '677506376468',
  appId: '1:677506376468:web:9430bb294476f27aaf5801',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

const storage = firebase.storage()

export { db, storage }
