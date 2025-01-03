document.getElementById("download-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;

  fetch("https://morally-nearby-penguin.ngrok-free.app/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  })
    .then((res) => res.text())
    .then((message) => {
      alert(message);
      loadVideos();
    })
    .catch(() => alert("Failed to download video."));
});

function loadVideos() {
  fetch("https://morally-nearby-penguin.ngrok-free.app/videos")
    .then((res) => res.json())
    .then((videos) => {
      const videoList = document.getElementById("video-list");
      videoList.innerHTML = "";
      videos.forEach((video) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="https://morally-nearby-penguin.ngrok-free.app/static/${video}" download>${video}</a>`;
        videoList.appendChild(li);
      });
    });
}

// Load videos on page load
loadVideos();
