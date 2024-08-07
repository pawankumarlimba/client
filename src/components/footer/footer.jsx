import React from 'react';
import './footer.css'; // Import your CSS file if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faGlobe } from '@fortawesome/free-solid-svg-icons'




const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-evenly backprim p-10 rounded-t-3xl bg-black'>
    <footer id="contact">
      <section className='article'>
      The event is not just a competition; it's a celebration of knowledge and a testament to the diversity of learning environments across schools in Tripura.
<div className='atb'>All the Best</div>
  
   
  
  </section>
      <ul className='ul'>
        <div id="icon-container">
          <a href="https://www.instagram.com/biochase_2024/?igsh=bGxzNGprZm9yYjk3">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faInstagram} />
            </div>
          </a>
          <a href="1">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </a>
          <a href="2">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
          <a href="3">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faGlobe} />
            </div>
          </a>
         
        </div>
      </ul>
      <p className='p'>&copy; 2024, *Bio-Chase 1.0*</p>
    </footer></div>
  );
};

export default Footer;

