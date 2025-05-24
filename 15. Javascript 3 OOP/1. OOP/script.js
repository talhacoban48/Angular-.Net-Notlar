// Objecct
let soru = {
    soruMetni : "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri : {
        a : "Node.js",
        b : "Typescript",
        b : "Npm"
    },
    dogruCevap : "c",
    cevabiKontrolEt : function(cevap) {
        return cevap === this.dogruCevap
    }
};

console.log(soru.soruMetni)
console.log(soru.cevabiKontrolEt("a"))



// OOP
// ES5, ES6, ES7
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap) {
        return cevap === this.dogruCevap
    }
    console.log(this)
}

let soru1 = new Soru(
    "Hangisi javascript paket yönetim uygulamasıdır?", {
        a : "Node.js",
        b : "Typescript",
        b : "Npm"
    }, 
    "c"
);

console.log(soru1.soruMetni)
console.log(soru1.dogruCevap)

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a : "Node.js", b : "Typescript", b : "Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a : "Node.js", b : "nuget", b : "Npm"}, "b"),

]

for (soru of sorular) {
    console.log(soru.soruMetni)
    console.log(soru.cevabiKontrolEt("b"))
}

