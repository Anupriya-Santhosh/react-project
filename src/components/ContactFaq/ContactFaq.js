import React from 'react';
import './ContactFaq.css';

function ContactFaq() {
  return (
    <div>
      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 
            className="faq-title" 
            style={{ fontStyle: 'italic', fontFamily: "'Great Vibes', cursive" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="faq-description">
            Got questions? We’ve got answers! Check out our FAQs below to find what you need.
          </p>

          <div className="faq-container">
            {/* FAQ 1 */}
            <div className="faq-item">
              <div className="faq-question">
                <h3>How can I book a trip?</h3>
                <span className="faq-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
              <div className="faq-answer">
                <p>
                  You can book a trip directly on our website by selecting your destination and choosing a travel package that suits you. For more personalized help, contact our team.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you offer customized travel packages?</h3>
                <span className="faq-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
              <div className="faq-answer">
                <p>
                  Yes, we offer tailor-made travel packages that cater to your specific interests and preferences. Contact us for more details!
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="faq-item">
              <div className="faq-question">
                <h3>What is the cancellation policy?</h3>
                <span className="faq-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
              <div className="faq-answer">
                <p>
                  Our cancellation policy varies by destination and package. You can find the detailed cancellation terms in the booking confirmation email or contact us for more information.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can I change my booking after it’s confirmed?</h3>
                <span className="faq-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
              <div className="faq-answer">
                <p>
                  Yes, we allow changes to bookings depending on availability. Please get in touch with our support team as soon as possible to make the necessary changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactFaq;
