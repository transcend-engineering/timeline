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
      .addIndicators()
      .addTo(ctrl);

  });
  
  
 
})(jQuery);