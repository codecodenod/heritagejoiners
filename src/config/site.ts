/**
 * Site configuration
 * Site-wide business details.
 * Empty strings are intentionally used for details still awaiting confirmation.
 */

export const siteConfig = {
  // Domain
  domain: 'heritagejoiners.com',
  url: 'https://heritagejoiners.com',

  // Business contact
  phone: {
    display: '',
    tel: '',
  },
  whatsapp: {
    display: '',
    link: '',
  },
  email: '',

  // Address
  address: {
    street: '',
    city: 'Pontefract',
    postcode: '',
    full: '',
  },

  // NAP (Name, Address, Phone) for schema
  name: 'Heritage Joiners',
  telephone: '',
  // Note: email is above under business contact

  // Full address for schema
  addressFull: '',

  // Service area
  serviceArea: ['Yorkshire'],

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
