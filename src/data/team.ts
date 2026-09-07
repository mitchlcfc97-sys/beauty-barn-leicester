export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
  favouriteTreatment?: string;
  specialties?: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'zofia',
    name: 'Zofia',
    role: 'Co-Founder & Spa Director',
    image: '/images/team/team-zofia.jpg',
    bio: [
      "I've been working in the beauty industry since I was 19 years old and have worked in luxury spas such as Ragdale Hall! During the first lockdown, my sister-in-law Mel and I had an ambitious dream of starting our very own day spa & salon — and here we are today.",
      "Working every day with the best team of girls, doing what I love, and meeting all of our amazing clients really feels like living the dream. When I'm not at the barn, I'm a full-time dog mum to Newton & Loki!"
    ],
    favouriteTreatment: 'The Beauty Barn Bespoke Facial',
    specialties: ['Advanced Facials', 'Bespoke Skincare', 'Spa Direction']
  },
  {
    id: 'mel',
    name: 'Mel',
    role: 'Co-Founder & Spa Director',
    image: '/images/team/team-mel.jpg',
    bio: [
      "I have worked in the beauty industry for over 20 years! Building The Beauty Barn alongside Zofia and watching our sanctuary grow has been an incredible journey that I'm proud of every single day.",
      "Outside of work, I am a mum to two boys. We love football and hold season tickets at Leicester City Football Club, so spending quality family time together is everything to me."
    ],
    favouriteTreatment: 'Restore & Rewind Package',
    specialties: ['Holistic Massage', 'Spa Packages', 'Client Wellbeing']
  },
  {
    id: 'hannah',
    name: 'Hannah',
    role: 'Spa Therapist & Skin Specialist',
    image: '/images/team/team-hannah.jpg',
    bio: [
      "I have been a qualified beauty therapist for over 20 years, specialising in clinical skincare treatments and product research. Skincare is my absolute passion alongside family life with my three boys and travelling the world!",
      "I've had the pleasure of being on the journey with Mel & Zofia since The Beauty Barn opened in 2020. Advanced facials are my absolute specialty."
    ],
    favouriteTreatment: 'Targeted Facial Treatments',
    specialties: ['Advanced Skincare', 'Product Research', 'Facial Therapy']
  },
  {
    id: 'matilda',
    name: 'Matilda',
    role: 'Spa Therapist & Skin Specialist',
    image: '/images/team/team-matilda.jpg',
    bio: [
      "I am a qualified Level 3 Spa & Beauty Therapist with a Level 4 Skin Diploma. My favourite treatments are facials — I love helping you achieve your skin goals and watching your confidence bloom.",
      "Alongside facials, I specialise in deep tissue massages and lash lifts. When I'm not working, I enjoy reading, pilates, and walks with my dog."
    ],
    favouriteTreatment: 'Custom Skin Facials & Lash Lifts',
    specialties: ['Level 4 Skin Therapy', 'Deep Tissue Massage', 'Lash Lifts']
  },
  {
    id: 'isobel',
    name: 'Isobel (Bel)',
    role: 'Spa Therapist',
    image: '/images/team/team-isobel.jpg',
    bio: [
      "I'm a Level 3 qualified therapist who loves all things beauty! I'm passionate about developing bespoke treatments and making every guest feel completely relaxed from the moment they arrive.",
      "I especially enjoy giving glow-enhancing facials and doing nails. Outside of work, I love spending quality time with friends, family, and my cat Luna!"
    ],
    favouriteTreatment: 'Glow Facials & Gel Nails',
    specialties: ['Glow Facials', 'Manicures & Pedicures', 'Relaxation']
  },
  {
    id: 'francessca',
    name: 'Francessca (Fran)',
    role: 'Spa Therapist & Brow Specialist',
    image: '/images/team/team-francessca.jpg',
    bio: [
      "I'm a Level 3 qualified therapist with over 7 years of salon experience. I love all spa treatments, but especially reshaping and bringing brows to life, as well as a timeless, classic French manicure.",
      "Outside of work, I'm a football mum with two daughters who keep me busy and on my toes!"
    ],
    favouriteTreatment: 'Brow Styling & French Manicure',
    specialties: ['Brow Architecture', 'Luxury Nails', 'Massage Therapy']
  }
];
