class Music {
    constructor(title, singer, img, file) {
        this.title = title
        this.singer = singer
        this.img = img
        this.file = file
    }

    getName() {
        return this.title + " - " + this.singer
    }
}


const musicList = [
    new Music("Aşkın benden de öte", "Yıldız Tilbe", "Askin-Benden-De-Ote.jpg", "Askin-Benden-De-Ote.mp3"),
    new Music("Her gün sonbahar", "Zakkum", "her_gun_sonbahar.jpg", "her_gun_sonbahar.mp3"),
    new Music("Kırıp döktüklerim", "Aslı Gökyokuş", "Kırıp_Döktüklerim.jpg", "Kırıp_Döktüklerim.mp3"),
    new Music("Mahşer", "Nahide Babaşlı", "Mahşer.jpg", "Mahşer.mp3"),
    new Music("Yüksek Dağlara Doğru", "Koliva", "Yüksek Dağlara Doğru.jpg", "Yüksek Dağlara Doğru.mp3")
]

