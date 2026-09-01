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
    convincingImage: ReplaceableImage;
    evidencePhotos: ReplaceableImage[];
  };
};

export const wedding: WeddingConfig = {
  coupleNames: 'Etieno & Ugo',
  date: 'September 25, 2026',
  time: '[Time placeholder]',
  venue: '[Venue placeholder]',
  address: '[Address placeholder]',
  dressCode: '[Dress code placeholder]',
  additionalInformation: '[Additional information placeholder]',
  rsvpDeadline: '[RSVP deadline placeholder]',
  personalMessage: '[A warm personal invitation message will go here.]',
  visuals: {
    pleadingImage: { src: '/pleading-cat.jpg', alt: 'A fluffy brown kitten looking up with enormous soulful eyes and its tiny paws clasped together as if begging' },
    convincingImage: { src: '/pointing-woman.jpg', alt: 'An expressive older woman pointing directly at the viewer with a raised eyebrow' },
    evidencePhotos: [
      { src: null, alt: 'The couple clearly in love', caption: 'Clearly in love.' },
      { src: null, alt: 'The couple looking photogenic', caption: 'Occasionally photogenic.' },
      { src: null, alt: 'A cute moment shared by the couple', caption: 'Still cute.' },
      { src: null, alt: 'One final photo of the couple', caption: 'Case closed.' },
    ],
  },
};
