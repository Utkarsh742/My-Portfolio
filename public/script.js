$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navig').addClass("sticky");
        }else{
            $('.navig').removeClass("sticky");
        }
    });
    $('.mb').click(function(){
        $('.navig .append').toggleClass("active");
        $('.mb i').toggleClass("active");
    });
    
    $('.navig .append li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
});