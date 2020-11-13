var firebaseConfig = {
    apiKey: "AIzaSyArDwh29-1SXIxF2qJMjOW6YqNCcvacfdM",
    authDomain: "fotalbum-9a585.firebaseapp.com",
    databaseURL: "https://fotalbum-9a585.firebaseio.com",
    projectId: "fotalbum-9a585",
    storageBucket: "fotalbum-9a585.appspot.com",
    messagingSenderId: "278100614190",
    appId: "1:278100614190:web:b5dffd820811eadf6fd3bf",
    measurementId: "G-QSDTLLNCMK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//apuntadores a las tablas de la base de datos
const tbl_opcMenu=firebase.database().ref('opcMenu');
const tbl_tipos=firebase.database().ref('tipos');
const tbl_fotografias=firebase.database().ref('fotografias');