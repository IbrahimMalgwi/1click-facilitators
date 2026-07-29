export const contact = {
  phone: "[Insert phone number]",
  phoneHref: "#contact",
  whatsapp: "#contact",
  email: "[Insert email address]",
  address: "[Insert business address, Lagos]"
};

export const servicePages = {
  "funeral-services": {
    label: "Funeral services & caskets",
    kicker: "Calm help when decisions feel heavy",
    intro: "One experienced point of contact to coordinate the practical details of a dignified farewell.",
    tone: "ink",
    items: ["Funeral planning and family consultation", "Casket selection by category", "Cemetery and burial coordination", "Burial-day logistics", "Photography and videography coordination"],
    steps: ["Tell us what the family needs", "Receive a clear, considered plan", "We coordinate every agreed detail", "Your family remains informed throughout"]
  },
  "vaults-mausoleums": {
    label: "Vaults & mausoleums",
    kicker: "Guidance from purchase to long-term care",
    intro: "Plain-language support for vault sales, cemetery brokerage, mausoleum construction and monthly maintenance.",
    tone: "forest",
    items: ["New vault sourcing and sales", "Cemetery-to-family brokerage", "Mausoleum design and construction", "Site inspection and reporting", "Scheduled cleaning and monthly maintenance"],
    steps: ["Discuss location and requirements", "Verify options with the cemetery", "Review scope and documentation", "Complete purchase or construction", "Arrange ongoing care if required"]
  },
  events: {
    label: "1Click Events",
    kicker: "Celebrations, carefully organised",
    intro: "Practical planning for weddings, birthdays, private celebrations and corporate occasions.",
    tone: "wine",
    items: ["Event consultation", "Planning and production", "Vendor coordination", "Guest and programme logistics", "On-the-day coordination"],
    steps: ["Define the occasion", "Shape the plan and budget", "Coordinate people and suppliers", "Deliver the day with calm oversight"]
  },
  "photography-videography": {
    label: "Foto1Click",
    kicker: "Honest coverage, thoughtfully framed",
    intro: "Photography and film for funerals, weddings, birthdays and events, handled with sensitivity to the occasion.",
    tone: "ink",
    items: ["Funeral photography and film", "Wedding photography and film", "Birthday and event coverage", "Edited image collections", "Highlight and full-length films"],
    steps: ["Share the schedule", "Agree the coverage", "We document discreetly", "Receive a carefully edited story"]
  }
} as const;
