/*  ===================== Typing Animation =====================  */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Front-End Dev", "Back-End Dev"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/*  ===================== Aside =====================  */
const navList = document.querySelectorAll(".nav li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.getElementById(target).classList.add("active");
}

function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


/*  ===================== Contact Email =====================  */

function sendMessage() {
    var emailField = document.getElementById('email');
    var email = emailField.value;
    var emailError = document.getElementById('emailError');
    var emailSuccess = document.getElementById('emailSuccess');
    
    if (email.includes('@')) {
        // Aqui você pode adicionar a lógica para enviar o formulário
        emailError.style.display = 'none'; // Esconde a mensagem de erro se o email for válido
        emailSuccess.style.display = 'block'; // Exibe a mensagem de sucesso
        window.location.href = "mailto:victorpurkottcoelho@gmail.com?subject=Contato%20do%20Site&body=Nome:%20[Adicione%20o%20nome%20aqui]%0D%0AEmail:%20" + email + "%0D%0ASubject:%20[Adicione%20o%20assunto%20aqui]%0D%0AMessage:%20[Adicione%20a%20mensagem%20aqui]";
    } else {
        emailError.style.display = 'block'; // Exibe a mensagem de erro se o email for inválido
        emailSuccess.style.display = 'none'; // Esconde a mensagem de sucesso
    }
}