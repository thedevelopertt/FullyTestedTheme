function landingAnimation(){
    const timeline = new TimelineMax({
        onComplete : function(){
            buttonTimeline.resume()
        },
        delay : 0.5
    });
    timeline
        .from(
            "img",
            1,
            {
                opacity : 0,
                easing : Power3.easeOut
            }
        )
        .from(
            ".landing-lead > p",
            0.4,
            {
                opacity : 0,
                easing : Power3.easeOut
            }
        )
        .from(
            ".landing-action",
            0.5,
            {
                left : -40,
                opacity : 0,
                easing : Power3.easeOut
            }
        )
}

function scrollAnimation(){

    const foodMenuTimeLine = new TimelineMax({});
    foodMenuTimeLine.from(
        ".food-menu-description",
        0.7,
        {
            opacity : 0,
            bottom : -100,
            easing : Power3.easeOut
        }
    )

    const controller = new ScrollMagic.Controller();
    const foodMenuScene = new ScrollMagic.Scene({
        triggerElement : ".food-menu-section",
    })
        .setTween(foodMenuTimeLine)
        .addTo(controller)

    const aboutScene = new ScrollMagic.Scene({
        triggerElement : ".about-section"
    })

    const aboutSectionTween = new TimelineMax({});
    aboutSectionTween.from(
        ".about-description",
        0.7,
        {
            opacity : 0,
            bottom : -100,
            easing : Power3.easeOut
        }
    )

    aboutScene.setTween(aboutSectionTween).addTo(controller);

    const eventsScene = new ScrollMagic.Scene({
        triggerElement: ".events-section"
    })

    const eventsSectionTween = new TimelineMax();

    eventsSectionTween.from(
        ".events-description",
        0.7,
        {
            opacity : 0,
            bottom : -100,

            easing : Power3.easeOut
        }
    )

    eventsScene.setTween(eventsSectionTween).addTo(controller);
}

$(document).ready(landingAnimation)
$(document).ready(scrollAnimation)