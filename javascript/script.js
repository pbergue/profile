class About {

  constructor(observer) {
      this.observer = observer
      this.init()
  }

  init() {
    const targets = document.querySelectorAll('.content-about');


    targets.forEach(target => {
        this.observer.observe(target)
    })
  }

}

var options = {
    rootMargin: '0px',
    threshold: 0.5
}

function callback(entries) {
    entries.filter(el => {
        if(el.isIntersecting) {
            el.target.classList.add('visible');
        } else {
          el.target.classList.remove('visible');
        }
    })
}


let observer = new IntersectionObserver(callback, options);

const about = new About(observer);


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
    });

  });
};

const activeClickNavbar = () => {
  const buttons = document.querySelectorAll('.active-btns');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const aboutTab = document.getElementById('about-tab');
      const portfolioTab = document.getElementById('portfolio-tab');
      const progressionTab = document.getElementById('progression-tab');

      const aboutPane = document.getElementById('about');
      const portfolioPane = document.getElementById('portfolio');
      const progressionPane = document.getElementById('progression');
      // console.log(event.currentTarget);

      switch (event.currentTarget.id) {
        case 'portfolio-btn':
          portfolioTab.classList.add('active');
          portfolioPane.classList.add('active');

          aboutTab.classList.remove('active');
          aboutPane.classList.remove('active');

          progressionTab.classList.remove('active');
          progressionPane.classList.remove('active');
          break;

        case 'about-btn':
          portfolioTab.classList.remove('active');
          portfolioPane.classList.remove('active');

          aboutTab.classList.add('active');
          aboutPane.classList.add('active');

          progressionTab.classList.remove('active');
          progressionPane.classList.remove('active');
          break;

        case 'second-about':
          portfolioTab.classList.remove('active');
          portfolioPane.classList.remove('active');

          aboutTab.classList.add('active');
          aboutPane.classList.add('active');

          progressionTab.classList.remove('active');
          progressionPane.classList.remove('active');
          break;

        case 'progression-btn':
          portfolioTab.classList.remove('active');
          portfolioPane.classList.remove('active');

          aboutTab.classList.remove('active');
          aboutPane.classList.remove('active');

          progressionTab.classList.add('active');
          progressionPane.classList.add('active');
          break;

        default:
          return;

      }
    });
  });
};

const computer = document.getElementById('computer');

function createLink() {
  computer.setAttribute('href', '.');
};

function deployFullHeight() {
  computer.addEventListener('click', event => {
    const navbar = document.getElementById('navbar-profile');
    const avatar = document.querySelector('.avatar svg');

    navbar.classList.remove('navbar-full-height');
    navbar.classList.add('navbar-custom');

    computer.classList.remove('bounce');

    avatar.id = 'avatar';
    window.setTimeout(createLink, 3000);
  });
};


  const pictosLg = document.querySelectorAll('.pictos-lang');
  const frenchSelectors = document.querySelectorAll('.french');
  const englishSelectors = document.querySelectorAll('.english');

  function changeLanguage(eventId) {
    localStorage.setItem('chosen-language', eventId)
    if (eventId === 'fr') {
      frenchSelectors.forEach(french => {
        french.classList.add('chosen-version');
      });
      englishSelectors.forEach(english => {
        english.classList.remove('chosen-version');
      });
    } else if (eventId === 'en') {
      frenchSelectors.forEach(french => {
        french.classList.remove('chosen-version');
      });
      englishSelectors.forEach(english => {
        english.classList.add('chosen-version');
      })
    }
  };

  pictosLg.forEach(picto => picto.addEventListener('click', event => {changeLanguage(event.currentTarget.id)}));
  if (localStorage.getItem('chosen-language')) {
    changeLanguage(localStorage.getItem('chosen-language'));
  }



consoleText(['27 years old', 'Web developer', 'Available', 'Creative', 'Surfer'], 'text-en',['#DBE2E8']);
consoleTextFr(['27 ans', 'Développeur Web', 'Disponible', 'Créatif', 'Surfeur'], 'text-fr',['#DBE2E8']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console-en');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 700)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 700)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 80)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

function consoleTextFr(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console-fr');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 700)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 700)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 80)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

const banner = document.querySelector('.banner-custom');
const avatarMove = document.querySelector('.avatar svg');
const walk = 30;

function moveSvg(e) {
  const {offsetWidth: width, offsetHeight: height} = banner;
  let {offsetX: x, offsetY: y} = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // console.log(x, y);

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // console.log(xWalk, yWalk);

  avatarMove.style.position = 'relative';
  avatarMove.style.top = `${yWalk}px`;
  avatarMove.style.left = `${xWalk}px`;
}


const js30 = document.querySelector('.progression-percentage-js30');
const rr = document.querySelector('.progression-percentage-rr');

// Needs to change pourcent value also in CSS 'variables.css'
var lang = {
  "js30": `${js30.innerText}`,
  "rr": `${rr.innerText}`
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;

  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);

  multiply++;

});


banner.addEventListener('mousemove', moveSvg);

emailCopy();
activeClickNavbar();
deployFullHeight();
