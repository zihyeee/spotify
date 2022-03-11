$(document).ready(function() {
    gsap.to(".con1 .wrap .txt", {
        scrollTrigger: {
            trigger: ".con1 .wrap",
            scrub: true,
            pinSpacing: false,
            pin: true,
            start: "top top",
            end: "bottom top"
        },
        opacity: 0
    })

    gsap.to(".con2 .txt", {
        scrollTrigger: {
            trigger: ".con2 .txt",
            pin: true,
            scrub: true,
            pinSpacing: false,
            start: "top top",
            end: "bottom top",
        },
        opacity: 1
    })

    gsap.utils.toArray(".con3 .box").forEach((box, i) => {
        gsap.to(box, {
            scrollTrigger: {
                trigger: box,
                scrub: 1,
                start: `top bottom`,
                end: `bottom top`
            },
            backgroundPosition: `50% -100px`
        })
    });

    var con4Height = $(".con4").height();
    var contentHeight = $(".con4 .album").height();

    gsap.to(".con4 .tit-wrap", {
        scrollTrigger: {
            trigger: ".con4 .tit-wrap",
            pin: true,
            pinSpacing: false,
            start: "top top",
            end: `${con4Height}px top`,
            onLeave: () => {
                gsap.to(".con4 .tit-wrap", {
                    "opacity": 0
                })
            },
            onEnterBack: () => {
                gsap.to(".con4 .tit-wrap", {
                    "opacity": 1
                })
            }
        },
    });

    function measureResize() {
        con4Height = $(".con4").height();
        contentHeight = $(".con4 .album").height();
    }

    $(window).on("resize", function() {
        measureResize();
    })

})