// All copy for the landing page, mirrored from https://limoiq.app.
import {
  Info,
  Plane,
  ArrowUp,
  CalendarDays,
  Smartphone,
  Check,
  Mail,
  User,
  MapPin,
  FileText,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#experience" },
  { label: "Our Products", href: "#customer" },
  { label: "Pricing", href: "#pricing" },
];

export type Feature = { icon: LucideIcon; title: string; description: string };

export const features: Feature[] = [
  {
    icon: Info,
    title: "AI Powered Dispatch",
    description:
      "Intelligent algorithm that optimizes chauffeur assignment based on location, traffic, and vehicle type.",
  },
  {
    icon: Plane,
    title: "Real-time Flight Tracking",
    description:
      "Automatic updates for flight delays and arrivals, ensuring your chauffeurs are always on time.",
  },
  {
    icon: ArrowUp,
    title: "Smart Lead Generation",
    description:
      "AI-driven marketing follow-ups that turn inquiries into confirmed bookings automatically.",
  },
  {
    icon: CalendarDays,
    title: "Availability Management",
    description:
      "Seamlessly manage chauffeur shifts and vehicle availability to prevent overbooking.",
  },
  {
    icon: Smartphone,
    title: "Dedicated Apps",
    description:
      "Premium iOS and Android apps for both Chauffeurs and Passengers with real-time tracking.",
  },
  {
    icon: Check,
    title: "Instant Notifications",
    description:
      "Keep everyone in the loop with automated SMS, Email, and Push notifications.",
  },
  {
    icon: Mail,
    title: "Enterprise Voting Power",
    description:
      "Enterprise clients get a seat at the table to vote on the next features we develop.",
  },
];

export const tourSlides = [
  {
    title: "Customer App",
    description:
      "One-way, round trip, or hourly — customers book online in a few taps, with flight tracking, saved payment methods, and instant confirmation built in.",
    image: "/screenshots/customer-overview.png",
  },
  {
    title: "Driver App",
    description:
      "Trip offers, real-time tracking, digital vehicle inspections, and payouts — everything a chauffeur needs on the road, in one app they'll actually want to use.",
    image: "/screenshots/driver-overview.png",
  },
  {
    title: "Admin Dashboard",
    description:
      "Dispatch, reservations, reporting, and CRM — a back office built around how operators actually work day to day, not retrofitted from generic taxi software.",
    image: "/screenshots/admin-overview.png",
  },
  {
    title: "Dispatch App",
    description:
      "A live dispatch board that matches drivers to trips, flags conflicts before they happen, and lets dispatchers reassign in real time — even across multiple locations.",
    image: "/screenshots/dispatch-overview.png",
  },
  {
    title: "Add-on Modules",
    description:
      "Optional modules you can add to any plan — pick what your business actually needs, skip what it doesn't.",
    image: "/screenshots/addons-overview.png",
  },
];

export type ProductId = "customer" | "driver" | "admin" | "dispatch" | "addons";

export type Product = {
  id: ProductId;
  label: string;
  icon: LucideIcon;
  lead?: string;
  description: string;
  items: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: "customer",
    label: "Customer App",
    icon: User,
    lead: "Booking that doesn't lose the customer.",
    description:
      "One-way, round trip, or hourly — customers book online in a few taps, with flight tracking, saved payment methods, and instant confirmation built in.",
    items: [
      "24/7 online reservation",
      "One-way, round trip & hourly booking",
      "Multi-stop trips",
      "Secure payment gateway & saved cards",
      "Instant confirmations",
      "Automated flight tracking",
      "Automated pricing rules",
      "Saved passenger profiles",
      "Ride history & rebooking",
      "Live trip status tracking",
    ],
    images: [
      "/screenshots/customer-overview.png",
      "/screenshots/customer/dashboard.png",
      "/screenshots/customer/reservation-form.png",
      "/screenshots/customer/show-reservation.png",
      "/screenshots/customer/pricing.png",
    ],
  },
  {
    id: "driver",
    label: "Driver App",
    icon: Smartphone,
    lead: "One app, full visibility.",
    description:
      "Trip offers, real-time tracking, digital vehicle inspections, and payouts — everything a chauffeur needs on the road, in one app they'll actually want to use.",
    items: [
      "Scheduling & availability",
      "Trip offer accept/decline",
      "Real-time tracking",
      "Digital vehicle inspections",
      "Vehicle maintenance management",
      "In-app messaging (dispatch & passenger)",
      "Payouts & earnings dashboard",
      "Driver profile & support",
      "24/7 customer technical support",
    ],
    images: [
      "/screenshots/driver-overview.png",
      "/screenshots/driver/home.png",
      "/screenshots/driver/review-trip.png",
      "/screenshots/driver/vehicle-inspection.png",
    ],
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    icon: CalendarDays,
    description:
      "Dispatch, reservations, reporting, and CRM — a back office built around how operators actually work day to day, not retrofitted from generic taxi software.",
    items: [
      "Comprehensive reservation management",
      "Automated dispatch & management",
      "Trip request queue",
      "Detailed reporting & analytics",
      "CRM & maintenance tracking",
      "Driver & vehicle management",
      "Notification templates",
      "Service area & financial settings",
      "Settlement & payouts",
      "Event packages",
      "Alert rules",
      "Integration settings",
      "Security & user management",
    ],
    images: [
      "/screenshots/admin-overview.png",
      "/screenshots/admin/dashboard.png",
      "/screenshots/admin/all-trips.png",
    ],
  },
  {
    id: "dispatch",
    label: "Dispatch App",
    icon: MapPin,
    description:
      "A live dispatch board that matches drivers to trips, flags conflicts before they happen, and lets dispatchers reassign in real time — even across multiple locations.",
    items: [
      "Live dispatch board",
      "Automated driver-trip matching",
      "Conflict & double-booking alerts",
      "Real-time reassignment",
      "Multi-location dispatch view",
      "Dispatcher performance metrics",
    ],
    images: ["/screenshots/dispatch-overview.png", "/screenshots/admin/dispatch.png"],
  },
  {
    id: "addons",
    label: "Add-on Modules",
    icon: FileText,
    description:
      "Optional modules you can add to any plan — pick what your business actually needs, skip what it doesn't.",
    items: [
      "Corporate & business accounts",
      "Event Packages",
      "Multi-location management",
      "White-label branding",
      "Customization of SMS & email notifications",
    ],
    images: [
      "/screenshots/addons-overview.png",
      "/screenshots/addon/event-packages.png",
      "/screenshots/addon/email-settings.png",
    ],
  },
];

export const aboutParagraphs = [
  "LIMO IQ was founded by limousine operators who recognized how outdated reservation systems were holding the industry back. Traditional taxi-based platforms lacked the precision, professionalism, and flexibility required for luxury transportation. We built LIMO IQ to provide a smarter, more connected solution that helps operators streamline their business and elevate client experiences with intelligent tools designed by industry insiders.",
  "Our platform combines automated lead generation and management with intuitive tools for guests, operators, and chauffeurs. With integrated AI-powered marketing and next-generation automation, LIMO IQ enables limousine companies to attract more clients, manage operations efficiently, and grow their business with confidence. We empower operators with intelligent tools that think ahead, act fast, and deliver a higher standard of service.",
];

export const contactEmail = "reservations@boundlesslimousine.com";

export type LegalSection = { heading: string; body: string };

export const termsSections: LegalSection[] = [
  {
    heading: "1. Service Agreement",
    body: "By booking a reservation with Boundless Limousine, you agree to these terms and conditions. Our service provides luxury ground transportation for personal and business travel needs.",
  },
  {
    heading: "2. Booking & Reservations",
    body: "All reservations are subject to vehicle availability. We recommend booking in advance to ensure availability, especially during peak seasons and holidays. A confirmation will be sent to your email once your reservation is confirmed.",
  },
  {
    heading: "3. Cancellation Policy",
    body: "Cancellations made 24 hours or more before the scheduled pickup time will receive a full refund. Cancellations made less than 24 hours before pickup may be subject to cancellation fees. No-shows will be charged the full fare amount.",
  },
  {
    heading: "4. Payment Terms",
    body: "Payment is required at the time of booking confirmation. We accept major credit cards and approved corporate accounts. Additional charges may apply for wait time exceeding the complimentary period, extra stops, or service changes.",
  },
  {
    heading: "5. Passenger Conduct",
    body: "Passengers are expected to conduct themselves in a respectful manner. Smoking, illegal substances, and excessive intoxication are prohibited. The driver reserves the right to terminate service if passenger behavior poses a safety risk.",
  },
  {
    heading: "6. Liability",
    body: "Boundless Limousine maintains comprehensive insurance coverage. However, we are not responsible for personal items left in vehicles. Passengers are responsible for any damage caused to vehicles during their service.",
  },
  {
    heading: "7. Flight Delays",
    body: "For airport pickups, we monitor flight status and adjust pickup times accordingly. Please provide accurate flight information at the time of booking. Additional wait time charges may apply for extended delays beyond our complimentary waiting period.",
  },
  {
    heading: "8. Contact Information",
    body: "For questions or concerns regarding these terms, please contact our customer service team. We are committed to providing exceptional service and addressing any issues promptly.",
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    body: "We collect information you provide when making a reservation, including your name, phone number, email address, pickup and drop-off locations, and payment information. This information is necessary to fulfill your transportation request.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "Your information is used to process reservations, communicate trip details, provide customer support, and improve our services. We may send you booking confirmations, trip reminders, and service updates via email or SMS.",
  },
  {
    heading: "3. Information Sharing",
    body: "We share necessary trip details with our chauffeurs to complete your service. We do not sell or rent your personal information to third parties. We may share information with payment processors and service providers who assist in our operations.",
  },
  {
    heading: "4. Data Security",
    body: "We implement industry-standard security measures to protect your personal information. Payment information is processed through secure, encrypted channels. However, no method of transmission over the internet is 100% secure.",
  },
  {
    heading: "5. Data Retention",
    body: "We retain your information for as long as necessary to fulfill service obligations and comply with legal requirements. You may request deletion of your personal information by contacting our customer service team.",
  },
  {
    heading: "6. Cookies & Tracking",
    body: "Our website uses cookies to enhance your browsing experience and remember your preferences. You can adjust your browser settings to refuse cookies, though this may limit some functionality of our booking system.",
  },
  {
    heading: "7. Your Rights",
    body: "You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, please contact our customer service team.",
  },
  {
    heading: "8. Updates to This Policy",
    body: "We may update this privacy policy from time to time. Significant changes will be communicated via email or notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    heading: "9. Contact Us",
    body: "If you have questions about this privacy policy or our data practices, please contact our customer service team. We are committed to addressing your privacy concerns promptly.",
  },
];

export const legalLastUpdated = "November 2025";
