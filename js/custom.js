$(function () {

    'use strict';

    //Scroll To Section

    $(function() {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      //add animation to sections
      window.sr = ScrollReveal();
        sr.reveal('header .head-img', {
            duration: 2000,
            origin:'top',
            distance:'300px'
        });
        
        window.sr = ScrollReveal();
        sr.reveal('header .head-info', {
            origin:'right',
            duration: 2000,
            distance:'300px'
        });

        window.sr = ScrollReveal();
        sr.reveal('header .btn', {
            delay: 2000,
            duration: 2000,
        });

        window.sr = ScrollReveal();
        sr.reveal('#test .container', {
            duration: 2000,
        });

        window.sr = ScrollReveal();
        sr.reveal('#info-one .info-img', {
            origin:'left',
            duration: 2000,
            distance:'300px'
        });

        window.sr = ScrollReveal();
        sr.reveal('#info-one .info-text', {
            origin:'right',
            duration: 2000,
            distance:'300px'
        });

        window.sr = ScrollReveal();
        sr.reveal('#info-two .info-left', {
            origin:'left',
            duration: 2000,
            distance:'300px'
        });

        window.sr = ScrollReveal();
        sr.reveal('#info-two .info-right', {
            origin:'right',
            duration: 2000,
            distance:'300px'
        });
});