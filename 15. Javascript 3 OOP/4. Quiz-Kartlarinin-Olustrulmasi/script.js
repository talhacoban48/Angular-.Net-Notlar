
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
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", b : "Npm"}, "c"),
    new Soru("2-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", b : "Npm"}, "b"),
    new Soru("3-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", b : "Npm"}, "b"),
    new Soru("4-Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", b : "Npm"}, "b"),
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
    if (quiz.sorular.length != quiz.soruIndex) {
        document.querySelector(".quiz-box").classList.add("active");
        console.log(quiz.soruGetir())
        quiz.soruIndex += 1
    } else {
        console.log("quiz bitti")
    }
})

