export interface Review {
  id: string;
  name: string;
  rating: number;
  packageOrService: string;
  text: string;
  date: string;
  source: 'Google' | 'Fresha' | 'Facebook';
}

// Real verified reviews sourced from Fresha (5/5 rating — 3,000+ reviews total)
// Fresha profile: https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/reviews
//
// ⚠️  IMPORTANT: Only add reviews with rating === 5 here.
//     The homepage automatically filters to 5-star only, but keeping this list
//     clean makes it easier to manage and avoids confusion.
export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Lily D.",
    rating: 5,
    packageOrService: "Pregnancy Massage",
    text: "I'm a big fan of sports/deep tissue massage so pregnancy massage has been a tricky one as it's much more relaxing usually. Millie found the perfect balance of firm in the areas that needed it and relaxing elsewhere. My biggest criticism is that it didn't last long enough — could have stayed on that bed all day! Will be back for another before my due date, thank you!",
    date: "September 2026",
    source: "Fresha"
  },
  {
    id: "rev-2",
    name: "Andrea L.",
    rating: 5,
    packageOrService: "Manicure, Pedicure & Massage",
    text: "My friend and I had a wonderful time at the beauty barn today. The staff were so friendly and the services we had — manicure, pedicure and massage — were top drawer. Thank you so much... looking forward to our return.",
    date: "September 2026",
    source: "Fresha"
  },
  {
    id: "rev-3",
    name: "Julie T.",
    rating: 5,
    packageOrService: "Indian Head Massage with Mel",
    text: "I had a wonderful Indian Head Massage with Mel today. It was the first time I had this treatment and I will definitely be returning. I felt so relaxed afterwards and the tension in my neck and shoulders had eased. Mel was lovely and explained the treatment fully beforehand. The atmosphere was very calming. I'd highly recommend to anyone.",
    date: "September 2026",
    source: "Fresha"
  },
  {
    id: "rev-4",
    name: "Aaliyah T.",
    rating: 5,
    packageOrService: "Regular Client",
    text: "I've been coming here for years and it's always the best experience. Greeted with kindness on arrival, you instantly relax as soon as you walk through. Zofie is brilliant at what she does and always manages to relax me. Would always recommend to anyone!",
    date: "September 2026",
    source: "Fresha"
  },
  {
    id: "rev-5",
    name: "Fiona D.",
    rating: 5,
    packageOrService: "Nail Treatment with Fran",
    text: "Fran is so lovely and welcoming. My nails are amazing — thank you so much.",
    date: "September 2026",
    source: "Fresha"
  },
  {
    id: "rev-6",
    name: "Ashif H.",
    rating: 5,
    packageOrService: "Full Body Massage",
    text: "Everything from start to end was perfect — felt completely refreshed after the massage.",
    date: "September 2026",
    source: "Fresha"
  }
];

// Direct link to all 3,000+ verified reviews on Fresha with partner tracking
export const FRESHA_REVIEWS_URL = "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429/reviews?pId=354459";
export const FRESHA_PROFILE_URL = "https://www.fresha.com/a/the-beauty-barn-leicester-leicester-beeby-road-x4x1h429?pId=354459";
