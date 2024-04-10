document.addEventListener("DOMContentLoaded", function () {
  // Create the container for the animated GIF
  var cursorGif = document.createElement("img");
  // cursorGif.src = "kursor-xxx.svg"; // Set to your GIF's path
  cursorGif.src = "czarny.svg"; // Set to your GIF's path
  cursorGif.className = "custom-cursor";
  document.body.appendChild(cursorGif);

  // Set the size of the GIF
  cursorGif.style.width = "100px"; // Adjust width as needed
  cursorGif.style.height = "auto"; // Adjust height as needed, 'auto' keeps the aspect ratio

  // Function to move the GIF to cursor position
  function moveGif(e) {
    var xOffset = 10; // Distance to move left from the cursor, adjust as needed
    cursorGif.style.left = e.pageX - xOffset + "px"; // Adjust left position

    cursorGif.style.top = e.pageY + "px";
  }

  // Show and move GIF on link hover
  document.querySelectorAll(".hover-link").forEach(function (link) {
    link.addEventListener("mouseover", function () {
      cursorGif.style.display = "block";
      document.addEventListener("mousemove", moveGif);
    });

    link.addEventListener("mouseout", function () {
      cursorGif.style.display = "none";
      document.removeEventListener("mousemove", moveGif);
    });
  });
});
