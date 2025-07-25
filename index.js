function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
  }
}

// Delay alert slightly to not block form submission
const form = document.getElementById("bookingForm");
form.addEventListener("submit", function () {
  setTimeout(() => {
    alert("Thank you! Your booking has been received.");
  }, 100); // slight delay so form can still submit
});
