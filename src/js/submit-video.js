// Modularized functions for video embedding and form handling

// Function to validate the video URL
function isValidVideoUrl(url) {
  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com") ||
    url.includes("facebook.com") ||
    url.includes("tiktok.com") ||
    url.includes("dailymotion.com")
  );
}

// Function to handle video preview
function previewVideo() {
  const videoUrl = document.getElementById("video-url").value;
  if (!isValidVideoUrl(videoUrl)) {
    alert("Please enter a valid video URL.");
    return;
  }
  const embedHTML = embedVideo(videoUrl);
  document.getElementById("preview-container").innerHTML = embedHTML;
}

// Function to handle video submission
function submitVideo(event) {
  event.preventDefault();
  const contestCategory = document.getElementById("contest-category").value;
  const videoUrl = document.getElementById("video-url").value;

  if (!isValidVideoUrl(videoUrl)) {
    alert("Please enter a valid video URL.");
    return;
  }

  // TODO: Implement the actual submission logic here
  console.log("Video submitted:", videoUrl, "Category:", contestCategory);
  alert("Video submitted successfully!");
  document.getElementById("video-submit-form").reset();
  document.getElementById("preview-container").innerHTML = "";
}

// Embedding functions for different platforms
function embedVideo(videoUrl) {
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const videoId = extractYouTubeVideoId(videoUrl);
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else if (videoUrl.includes("vimeo.com")) {
    const videoId = extractVimeoVideoId(videoUrl);
    return `<iframe src="https://player.vimeo.com/video/${videoId}" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  } else if (
    videoUrl.includes("facebook.com") ||
    videoUrl.includes("fb.watch")
  ) {
    const videoId = extractFacebookVideoId(videoUrl);
    return `<iframe src="https://www.facebook.com/plugins/video.php?href=${videoUrl}&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>`;
  } else if (videoUrl.includes("tiktok.com")) {
    const videoId = extractTikTokVideoId(videoUrl);
    return `<iframe src="https://www.tiktok.com/embed/v2/${videoId}" width="560" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  } else if (videoUrl.includes("dailymotion.com")) {
    const videoId = extractDailymotionVideoId(videoUrl);
    return `<iframe frameborder="0" width="560" height="315" src="https://www.dailymotion.com/embed/video/${videoId}" allowfullscreen></iframe>`;
  } else {
    return "Video platform not supported";
  }
}

// Video ID extraction functions for different platforms
function extractYouTubeVideoId(url) {
  const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  return match ? match[1] : null;
}

function extractVimeoVideoId(url) {
  const vimeoRegex = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/;
  const match = url.match(vimeoRegex);
  return match ? match[1] : null;
}

function extractFacebookVideoId(url) {
  const facebookRegex = /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:video\.php\?v=|watch\?v=)([0-9]+)/;
  const match = url.match(facebookRegex);
  return match ? match[1] : null;
}

function extractTikTokVideoId(url) {
  const tiktokRegex = /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/(?:@[\w-]+\/video\/|v\/)([\w-]+)/;
  const match = url.match(tiktokRegex);
  return match ? match[1] : null;
}

function extractDailymotionVideoId(url) {
  const dailymotionRegex = /dailymotion.com\/video\/([a-zA-Z0-9]+)/;
  const match = url.match(dailymotionRegex);
  return match ? match[1] : null;
}

// Event listeners for preview and submission
document
  .getElementById("preview-button")
  .addEventListener("click", previewVideo);
document
  .getElementById("video-submit-form")
  .addEventListener("submit", submitVideo);
