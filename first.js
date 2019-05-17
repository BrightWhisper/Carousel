let allButtons = $('button');

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index() - 1;
        let p = index * -300;
        $('.images').css({
            transform: `translate(${p}px)`
        })
        n = index;
        activeButton(allButtons.eq(n));
    })
}

let size = allButtons.length;
let n = 0;
playSlide(n%size);
let timerId = setTimer();
function setTimer(){
    return setInterval(()=>{
        n+=1;
        playSlide(n%size);
    },1000)
}
function playSlide(index){
    allButtons.eq(index).trigger('click');
}
function activeButton($button) {
    $button.addClass('red').siblings('.red').removeClass('red');
}
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId);
})
$('.window').on('mouseleave', function () {
    timerId = setTimer();
})