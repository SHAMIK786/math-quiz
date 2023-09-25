var select_dificulty = document.querySelector('#select_dificulty');
var select_type = document.querySelector('#select_type');
var sum = "";
var score = 0;
var info_box = document.querySelector('.info_box');

function create_ques() {
    var x = "";
    var y = "";
    var show_ques = "";

    //Addition
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'normal' && select_type.options[select_type.selectedIndex].value === 'addition') {
        x = Math.floor(Math.random() * 9)
        y = Math.floor(Math.random() * 9)
        sum = x + y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} + ${y} = ?</span>`
    }
    else if (select_dificulty.options[select_dificulty.selectedIndex].value === 'medium' && select_type.options[select_type.selectedIndex].value === 'addition') {
        x = Math.floor(Math.random() * 99)
        y = Math.floor(Math.random() * 99)
        sum = x + y;
        var options = [sum - x, sum - 1, sum, sum - y];
        show_ques = `<span class="show_question">${x} + ${y} = ?</span>`
    }
    else if (select_dificulty.options[select_dificulty.selectedIndex].value === 'hard' && select_type.options[select_type.selectedIndex].value === 'addition') {
        x = Math.floor(Math.random() * 99)
        y = Math.floor(Math.random() * 99)
        z = Math.floor(Math.random() * 99)
        sum = x + y + z;
        var options = [sum - 20, sum - 1, sum, sum - 2];
        show_ques = `<span class="show_question">${x} + ${y} + ${z} = ?</span>`
    }

    //Subtraction
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'normal' && select_type.options[select_type.selectedIndex].value === 'subtraction') {
        x = Math.floor(Math.random() * 9)
        y = Math.floor(Math.random() * 9)
        sum = x - y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} - ${y} = ?</span>`
    }
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'medium' && select_type.options[select_type.selectedIndex].value === 'subtraction') {
        x = Math.floor(Math.random() * 99)
        y = Math.floor(Math.random() * 99)
        sum = x - y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} - ${y} = ?</span>`
    }
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'hard' && select_type.options[select_type.selectedIndex].value === 'subtraction') {
        x = Math.floor(Math.random() * 999)
        y = Math.floor(Math.random() * 999)
        sum = x - y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} - ${y} = ?</span>`
    }

    //Multiplication
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'normal' && select_type.options[select_type.selectedIndex].value === 'multiplication') {
        x = Math.floor(Math.random() * 9)
        y = Math.floor(Math.random() * 9)
        sum = x * y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} * ${y} = ?</span>`
    }
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'medium' && select_type.options[select_type.selectedIndex].value === 'multiplication') {
        x = Math.floor(Math.random() * 99)
        y = Math.floor(Math.random() * 99)
        sum = x * y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} * ${y} = ?</span>`
    }
    if (select_dificulty.options[select_dificulty.selectedIndex].value === 'hard' && select_type.options[select_type.selectedIndex].value === 'multiplication') {
        x = Math.floor(Math.random() * 999)
        y = Math.floor(Math.random() * 999)
        sum = x * y;
        var options = [sum - x, sum - y, sum, sum - 1];
        show_ques = `<span class="show_question">${x} * ${y} = ?</span>`
    }



    document.querySelector('.question').innerHTML = show_ques;

    //Creating options
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    
    shuffle(options);

    var opt_a = options[0];
    var opt_b = options[1];
    var opt_c = options[2];
    var opt_d = options[3];

    var shown_opts = "";
    shown_opts = `<span class="opt opt_a">${opt_a}</span>
    <span class="opt opt_b">${opt_b}</span><br>
    <span class="opt opt_c">${opt_c}</span>
    <span class="opt opt_d">${opt_d}</span>`
    document.querySelector('.options').innerHTML = shown_opts;
    verify_ans();
    hide_dialog();
}

function verify_ans() {
    var opt_btns = document.querySelectorAll('.opt')

    opt_btns.forEach(function (element) {
        element.onclick = function () {
            if (element.innerHTML == sum) {
                score += 100;
                info_box.style.visibility = 'visible';
                info_box.style.opacity = '1';
                document.querySelector('.show_info').style.background = 'green';
                document.querySelector('.show_info').innerHTML = 'CORRECT <br> +100';

                setTimeout(function(){
                    info_box.style.visibility = 'hidden';
                    info_box.style.opacity = '0';
                    create_ques();
                }, 1000)
            } 
            else { 
                info_box.style.visibility = 'visible';
                info_box.style.opacity = '1';
                document.querySelector('.show_info').style.background = 'red';
                document.querySelector('.show_info').innerHTML = 'WRONG <br> -100';

                setTimeout(function(){
                    info_box.style.visibility = 'hidden';
                    info_box.style.opacity = '0';
                }, 1000)
                if(score == 0){
                    score = 0;
                }else{
                    score -= 100;
                }

            }
            document.querySelector('.show_score').innerHTML = score;
        }
    })
}






/*<div class="question_box">
                    <div class="question">Q: <span class="show_question">x + y = ?</span></div>

                    <div class="options">
                        <span class="opt opt_a">00</span>
                        <span class="opt opt_b">00</span><br>
                        <span class="opt opt_c">00</span>
                        <span class="opt opt_d">00</span>
                    </div>/
*/








var tab = document.querySelectorAll('.tab');
function start() {
    Object.assign(document.querySelector('.initial_page').style, css.hide);
    Object.assign(document.querySelector('.game_area').style, css.show);
    show_dialog();
}
// setTimeout(function () { start(); show_dialog(); }, 10)

var dialog_box = document.querySelector('.dialog_box');
function show_dialog() {
    Object.assign(dialog_box.style, css.show_absolute_box);
}
function hide_dialog() {
    Object.assign(dialog_box.style, css.hide_absolute_box);
}

var css = {
    'show': {
        'visibility': 'visible',
        'opacity': '1',
        'width': '100%',
        'transform': 'translate(0px, 0px)'
    },
    'hide': {
        'visibility': 'hidden',
        'opacity': '0',
        'width': '0',
        'transform': 'translate(-700px, 0px)'
    },
    'show_absolute_box': {
        'visibility': 'visible',
        'opacity': '1',
        'transform': 'translate(-50%, -50%)'
    },
    'hide_absolute_box': {
        'visibility': 'hidden',
        'opacity': '0',
        'transform': 'translate(-250%, -50%)'
    }
}