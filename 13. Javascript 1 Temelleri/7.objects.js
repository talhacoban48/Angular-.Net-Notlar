
let user1 = ["Talha", "ÇOBAN", 25]
let user2 = ["Sude", "KARACA", 22]

user1 = {
    "isim" : "Talha",
    "soyisim" : "ÇOBAN",
    "yas" : 25
}

user2 = {
    "isim" : "Sude",
    "soyisim" : "KARACA",
    "yas" : 22,
    "adres" : {
        "sehir" : "Kocaeli",
        "ilce" : "Gebze"
    }
}

let sonuc;
sonuc = user1.isim
sonuc = user2["isim"]
sonuc = user2["adres"]["sehir"]
sonuc = user2["meslek"] = "öğrenci"
sonuc = user1["yas"] = 26

console.log(sonuc, user1)
