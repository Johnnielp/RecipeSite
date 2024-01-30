const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const load = document.querySelector("#load");
const more = document.querySelectorAll(".more");
const moremore = document.querySelectorAll(".moremore");
const about = document.querySelector("#about");
const aboutsec = document.querySelector("#aboutsec");
const homesec = document.querySelector("#homesec");
const contactsec = document.querySelector("#contactsec");
const homeli = document.querySelector("#homeli");
const aboutli = document.querySelector("#aboutli");
const contactli = document.querySelector("#contactli");

aboutsec.addEventListener("click", () => {
  homesec.classList.remove("border-r-4");
  contactsec.classList.remove("border-r-4");
  homeli.classList.remove("font-bold");
  contactli.classList.remove("font-bold");
  aboutsec.classList.add("border-r-4", "border-primary");
  aboutli.classList.add("font-bold");
});

contactsec.addEventListener("click", () => {
  homesec.classList.remove("border-r-4");
  aboutsec.classList.remove("border-r-4");
  homeli.classList.remove("font-bold");
  aboutli.classList.remove("font-bold");
  contactsec.classList.add("border-r-4", "border-primary", "text-bold");
  contactli.classList.add("font-bold");
});

homesec.addEventListener("click", () => {
  contactsec.classList.remove("border-r-4");
  aboutsec.classList.remove("border-r-4");
  contactli.classList.remove("font-bold");
  aboutli.classList.remove("font-bold");
  homesec.classList.add("border-r-4", "border-primary", "text-bold");
  homeli.classList.add("font-bold");
});

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

load.addEventListener("click", () => {
  more.forEach((more) => {
    if (more.classList.contains("hidden")) {
      more.classList.remove("hidden");
    }
  });
  if (load.classList.contains("clicked")) {
    moremore.forEach((moremore) => {
      if (moremore.classList.contains("hidden")) {
        moremore.classList.remove("hidden");
      }
    });
  }
  load.classList.add("clicked");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

function openAuthModal() {
  var modal = document.getElementById("authModal");
  var overlay = document.getElementById("overlay");
  modal.style.display = "block";
  overlay.style.display = "block";

  // Close the modal if the user clicks outside of it
  window.onclick = function (event) {
    if (event.target == overlay) {
      closeAuthModal();
    }
  };

  // Close the modal if the user presses the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAuthModal();
    }
  });
}

function closeAuthModal() {
  var modal = document.getElementById("authModal");
  var overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
  window.onclick = null; // Remove the click event listener
}

function openModal(title, ingredients, process) {
  // Set the modal title
  document.getElementById("recipeTitle").innerText = title;

  // Construct the HTML for ingredients and process
  var detailsHTML =
    "<h3 class='text-lg font-semibold mb-2'>Ingredients:</h3><ul>";
  ingredients.forEach(function (ingredient) {
    detailsHTML += "<li>" + ingredient + "</li>";
  });
  detailsHTML +=
    "</ul><h3 class='text-lg font-semibold mb-2'>Process:</h3><p>" +
    process +
    "</p>";

  // Set the modal content
  document.getElementById("recipeDetails").innerHTML = detailsHTML;

  // Show the modal
  document.getElementById("recipeModal").style.display = "block";
}

function closeModal() {
  // Close the modal
  document.getElementById("recipeModal").style.display = "none";
}
