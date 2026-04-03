// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyAg1nIhRnYUcOrMoaXsQLhWxZf-UuJNBQc",
  authDomain: "tamwep.firebaseapp.com",
  projectId: "tamwep",
  storageBucket: "tamwep.firebasestorage.app",
  messagingSenderId: "108747390673",
  appId: "1:108747390673:web:9a7a9750a0e22ba7ea0ff0"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.enablePersistence({synchronizeTabs:true}).catch(()=>{});

const USE_FIREBASE = true;
