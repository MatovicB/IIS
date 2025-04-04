/*Function for changing word on time interval */
const words = ["business", "country", "world"];
let index = 0;
const changingText = document.querySelector(".changing-word");

function changeWord() {
    index = (index + 1) % words.length; // Ide kroz niz i vraća na početak kada završi
    changingText.style.opacity = 0; // Nestajanje teksta pre promene

    setTimeout(() => {
        changingText.textContent = words[index];
        changingText.style.opacity = 1; // Vraćanje teksta sa animacijom
    }, 500);
}

setInterval(changeWord, 2500); // Menjanje teksta na svake 3 sekunde
/* END */


document.addEventListener("DOMContentLoaded", function () {
const statsSection = document.querySelector(".our-story");
const counters = document.querySelectorAll(".counter");
let hasAnimated = false;

function animateNumbers() {
counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;

    let interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            counter.innerText = target + "+";
            clearInterval(interval);
        } else {
            counter.innerText = Math.floor(count) + "+";
        }
    }, 20);
});
}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
        animateNumbers();
        hasAnimated = true;
        observer.disconnect();
    }
});
}, { threshold: 0.5 });

observer.observe(statsSection);
});


/* Title showing */ 

document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".animated-title");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Prestaje da prati nakon prvog prikazivanja
            }
        });
    }, { threshold: 0.5 });

    titles.forEach((title) => {
        observer.observe(title);
    });
});

/* */