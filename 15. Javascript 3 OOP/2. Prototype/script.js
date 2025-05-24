
// OOP
// ES5, ES6, ES7
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    console.log(this)
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", b : "Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", b : "Npm"}, "b"),

]

