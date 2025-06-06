
const ui = new UI()
const quiz = new Quiz(sorular)
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir())
    ui.soruSayisiniGoster(quiz.soruIndex+1, quiz.sorular.length);
    ui.next_btn.classList.remove("show")
});

ui.next_btn.addEventListener("click", function() {
    
    if (quiz.sorular.length != quiz.soruIndex) {
        ui.soruGoster(quiz.soruGetir())
        ui.soruSayisiniGoster(quiz.soruIndex+1, quiz.sorular.length);
        ui.next_btn.classList.remove("show")
    } else {
        console.log("quiz bitti")
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi)
    }
})

function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent.replace(")", "");
    let soru = quiz.soruGetir()

    quiz.soruIndex += 1
    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", ui.correctIcon)
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon)
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled")
    }
    ui.next_btn.classList.add("show")
}

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
})

ui.btn_replay.addEventListener("click", function() {
    ui.score_box.classList.remove("active")
    quiz.soruIndex = 0
    quiz.dogruCevapSayisi = 0
    ui.btn_start.click();
})

