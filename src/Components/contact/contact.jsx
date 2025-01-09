import React, { useState } from "react";
import "./contact.css";
import emailIcon from "../../assets/email.png"; 
import phoneIcon from "../../assets/phone.png";
import locationIcon from "../../assets/location.png";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "51813a83-0a10-4898-a9ed-4f549a7bd440");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-section" id="contact-us">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            We’d love to hear from you! Whether you have a question about our
            services or just want to say hello, feel free to reach out to us
            through the contact details below.
          </p>
          <div className="info-item">
            <img src={emailIcon} alt="Email" />
            <p>learnex@gmail.com</p>
          </div>
          <div className="info-item">
            <img src={phoneIcon} alt="Phone" />
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <img src={locationIcon} alt="Location" />
            <p> 39/5 11G, Karachi</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit Form</button>
          <span>{result}</span>
        </form>
      </div>
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <p>&copy; 2024 LearnEx University. All Rights Reserved.</p>
    </div>
    <div className="footer-right">
      <ul className="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </div>
</footer>

    </div>
    
  );
}
