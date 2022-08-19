import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_an8ue99",
        "template_h9v6ahr",
        form.current,
        "IIIbcnPENl7QcyLnq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">jamilxtra@gmail.com</h5>
            <a href="mailto:jamilxtra@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <FaTwitter className="contact_option-icon" />
            <h4>Twitter</h4>
            <h5 className="text-light">@JamilkhanInfo</h5>
            <a href="https://twitter.com/JamilkhanInfo">Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5 className="text-light">in/jamilkhan-nu</h5>
            <a href="https://www.linkedin.com/in/jamilkhan-nu/">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
