function toggleAccordion(event) {
  const header = event.target;
  const content = header.nextElementSibling;

  if (content.style.display === "none" || content.style.display === "") {
    closeAllaccordionContent();
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function closeAllaccordionContent() {
  const contents = document.querySelectorAll(".accordion-content");

  contents.forEach((content) => (content.style.display = "none"));
}

const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((header) =>
  header.addEventListener("click", toggleAccordion)
);
