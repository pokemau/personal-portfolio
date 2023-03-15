import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (
      e.target[0].value !== "" &&
      e.target[1].value !== "" &&
      e.target[2].value !== ""
    ) {
      emailjs
        .sendForm(
          "service_muiruwp",
          "template_fveanzm",
          form.current!,
          "K6-y1L9o-Pusfm4v6"
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
    }
  };
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-h">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="name-email-cont">
          <div className="name-cont">
            <p>Name</p>
            <input type="text" name="user_name" />
          </div>

          <div className="email-cont">
            <p>Email</p>
            <input type="email" name="user_email" />
          </div>
        </div>

        <div className="message-cont">
          <p>Message</p>
          <textarea name="message" />
          <input type="submit" value="Send" className="submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
