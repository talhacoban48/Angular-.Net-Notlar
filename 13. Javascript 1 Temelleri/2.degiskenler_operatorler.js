console.log("Merhaba Dünya");


var urunAdi = "iphone 15";
var urunFiyat = 100000;

console.log(typeof urunAdi)
console.log(typeof urunFiyat)

let sayi1 = "10";
let sayi2 = "10";

console.log(sayi1 + sayi2);
console.log(Number(sayi1) + Number(sayi2));

let sayi3 = 10;
let sayi4 = 10;

console.log(sayi3 + sayi4);
console.log(sayi3.toString() + sayi4.toString());

let isim = "Talha";
let soyisim = "ÇOBAN";
console.log(isim + " " + soyisim)

let basarilimi = false
console.log(typeof(basarilimi))
console.log(100 > 50)

let dogumYili;
console.log(typeof(dogumYili))
console.log(dogumYili)

dogumYili = "1998";
console.log(typeof(dogumYili))
console.log(dogumYili)

let yas = new Date().getFullYear() - dogumYili
console.log(yas)
console.log(new Date())


// Operatorler
let sonuc;
let a = 10, b = 20, c = 30;
// 1 - Aritmetik operatorler
sonuc = a + b
console.log(sonuc)
sonuc = a - b
console.log(sonuc)
sonuc = a * b
console.log(sonuc)
sonuc = c / b
console.log(sonuc)
sonuc = c % b
console.log(sonuc)
sonuc = a++;
console.log(sonuc)
sonuc = ++a;
console.log(sonuc)
// Atama operatorleri
sonuc = a
sonuc += a
console.log(sonuc)
sonuc /= a
console.log(sonuc)
sonuc %= b
console.log(sonuc)
// Karşılaştırma operatorleri
sonuc = a == b
sonuc = (a == b)
console.log(sonuc)
a = 10, b = 10
sonuc = (a != b)
console.log(sonuc)
console.log(3 == 3)
console.log(3 == "3")
console.log(3 === "3")
console.log(3 === 3)
console.log(25 > 0)
// Mantıksal operatorler



