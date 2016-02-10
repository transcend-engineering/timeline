(function($) {
 
//  // Init ScrollMagic
//  var ctrl = new ScrollMagic.Controller({
//      globalSceneOptions: {
//          triggerHook: 'onLeave'
//      }
//  });
//  
//   // Create scene
//  $("section").each(function() {
//
//    var name = $(this).attr('id');
//
//    new ScrollMagic.Scene({
//        triggerElement: this
//    })
//    .setPin(this)
//    .addIndicators({
//      name:name
//    })
//    .loglevel(3)
//    .addTo(ctrl);
//    
//  });
//  
//  // get window height
//  var wh = window.innerHeight;
//
//  new ScrollMagic.Scene({
//    offset: wh*3.75
//  })
//  .setClassToggle("section#four", "is-active")
//  .addTo(ctrl);
  
  var wh = window.innerHeight,
    $iphone = $('.iphone'),
    $mouse = $('.mouse-scroll'),
    $timeline = $('.timeline'),
    $innerS1 = $('.innerS1'),
    $innerS2 = $('.innerS2'),
    $innerS3 = $('.innerS3'),
    $innerS4 = $('.innerS4'),
    $screenHat = $('.screenHat'),
    $screenA = $('.screenA'),
    $screenB = $('.screenB'),
    $screenC = $('.screenC');
  
  // init
  var ctrl = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: 'onLeave',
          vertical: false
      }
  });

  // Create scene
  $("section").each(function() {

      new ScrollMagic.Scene({
          triggerElement: this,
          duration: '50%'
      })
      .setPin(this)
      .addIndicators({
        name:name
      })
      .addTo(ctrl);
  });
  
  var mouseFadeTimeIn = new TimelineMax();
  mouseFadeTimeIn
    .to($mouse, 0.5, {opacity: 0});
  
  new ScrollMagic.Scene({
      duration: '70%'
  })
  .setTween(mouseFadeTimeIn)
  .triggerElement($('.hero')[0])
  .addTo(ctrl);
  
  // iPhone intro animation Timeline
  var iphoneIntroTl = new TimelineMax();
  iphoneIntroTl
      .from($iphone, 1, {opacity: 0, yPercent: 50,xPercent: 100, ease: Power4.easeInOut})
      .to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0')
      .from($timeline, 0.75, {opacity: 0}, '0');
  
  // iPhone back to stylesheet position
  new ScrollMagic.Scene({
      duration: '70%'
  })
  .setTween(iphoneIntroTl)
  .triggerElement($('section#one')[0])
  .addIndicators({
    name:name
  })
  .addTo(ctrl);
  
  // Hat animation
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat       
      .to($screenHat, 1, {yPercent: -50, ease: Power4.easeOut})
      .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
      .from($innerS2, 1, {autoAlpha: 0}, '-=0.3');
  
  // Add hat anim
  new ScrollMagic.Scene({
      offset: wh*0.6,
      triggerElement: $('section#one')[0],
      duration: '80%'
  })
  .setTween(iphoneContentHat)
  .addIndicators({
        name:name
      })
  .addTo(ctrl);
  
  // Content anim1
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl       
      .to($screenA, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
      .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
      .from($innerS3, 1, {autoAlpha: 0}, '-=0.7');

  // Add anim
  new ScrollMagic.Scene({
      triggerElement: $('.innerS2 h2')[0],
      duration: '50%'
  })
  .setTween(iphoneContent1Tl)
  .addIndicators({
        name:name
      })
  .addTo(ctrl);

  // Content anim2
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl       
      .to($screenB, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
      .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
      .from($innerS4, 1, {autoAlpha: 0}, '-=0.7');

  // Add anim2
  new ScrollMagic.Scene({
      triggerElement: $('.innerS3 h2')[0],
      duration: '50%'
  })
  .setTween(iphoneContent2Tl)
  .addIndicators({
        name:name
      })
  .addTo(ctrl);
  
 
})(jQuery);