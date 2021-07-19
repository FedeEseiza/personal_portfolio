// NAVBAR STICKY
$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});
// ANIMATION TYPED TEXT
var typed = new Typed(".typing",{
    strings: ["Desarrollo Web", "FrontEnd", "BackEnd", "Desarrollo de Apps Android"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})