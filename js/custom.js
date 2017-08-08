/*global $, alert, console*/
$(function () {
    'use strict';
    $('.navbar-toggle').click(function () {
        $('.collapse').slideToggle();
    });
    
    //adjust header height
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
        $('.bxslider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    });
    
    //adjust height whene resizing 
    $('.navbar ul li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    //make the item slider in center exactly
    $('.bxslider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    //trigger bx Slider
    $('.bxslider').bxSlider({
        pager: false
    });
    
    //smooth scroll to each div
    $('.navbar ul li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data("value")).offset().top
        }, 1500);
    });
    
    //trigger testimonials
    (function testimonialSlider() { //this function is self invoke
        $('.testim-wrapper .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    testimonialSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.testim-wrapper div').eq(0).addClass('active').fadeIn();
                    testimonialSlider();
                });
            }
        });
    }());
    
    //instanciate mixitup
    $('#container').mixItUp();
    
    //trigger nice Scrioll
    $('html').niceScroll({
        cursorcolor: '#10c8dc',
        cursorwidth: '8px',
        cursorborder: '1px solid #10c8dc'
    });
    
    // activate back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.back').fadeIn(1000);
        } else {
            $('.back').fadeOut(1000);
        }
    });
    $('.back').click(function () {
        $('html,body').animate({scrollTop: 0}, 1000);
    });
    
    //tooltip bootstrap
    $('[data-toggle="tooltip"]').tooltip();
    
    
    //instanciate wow animation-effect
    new WOW().init();
    
    
    //colorpicker
    $('.button').click(function () {
        $('.colorpicker').slideToggle(1000);
    });
    
    //preloader 
    $(window).load(function () {
        $('body').css("overflow", "auto");
        $('.spinner').fadeOut(); 
    });
    
    
    
});