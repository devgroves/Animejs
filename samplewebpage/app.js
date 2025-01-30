function createShapes() {
    const container = document.getElementById("shapes-container");
    container.innerHTML = ''; 
    for (let i = 0; i < 15; i++) {
        const div = document.createElement("div");
        div.classList.add("shape");
        div.style.width = `${Math.random() * 20 + 10}px`;
        div.style.height = div.style.width;
        div.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
        div.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
        div.style.position = 'absolute';
        div.style.top = `${Math.random() * 100}%`;
        div.style.left = `${Math.random() * 100}%`;
        container.appendChild(div);
    }
}
function burstAnimation() {
    createShapes();
    anime({
        targets: '.shape',
        opacity: [0, 1, 0], 
        translateX: () => anime.random(-50, 50),
        translateY: () => anime.random(-50, 50),
        scale: [0.8, 1.5, 0.5], 
        easing: 'easeOutQuad',
        duration: 1200, 
        delay: anime.stagger(80) 
    });
}
setInterval(burstAnimation, 2000);
document.addEventListener("DOMContentLoaded", () => { 
     function animateBox(id, animation) {
      document.getElementById(id).addEventListener("click", function () {
        animation.restart();
      });
    }
    const box1btn = document.getElementById("box1");
 box1btn.addEventListener("click", function () {
  Swal.fire({
    title: "Processing...",
     html: `<div class="loader"></div>`,
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      anime({
        targets: ".loader", 
        scale: ["0.8", "1.4"],
        opacity: ["1", 0],
        easing: "easeOutCubic",
        duration: 1500,
        loop: true,
      });
    },
  });
    setTimeout(() => {
      Swal.fire({
        title: "click for more details!",
        html: `<a href="https://example.com" target="_blank">Click Here</a>`,
        iconHtml: "👇",
        showCloseButton: true,
        confirmButtonText: "Got it!",
      });
    }, 3000); 
  });
const joinNowButton = document.getElementById("joinNow");
 joinNowButton.addEventListener("click", function () {
  Swal.fire({
    title: "Processing...",
    html: `<div class="img-table_wrapper loading">
            <img src="https://www.google.com/images/spin-32.gif" alt="Loading" width="80" height="80" />
          </div>`,
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      anime({
        targets: ".img-table_wrapper.loading > img", 
        scale: ["0.8", "1.4"],
        opacity: ["1", 0],
        easing: "easeOutCubic",
        duration: 3000,
        loop: true,
      });
    },
  });
    setTimeout(() => {
      Swal.fire({
        title: "visit this link!",
        html: `Visit this link: <a href="https://example.com" target="_blank">Click Here</a>`,
        iconHtml: "👇",
        showCloseButton: true,
        confirmButtonText: "Got it!",
      });
    }, 3000); 
  });
  animateBox("box1", 
    anime({ 
        targets: "#box1", 
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
        translateY: [-5, 5, -5], 
        duration: 2000,
        easing: "easeInOutQuad",
        loop: true
    }));
   anime({
        targets: '.degree-card',
        opacity: [0, 1, 0], 
        scale: [0.5, 1.2, 0.5], 
        delay: anime.stagger(100, { start: 500 }),
        loop: true, 
        easing: 'easeInOutQuad', 
        duration: 1500 
    });
       anime({
                 targets: '.promotions .box',
                translateX: anime.stagger(30, { grid: [3, 3], from: 'center', axis: 'x' }), 
                translateY: anime.stagger(30, { grid: [3, 3], from: 'center', axis: 'y' }),
                rotateZ: anime.stagger([0, 360], { grid: [3, 3], from: 'center' }),
                delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
                 scale: [0.8, 1.2],
                direction: 'alternate', 
                loop: true, 
                easing: 'easeInOutQuad',
                duration: 2000 
            });
    anime({
    targets: '#joinNow',
    scale: [1, 1.2], 
    duration: 1000,
    easing: 'easeInOutQuad',
    direction: 'alternate', 
    loop: true, 
  });
  anime({
    targets: ['#movingText', '#movingSubText'], 
    translateX: [-30, 30], 
    duration: 2000, 
    easing: 'easeInOutQuad',
    direction: 'alternate', 
    loop: true 
  });
});
