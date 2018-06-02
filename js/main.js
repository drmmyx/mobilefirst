$('#view-work').on('click',function(){
    const images = $('#image').position().top;
    $('html, body').animate({
        scrollTop : images
    },900);

});