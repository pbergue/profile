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
  const personalInfos = document.querySelectorAll('.personal-infos');
  personalInfos.forEach((info) => {
    info.addEventListener('click', (event) => {
      const copyText = event.currentTarget.dataset.originalTitle;
      console.log(copyText);
      const tempInput = document.createElement("input");
      tempInput.value = copyText;

      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      event.currentTarget.dataset.originalTitle = "Copied text!";

    });

  });
};

const activeClickNavbar = () => {
  const buttons = document.querySelectorAll('.active-btns');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const aboutTab = document.getElementById('about-tab');
      const portfolioTab = document.getElementById('portfolio-tab');

      const aboutPane = document.getElementById('about');
      const portfolioPane = document.getElementById('portfolio');
      console.log(event.currentTarget);

      if(event.currentTarget.id=='portfolio-btn' && aboutTab.classList.contains('active')) {
        aboutTab.classList.remove('active');
        portfolioTab.classList.add('active');

        aboutPane.classList.remove('active');
        portfolioPane.classList.add('active');

      } else if (event.currentTarget.id=='about-btn' && portfolioTab.classList.contains('active')) {
        portfolioTab.classList.remove('active');
        aboutTab.classList.add('active');

        portfolioPane.classList.remove('active');
        aboutPane.classList.add('active');
      }
    });
  });
};


emailCopy();
activeClickNavbar();
