
// OOP
// ES5, ES6, ES7
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", c : "Npm", d: "nuget"}, "c"),
    new Soru("2-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "npm", c : "nuget"}, "c"),
    new Soru("3-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", c : "Npm"}, "b"),
    new Soru("4-Hangisi .net paket yönetim uygulamasıdır?", {a : "nuget", b : "Node.js", c : "Typescript"}, "a"),
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular)
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


document.querySelector(".btn-start").addEventListener("click", function() {
    document.querySelector(".quiz-box").classList.add("active");
    soruGoster(quiz.soruGetir())
    document.querySelector(".next-btn").classList.remove("show")
})

document.querySelector(".next-btn").addEventListener("click", function() {
    
    if (quiz.sorular.length != quiz.soruIndex) {
        console.log(quiz.soruGetir())
        soruGoster(quiz.soruGetir())
        document.querySelector(".next-btn").classList.remove("show")
    } else {
        console.log("quiz bitti")
    }
})

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`
    let option_add_list = ''
    for(let cevap in soru.cevapSecenekleri){
        option_add_list += `
            <div class="option">
                <span><b>${cevap})</b> ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `
    }

    document.querySelector(".question-text").innerHTML = question;
    const option_list = document.querySelector(".option-list")
    option_list.innerHTML = option_add_list;

    const options = option_list.querySelectorAll(".option");
    for (let option of options) {
        option.setAttribute("onclick", "optionSelected(this)")
        print(this)
    }
}

function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent.replace(")", "");
    let soru = quiz.soruGetir()

    quiz.soruIndex += 1
    if (soru.cevabiKontrolEt(cevap)) {
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", correctIcon)
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", incorrectIcon)
    }

    for (let i = 0; i < document.querySelector(".option-list").children.length; i++) {
        document.querySelector(".option-list").children[i].classList.add("disabled")
    }
    document.querySelector(".next-btn").classList.add("show")
}







