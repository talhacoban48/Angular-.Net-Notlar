
for (let i = 0; i < 10; i++){
    console.log(i)
}

let toplam = 0
let sayilar = [1,3,5,8,9,3,4,6,6,2,235,324,413,234,2,4,2,34,324,2,424,234,11,3,1,753,7,2,1,1]
for (let i = 0; i < sayilar.length; i++){
    toplam += sayilar[i]
}
console.log(toplam)

toplam = 0
for (let index in sayilar) {
    toplam += sayilar[index]
}
console.log(toplam)

toplam = 0
for (let sayi of sayilar) {
    toplam += sayi
}
console.log(toplam)


let user1 = {
    "isim" : "Talha",
    "soyisim" : "ÇOBAN",
    "yas" : 25
}
for (let key in user1) {
    console.log(key, user1[key])
}

