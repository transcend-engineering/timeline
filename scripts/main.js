function changeText(e,n){e.text=n}!function(e){var n=window.innerHeight,a=e(".iphone"),t=e(".mouse-scroll"),o=e(".timeline"),r=e(".circular-flex"),i=e(".innerS1"),c=e(".innerS2"),l=e(".innerS3"),s=e(".innerS4"),d=e(".screenHat"),m=e(".screenA"),u=e(".screenB"),w=e(".screenC"),g=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}});e("section").each(function(){new ScrollMagic.Scene({triggerElement:this,duration:"50%"}).setPin(this).addIndicators({name:name}).addTo(g)});var P=new TimelineMax;P.to(t,.5,{opacity:0}),new ScrollMagic.Scene({duration:"70%"}).setTween(P).triggerElement(e(".hero")[0]).addTo(g);var T=new TimelineMax;T.to(i,.75,{xPercent:113.5,yPercent:-5,scale:.5},"0").from(o,.75,{opacity:0},"0").from(r,.75,{opacity:0,scale:.1}),new ScrollMagic.Scene({duration:"50%"}).setTween(T).triggerElement(e("section#one")[0]).addIndicators({name:name}).addTo(g);var h=new TimelineMax;h.to(d,1,{yPercent:-50,ease:Power4.easeOut}).fromTo(m,1,{yPercent:20,autoAlpha:0,scale:.8},{yPercent:0,autoAlpha:1,scale:1,ease:Power4.easeOut},"0").from(c,1,{autoAlpha:0},"-=0.3"),new ScrollMagic.Scene({offset:.6*n,triggerElement:e("section#one")[0],duration:"80%"}).setTween(h).addIndicators({name:name}).addTo(g);var S=new TimelineMax;S.from(a,1,{opacity:0,yPercent:50,ease:Power4.easeInOut},"0").to(m,.3,{yPercent:-30,autoAlpha:0,ease:Power4.easeInOut}).fromTo(u,1,{yPercent:20,autoAlpha:0},{yPercent:0,autoAlpha:1,ease:Power4.easeInOut}).from(l,1,{autoAlpha:0},"-=0.7"),new ScrollMagic.Scene({triggerHook:"onEnter",triggerElement:e("section#two")[0],duration:"50%"}).setTween(S).addIndicators({name:name}).addTo(g);var p=new TimelineMax;p.to(u,.3,{yPercent:-30,autoAlpha:0,ease:Power4.easeInOut}).fromTo(w,1,{yPercent:20,autoAlpha:0},{yPercent:0,autoAlpha:1,ease:Power4.easeInOut}).from(s,1,{autoAlpha:0},"-=0.7"),new ScrollMagic.Scene({triggerElement:e(".innerS3 h2")[0],duration:"50%"}).setTween(p).addIndicators({name:name}).addTo(g)}(jQuery);