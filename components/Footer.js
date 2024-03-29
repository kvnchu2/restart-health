import Link from "next/link";
import Kinwithkevin from "../public/images/kinesiology-with-kevin-high-resolution-logo-color-on-transparent-background.png";
import Image from "next/image";
import Pin from "../public/images/pin.svg";
import FooterPhone from "../public/images/footer-phone.svg";
import Email from "../public/images/email.svg";

export default function footer() {

return (
  <>
    <footer id="footer">
      <div className="container">
          <div className="left-section">
              <div className="footer-logo">
              <h2>Insert Logo Here</h2>
              </div>
              <p>
                  We are committed to providing the best form of care for your recovery and ensure he saves you time by being accessible to you at the community center gym or at home.
              </p>
          </div>
          <div className="right-section">
              <div className="lists">
                  <ul>
                      <li><h2>Company</h2></li>
                      <li><Link href="/"><a>Home</a></Link></li>
                      <li><Link href="/about"><a>About Us</a></Link></li>
                      {/* <li><Link href="/testimonials"><a>Testimonials</a></Link></li> */}
                      <li><Link href="/services/icbcactiverehabilitation"><a>Services</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Support</h2></li>
                      <li><Link href="/contact"><a>Contact Us</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Get in Touch</h2></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={Pin} alt="" width="24" height="24" /></div><a href="" target="_blank">Vancouver, BC</a></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={FooterPhone} alt="" width="24" height="24" /></div><a href="tel:555-213-9120">(236) 512-5182</a></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={Email} alt="" width="24" height="24" /></div><a href="mailto:info@email.com">kvnchu2@gmail.com</a></li>
                  </ul>
              </div>
  
              <div className="buttons">
                  <Link href="/contact"><a className="button-solid" >
                      Book an appointment
                  </a>
                  </Link>
              </div>
          </div>
      </div>
    </footer>
  </>
  );
}