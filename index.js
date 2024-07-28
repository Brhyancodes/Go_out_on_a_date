// creating references to gifs
const askingGif = document.getElementById("askingGif");
const celebratingGif = document.getElementById("Celebration");

// creating reference to moveable button
const noButton = document.getElementById("no");
console.log(noButton);

// adding event listener to moveable button
noButton.addEventListener("mouseover", handleMouseOver);

function handleMouseOver(event) {
  // get reference to button in event handler function
  const btn = event.target;

  // change position of button
  btn.style.position = "absolute";
  // make button move with smooth animation
  btn.style.transition = "all 0.3s ease-in-out";

  // set top value of button
  btn.style.top = `${Math.ceil(Math.random() * 90)}%`;
  // set left value of button
  btn.style.left = `${Math.ceil(Math.random() * 90)}%`;

  event.stopPropagation();
}

function hideGif() {
  // add the class .hidden to the asking gif
  askingGif.classList.add("hidden");

  // remove the class .hidden from the celebratory gif
  celebratingGif.classList.remove("hidden");
}
