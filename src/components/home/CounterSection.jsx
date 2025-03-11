import { useGSAP } from "@gsap/react";
import Counter from "./Counter";
import Lenis from "lenis"
import gsap from 'gsap'
const CounterSection = ()=>{
useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger);
  let revealAnimations = [];
  const lenis = new Lenis({
    lerp: 0.07
  });
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  document.querySelectorAll('.heading-reveal').forEach(text => {
    let splitText = new SplitType(text, {
      type: 'words'
    })
    const section = text.closest('section');
    gsap.from(splitText.words, {
      opacity: 0,
      ease: 'none',
      stagger: 1,
      duration: 5,
      scrollTrigger: {
        trigger: section,
        start: 'top top', 
        end: () => `+=${window.innerHeight * 5}px`,
        scrub: true,
        pin: true,
      }
    })
  })
})
return <section className="homepage-counter">
  <div className="custom-container">
    <div className="row">
    <div className="col-md-6 col-xs-12">
        <div className="counter-content">
          <h1 className="heading-reveal">We Providing Digital
          Services in USA.</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit eros nullam inceptos placerat aliquet taciti conubia himenaeos elementum mattis per velit eleifend ridiculus. Lorem ipsum dolor sit amet consectetur adipiscing elit eros nullam inceptos placerat aliquet taciti conubia himenaeos elementum mattis per velit eleifend ridiculus.</p>
        </div>
    </div>
    <div className="col-md-6 col-xs-12">
        <Counter/>
    </div>
    </div>
  </div>
</section>
}
export default CounterSection;