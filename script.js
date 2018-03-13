window.addEventListener("load", () => {
  const sectionToDisplay = navigator.share
    ? ".shareable-section"
    : ".unsupported-section";
  document.querySelector(sectionToDisplay).style.display = "flex";
});

async function share() {
  if (navigator.share) {
    await navigator.share({
      title: "Web Share API",
      text: "It works!",
      url: window.location.href
    });
  }
}
