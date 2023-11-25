//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
btn.addEventListener("click",()=>{
	function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

let imagePromises = images.map(img => loadImage(img.url));

Promise.all(imagePromises)
  .then(images => {
    console.log("All images loaded successfully:", images);
    // You can use the loaded images here, for example, append them to the output element
    images.forEach(img => {
      output.appendChild(img);
    });
  })
  .catch(error => {
    console.error("Error loading one or more images:", error);
  });
})
