const social = [
    { label: "Instagram", href: "https://www.instagram.com/boundlesslimousine/?hl=en" },
    { label: "Facebook", href: "https://twitter.com/boundlesslimou1" },
    { label: "Twitter", href: "https://www.facebook.com/Boundlesslimo/" },
];

export default function Footer() {
    return (
        <footer className="border-t border-panelLine/60 bg-panel py-16">
            <div className="container-content">
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="eyebrow mb-4">Have questions?</p>
                        <h2 className="max-w-md text-2xl text-cream md:text-3xl">
                            Reach out, or sign up for updates on our socials.
                        </h2>
                        <div className="mt-6 space-y-1 text-sm text-slate">
                            <p>
                                <a href="mailto:reservations@boundlesslimousine.com" className="hover:text-cream">
                                    reservations@boundlesslimousine.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+19787066226" className="hover:text-cream">
                                    (978) 706-6226
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {social.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm text-slate hover:text-cream"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-3 border-t border-panelLine/60 pt-6 text-xs text-slate md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} LIMO IQ. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="/privacy" className="hover:text-cream">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="hover:text-cream">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// !to add: sitemap