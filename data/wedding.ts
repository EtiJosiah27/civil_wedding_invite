type ReplaceableImage = { src: string | null; alt: string; caption?: string };

export type WeddingConfig = {
  coupleNames: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  additionalInformation: string;
  rsvpDeadline: string;
  personalMessage: string;
  visuals: {
    pleadingImage: ReplaceableImage;
    evidencePhotos: ReplaceableImage[];
  };
};

export const wedding: WeddingConfig = {
  coupleNames: 'Etieno & Ugo',
  date: 'September 25, 2026',
  time: '11:45 AM',
  venue: '271 Sandwich St South',
  address: '271 Sandwich St South',
  dressCode: 'Formal Attire Only',
  additionalInformation: 'After the civil wedding, we’ll be hanging out at Mandarin at Devonshire Mall in Windsor at 1:30 PM.',
  rsvpDeadline: '[RSVP deadline placeholder]',
  personalMessage: '[A warm personal invitation message will go here.]',
  visuals: {
    pleadingImage: { src: '/pleading-cat.jpg', alt: 'A fluffy brown kitten looking up with enormous soulful eyes and its tiny paws clasped together as if begging' },
    evidencePhotos: [
      { src: '/evidence-04.jpg', alt: 'Etieno and Ugo smiling into each other’s eyes', caption: 'Clearly in love.' },
      { src: '/evidence-01.jpg', alt: 'Etieno and Ugo laughing together during a romantic picnic', caption: 'Occasionally photogenic.' },
      { src: '/evidence-03.jpg', alt: 'Etieno and Ugo sharing a joyful moment at their picnic', caption: 'Still cute.' },
      { src: '/evidence-02.jpg', alt: 'A close-up of Etieno’s engagement ring as she embraces Ugo', caption: 'Case closed.' },
    ],
  },
};
