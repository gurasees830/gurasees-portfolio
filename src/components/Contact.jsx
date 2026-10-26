import { useState } from "react";
import { profile } from "../data.js";

const emptyForm = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please write a message of at least 10 characters.";
  }
  return errors;
}

function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // There is no server, so the message is sent through the email app of the visitor
    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setValues(emptyForm);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Need someone who ships? Let's talk.</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I am open to full stack and frontend roles. Write to me and I will reply as soon as I can.
            </p>
            <ul>
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button type="button" className="copy" onClick={copyEmail}>
                  {copied ? "Copied" : "Copy"}
                </button>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  guraseessinghbhogal
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  gurasees830
                </a>
              </li>
              <li>
                <span>Location</span>
                {profile.location}
              </li>
            </ul>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p className="error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p className="error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p className="error" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Send message
            </button>

            {sent && (
              <p className="success" role="status">
                Thank you. Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
