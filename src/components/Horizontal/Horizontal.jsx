import React from "react";

const Horizontal = () => {
  return (
    <div style={{overflow:"scroll"}}>
      <div class="wrapper d-flex flex-nowrap">
        <section class="section section--dark section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
          Part One
        </section>
        <section class="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
          Part Two
        </section>
        <section class="section section--small flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
          Part Three
        </section>
        <section class="section section--large vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
          Part Four
        </section>
      </div>
    </div>
  );
};

export default Horizontal;
