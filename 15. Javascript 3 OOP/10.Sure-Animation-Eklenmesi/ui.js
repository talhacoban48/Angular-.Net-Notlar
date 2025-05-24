function UI() {
    this.btn_start = document.querySelector(".btn-start")
    this.quiz_box = document.querySelector(".quiz-box")
    this.score_box = document.querySelector(".score-box")
    this.next_btn = document.querySelector(".next-btn")
    this.btn_replay = document.querySelector(".btn-replay")
    this.btn_quit = document.querySelector(".btn-quit")
    this.question_text = document.querySelector(".question-text")
    this.option_list = document.querySelector(".option-list")
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.time_text = document.querySelector(".time-text")
    this.time_second = document.querySelector(".time-second")
    this.time_line = document.querySelector(".time-line")
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`
    let option_add_list = ''
    for(let cevap in soru.cevapSecenekleri){
        option_add_list += `
            <div class="option">
                <span><b>${cevap})</b> ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `
    }

    this.question_text.innerHTML = question;
    this.option_list.innerHTML = option_add_list;

    const options = this.option_list.querySelectorAll(".option");
    for (let option of options) {
        option.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz-box .question-index").innerHTML = tag;
}

UI.prototype.skoruGoster = function(toplamSoru, dorgruCevap) {
    let text = `Toplam ${toplamSoru} sorudan ${dorgruCevap} soruya  doğru cevap verdiniz`;
    document.querySelector(".score-box .score-text").innerHTML = text;
}
