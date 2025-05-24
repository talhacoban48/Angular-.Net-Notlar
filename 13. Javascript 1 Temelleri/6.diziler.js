let urun1 = "iphone 12"
let urun2 = "iphone 13"
let urun3 = "iphone 14"

let urunler = ["iphone 12", "iphone 13", "iphone 14"]
let fiyatlar = [50000, 70000, 100000]
let sonuc;
sonuc = urunler[0]

urun1 = ["iphone 12", 50000, "gold"]
urun2 = ["iphone 12", 50000, "gold"]
urun2[2] = "white"
sonuc = urun2
urun1[1] += 10000
sonuc = urun1
urun3 = [
    "iphone 12", 
    50000, 
    [
        "gold", 
        "black", 
        "white"
    ]
]
sonuc = urun3[2][0]
urun3[2][0] = "pink"
sonuc = urun3
sonuc = urun3.length
sonuc = urun3.includes("iphone 12")
sonuc = urun3.toString()
sonuc = urun3.join(" ");
sonuc = urun2.join("-")
sonuc = urun2.pop()
console.log(sonuc, urun2)
sonuc = urun1.shift()
sonuc = urun1.unshift("samsung galaxy 21")
sonuc = urun1.push(100000)

console.log(sonuc, urun1)

let markalar1 = ["BMW", "toyota"]
let markalar2 = ["Ford", "Mercedes", "Audi"]
let markalar3 = ["Renaoult", "Pegout", "Citroen"]
sonuc = markalar1.concat(markalar2, markalar3)
console.log(sonuc, sonuc.length, markalar1)

let sonuc1 = sonuc.splice(0, 0, markalar2)
console.log(sonuc1, sonuc, markalar2)
let sonuc2 = sonuc.splice(0, 2, markalar2)
console.log(sonuc2, sonuc, markalar2)




