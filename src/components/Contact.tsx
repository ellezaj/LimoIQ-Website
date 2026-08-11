export default function Contact() {
  return (
    <section id="contact" className="bg-paper py-20 text-ink md:py-28">
      <div className="container-content grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow mb-4">Contact Us</p>
          <h2 className="text-3xl leading-tight md:text-4xl">
            We&apos;re here to help.
          </h2>
          <p className="mt-5 max-w-md text-graphite">
            We&apos;d love to hear from you — whether it&apos;s feedback on a past ride or a special request for an upcoming trip.
          </p>
        </div>

        <form className="rounded-2xl border border-graphite/15 bg-cream p-8 shadow-sm">
          <h3 className="font-display text-xl text-ink">Please fill up the form below</h3>
          <p className="mt-2 text-sm text-graphite">
            Tell us what you think.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-graphite">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-graphite/20 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-graphite/50 focus:border-brass focus:outline-none"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-graphite">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-graphite/20 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-graphite/50 focus:border-brass focus:outline-none"
                placeholder="jane@yourfleet.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-graphite">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded-lg border border-graphite/20 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-graphite/50 focus:border-brass focus:outline-none"
                placeholder="Tell us what you think."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-ink py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/90"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
