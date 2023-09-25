const allRows = document.querySelectorAll("tr");

allRows.forEach((row, i) => {
  //   row.addEventListener('click', (event) => {
  //     console.log('Row clicked');
  //   });
  if (i) {
    row.addEventListener("mouseenter", (event) => {
      row.classList.add("scale");
    });
    row.addEventListener("mouseleave", (event) => {
      row.classList.remove("scale");
    });
  }
});
