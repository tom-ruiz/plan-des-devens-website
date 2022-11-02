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
        "service_pq6ylko",
        "template_tbaixoq",
        form.current,
        "fcDh9GJMIo9I7932v"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Le message a bien été envoyé !');
        },
        (error) => {
          console.log(error.text);
          alert('Erreur');
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
      <h2>Consultez nos disponibilités :</h2>
        {/* <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&showDate=1&mode=MONTH&src=cnVpenRvbTI2QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTA5MzgyNDQyNDQ4NTgyNTcwNTdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%2333B679&color=%23A79B8E&color=%230B8043&color=%234285F4"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          title="agenda"
          aria-readonly
        ></iframe> */}
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&showCalendars=0&showTabs=0&showTz=0&showPrint=0&showTitle=0&src=ZWYxYTI3NmE1YzQ5ZmU1OGMzMTYyYzVhMWQ2NTEyZDZjM2ExM2ZlMzc2ZTZmMDBiNzRkNmJhNDgyOTExYmYyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZTY2YTA3YTQ1YTE3YjJmNjhmYWMyMGUxZmIyMzU1NjQ2Njk0OTE1YWFkYzNkNmFkOTU1ZjQ0OWZkMTFjMzhlY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MWU2NjNjNmQ1MTQ0ZTVlY2FjZTY3ZTcwNmI0Yjg4MDM5ZTk3OWJhNTUxMzUxNzRjNTA5ZjdkZTg0NTQ0N2UxOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDQ2MzdhMDE2NjM1ZDE4YjFhODI3OTEyOTViZTNmODc1YzllZWNhMTNkNWVkOTY4NTllMmRlYWZkOTk1YWJmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YTRhNWRkMTU0YzcxNzYyMmQ5Mjk0MjEwZGY5ZTA2N2M2NGM1YTJkNzZmNDE0N2MyOGE4NTA3ZTg1ZGViODBlYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%23EF6C00&color=%23F6BF26&color=%239E69AF&color=%23D81B60&color=%230B8043"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          title="agenda"
          aria-readonly></iframe>
      </div>
    </div>
  );
}

export default Contact;
