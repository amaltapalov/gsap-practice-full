/**
 * Default Libraries
 * If you don't need some libraries, remove unnesessary imports and that's it.
 * -------------------------------------------------------------------------- */
// Importing styles
import './styles.scss';

import './js/space-background';

// GreenSock tools + ScrollMagic
import TweenMax from 'gsap/src/minified/TweenMax.min';
import TimelineMax from 'gsap/src/minified/TimelineMax.min';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// Comment this line for production
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
/* -------------------------------------------------------------------------- */


/* Start coding here ---------------------------------------------------------*/
(() => {
    //* init controller
    const controller = new ScrollMagic.Controller();
    //* build scene
    const scene = new ScrollMagic.Scene({
          triggerElement: '#trigger-element',
          // offset: 400,
          duration: 150,
          triggerHook: 'onLeave'
    })
    //* setPin - make element fixed positioned
    .setPin('#trigger-element')

    .setTween("#planet", 1, {
        css: {
            rotation: -90
        },
        ease: Power0.easeNone,
    })
    .addIndicators({name: "2 (duration: 100)"})
    .addTo(controller);

})();
/* -------------------------------------------------------------------------- */
