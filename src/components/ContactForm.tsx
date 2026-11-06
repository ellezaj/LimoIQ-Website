"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/lib/content";

const inputClass =
  "w-full rounded-md border border-iq-muted/60 bg-transparent px-3 font-iq text-sm text-white/80 placeholder:text-iq-muted/60 focus:border-iq-gold focus:outline-none";

/**
 * There is no form backend yet
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `LIMO IQ inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-2xl rounded-2xl border border-iq-line bg-iq-card p-6 sm:p-10"
    >
      <h2 className="font-iq-display text-lg font-bold text-iq-text">
        Please fill up the form below
      </h2>
      <p className="mt-1 font-iq text-sm text-iq-muted">Tell us what you think.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block font-iq text-xs text-iq-muted">
            Name
          </label>
          <input id="contact-name" name="name" type="text" required className={`${inputClass} h-10`} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block font-iq text-xs text-iq-muted">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required className={`${inputClass} h-10`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block font-iq text-xs text-iq-muted">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-y py-2.5`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 h-11 w-full rounded-md bg-iq-gold font-iq text-sm font-medium text-iq-deep transition hover:brightness-110"
      >
        Submit
      </button>

      {sent && (
        <p role="status" className="mt-4 text-center font-iq text-sm text-iq-muted">
          Your email app should open with the message ready to send. If it didn&apos;t, write to us
          at{" "}
          <a href={`mailto:${contactEmail}`} className="text-iq-gold underline underline-offset-4">
            {contactEmail}
          </a>
          .
        </p>
      )}
    </form>
  );
}
