let text = document.querySelector('#text3');
let move_text = document.querySelector("#moving_text");
let turn_text = document.querySelector("#turning_text");
let audio = document.querySelector("#audio");
let player_btn = document.querySelector("#player");
let img_play = document.querySelector("#audio_played");
let img_pause = document.querySelector("#audio_paused");
let played = true;

let enter = 1; //номер страницы

//контроль музычки
function player() {
    if (played) {
        played = false;
        audio.pause();
        jQuery(img_play).fadeTo(700, 0);
        jQuery(img_pause).fadeTo(700, 0.6);
    }
    else {
        played = true;
        audio.play();
        jQuery(img_play).fadeTo(700, 0.6);
        jQuery(img_pause).fadeTo(700, 0);
    }
}

jQuery("#text1").fadeTo(1000, 1);

document.addEventListener("keyup", function(event){ //когда любая клавише нажата
    if(event.keyCode == 13) {
        
        //переключаем страницу
        enter++;

        //включаем музычку
        if (enter == 2) {
            player_btn.style.display = "block";
            audio.play();
            jQuery(img_play).fadeTo(300, 0.6);
        }
        
        //если идет текст, до input
        if (enter < 4) {
            let hide = "#text" + (enter-1);
            let show = "#text" + enter;
            jQuery(hide).fadeTo(1000, 0, function() {
                jQuery(show).fadeTo(1000, 1);
            });
        }
        
        //после появления input
        if (enter > 3) {

            if (text3.value) {

                //после первого ввода убираем placeholder
                if (enter > 3) {
                    text.placeholder = "";
                }

                //вставляем значение input в блок со стилем вращения 
                turn_text.innerHTML = text.value;
                //input очищаем
                text.value = "";

                //добавляем классы вращения и движения к нужным блокам
                turn_text.classList.add("turn");
                move_text.classList.add("move");

                //после окончания анимации убираем классы до следующего нажатия enter
                setTimeout(() => {
                    move_text.classList.remove("move");
                    turn_text.classList.remove("turn");
                    turn_text.innerHTML = "";
                }, 1500);
            }
        }
    }
});