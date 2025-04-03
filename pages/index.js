import { useEffect } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'; // to import Bootstrap JS
import carsuel from "./Images/School.jpg";
import carsuel2 from "./Images/School2.jpg"; // Second image
import com1  from "./Images/computer.jpg"
import com4  from "./Images/computer3.jpg"
import com2  from "./Images/computer1.jpg"
import com3  from "./Images/computer2.jpg"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaGraduationCap } from "react-icons/fa"; 
export default function Home() {
  useEffect(() => {
    // You can initialize any JS plugins here if necessary
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand text-primary fw-bold" href="#">
            <i className="bi bi-book"></i> eLEARNING
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-primary" href="#">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <a href="#" className="btn btn-info ms-3">Join Now →</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section position-relative text-black vh-100 d-flex align-items-center">
  <div className="hero-image position-absolute top-0 start-0 w-100 h-100">
    <Image src={carsuel} alt="Hero" layout="fill" objectFit="cover" className="opacity-50" />
  </div>

  {/* Overlay Content */}
  <div className="container position-relative z-1">
    <div className="col-md-8">
      <p className="text-info fw-bold">BEST ONLINE COURSES</p>
      <h1 className="display-4 fw-bold">The Best Online Learning Platform</h1>
      <p className="lead fw">Learn from top instructors and enhance your skills with our expertly designed courses.</p>
      <div className="mt-4">
        <a href="#" className="btn btn-info btn-lg me-3">Read More</a>
        <a href="#" className="btn btn-light btn-lg">Join Now</a>
      </div>
    </div>
  </div>
</header>
  <br></br>
  <section className="py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side - Image */}
      <div className="col-lg-6">
        <div className="row">
          <div className="col-12">
            <Image
              src={carsuel2}
              className="img-fluid rounded w-100" // Increased size
              alt="About Us 1"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="col-lg-6">
        <h2 className="fw-bold text-primary">About Our Platform</h2>
        <p className="text-muted">
          Our platform provides high-quality courses taught by experienced
          instructors. We aim to deliver knowledge in the most engaging way
          possible to help students achieve their goals.
        </p>
        <ul className="list-unstyled">
          <li>✔ Expert Instructors</li>
          <li>✔ Flexible Learning Schedule</li>
          <li>✔ Certificates of Completion</li>
        </ul>
        <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  </div>
</section>




<section className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Our Online Learning Services</h2>
          <p className="text-muted">
            Enhance your skills with our specialized online courses and programs.
          </p>
        </div>

        {/* Services Row */}
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-lg p-4 text-center">
              <div className="mb-3"><FaLaptopCode size={40} className="text-primary" /></div>
              <h5 className="fw-bold">Programming Courses</h5>
              <p className="text-muted">Learn coding from industry experts with hands-on projects.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-lg p-4 text-center">
              <div className="mb-3"><FaChalkboardTeacher size={40} className="text-primary" /></div>
              <h5 className="fw-bold">Expert Instructors</h5>
              <p className="text-muted">Get guidance from professionals with real-world experience.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-lg p-4 text-center">
              <div className="mb-3"><FaCertificate size={40} className="text-primary" /></div>
              <h5 className="fw-bold">Certified Programs</h5>
              <p className="text-muted">Earn industry-recognized certificates to boost your career.</p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-lg p-4 text-center">
              <div className="mb-3"><FaGraduationCap size={40} className="text-primary" /></div>
              <h5 className="fw-bold">Flexible Learning</h5>
              <p className="text-muted">Study at your own pace with 24/7 access to course material.</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Explore Our Courses</h2>
          <p className="text-muted">Choose from a variety of courses to enhance your skills.</p>
        </div>

        <div className="row g-3">
          {/* Large Image */}
          <div className="col-md-6">
            <div className="position-relative">
              <Image src={com1} className="img-fluid rounded" alt="Web Design" />
              <div className="position-absolute bottom-0 start-0 bg-white p-2">
                <h5 className="fw-bold">Web Design</h5>
                <p className="text-primary mb-0">49 Courses</p>
              </div>
            </div>
          </div>

          {/* Right-Side Images */}
          <div className="col-md-6">
            <div className="row g-3">
              {/* Graphic Design */}
              <div className="col-6">
                <div className="position-relative">
                  <Image src={com2} className="img-fluid rounded" alt="Graphic Design" />
                  <div className="position-absolute bottom-0 start-0 bg-white p-2">
                    <h6 className="fw-bold">Graphic Design</h6>
                    <p className="text-primary mb-0">49 Courses</p>
                  </div>
                </div>
              </div>

              {/* Video Editing */}
              <div className="col-6">
                <div className="position-relative">
                  <Image src={com3} className="img-fluid rounded" alt="Video Editing" />
                  <div className="position-absolute bottom-0 start-0 bg-white p-2">
                    <h6 className="fw-bold">Video Editing</h6>
                    <p className="text-primary mb-0">49 Courses</p>
                  </div>
                </div>
              </div>

              {/* Online Marketing (Large Image) */}
              <div className="col-12">
                <div className="position-relative">
                  <Image src={com4} className="img-fluid rounded" alt="Online Marketing" />
                  <div className="position-absolute bottom-0 start-0 bg-white p-2">
                    <h5 className="fw-bold">Online Marketing</h5>
                    <p className="text-primary mb-0">49 Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>


    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Link</h5>
            <ul className="list-unstyled">
              <li>➤ About Us</li>
              <li>➤ Contact Us</li>
              <li>➤ Privacy Policy</li>
              <li>➤ Terms & Condition</li>
              <li>➤ FAQs & Help</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">Contact</h5>
            <p>📍 123 Street, New York, USA</p>
            <p>📞 +012 345 67890</p>
            <p>✉ info@example.com</p>
            <div className="d-flex gap-2">
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaFacebookF size={20} /></a>
              <a href="#" className="text-white"><FaYoutube size={20} /></a>
              <a href="#" className="text-white"><FaLinkedinIn size={20} /></a>
            </div>
          </div>

          {/* Gallery */}
         

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="fw-bold">Newsletter</h5>
            <p>Enter your email for news letter.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-primary">SignUp</button>
            </div>
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p>© Your Site Name, All Rights Reserved. Designed by <a href="#" className="text-primary">Faizan Ali</a></p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Cookies</a>
            <a href="#" className="text-white">Help</a>
            <a href="#" className="text-white">FAQs</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a href="#" className="btn btn-primary position-fixed bottom-0 end-0 m-3">↑</a>
    </footer>
      {/* Import Bootstrap JS for proper Navbar functionality */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
