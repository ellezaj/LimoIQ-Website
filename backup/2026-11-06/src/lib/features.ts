export type Tier = "Basic" | "Pro" | "Enterprise" | "Add-on";

export type Feature = {
  name: string;
  tier: Tier;
};

export type GalleryItem = {
  label: string;
  src?: string;
};

export type MediaType = "image" | "video";

export type Highlight = {
  title: string;
  description: string;
  mediaType: MediaType;
  media: GalleryItem;
};

export type FeatureGroup = {
  label: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  highlights: Highlight[];
  video: GalleryItem;
  features: Feature[];
};

export const featureGroups: FeatureGroup[] = [
  {
    label: "Customer App",
    slug: "customer-app",
    title: "Booking that doesn't lose the customer.",
    description:
      "One-way, round trip, or hourly — customers book online in a few taps, with flight tracking, saved payment methods, and instant confirmation built in.",
    image: "/screenshots/customer-overview.png",
    video: { label: "Customer App demo", src: "/videos/customer-pages-overview.mkv" },
    highlights: [
      {
        title: "Book in three steps.",
        description:
          "Customers enter trip details, pick a vehicle, and get an instant quote and booking — no phone call required.",
        mediaType: "video",
        media: { label: "Customer App — booking flow", src: "/videos/customer-create-trip.mkv" },
      },
      {
        title: "Track your trip and make updates hassle-free",
        description:
          "Once booked, customers see live trip status from pickup to drop-off, with hassle free options to make changes to the trip.",
        mediaType: "image",
        media: { label: "Customer App — live trip tracking", src: "/screenshots/customer/show-reservation.png" },
      },
      {
        title: "Customer Portal Management",
        description:
          "Customize your portal and keep the details that matter — passengers list, saved addresses, time format and system settings.",
        mediaType: "video",
        media: { label: "Customer App — saved profiles & rebooking", src: "/videos/customer-settings.mp4" },
      },
    ],
    features: [
      { name: "24/7 online reservation", tier: "Basic" },
      { name: "One-way, round trip & hourly booking", tier: "Basic" },
      { name: "Multi-stop trips", tier: "Basic" },
      { name: "Secure payment gateway & saved cards", tier: "Basic" },
      { name: "Instant confirmations", tier: "Basic" },
      { name: "Automated flight tracking", tier: "Pro" },
      { name: "Automated pricing rules", tier: "Pro" },
      { name: "Saved passenger profiles", tier: "Pro" },
      { name: "Ride history & rebooking", tier: "Pro" },
      { name: "Live trip status tracking", tier: "Pro" },
    ],
  },
  {
    label: "Driver App",
    slug: "driver-app",
    title: "One app, full visibility.",
    description:
      "Trip offers, real-time tracking, digital vehicle inspections, and payouts — everything a chauffeur needs on the road, in one app they'll actually want to use.",
    image: "/screenshots/driver-overview.png",
    highlights: [
      {
        title: "Trip offers, one tap away.",
        description:
          "Drivers see new trip offers the moment they're assigned and accept or decline right from the home screen — no calling dispatch to confirm.",
        mediaType: "image",
        media: { label: "Driver App — trip offers", src: "/screenshots/driver/home.png" },
      },
      {
        title: "Inspections without the paperwork.",
        description:
          "Pre- and post-trip vehicle inspections happen right in the app, with photos and notes logged automatically for the back office.",
        mediaType: "image",
        media: { label: "Driver App — digital vehicle inspection", src: "/screenshots/driver/vehicle-inspection.png" },
      },
      {
        title: "Know what you earned, today.",
        description:
          "A running earnings dashboard shows completed trips and payouts, so drivers never have to ask what they're owed.",
        mediaType: "image",
        media: { label: "Driver App — payouts & earnings" },
      },
    ],
    video: { label: "Driver App demo" },
    features: [
      { name: "Scheduling & availability", tier: "Enterprise" },
      { name: "Trip offer accept/decline", tier: "Enterprise" },
      { name: "Real-time tracking", tier: "Enterprise" },
      { name: "Digital vehicle inspections", tier: "Enterprise" },
      { name: "Vehicle maintenance management", tier: "Enterprise" },
      { name: "In-app messaging (dispatch & passenger)", tier: "Enterprise" },
      { name: "Payouts & earnings dashboard", tier: "Enterprise" },
      { name: "Driver profile & support", tier: "Enterprise" },
      { name: "24/7 customer technical support", tier: "Enterprise" },
    ],
  },
  {
    label: "Admin Dashboard",
    slug: "admin-dashboard",
    title: "Run the business, not the spreadsheets.",
    description:
      "Dispatch, reservations, reporting, and CRM — a back office built around how operators actually work day to day, not retrofitted from generic taxi software.",
    image: "/screenshots/admin-overview.png",
    video: { label: "Admin Dashboard demo", src: "/videos/admin-pages-overview.mkv"},
    highlights: [
      {
        title: "Review, approve and assign trips without the chaos.",
        description:
          "See every trip details with automatic quote pricing and easily approve and assign to drivers.",
        mediaType: "video",
        media: { label: "Admin Dashboard — dispatch board", src: "/videos/admin-trip-assignment.mkv" },
      },
      {
        title: "Reports that actually tell you something.",
        description:
          "Revenue, utilization, and driver performance in one view — built for daily decisions, not a quarterly export nobody reads.",
        mediaType: "image",
        media: { label: "Admin Dashboard — reporting & analytics", src: "/screenshots/admin/dashboard.png" },
      },
      {
        title: "Every driver, every vehicle, one screen.",
        description:
          "CRM, maintenance tracking, and fleet management live together, so nothing falls through the cracks between departments.",
        mediaType: "image",
        media: { label: "Admin Dashboard — CRM & fleet management", src: "/screenshots/admin/dispatch.png" },
      },
    ],
    features: [
      { name: "Comprehensive reservation management", tier: "Pro" },
      { name: "Automated dispatch & management", tier: "Pro" },
      { name: "Trip request queue", tier: "Pro" },
      { name: "Detailed reporting & analytics", tier: "Pro" },
      { name: "CRM & maintenance tracking", tier: "Pro" },
      { name: "Driver & vehicle management", tier: "Pro" },
      { name: "Notification templates", tier: "Pro" },
      { name: "Service area & financial settings", tier: "Pro" },
      { name: "Settlement & payouts", tier: "Enterprise" },
      { name: "Event packages", tier: "Enterprise" },
      { name: "Alert rules", tier: "Enterprise" },
      { name: "Integration settings", tier: "Enterprise" },
      { name: "Security & user management", tier: "Enterprise" },
    ],
  },
  {
    label: "Dispatch App",
    slug: "dispatch-app",
    title: "See every vehicle, assign every trip.",
    description:
      "A live dispatch board that matches drivers to trips, flags conflicts before they happen, and lets dispatchers reassign in real time — even across multiple locations.",
    image: "/screenshots/dispatch-overview.png",
    highlights: [
      {
        title: "See every vehicle, live.",
        description:
          "A real-time map shows every driver's status — available, en route, with a passenger, or offline — at a glance.",
        mediaType: "image",
        media: { label: "Dispatch App — live map", src: "/screenshots/admin/dispatch.png" },
      },
      {
        title: "The right driver, matched automatically.",
        description:
          "New trips are matched to an eligible, available driver automatically, with a recommendation dispatchers can accept or override.",
        mediaType: "video",
        media: { label: "Dispatch App — automated matching" },
      },
      {
        title: "Reassign in real time.",
        description:
          "If a driver goes offline or a trip changes, dispatchers can reassign instantly — across locations, not just one lot.",
        mediaType: "video",
        media: { label: "Dispatch App — real-time reassignment" },
      },
    ],
    video: { label: "Dispatch App demo" },
    features: [
      { name: "Live dispatch board", tier: "Pro" },
      { name: "Automated driver-trip matching", tier: "Pro" },
      { name: "Conflict & double-booking alerts", tier: "Pro" },
      { name: "Real-time reassignment", tier: "Enterprise" },
      { name: "Multi-location dispatch view", tier: "Enterprise" },
      { name: "Dispatcher performance metrics", tier: "Enterprise" },
    ],
  },
  {
    label: "Add on Modules",
    slug: "add-on-modules",
    title: "Extend the platform as you grow.",
    description:
      "Optional modules you can add to any plan — pick what your business actually needs, skip what it doesn't.",
    image: "/screenshots/addons-overview.png",
    highlights: [
      {
        title: "Corporate accounts, built in.",
        description:
          "Give repeat business clients their own account — saved billing, ride history, and multiple authorized riders under one company profile.",
        mediaType: "video",
        media: { label: "Add-on — corporate accounts" },
      },
      {
        title: "Extend with the platform with event packages. ",
        description:
          "Be able to create event packages, define included hours and more details you want to display on the customer booking form.",
        mediaType: "image",
        media: { label: "Add-on — integrations", src:"/screenshots/addon/event-packages.png" },
      },
      {
        title: "Customization of SMS & email notifications. ",
        description:
          "Put your own brand on the email notifications and customize it how often and descriptive you want.",
        mediaType: "image",
        media: { label: "Add-on — Customization of SMS & email notifications", src:"/screenshots/addon/email-settings.png" },
      },
    ],
    video: { label: "Add-on Modules demo" },
    features: [
      { name: "Corporate & business accounts", tier: "Add-on" },
      { name: "Event Packages", tier: "Add-on" },
      { name: "Multi-location management", tier: "Add-on" },
      { name: "White-label branding", tier: "Add-on" },
      { name: "Customization of SMS & email notifications", tier: "Add-on" },
    ],
  },
];
