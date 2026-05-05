/**
 * Site configuration
 * Site-wide business details.
 * Empty strings are intentionally used for details still awaiting confirmation.
 */

export const siteConfig = {
  // Domain
  domain: 'heritagejoiners.co.uk',
  url: 'https://heritagejoiners.co.uk',

  // Business contact
  phone: {
    display: '07561 196977',
    tel: '+447561196977',
  },
  whatsapp: {
    display: '07561 196977',
    link: 'https://wa.me/447561196977',
  },
  email: 'rob@heritagejoiners.co.uk',

  // Address
  address: {
    street: '',
    locality: 'Ackworth',
    city: 'Pontefract',
    region: 'West Yorkshire',
    postcode: 'WF7 7LH',
    full: 'Ackworth, Pontefract, West Yorkshire',
  },
  geo: {
    latitude: '53.6492',
    longitude: '-1.2806',
  },

  // NAP (Name, Address, Phone) for schema
  name: 'Heritage Joiners',
  telephone: '+447561196977',
  // Note: email is above under business contact

  // Full address for schema
  addressFull: 'Ackworth, Pontefract, West Yorkshire',

  // Service area
  serviceArea: [
    'Pontefract',
    'Wakefield',
    'Castleford',
    'Featherstone',
    'Knottingley',
    'Normanton',
    'Leeds',
    'West Yorkshire',
    'Yorkshire',
  ],

  // Social
  social: {
    linkedin: '',
    instagram: '',
  },

  // Analytics
  plausible: {
    domain: '',
  },

  // Business hours
  hours: {
    monday: '08:00 - 17:00',
    tuesday: '08:00 - 17:00',
    wednesday: '08:00 - 17:00',
    thursday: '08:00 - 17:00',
    friday: '08:00 - 17:00',
    saturday: 'Closed',
    sunday: 'Closed',
  },

  // Company info
  company: {
    registrationNumber: '',
    vatNumber: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
