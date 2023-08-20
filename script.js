function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
loco();


var img = document.querySelector("#loader img")
var arr = ["./res/one.svg","./res/two.svg","./res/three.svg","./res/four.svg","./res/five.svg","./res/six.svg","./res/seven.svg","./res/eight.svg","./res/nine.svg","./res/ten.svg","./res/eleven.svg","./res/twelve.svg","./res/thirteen.svg"]
var index = 1;

setInterval(function(){
img.setAttribute("src",arr[index])  
index++
}, 200);
gsap.to("#loader",{
  top:"-200%",
  duration:2,
  delay:2,
  ease:Expo.easeInOut,
})

var clutter = "";

document.querySelector("#page1>h1").textContent.split("").forEach(function(dets){
    clutter += `<h1 class="pg1h1">${dets}</h1>`

    document.querySelector("#page1>h1").innerHTML = clutter;
})


gsap.from("#page1>h1>h1",{
    y:900,
    stagger:.2,
    duration:.8,
    delay:2  
})

gsap.to("#page2>video",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 60%",
        scrub:1,
        end:"top 0%"
        // markers:true
    }
})

gsap.to("#page5>#scroller",{
    transform:"translateX(-62%)",
    scrollTrigger:{
        start:"top 0%",
        end:"top -100%",
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        pin:true,
        scrub:2
    }
})


gsap.from("#page3>#txt>h1, #btmtxt>h1, #btmtxt>h3",{
    y:100,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        start:"top 50%",
        end:"top 0%",
        trigger:"#txt",
        scroller:"#main",
        // markers:true,
        scrub:2
    }
})

tl = gsap.timeline()

tl.from("#first>#vid",{
    y:100,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        start:"top 70%",
        end:"top 0%",
        trigger:"#first",
        scroller:"#main",
        // markers:true,
        scrub:2
    }
})
tl.from("#first>#img",{
    y:100,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        start:"top 70%",
        end:"top 0%",
        trigger:"#first>#img",
        scroller:"#main",
        // markers:true,
        scrub:2
    }
})
tl.from("#first>#img3",{
    y:100,
    opacity:0,
    duration:2,
    stagger:2,
    scrollTrigger:{
        start:"top 70%",
        end:"top 0%",
        trigger:"#first>#img3",
        scroller:"#main",
        // markers:true,x
        scrub:2
    }
})

gsap.from(".pg7txt>h1",{
    y:100,
    scrollTrigger:{
        start:"top 60%",
        end:"top -0%",
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        scrub:2
    }
})
