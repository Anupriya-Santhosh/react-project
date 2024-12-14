import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div>
      {/* Contact Section */}
      <section className="contact py-5">
        <div className="container">
          <h1 className="text-center mb-4 text-dark">Contact Us</h1>
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6">
              <h4>Get in Touch</h4>
              <form action="" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"  
                    name="name" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"  
                    name="email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="5"  
                    name="message" 
                    placeholder="Your Message" 
                    required 
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 mb-4">
              <h4>Our Office</h4>
              <p>123 Travel Street, Cityville, Country</p>
              <p>
                Phone: <a href="tel:+919406995043" className="text-dark">+91 9406995043</a>
              </p>
              <p>
                Email: <a href="mailto:contact@travelwebsite.com" className="text-dark">contact@travelwebsite.com</a>
              </p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15652.794706801653!2d75.77784064859425!3d11.24679042291041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d11.2366934!2d75.79517659999999!4m5!1s0x3ba6594458f97ea1%3A0xed8dd7fc4e1226fb!2sFirst%20Floor%2C%205%2C%20Riya%20-%20The%20Travel%20Expert%20%7C%20Kozhikode%2C%20Noble%20Building%2C%203419%20B%2C%20Indira%20Gandhi%20Rd%2C%20Kozhikode%2C%20Kerala%20673004!3m2!1d11.2595785!2d75.78989659999999!5e0!3m2!1sen!2sin!4v1726810869404!5m2!1sen!2sin" 
                width="600" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}

export default ContactForm;
