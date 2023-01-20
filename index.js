const sticky = header.offsetTop;
let currentActiveLink;

const fAdaptive = function () {
    const body = document.querySelector('body');
    const sizeMultiplier = String(window.screen.height / 1080);
    body.style.setProperty('--size-multiplier', sizeMultiplier);
};

window.addEventListener("load", function(){
    let links = document.querySelectorAll("nav a");
    links[0].classList.add("nav-active");
    currentActiveLink = links[0];
    fAdaptive()
});

window.addEventListener('resize', fAdaptive);


window.onscroll = function () {
    const header = document.getElementById("header");
    if (window.pageYOffset > sticky) {
        header.classList.add("header_on");
    } else {
        header.classList.add("header_off");

        setTimeout(() => {
            header.classList.remove("header_on");
            header.classList.remove("header_off");
        }, 800);
    }
};

function addClassAndButton() {
    let btn = document.querySelector(".my-btn");
    if (window.pageYOffset > 500) {
        btn.classList.add("scroll-on");
        btn.style.opacity = "1";
        btn.style.right = "25px";
        btn.style.bottom = "50px";
        btn.classList.remove("scroll-on");
    } else {
        btn.classList.add("scroll-off");
        btn.style.opacity = "0";
        btn.style.right = "-25px";
        btn.style.bottom = "-50px";
        btn.classList.remove("scroll-off");
    }
}


function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

document.getElementById("scroll").addEventListener("click", scrollToTop);

function checkCurrentSection() {
  let sections = document.getElementsByTagName("section");
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
        let links = document.querySelectorAll("nav a");
        for (let j = 0; j < links.length; j++) {
            if (links[j].getAttribute("href") === "#" + section.id) {
                if (currentActiveLink) {
                    currentActiveLink.classList.remove("nav-active");
                }
                links[j].classList.add("nav-active");
                currentActiveLink = links[j];
                break;
            }
        }
      return;
    }
  }
}

window.addEventListener("scroll", () => {
    addClassAndButton();
    checkCurrentSection();
});

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }