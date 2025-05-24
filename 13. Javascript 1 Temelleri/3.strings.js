let isim = "Talha"
let soyad = "ÇOBAN"
let yas = 25;
let sehir = "Muğla";

let mesaj = "Benim adım " + isim + " " + soyad + ". sehir: " + sehir + '\'de yaşıyorum'
console.log(mesaj)

mesaj = `Benim adım ${isim} ${soyad}. sehir: ${sehir}'da yaşıyorum`;
console.log(mesaj)

// ternary opearator
let emeklilik = (65 - yas > 0) ? `${65 - yas} yıl kaldı` : "emekli olmuşsun bile"
console.log(emeklilik)
yas = 66
emeklilik = (65 - yas > 0) ? `${65 - yas} yıl kaldı` : "emekli olmuşsun bile"
console.log(emeklilik)

// string methodları
let kursadi = "   Komple Uygulamalı Web Geliştirme Eğitimi  ";
let sonuc;
console.log(kursadi);
sonuc = kursadi.toLowerCase();
sonuc = kursadi.toUpperCase();
sonuc = kursadi.length;
sonuc = kursadi.slice(5, 15)
sonuc = kursadi.slice(-15)
sonuc = kursadi[0]
sonuc = kursadi.split(" ")
sonuc = kursadi.replace("Eğitimi", "Kursu")
sonuc = kursadi.trim()
sonuc = kursadi.trimEnd()
sonuc = kursadi.indexOf("U")
sonuc = kursadi.indexOf("Komple")
sonuc = kursadi.trimStart().startsWith("Komple")
sonuc = kursadi.trimEnd().concat([" : javascript Temelleri"])

console.log(sonuc);




