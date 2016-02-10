(function($) {
 
  // Init ScrollMagic
  var ctrl = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: 'onLeave'
      }
  });
  
   // Create scene
  $("section").each(function() {

    var name = $(this).attr('id');

    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addIndicators({
      name:name
    })
    .loglevel(3)
    .addTo(ctrl);
    
  });
  
  // get window height
  var wh = window.innerHeight;

  new ScrollMagic.Scene({
    offset: wh*3.75
  })
  .setClassToggle("section#four", "is-active")
  .addTo(ctrl);
  
  
 
})(jQuery);