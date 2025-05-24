let simdi = new Date();
let sonuc;

//get methods
sonuc = simdi.getTime()
sonuc = simdi.getDate()
sonuc = simdi.getMonth()
sonuc = simdi.getHours()
sonuc = simdi.getFullYear()
sonuc = simdi.getTimezoneOffset()
sonuc = simdi.getDay() // 0 pazarmış amk

// set methods
sonuc = simdi.setFullYear(2025)
sonuc = simdi.setMonth(7)
sonuc = simdi.setHours(20)
console.log(sonuc, simdi)

let dogumtarih = new Date(1998, 6, 30, 5)
console.log(typeof(dogumtarih), dogumtarih)

let yas = new Date() - dogumtarih
sonuc = ((((yas / 1000) / 60) / 60) / 24 / 365)
console.log(sonuc)




