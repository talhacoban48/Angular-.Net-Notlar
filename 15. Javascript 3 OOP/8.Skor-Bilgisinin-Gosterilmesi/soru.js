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


