"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "victorvisuals.prod@gmail.com";

export default function QuoteRequest() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();
    const subject = `Victor Visuals quote request — ${service}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Service: ${service}`, "", "Project details:", details].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app will open with the request details. Nothing is sent until you review and send it.");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="quote-form__intro"><p className="contact-label">Project inquiry</p><p>Tell me a little about what you need.</p></div>
      <label><span>Your name</span><input autoComplete="name" name="name" required placeholder="Name" /></label>
      <label><span>Email address</span><input autoComplete="email" name="email" type="email" required placeholder="you@example.com" /></label>
      <label><span>What can I help with?</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option><option>Website design or maintenance</option><option>Photography</option><option>Videography or editing</option><option>Technology consultation or workstation</option><option>Something else</option>
        </select>
      </label>
      <label><span>Project details</span><textarea name="details" required minLength={10} rows={4} placeholder="What are you hoping to create or improve?" /></label>
      <button type="submit" className="button button--gold quote-form__submit">Prepare email </button>
      <p className="quote-form__privacy">This form opens a draft in your email app. Your details are not sent or stored on this website.</p>
      {status ? <p className="quote-form__status" role="status">{status}</p> : null}
    </form>
  );
}
