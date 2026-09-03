export interface Review {
  id: string;
  name: string;
  rating: number;
  packageOrService: string;
  text: string;
  date: string;
  source: 'Google' | 'Fresha' | 'Facebook';
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Dawn M.",
    rating: 5,
    packageOrService: "Classic Spa Package & Hot Tub",
    text: "From start to finish, our private spa day at The Beauty Barn was sensational. Having the entire lodge and hot tub to ourselves with zero strangers made it so intimate and peaceful. The afternoon tea was delicious and the massage was one of the best I've ever had in Leicester!",
    date: "August 2026",
    source: "Google"
  },
  {
    id: "rev-2",
    name: "Sophie T.",
    rating: 5,
    packageOrService: "Full Body Swedish Massage",
    text: "Mel and Zofia have created an absolute sanctuary in Scraptoft. The atmosphere is calm and luxurious. I booked a 60-minute massage and felt all the stress of the week completely dissolve. Booking via Fresha was so smooth too!",
    date: "July 2026",
    source: "Fresha"
  },
  {
    id: "rev-3",
    name: "Charlotte & James",
    rating: 5,
    packageOrService: "Couples Pamper Retreat",
    text: "Booked this for my partner's birthday. The private hot tub in the countryside setting is stunning, and the therapists were so professional. We will definitely be making this our regular wellness getaway.",
    date: "June 2026",
    source: "Google"
  },
  {
    id: "rev-4",
    name: "Hannah K.",
    rating: 5,
    packageOrService: "Superluxe Neal's Yard Facial",
    text: "My skin is literally glowing! The combination of Neal's Yard organic products and the relaxing scalp & neck massage was pure heaven. 10/10 recommendation.",
    date: "May 2026",
    source: "Fresha"
  },
  {
    id: "rev-5",
    name: "Emily R.",
    rating: 5,
    packageOrService: "Deluxe Experience (Group of 4)",
    text: "We celebrated a bridal shower here and it couldn't have been more perfect. Unlimited prosecco, relaxing in the hot tub, and 90 minutes of bliss each. Truly Leicester's best hidden gem.",
    date: "April 2026",
    source: "Google"
  }
];
