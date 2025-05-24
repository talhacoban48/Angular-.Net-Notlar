
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
    new Soru("2-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", c : "Npm"}, "b"),
    new Soru("3-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", c : "Npm"}, "b"),
    new Soru("4-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", c : "Npm"}, "b"),
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular)

document.querySelector(".btn-start").addEventListener("click", function() {
    document.querySelector(".quiz-box").classList.add("active");
    soruGoster(quiz.soruGetir())
    quiz.soruIndex += 1
})

document.querySelector(".next-btn").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex) {
        soruGoster(quiz.soruGetir())
        quiz.soruIndex += 1
    } else {
        console.log("quiz bitti")
    }
})

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`
    let options = ''
    for(let cevap in soru.cevapSecenekleri){
        options += `
            <div class="option">
                <span><b>${cevap})</b> ${soru.cevapSecenekleri[cevap]}</span>
                <div class="icon">
                    <i class="fas fa-check"></i>
                </div>
            </div>
        `
    }
    document.querySelector(".question-text").innerHTML = question;
    document.querySelector(".option-list").innerHTML = options;
}








