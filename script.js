function upDate(previewPic) {
  // 3a. Verify event is triggering in console
  console.log("Mouse over event triggered");

  // 3b. Print alt text and image src to console
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  // Get target display div
  const displayDiv = document.getElementById("image");

  // 3c. Change div text to preview image's alt text
  displayDiv.innerHTML = previewPic.alt;

  // 3e. Change div background-image to preview image's src
  displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  // Get target display div
  const displayDiv = document.getElementById("image");

  // 4a. Reset background image to empty url('')
  displayDiv.style.backgroundImage = "url('')";

  // 4b. Reset text back to original prompt instruction
  displayDiv.innerHTML = "Hover over an image below to display here.";
}