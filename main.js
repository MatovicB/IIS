document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
    });
});


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


        document.addEventListener("DOMContentLoaded", function () {
            const counters = document.querySelectorAll(".number");
        
            counters.forEach(counter => {
                let updateCount = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
        
                    const increment = target / 200; // Brzina rasta brojeva
        
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 50);
                    } else {
                        counter.innerText = target; // Osiguraj tačan broj na kraju
                    }
                };
        
                updateCount();
            });
        });
        
        