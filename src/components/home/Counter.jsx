import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
    const [startCounting, setStartCounting] = useState(false);
    const [key, setKey] = useState(0); 
    const counterRef = useRef(null);
    useEffect(() => {
      const trigger = ScrollTrigger.create({
        trigger: counterRef.current,
        start: "top 80%", 
        end: "top 20%", 
        onEnter: () => {
          setStartCounting(true);
          setKey(prevKey => prevKey + 1);
        },
        onLeave: () => setStartCounting(false),
      });
      return () => {
        trigger.kill();
      };
    }, []);
  return (
      <div className="main-counter">
        <div className="row gutter-0" ref={counterRef}>
          <div className="col-md-6 mb-100">
            <div>
          {startCounting && (
          <CountUp key={key} start={0} end={100} duration={3} className="kclass" />
              )}
            <p>Project completed</p>
          </div>
          </div>
          <div className="col-md-6 mb-100">
            <div>
          {startCounting && (
          <CountUp key={key} start={0} end={400} duration={3} />
              )}
            <p>Skilled Professional</p>
          </div>
          </div>
          <div className="col-md-6">
            <div>
          {startCounting && (
          <CountUp key={key} start={0} end={800} duration={3} />
              )}
            <p>Visited Conference</p>
          </div>
          </div>
          <div className="col-md-6">
            <div>
          {startCounting && (
          <CountUp key={key} start={0} end={500} duration={3} className="kclass" />
              )}
            <p>Happy Clients</p>
          </div>
          </div>
        </div>
      </div>
  )
}
export default Counter;