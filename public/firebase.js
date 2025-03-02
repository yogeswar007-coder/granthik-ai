// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
    authDomain: "granthik-ai.firebaseapp.com",
    projectId: "granthik-ai",
    storageBucket: "granthik-ai.firebasestorage.app",
    messagingSenderId: "258018999740",
    appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
    measurementId: "G-ZETJMXK6FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Email & Password Signup
window.signup = function () {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Email & Password Login
window.login = function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Google Login
window.googleLogin = function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Google Signup
window.googleSignup = function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Signup Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Import and configure Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.firebasestorage.app",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// // Email & Password Signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Signup Successful!");
//             const user = userCredential.user;
//             // Pass user UID to your backend (for example)
//             sendUserDataToBackend(user.uid);
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Email & Password Login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Login Successful!");
//             const user = userCredential.user;
//             // Pass user UID to your backend (for example)
//             sendUserDataToBackend(user.uid);
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Login
// window.googleLogin = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Login Successful!");
//             const user = result.user;
//             // Pass user UID to your backend (for example)
//             sendUserDataToBackend(user.uid);
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Signup
// window.googleSignup = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Signup Successful!");
//             const user = result.user;
//             // Pass user UID to your backend (for example)
//             sendUserDataToBackend(user.uid);
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Function to send the UID to the backend
// // function sendUserDataToBackend(userId) {
// //     // Example: Send UID to your backend API
// //     fetch('https://92e7-34-125-229-221.ngrok-free.app/api/get-user-files', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //             user_id: userId
// //         })
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log("Backend Response:", data);
// //     })
// //     .catch((error) => {
// //         console.error("Error sending data to backend:", error);
// //     });
// // }

// // Function to send the UID to the backend
// function sendUserDataToBackend(userId) {
//     if (!userId) {
//         console.error("No user ID provided");
//         return;
//     }

//     fetch('https://271f-34-125-229-221.ngrok-free.app/api/get-user-files', {
//         method: 'POST',  // Use POST to send data
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ user_id: userId }),  // Send user_id in the body
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Backend Response:", data);
//     })
//     .catch((error) => {
//         console.error("Error sending data to backend:", error);
//     });
// }





// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
// import { getDatabase, ref as dbRef, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(app);
// const database = getDatabase(app);

// // Email & Password Signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Email & Password Login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Login
// window.googleLogin = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Signup
// window.googleSignup = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Upload file to Firebase Storage and save metadata
// window.uploadFile = function (file) {
//     const user = auth.currentUser;  // Get current logged-in user
//     if (user) {
//         const userId = user.uid;  // Get the UID of the logged-in user
//         const storageRef = ref(storage, `users/${userId}/files/${file.name}`);  // Create file reference

//         uploadBytes(storageRef, file).then((snapshot) => {
//             alert("File uploaded successfully!");
//             console.log('File uploaded to Firebase Storage');
//             // Optionally, get the download URL and save it in Firebase Realtime Database
//             getDownloadURL(snapshot.ref).then((downloadURL) => {
//                 console.log('File available at:', downloadURL);
//                 // Save metadata (file name, URL) to Realtime Database
//                 saveFileMetadata(user.uid, file.name, downloadURL);
//             });
//         }).catch((error) => {
//             alert('Error uploading file: ' + error.message);
//         });
//     } else {
//         alert("No user is logged in.");
//     }
// };

// // Save file metadata (file name, URL) to Firebase Realtime Database
// function saveFileMetadata(uid, fileName, url) {
//     const filesRef = dbRef(database, 'files/' + uid);
//     set(filesRef, {
//         [fileName]: {
//             url: url,
//             name: fileName,
//             timestamp: Date.now()
//         }
//     }).then(() => {
//         console.log("File metadata saved to database");
//     }).catch((error) => {
//         console.error("Error saving file metadata:", error);
//     });
// }

// // List files for the logged-in user from Firebase Storage
// window.listUserFiles = function () {
//     const user = auth.currentUser;  // Get current logged-in user
//     if (user) {
//         const userId = user.uid;  // Get the UID of the logged-in user
//         const userFilesRef = ref(storage, `users/${userId}/files/`);  // Reference to user's files

//         listAll(userFilesRef).then((result) => {
//             result.items.forEach((itemRef) => {
//                 console.log('Found file:', itemRef.fullPath);
//                 // You can now display the file URL or metadata in the frontend
//                 getDownloadURL(itemRef).then((downloadURL) => {
//                     console.log('File available at:', downloadURL);
//                     // Display file in your frontend (e.g., add it to a list or show in a gallery)
//                 });
//             });
//         }).catch((error) => {
//             alert('Error listing files: ' + error.message);
//         });
//     } else {
//         alert("No user is logged in.");
//     }
// };

// // Load user files from Firebase Realtime Database
// function loadUserFiles(uid) {
//     const filesRef = dbRef(database, 'files/' + uid);

//     get(filesRef).then((snapshot) => {
//         if (snapshot.exists()) {
//             const files = snapshot.val();
//             displayFiles(files);
//         } else {
//             console.log("No files found for user");
//         }
//     }).catch((error) => {
//         console.error("Error loading files:", error);
//     });
// }

// // Display files on dashboard
// function displayFiles(files) {
//     const filesContainer = document.getElementById("filesContainer");
//     filesContainer.innerHTML = ""; // Clear existing files

//     for (const fileName in files) {
//         const file = files[fileName];

//         const fileElement = document.createElement("div");
//         fileElement.classList.add("file");
//         fileElement.innerHTML = `
//             <h3>${fileName}</h3>
//             <a href="${file.url}" target="_blank">View File</a>
//         `;

//         filesContainer.appendChild(fileElement);
//     }
// }

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
// import { getDatabase, ref as dbRef, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(app);
// const database = getDatabase(app);

// // Email & Password Signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Email & Password Login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Login
// window.googleLogin = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Signup
// window.googleSignup = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Upload file to Firebase Storage and save metadata
// window.uploadFile = function (file) {
//     const user = auth.currentUser;  // Get current logged-in user
//     if (user) {
//         const userId = user.uid;  // Get the UID of the logged-in user
//         const storageRef = ref(storage, `users/${userId}/files/${file.name}`);  // Create file reference

//         uploadBytes(storageRef, file).then((snapshot) => {
//             alert("File uploaded successfully!");
//             console.log('File uploaded to Firebase Storage');
//             // Optionally, get the download URL and save it in Firebase Realtime Database
//             getDownloadURL(snapshot.ref).then((downloadURL) => {
//                 console.log('File available at:', downloadURL);
//                 // Save metadata (file name, URL) to Realtime Database
//                 saveFileMetadata(user.uid, file.name, downloadURL);
//             });
//         }).catch((error) => {
//             alert('Error uploading file: ' + error.message);
//         });
//     } else {
//         alert("No user is logged in.");
//     }
// };

// // Save file metadata (file name, URL) to Firebase Realtime Database
// function saveFileMetadata(uid, fileName, url) {
//     const filesRef = dbRef(database, 'files/' + uid);
//     set(filesRef, {
//         [fileName]: {
//             url: url,
//             name: fileName,
//             timestamp: Date.now()
//         }
//     }).then(() => {
//         console.log("File metadata saved to database");
//     }).catch((error) => {
//         console.error("Error saving file metadata:", error);
//     });
// }

// // List files for the logged-in user from Firebase Storage
// window.listUserFiles = function () {
//     const user = auth.currentUser;  // Get current logged-in user
//     if (user) {
//         const userId = user.uid;  // Get the UID of the logged-in user
//         const userFilesRef = ref(storage, `users/${userId}/files/`);  // Reference to user's files

//         listAll(userFilesRef).then((result) => {
//             result.items.forEach((itemRef) => {
//                 console.log('Found file:', itemRef.fullPath);
//                 // You can now display the file URL or metadata in the frontend
//                 getDownloadURL(itemRef).then((downloadURL) => {
//                     console.log('File available at:', downloadURL);
//                     // Display file in your frontend (e.g., add it to a list or show in a gallery)
//                 });
//             });
//         }).catch((error) => {
//             alert('Error listing files: ' + error.message);
//         });
//     } else {
//         alert("No user is logged in.");
//     }
// };

// // Load user files from Firebase Realtime Database
// function loadUserFiles(uid) {
//     const filesRef = dbRef(database, 'files/' + uid);

//     get(filesRef).then((snapshot) => {
//         if (snapshot.exists()) {
//             const files = snapshot.val();
//             displayFiles(files);
//         } else {
//             console.log("No files found for user");
//         }
//     }).catch((error) => {
//         console.error("Error loading files:", error);
//     });
// }

// // Display files on dashboard
// function displayFiles(files) {
//     const filesContainer = document.getElementById("filesContainer");
//     filesContainer.innerHTML = ""; // Clear existing files

//     for (const fileName in files) {
//         const file = files[fileName];

//         const fileElement = document.createElement("div");
//         fileElement.classList.add("file");
//         fileElement.innerHTML = `
//             <h3>${fileName}</h3>
//             <a href="${file.url}" target="_blank">View File</a>
//         `;

//         filesContainer.appendChild(fileElement);
//     }
// }



// Firebase SDK Imports
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
// import { getDatabase, ref as dbRef, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(app);
// const database = getDatabase(app);

// // Email & Password Signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Email & Password Login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Login
// window.googleLogin = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Signup
// window.googleSignup = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// window.uploadFile = function (file) {
//     const user = auth.currentUser;  // Get current logged-in user
//     if (user) {
//         const userId = user.uid;  // Get the UID of the logged-in user
//         const storageRef = ref(storage, `users/${userId}/files/${file.name}`);  // Create file reference under user's folder

//         uploadBytes(storageRef, file).then((snapshot) => {
//             alert("File uploaded successfully!");
//             console.log('File uploaded to Firebase Storage');
//             // Optionally, get the download URL and save it in Firebase Realtime Database
//             getDownloadURL(snapshot.ref).then((downloadURL) => {
//                 console.log('File available at:', downloadURL);
//                 // Save metadata (file name, URL) to Realtime Database
//                 saveFileMetadata(user.uid, file.name, downloadURL);
//             });
//         }).catch((error) => {
//             alert('Error uploading file: ' + error.message);
//         });
//     } else {
//         alert("No user is logged in.");
//     }
// };




// // Save metadata (file name, URL) to Firebase Realtime Database
// function saveFileMetadata(uid, fileName, url) {
//     const filesRef = dbRef(database, 'files/' + uid);
//     set(filesRef, {
//         [fileName]: {
//             url: url,
//             name: `users/${uid}/some-category/${fileName}`,
//             timestamp: Date.now()
//         }
//     }).then(() => {
//         console.log("File metadata saved to database");
//     }).catch((error) => {
//         console.error("Error saving file metadata:", error);
//     });
// }

// window.saveFileMetadata = function (uid, fileName, category, url) {
//     const filesRef = dbRef(database, `files/${uid}/${category}/${fileName}`);
//     set(filesRef, {
//         url: url,
//         name: fileName,
//         category: category,
//         timestamp: Date.now()
//     }).then(() => {
//         console.log("File metadata saved to database");
//     }).catch((error) => {
//         console.error("Error saving file metadata:", error);
//     });
// };


// // List files for the logged-in user
// window.listUserFiles = function () {
//     const user = auth.currentUser;  // Get current logged-in user
//     if (user) {
//         const userId = user.uid;  // Get the UID of the logged-in user
//         const userFilesRef = ref(storage, `users/${userId}/files/`);  // Reference to user's files

//         listAll(userFilesRef).then((result) => {
//             result.items.forEach((itemRef) => {
//                 console.log('Found file:', itemRef.fullPath);
//                 // You can now display the file URL or metadata in the frontend
//                 getDownloadURL(itemRef).then((downloadURL) => {
//                     console.log('File available at:', downloadURL);
//                     // Display file in your frontend (e.g., add it to a list or show in a gallery)
//                 });
//             });
//         }).catch((error) => {
//             alert('Error listing files: ' + error.message);
//         });
//     } else {
//         alert("No user is logged in.");
//     }
// };

// // Load user files from Firebase Realtime Database
// function loadUserFiles(uid) {
//     const filesRef = dbRef(database, 'files/' + uid);

//     get(filesRef).then((snapshot) => {
//         if (snapshot.exists()) {
//             const files = snapshot.val();
//             displayFiles(files);
//         } else {
//             console.log("No files found for user");
//         }
//     }).catch((error) => {
//         console.error("Error loading files:", error);
//     });
// }

// // Display files on dashboard
// function displayFiles(files) {
//     const filesContainer = document.getElementById("filesContainer");
//     filesContainer.innerHTML = ""; // Clear existing files

//     for (const fileName in files) {
//         const file = files[fileName];

//         const fileElement = document.createElement("div");
//         fileElement.classList.add("file");
//         fileElement.innerHTML = `
//             <h3>${fileName}</h3>
//             <a href="${file.url}" target="_blank">View File</a>
//         `;

//         filesContainer.appendChild(fileElement);
//     }
// }

// firebase.js - Firebase Authentication, Storage, and Database Functions

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
// import { getDatabase, ref as dbRef, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(app);
// const database = getDatabase(app);

// // Function to handle signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             alert("Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Function to handle login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             alert("Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Function for Google authentication
// window.googleAuth = function () {
//     signInWithPopup(auth, provider)
//         .then(() => {
//             alert("Google Authentication Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Function to upload a file
// window.uploadFile = function (file, category) {
//     const user = auth.currentUser;
//     if (!user) {
//         alert("No user is logged in.");
//         return;
//     }

//     const userId = user.uid;
//     const storageRef = ref(storage, `${userId}/${category}/${file.name}`);

//     uploadBytes(storageRef, file).then((snapshot) => {
//         alert("File uploaded successfully!");
//         getDownloadURL(snapshot.ref).then((downloadURL) => {
//             saveFileMetadata(userId, file.name, category, downloadURL);
//         });
//     }).catch((error) => alert('Error uploading file: ' + error.message));
// };

// // Function to save file metadata
// function saveFileMetadata(uid, fileName, category, url) {
//     const filesRef = dbRef(database, `files/${uid}/${category}/${fileName}`);
//     set(filesRef, { url, name: fileName, category, timestamp: Date.now() })
//         .then(() => console.log("File metadata saved successfully."))
//         .catch((error) => console.error("Error saving file metadata:", error));
// }

// // Function to list files for a user
// window.listUserFiles = function () {
//     const user = auth.currentUser;
//     if (!user) {
//         alert("No user is logged in.");
//         return;
//     }

//     const userId = user.uid;
//     const userFilesRef = ref(storage, `${userId}/`);

//     listAll(userFilesRef).then((result) => {
//         result.items.forEach((itemRef) => {
//             getDownloadURL(itemRef).then((downloadURL) => {
//                 console.log(`File: ${itemRef.fullPath}, URL: ${downloadURL}`);
//             });
//         });
//     }).catch((error) => alert('Error listing files: ' + error.message));
// };

// // Function to load files from the database
// window.loadUserFiles = function () {
//     const user = auth.currentUser;
//     if (!user) {
//         alert("No user is logged in.");
//         return;
//     }

//     const filesRef = dbRef(database, `files/${user.uid}`);

//     get(filesRef).then((snapshot) => {
//         if (snapshot.exists()) {
//             displayFiles(snapshot.val());
//         } else {
//             console.log("No files found.");
//         }
//     }).catch((error) => console.error("Error loading files:", error));
// };

// // Function to display files on the dashboard
// function displayFiles(files) {
//     const filesContainer = document.getElementById("filesContainer");
//     filesContainer.innerHTML = ""; // Clear existing files

//     for (const category in files) {
//         for (const fileName in files[category]) {
//             const file = files[category][fileName];

//             const fileElement = document.createElement("div");
//             fileElement.classList.add("file");
//             fileElement.innerHTML = `
//                 <h3>${fileName}</h3>
//                 <a href="${file.url}" target="_blank">View File</a>
//             `;

//             filesContainer.appendChild(fileElement);
//         }
//     }
// }

// // Track authentication state
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("User logged in:", user.uid);
//         loadUserFiles();
//     } else {
//         console.log("No user logged in.");
//     }
// });



// Import and configure Firebase

// document.addEventListener("DOMContentLoaded", async () => {
//     const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
//     const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js");
//     const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.19.0/+esm');

//     // Firebase configuration
//     const firebaseConfig = {
//         apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//         authDomain: "granthik-ai.firebaseapp.com",
//         projectId: "granthik-ai",
//         storageBucket: "granthik-ai.firebasestorage.app",
//         messagingSenderId: "258018999740",
//         appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//         measurementId: "G-ZETJMXK6FM"
//     };

//     // Supabase configuration
//     const supabaseUrl = "https://nnywptducrotdlnmobby.supabase.co";
//     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ueXdwdGR1Y3JvdGRsbm1vYmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NzM3MTYsImV4cCI6MjA1NjM0OTcxNn0.x7pk3WuhLSUbRvZdyGAumGS751jMt2jz4vbblz6Q0lA"; // Replace with your key
//     const supabase = createClient(supabaseUrl, supabaseKey);

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);
//     const provider = new GoogleAuthProvider();

//     async function uploadFileToSupabase(file, folder) {
//         const { data, error } = await supabase.storage
//             .from('files') // Replace 'files' with your storage bucket name
//             .upload(`${folder}/${file.name}`, file);

//         if (error) {
//             console.error("Error uploading file: ", error.message);
//         } else {
//             console.log("File uploaded successfully: ", data);
//         }
//     }

//     window.googleLogin = function () {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 alert("Google Login Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     window.googleSignup = function () {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 alert("Google Signup Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     window.signup = function () {
//         const email = document.getElementById("signupEmail").value;
//         const password = document.getElementById("signupPassword").value;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 alert("Signup Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     window.login = function () {
//         const email = document.getElementById("loginEmail").value;
//         const password = document.getElementById("loginPassword").value;

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 alert("Login Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     document.getElementById("fileInput").addEventListener("change", async (e) => {
//         const file = e.target.files[0];
//         const folder = document.getElementById("folderSelect").value;

//         if (file && folder) {
//             await uploadFileToSupabase(file, folder);
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", async () => {
//     const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js");
//     const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js");
//     const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.19.0/+esm');

//     // Firebase configuration
//     const firebaseConfig = {
//         apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//         authDomain: "granthik-ai.firebaseapp.com",
//         projectId: "granthik-ai",
//         storageBucket: "granthik-ai.firebasestorage.app",
//         messagingSenderId: "258018999740",
//         appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//         measurementId: "G-ZETJMXK6FM"
//     };

//     // Supabase configuration
//     const supabaseUrl = "https://nnywptducrotdlnmobby.supabase.co";
//     const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ueXdwdGR1Y3JvdGRsbm1vYmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NzM3MTYsImV4cCI6MjA1NjM0OTcxNn0.x7pk3WuhLSUbRvZdyGAumGS751jMt2jz4vbblz6Q0lA"; // Replace with your key
//     const supabase = createClient(supabaseUrl, supabaseKey);

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);
//     const provider = new GoogleAuthProvider();

//     async function uploadFileToSupabase(file, folder) {
//         const { data, error } = await supabase.storage
//             .from('files') // Replace 'files' with your storage bucket name
//             .upload(`${folder}/${file.name}`, file);

//         if (error) {
//             console.error("Error uploading file: ", error.message);
//         } else {
//             console.log("File uploaded successfully: ", data);
//         }
//     }

//     // Check if user is logged in when the page loads
//     const user = auth.currentUser;
//     const folderButton = document.getElementById("foldersButton");

//     if (user) {
//         // If the user is logged in, show the folder button
//         folderButton.style.display = "block";
//     } else {
//         // If the user is not logged in, hide the folder button and redirect to login page
//         folderButton.style.display = "none";
//         window.location.href = "login.html"; // Redirect to login page if not logged in
//     }

//     // Google Login
//     window.googleLogin = function () {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 alert("Google Login Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     // Google Signup
//     window.googleSignup = function () {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 alert("Google Signup Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     // Email & Password Signup
//     window.signup = function () {
//         const email = document.getElementById("signupEmail").value;
//         const password = document.getElementById("signupPassword").value;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 alert("Signup Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     // Email & Password Login
//     window.login = function () {
//         const email = document.getElementById("loginEmail").value;
//         const password = document.getElementById("loginPassword").value;

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 alert("Login Successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     // When the user clicks on the "Folders" button
//     folderButton.addEventListener("click", () => {
//         if (user) {
//             // Redirect to user's folder page, passing userId
//             window.location.href = `folders.html?user_id=${user.uid}`;
//         } else {
//             // If no user is logged in, redirect to login
//             window.location.href = "login.html";
//         }
//     });

//     // File upload logic
//     document.getElementById("fileInput").addEventListener("change", async (e) => {
//         const file = e.target.files[0];
//         const folder = document.getElementById("folderSelect").value;

//         if (file && folder) {
//             await uploadFileToSupabase(file, folder);
//         }
//     });
// });




// Import and configure Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { 
//     getAuth, 
//     signInWithEmailAndPassword, 
//     createUserWithEmailAndPassword, 
//     GoogleAuthProvider, 
//     signInWithPopup 
// } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",  // Fixed storage bucket URL
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
// const storage = getStorage(app);

// // Email & Password Signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Email & Password Login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert("Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Login
// window.googleLogin = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Google Signup
// window.googleSignup = function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             alert("Google Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => {
//             alert(error.message);
//         });
// };

// // Firestore - Add Data
// window.addDocument = async function (collectionName, data) {
//     try {
//         const docRef = await addDoc(collection(db, collectionName), data);
//         console.log("Document written with ID: ", docRef.id);
//         alert("Document added successfully!");
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         alert("Failed to add document.");
//     }
// };

// // Firestore - Get Data
// window.getDocuments = async function (collectionName) {
//     try {
//         const querySnapshot = await getDocs(collection(db, collectionName));
//         const documents = [];
//         querySnapshot.forEach((doc) => {
//             documents.push({ id: doc.id, ...doc.data() });
//         });
//         console.log("Fetched Documents:", documents);
//         return documents;
//     } catch (error) {
//         console.error("Error fetching documents: ", error);
//         alert("Failed to fetch documents.");
//     }
// };

// // Firebase Storage - Upload File
// window.uploadFile = async function (file) {
//     try {
//         const storageRef = ref(storage, `uploads/${file.name}`);
//         await uploadBytes(storageRef, file);
//         const fileURL = await getDownloadURL(storageRef);
//         console.log("File uploaded successfully:", fileURL);
//         alert("File uploaded successfully!");
//         return fileURL;
//     } catch (error) {
//         console.error("Error uploading file: ", error);
//         alert("Failed to upload file.");
//     }
// };

// export { auth, db, storage, signInWithGoogle, logOut, addDocument, getDocuments, deleteDocument, uploadFile, deleteFile, storeFileMetadata };



// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { 
//     getAuth, 
//     signInWithEmailAndPassword, 
//     createUserWithEmailAndPassword, 
//     GoogleAuthProvider, 
//     signInWithPopup 
// } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
// const storage = getStorage(app);

// // Email & Password Signup
// window.signup = function () {
//     const email = document.getElementById("signupEmail").value;
//     const password = document.getElementById("signupPassword").value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             alert("Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Email & Password Login
// window.login = function () {
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//             alert("Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Google Login
// window.googleLogin = function () {
//     signInWithPopup(auth, provider)
//         .then(() => {
//             alert("Google Login Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Google Signup
// window.googleSignup = function () {
//     signInWithPopup(auth, provider)
//         .then(() => {
//             alert("Google Signup Successful!");
//             window.location.href = "dashboard.html";
//         })
//         .catch((error) => alert(error.message));
// };

// // Firestore - Add Data
// const addDocument = async function (collectionName, data) {
//     try {
//         const docRef = await addDoc(collection(db, collectionName), data);
//         console.log("Document written with ID: ", docRef.id);
//         alert("Document added successfully!");
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         alert("Failed to add document.");
//     }
// };
// window.addDocument = addDocument;

// // Firestore - Get Data
// const getDocuments = async function (collectionName) {
//     try {
//         const querySnapshot = await getDocs(collection(db, collectionName));
//         const documents = [];
//         querySnapshot.forEach((doc) => {
//             documents.push({ id: doc.id, ...doc.data() });
//         });
//         console.log("Fetched Documents:", documents);
//         return documents;
//     } catch (error) {
//         console.error("Error fetching documents: ", error);
//         alert("Failed to fetch documents.");
//     }
// };
// window.getDocuments = getDocuments;

// // Firebase Storage - Upload File
// const uploadFile = async function (file) {
//     try {
//         const storageRef = ref(storage, `uploads/${file.name}`);
//         await uploadBytes(storageRef, file);
//         const fileURL = await getDownloadURL(storageRef);
//         console.log("File uploaded successfully:", fileURL);
//         alert("File uploaded successfully!");
//         return fileURL;
//     } catch (error) {
//         console.error("Error uploading file: ", error);
//         alert("Failed to upload file.");
//     }
// };
// window.uploadFile = uploadFile;

// // Placeholder for functions that were missing in the original code
// const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then(() => console.log("Google Sign-in Successful"))
//         .catch((error) => console.error("Google Sign-in Error:", error));
// };

// const logOut = () => {
//     auth.signOut()
//         .then(() => console.log("Logged out successfully"))
//         .catch((error) => console.error("Logout Error:", error));
// };

// const deleteDocument = async (collectionName, docId) => {
//     console.log(`Deleting document ${docId} from ${collectionName}...`);
// };

// const deleteFile = async (filePath) => {
//     console.log(`Deleting file at ${filePath}...`);
// };

// const storeFileMetadata = async (metadata) => {
//     console.log("Storing file metadata:", metadata);
// };

// // Export all defined functions
// export { 
//     auth, db, storage, 
//     signInWithGoogle, logOut, 
//     addDocument, getDocuments, deleteDocument, 
//     uploadFile, deleteFile, storeFileMetadata 
// };


// Import and configure Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { 
//     getAuth, 
//     signInWithEmailAndPassword, 
//     createUserWithEmailAndPassword, 
//     GoogleAuthProvider, 
//     signInWithPopup 
// } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyALY-EAMIFkoRSz1rYAZxsH4XYaybLW10I",
//     authDomain: "granthik-ai.firebaseapp.com",
//     projectId: "granthik-ai",
//     storageBucket: "granthik-ai.appspot.com",
//     messagingSenderId: "258018999740",
//     appId: "1:258018999740:web:dce62dd9ce985479c13fb9",
//     measurementId: "G-ZETJMXK6FM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app);
// const storage = getStorage(app);

// // Generic authentication function
// async function authenticate(method, email = null, password = null) {
//     try {
//         let userCredential;
//         if (method === "email") {
//             userCredential = await signInWithEmailAndPassword(auth, email, password);
//         } else if (method === "signup") {
//             userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         } else {
//             userCredential = await signInWithPopup(auth, provider);
//         }
//         alert("Authentication Successful!");
//         window.location.href = "dashboard.html";
//     } catch (error) {
//         alert(error.message);
//     }
// }

// // Assign authentication functions to window
// window.signup = () => authenticate("signup", document.getElementById("signupEmail").value, document.getElementById("signupPassword").value);
// window.login = () => authenticate("email", document.getElementById("loginEmail").value, document.getElementById("loginPassword").value);
// window.googleAuth = () => authenticate("google");

// // Firestore - Add Data
// window.addDocument = async function (collectionName, data) {
//     try {
//         const docRef = await addDoc(collection(db, collectionName), data);
//         console.log("Document written with ID: ", docRef.id);
//         alert("Document added successfully!");
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         alert("Failed to add document.");
//     }
// };

// // Firestore - Get Data
// window.getDocuments = async function (collectionName) {
//     try {
//         const querySnapshot = await getDocs(collection(db, collectionName));
//         return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     } catch (error) {
//         console.error("Error fetching documents: ", error);
//         alert("Failed to fetch documents.");
//     }
// };

// // Firebase Storage - Upload File
// window.uploadFile = async function (file) {
//     try {
//         const storageRef = ref(storage, `uploads/${file.name}`);
//         await uploadBytes(storageRef, file);
//         const fileURL = await getDownloadURL(storageRef);
//         console.log("File uploaded successfully:", fileURL);
//         alert("File uploaded successfully!");
//         return fileURL;
//     } catch (error) {
//         console.error("Error uploading file: ", error);
//         alert("Failed to upload file.");
//     }
// };

// export { auth, db, storage, authenticate, addDocument, getDocuments, uploadFile };
