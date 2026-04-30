/**
 * Site configuration
 * TODO: Fill in missing values before launch
 */

export const siteConfig = {
  // Domain
  domain: 'heritagejoiners.com',
  url: 'https://heritagejoiners.com',

  // Business contact - TODO: fill in
  phone: {
    display: 'TODO', // e.g. '0117 205 0129'
    tel: 'TODO', // e.g. '+441172050129'
  },
  whatsapp: {
    display: 'TODO', // e.g. '+447700900000'
    link: 'TODO', // e.g. '+447700900000'
  },
  email: 'TODO',

  // Address - TODO: fill in
  address: {
    street: 'TODO',
    city: 'TODO',
    postcode: 'TODO',
    full: 'TODO', // e.g. '123 High Street, Pontefract WF8 1AA'
  },

  // NAP (Name, Address, Phone) for schema
  name: 'Heritage Joiners',
  telephone: 'TODO', // use phone.tel
  // Note: email is above under business contact

  // Full address for schema
  addressFull: 'TODO', // use address.full

  // Service area
  serviceArea: ['Yorkshire'],

  // Social
  social: {
    // TODO: fill in
    linkedin: 'TODO',
    instagram: 'TODO',
  },

  // Analytics
  plausible: {
    domain: 'TODO', // e.g. 'heritagejoiners.com'
  },

  // Business hours - TODO: fill in
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
    // TODO: fill in
    registrationNumber: 'TODO',
    vatNumber: 'TODO',
  },
} as const;

export type SiteConfig = typeof siteConfig;