$(function(){
    // $('.main').append('<h1>head</h1>');
    $('.header-logo').on('click',function(){
        $('.header-menu').slideToggle(200);
        $(this).children().toggleClass('logo-act');
    });
});
