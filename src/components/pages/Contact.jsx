import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../../style/contact.scss";
import AOS from "aos";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8qz8px",
        "template_9rtpdtq",
        form.current,
        "IAAwZlbRx4sN2xvv8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        e.target.reset()
      );
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact__form" data-aos="fade-up">
        <h2>Contactez nous !</h2>
        <input
          type="text"
          name="user_name"
          className="contact__input"
          placeholder="NOM Prenom *"
          required
        />
        <input
          type="email"
          name="user_email"
          className="contact__input"
          placeholder="E-mail *"
          required
        />
        <textarea
          name="message"
          className="contact__input"
          placeholder="Message *"
          required
        />
        <input type="submit" value="Envoyer" className="button-primary" />
      </form>
      <div className="contact__calendar" data-aos="fade-up">
        {/* <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&showDate=1&mode=MONTH&src=cnVpenRvbTI2QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTA5MzgyNDQyNDQ4NTgyNTcwNTdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%2333B679&color=%23A79B8E&color=%230B8043&color=%234285F4"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          title="agenda"
          aria-readonly
        ></iframe> */}
      </div>
    </div>
  );
}

export default Contact;
