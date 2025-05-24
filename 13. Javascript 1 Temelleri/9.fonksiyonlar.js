
let sayilar = [1,2,3,4,5,6,7]
let sonuc;

sonuc = sayilar.includes(5)
console.log(sonuc)


function selamla() {
    console.log("merabalar amk")
}
selamla()


function yashesapla(dogumyili) {
    return new Date().getFullYear() - dogumyili
}
let yas = yashesapla(2010)
console.log(yas)


function toplam() {
    let top = 0;
    for (let i = 0; i < arguments.length; i++){
        top += arguments[i]
    }
    return top
}
sonuc = toplam(113,235,1341,232)
console.log(sonuc)