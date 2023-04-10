import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNFprOCrT2q-wiMG8Pwnv9o4sGm_TR_hE",
  authDomain: "shopping-ba3aa.firebaseapp.com",
  projectId: "shopping-ba3aa",
  storageBucket: "shopping-ba3aa.appspot.com",
  messagingSenderId: "244492111813",
  appId: "1:244492111813:web:686164c8340347861705ac"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
