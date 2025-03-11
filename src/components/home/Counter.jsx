import React from 'react';
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="main-counter">
        <div className="row gutter-0">
          <div className="col-md-6">
            {counterOn && <h1><CountUp start={0} end={300} duration={2} delay={0} />+</h1>}
            <p>Project completed</p>
          </div>
          <div className="col-md-6">
            {counterOn && <h1><CountUp start={0} end={100} duration={2} delay={0} />+</h1>}
            <p>Project completed</p>
          </div>
          <div className="col-md-6">
            {counterOn && <h1><CountUp start={0} end={200} duration={2} delay={0} />+</h1>}
            <p>Project completed</p>
          </div>
          <div className="col-md-6">
            {counterOn && <h1><CountUp start={0} end={500} duration={2} delay={0} />+</h1>}
            <p>Project completed</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )
}
export default Counter;