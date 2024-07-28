import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          
At IshCare, we are dedicated to revolutionizing hospital management services with a focus on efficiency, patient care, and innovation. Our team of experts combines extensive industry experience with cutting-edge technology to deliver seamless and integrated management solutions tailored to the unique needs of each healthcare facility.

Our Vision:
We envision a world where healthcare facilities operate at their highest potential, ensuring that every patient receives exceptional care. By streamlining operations and enhancing communication, we aim to empower hospitals to focus on what truly matters – the well-being of their patients.

Our Mission
Our mission is to provide top-tier hospital management services that optimize operational workflows, improve patient experiences, and drive overall efficiency. We are committed to supporting healthcare providers in delivering the highest standards of care through innovative solutions and a patient-centered approach.
          </p>
          <p>We are all in 2024!</p>
          <p></p>
          <p>
          Our mission is to provide top-tier hospital management services that optimize operational workflows, improve patient experiences, and drive overall efficiency. We are committed to supporting healthcare providers in delivering the highest standards of care through innovative solutions and a patient-centered approach.


          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Biography;
