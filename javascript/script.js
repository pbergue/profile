$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).attr("title")).select();
  document.execCommand("copy");
  $temp.remove();
}

const addRedClass = () => {
  const bgDiv = document.getElementById('background');
  bgDiv.addEventListener('mouseover', (event) => {
    const highlightTexts = document.querySelectorAll('.target-red');
    highlightTexts.forEach((text) => {
      text.classList.add('red-color');
    });
  });

  bgDiv.addEventListener('mouseout', (event) => {
    const highlightTexts = document.querySelectorAll('.target-red');
    highlightTexts.forEach((text) => {
      text.classList.remove('red-color');
    });
  });
};

const emailCopy = () => {
  const email = document.getElementById('email-icon');
  email.addEventListener('click', (event) => {
    /* Get the text field */
    var copyText = document.querySelector('.hidden');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

  });
};

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementsByClassName("hidden")[0].innerText;
  console.log(copyText);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  copyText.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

emailCopy();
