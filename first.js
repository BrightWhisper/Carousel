// $(p1).on('click', function(){
//     $('.images').css({
//         transform: 'translateX(0)'
//     })
// })
// $(p2).on('click', function(){
//     $('.images').css({
//         transform: 'translateX(-300px)'
//     })
// })
// $(p3).on('click', function(){
//     $('.images').css({
//         transform: 'translateX(-600px)'
//     })
// })
let allButtons = $('button');
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        console.log(x.target);
    })
}