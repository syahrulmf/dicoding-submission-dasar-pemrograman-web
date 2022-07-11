// Smooth Scrolling
const links = document.querySelectorAll("a");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
}
// Smooth Scrolling

// Color Change Heading
const headings = document.querySelectorAll("h1");

for (const heading of headings) {
  heading.addEventListener("mouseover", function () {
    heading.style.color = "#ff3e6c";
  });
  heading.addEventListener("mouseout", function () {
    heading.style.color = "#5f5fff";
  });
}
// Color Change Heading
// test comment
