export type Tier = "Basic" | "Plus" | "Premium" | "Add-on";

export type Feature = {
  name: string;
  tier: Tier;
};

export type FeatureGroup = {
  label: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: Feature[];
};

export const featureGroups: FeatureGroup[] = [
  {
    label: "Customer App",
    slug: "customer-app",
    title: "Booking that doesn't lose the customer.",
    description:
      "One-way, round trip, or hourly — customers book online in a few taps, with flight tracking, saved payment methods, and instant confirmation built in.",
    image: "/screenshots/customer_overview.png",
    features: [
      { name: "24/7 online reservation", tier: "Basic" },
      { name: "One-way, round trip & hourly booking", tier: "Basic" },
      { name: "Multi-stop trips", tier: "Basic" },
      { name: "Secure payment gateway & saved cards", tier: "Basic" },
      { name: "Instant confirmations", tier: "Basic" },
      { name: "Automated flight tracking", tier: "Plus" },
      { name: "Automated pricing rules", tier: "Plus" },
      { name: "Saved passenger profiles", tier: "Plus" },
      { name: "Ride history & rebooking", tier: "Plus" },
      { name: "Live trip status tracking", tier: "Plus" },
    ],
  },
  {
    label: "Driver App",
    slug: "driver-app",
    title: "One app, full visibility.",
    description:
      "Trip offers, real-time tracking, digital vehicle inspections, and payouts — everything a chauffeur needs on the road, in one app they'll actually want to use.",
    image: "/screenshots/driver_overview.png",
    features: [
      { name: "Scheduling & availability", tier: "Premium" },
      { name: "Trip offer accept/decline", tier: "Premium" },
      { name: "Real-time tracking", tier: "Premium" },
      { name: "Digital vehicle inspections", tier: "Premium" },
      { name: "Vehicle maintenance management", tier: "Premium" },
      { name: "In-app messaging (dispatch & passenger)", tier: "Premium" },
      { name: "Payouts & earnings dashboard", tier: "Premium" },
      { name: "Driver profile & support", tier: "Premium" },
      { name: "24/7 customer technical support", tier: "Premium" },
    ],
  },
  {
    label: "Admin Dashboard",
    slug: "admin-dashboard",
    title: "Run the business, not the spreadsheets.",
    description:
      "Dispatch, reservations, reporting, and CRM — a back office built around how operators actually work day to day, not retrofitted from generic taxi software.",
    image: "/screenshots/admin_overview.png",
    features: [
      { name: "Comprehensive reservation management", tier: "Plus" },
      { name: "Automated dispatch & management", tier: "Plus" },
      { name: "Trip request queue", tier: "Plus" },
      { name: "Detailed reporting & analytics", tier: "Plus" },
      { name: "CRM & maintenance tracking", tier: "Plus" },
      { name: "Driver & vehicle management", tier: "Plus" },
      { name: "Notification templates", tier: "Plus" },
      { name: "Service area & financial settings", tier: "Plus" },
      { name: "Settlement & payouts", tier: "Premium" },
      { name: "Event packages", tier: "Premium" },
      { name: "Alert rules", tier: "Premium" },
      { name: "Integration settings", tier: "Premium" },
      { name: "Security & user management", tier: "Premium" },
    ],
  },
  {
    label: "Dispatch App",
    slug: "dispatch-app",
    title: "See every vehicle, assign every trip.",
    description:
      "A live dispatch board that matches drivers to trips, flags conflicts before they happen, and lets dispatchers reassign in real time — even across multiple locations.",
    image: "/screenshots/dispatch_overview.png",
    features: [
      { name: "Live dispatch board", tier: "Plus" },
      { name: "Automated driver-trip matching", tier: "Plus" },
      { name: "Conflict & double-booking alerts", tier: "Plus" },
      { name: "Real-time reassignment", tier: "Premium" },
      { name: "Multi-location dispatch view", tier: "Premium" },
      { name: "Dispatcher performance metrics", tier: "Premium" },
    ],
  },
  {
    label: "Add on Modules",
    slug: "add-on-modules",
    title: "Extend the platform as you grow.",
    description:
      "Optional modules you can add to any plan — pick what your business actually needs, skip what it doesn't.",
    image: "/screenshots/addons_overview.png",
    features: [
      { name: "Corporate & business accounts", tier: "Add-on" },
      { name: "Event Packages", tier: "Add-on" },
      { name: "Multi-location management", tier: "Add-on" },
      { name: "White-label branding", tier: "Add-on" },
      { name: "Customization of SMS & email notifications", tier: "Add-on" },
    ],
  },
];
