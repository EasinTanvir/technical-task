export const pricingPlans = [
  {
    id: 1,
    title: "Free",
    subtitle: "Basic",
    buttonText: "Get Started",
    featured: false,
    features: [
      { text: "1 Active Job", active: true },
      { text: "Basic List Placement", active: true },
      { text: "Unlimited Job Applicants", active: false },
      { text: "Invite Anyone to Apply to Your Jobs", active: false },
    ],
  },
  {
    id: 2,
    title: "$79.99",
    subtitle: "Per Month",
    badge: "Premium",
    buttonText: "Get Started",
    featured: true,
    features: [
      { text: "Unlimited Job Posts", active: true },
      { text: "Instant Job Post Approval", active: true },
      { text: "Premium List Placement", active: true },
      { text: "Unlimited Job Applicants", active: true },
    ],
  },
];
