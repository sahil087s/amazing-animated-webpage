function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locoscroll()

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    });

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })

    })
}
cursorEffect()

function page2Animation() {
    gsap.from("#page2-top h3,h4 , .elem h1", {
        y: 120,
        opacity:0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            markers: false,
            scrub: 3
        }
    })
}

page2Animation()

function page3Animation() {
    gsap.from("#page3-top h2", {
        y: 120,
        opacity:0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 60%",
            end: "top 57%",
            markers: false,
            scrub: 3
        }
    })
}
page3Animation()

function page3Animation2() {
    gsap.from("#page3-bottom h3, .elem2 h1", {
        y: 120,
        opacity:0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3-bottom",
            scroller: "#main",
            start: "top 60%",
            end: "top 57%",
            markers: false,
            scrub: 3
        }
    })
}

page3Animation2()

function page4Animation2() {
    gsap.from("#page4-bottom h3, .elem3 h1", {
        y: 120,
        opacity:0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4-bottom",
            scroller: "#main",
            start: "top 60%",
            end: "top 57%",
            markers: false,
            scrub: 3
        }
    })
}

page4Animation2()

function cursorEffect2() {
    var page4Content = document.querySelector("#page4");
    var cursor2 = document.querySelector("#cursor2");

    page4Content.addEventListener("mousemove", function (val) {
        gsap.to(cursor2, {
            x: val.x + "px",
            y: val.y + "px" 
        })
    })

    page4Content.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1
        })
    });

    page4Content.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0
        })

    })
}
cursorEffect2()

function sweeper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
        },
        grabCursor: true,
        speed: 10000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

sweeper()

function loader() {
    var tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader h3", {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader", {
        opacity: 0
    })

    tl.from("#page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5
    })

    tl.to("#loader", {
        display: "none"
    })
}

loader()

function sg(){
    gsap.to("#sg",{
        rotation: -90,
        // opacity:0.3
        
    })
}

sg()

function sg1(){
    gsap.to("#sg1",{
        opacity: 0.3,
        strokeDasharray: 302,
        strokeDashoffset: 400,
        duration: 1,
        scrollTrigger: {
            trigger: "#sg",
            scroller: "#main",
            start: "top 60%",
            end: "top 25%",
            markers: false,
            scrub: 5
        }
    })
}
sg1()

function sg2(){
    gsap.to("#sg2",{
        opacity: 0.9,
        strokeDasharray: 302,
        strokeDashoffset: 100,
        duration: 1,
        scrollTrigger: {
            trigger: "#sg",
            scroller: "#main",
            start: "top 60%",
            end: "top 25%",
            markers: false,
            scrub: 5
        }
    })
}
sg2()

function sg3(){
    gsap.to("#sg3",{
        rotation: 237,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "#sg",
            scroller: "#main",
            start: "top 60%",
            end: "top 25%",
            markers: false,
            scrub: 5
        }
    })
}
sg3()


const counter = document.getElementById('counter');
    const h1 = document.querySelector('h1');
    const h4 = document.querySelector('h4');
    let currentValue = 5;

function updateCounter() {
    gsap.from([h1, h4], { opacity: 0, duration: 1 });
    gsap.from(counter, { opacity: 0, y: -50, duration: 0.5, onComplete: () => {
        gsap.to(counter, { opacity: 1, y: 0, duration: 0.5, onComplete: () => {
            currentValue--;
            if (currentValue >= 1) {
                counter.textContent = currentValue + " ";
                updateCounter();
            } else {
                counter.textContent = '1 ';
                gsap.to([counter, h1, h4], { opacity: 1, duration: 0.5, delay: 0.5});
            }
        }});
    }});
}

    updateCounter();