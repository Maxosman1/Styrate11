import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";

// Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyBD5NQbPThN7wO0vID2Uvg1fb_JCCS1l04",
  authDomain: "styrate-2ca66.firebaseapp.com",
  projectId: "styrate-2ca66",
  storageBucket: "styrate-2ca66.appspot.com",
  messagingSenderId: "56860576310",
  appId: "1:56860576310:web:0270c6c470c05a16602697",
  measurementId: "G-YH58NS4ZHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to display videos
async function displayVideos() {
  const videosContainer = document.getElementById("videos-container");
  const querySnapshot = await getDocs(collection(db, "videos"));

  querySnapshot.forEach((doc) => {
    const video = doc.data();
    const videoElement = document.createElement("div");
    videoElement.innerHTML = `
            <div class="video">
                <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                <p>${video.title}</p>
                <button onclick="voteOnVideo('${doc.id}')">Vote</button>
                <span>Votes: ${video.votes}</span>
            </div>
        `;
    videosContainer.appendChild(videoElement);
  });
}

// Function to handle voting
function voteOnVideo(videoId) {
  const videoRef = doc(db, "videos", videoId);
  getDocs(videoRef).then((videoDoc) => {
    if (videoDoc.exists()) {
      const currentVotes = videoDoc.data().votes;
      updateDoc(videoRef, { votes: currentVotes + 1 });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayVideos();
});

window.voteOnVideo = voteOnVideo; // Expose voteOnVideo to the global scope
