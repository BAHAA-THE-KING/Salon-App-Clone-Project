// Select Span For Checkbox
let span = document.querySelectorAll(".table .data .action");
let forms = document.querySelectorAll(".table .data form");

// Select Delete Button
let del = document.querySelectorAll(".table .data .delete");

// Delete Row When Clicked
del.forEach((ele) => {
  ele.onclick = function () {
    ele.parentNode.parentNode.remove();
  };
});

// open checkbox when span is clicked
span.forEach((ele, ind) => {
  ele.onclick = function () {
    openCheckBox(ind);
    console.log(ind);
  };
});

// Close Opened CheckBox
function closeCheckBox() {
  forms.forEach((form) => {
    form.classList.add("closed");
  });
}

// Add Class To Open Checbox
function openCheckBox(index) {
  forms.forEach((form, ind) => {
    if (ind === index) {
      if (form.classList.contains("closed")) {
        form.classList.remove("closed");
      } else {
        form.classList.add("closed");
      }
    }
  });
}
