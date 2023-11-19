document.addEventListener("DOMContentLoaded", () => {
  // Countdown Timer Function
  const countdownElement = document.getElementById("contest-timer");
  const contestEndTime = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

  function updateCountdown() {
    const timeLeft = contestEndTime - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownElement.textContent = "Contest Ended";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Fetch Video Data (Mock Function)
  function fetchVideoData(pageNumber) {
    // Replace this mock function with your API call to fetch video data
    // For demonstration, it's returning a promise that resolves to a mock data structure
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          videos: [
            // Mock video data
          ],
          totalPages: 5
        });
      }, 1000);
    });
  }

  // Load Videos with Pagination
  function loadVideos(pageNumber = 1) {
    fetchVideoData(pageNumber).then((data) => {
      const videosList = document.getElementById("videos-list");
      const paginationDiv = document.getElementById("pagination");

      videosList.innerHTML = "";
      paginationDiv.innerHTML = "";

      data.videos.forEach((video) => {
        const videoElement = document.createElement("div");
        videoElement.textContent = video.title; // Replace with actual video content
        videosList.appendChild(videoElement);
      });

      for (let i = 1; i <= data.totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.textContent = i;
        pageLink.href = "#";
        pageLink.addEventListener("click", (e) => {
          e.preventDefault();
          loadVideos(i);
        });
        paginationDiv.appendChild(pageLink);
      }
    });
  }

  // Fetch Top Videos (Mock Function)
  function fetchTopVideos() {
    // Replace this mock function with your API call to fetch top videos
    // For demonstration, it's returning a promise that resolves to a mock data structure
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: "gold", title: "Gold Video" },
          { id: "silver", title: "Silver Video" },
          { id: "bronze", title: "Bronze Video" }
        ]);
      }, 1000);
    });
  }

  // Display Top Videos
  function displayTopVideos() {
    fetchTopVideos().then((videos) => {
      videos.forEach((video) => {
        const videoElement = document.getElementById(video.id);
        videoElement.textContent = video.title; // Replace with actual video content
      });
    });
  }

  // Initial function calls
  startCountdown();
  loadVideos();
  displayTopVideos();
});
document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("contest-timer");
  const contestEndTime = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

  function updateCountdown() {
    const timeLeft = contestEndTime - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownElement.textContent = "Contest Ended";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
