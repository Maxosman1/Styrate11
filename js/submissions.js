
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
