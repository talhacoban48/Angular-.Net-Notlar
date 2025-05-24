let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number(sonuc)
sonuc = parseInt(sonuc)
sonuc = "10.66";
sonuc = parseFloat(sonuc)
sonuc = isNaN("10a")

let sayi = 3.1418
sonuc = sayi.toPrecision(3)
sonuc = sayi.toFixed(3)
sonuc = Math.round(sayi)
sonuc = Math.floor(sayi)
sonuc = Math.ceil(sayi)
sonuc = Math.sqrt(sayi)
sonuc = Math.pow(sayi, 3);
sonuc = Math.abs(-10);
sonuc = Math.min(-10, 4,23,44,2,3,41,-232);
sonuc = Math.random();
sonuc = Math.round(Math.random() * 100);


console.log(typeof(sonuc), sonuc)