import React from 'react';
import Counter from "./Counter";

const CounterSection = () => {
  return <section className="homepage-counter">
    <div className="custom-container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div className="counter-content">
            <h1>We Providing Digital
              Services in USA.</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit eros nullam inceptos placerat aliquet taciti conubia himenaeos elementum mattis per velit eleifend ridiculus. Lorem ipsum dolor sit amet consectetur adipiscing elit eros nullam inceptos placerat aliquet taciti conubia himenaeos elementum mattis per velit eleifend ridiculus.</p>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <Counter />
        </div>
      </div>
    </div>
  </section>
}
export default CounterSection;