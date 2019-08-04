$(function(){
  $('.header-logo').click(function(){
    $('html,body').animate({
      'scrollTop':0
    }, 'slow');
  });

  $('.scroll-language').click(function(){
    var languageId=$(this).attr('href');
    var languagePosition=$(languageId).offset().top;
    $('html,body').animate({
      'scrollTop':languagePosition
    },'slow');
  });

  $('.scroll-feature').click(function(){
    var feaId=$(this).attr('href');
    var feaPosition=$(feaId).offset().top;
    $('html,body').animate({
      $('html,body').animate({
        'scrollTop':feaPosition
      },'slow');
    });

    $('.scroll-price').click(function(){
      var priceId=$(this).attr('href');
      var pricePosition=$(priceId).offset().top;
      $('html,body').animate({
        $('html,body').animate({
          'scrollTop':pricePosition
        },'slow');
      });

     $('.scroll-contact').click(function(){
       var contactId=$(this).attr('href');
       var contactPosition=$(contactId).offset().top;
       $('html,body').animate({
         'scrollTop':contactPosition
       },'slow');
     });


      $('.top-description').fadeIn(4000);

      $('.index-btn').click(function(){
        $('.active').removeClass('active');
        var clickIndex=$('.index-btn').index($(this));
        $('.language-item').eq(clickIndex).addClass('active');
      });

      $('.menu-icon').click(function(){
        var $menuicon = $('.menu-icon');
        if($menuicon.hasClass('menu-click')) {
          $maenuicon.removeClass('menu-click');
          $('.menu-list').fadeIn();
        } else {
          $menuicon.addClass('menu-click');
          $('.menu-list').fadeOut();
        }
      });


});
