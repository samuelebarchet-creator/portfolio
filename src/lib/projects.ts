export type Project = {
  slug: string;
  year: string;
  company: string;
  role: string;
  description: string;
  tag: string;
  fullDescription: string;
  deliverables: string[];
  color: string; // accent color for the project page
};

export const projects: Project[] = [
  {
    slug: 'maison-noir',
    year: '2023',
    company: 'Maison Noir',
    role: 'Creative Director',
    description:
      'End-to-end brand identity for an haute couture label — visual language, campaign art direction and digital flagship.',
    tag: 'Fashion',
    fullDescription:
      'Maison Noir approached me to build their entire visual universe from scratch. The challenge was to create a brand language that felt both timeless and brutally contemporary — referencing haute couture tradition while refusing to be confined by it. The result is a system built on tension: stark white space against deep black, delicate serif logotype against industrial grid structures.',
    deliverables: [
      'Brand identity system',
      'Visual language & guidelines',
      'Campaign art direction',
      'Digital flagship website',
      'Packaging design',
      'Editorial photography direction',
    ],
    color: '#C8A96E',
  },
  {
    slug: 'arkane-studio',
    year: '2022',
    company: 'Arkane Studio',
    role: 'Interactive Lead',
    description:
      'Immersive web experience and 3D product configurator for a limited-edition sneaker drop that sold out in 4 minutes.',
    tag: 'Tech · Retail',
    fullDescription:
      'Arkane Studio commissioned a drop experience that had to match the intensity of their product. We built a real-time 3D configurator in WebGL — customers could rotate, recolor, and customize their pair before purchase. The experience launched at midnight to a waitlist of 40,000 people and sold out in under four minutes.',
    deliverables: [
      'WebGL 3D product configurator',
      'Interactive drop page',
      'Mobile-first experience',
      'Animation system',
      'Performance optimization',
      'Analytics integration',
    ],
    color: '#7A1515',
  },
  {
    slug: 'soleil-agency',
    year: '2022',
    company: 'Soleil Agency',
    role: 'Brand Strategist',
    description:
      'Full rebrand of a Paris-based creative agency: identity system, motion guidelines and international launch campaign.',
    tag: 'Branding',
    fullDescription:
      'Soleil had grown from a boutique studio into a 60-person agency with international clients, but their brand still looked like a scrappy startup. The rebrand needed to communicate scale and sophistication without losing the warmth that made them successful. We developed a flexible identity system built around a proprietary typeface and a motion language that translates across every touchpoint.',
    deliverables: [
      'Brand strategy',
      'Identity system & proprietary type',
      'Motion guidelines',
      'International launch campaign',
      'Office environmental design',
      'Brand book (180 pages)',
    ],
    color: '#8C7140',
  },
  {
    slug: 'volta-records',
    year: '2021',
    company: 'Volta Records',
    role: 'Art Director',
    description:
      'Visual ecosystem for an independent electronic label — artwork, merchandise, live visuals and streaming platforms.',
    tag: 'Music · Culture',
    fullDescription:
      'Volta Records releases music that exists at the edge of genre — hypnotic, architectural, hard to categorize. The visual identity needed to match that ambiguity. We built a system that generates unique visual artifacts for each release using generative code, ensuring that every album cover, merch piece, and stage visual feels related but never identical.',
    deliverables: [
      'Label identity system',
      'Generative artwork engine',
      'Merchandise collection',
      'Live visual toolkit',
      'Streaming platform assets',
      'Artist visual guidelines',
    ],
    color: '#4A1A6E',
  },
  {
    slug: 'meridian',
    year: '2020',
    company: 'Meridian',
    role: 'UI/UX Designer',
    description:
      'Design system and product interface for a fintech platform serving 200k+ users across Europe and Southeast Asia.',
    tag: 'Fintech',
    fullDescription:
      'Meridian needed a design system that could scale across two continents, multiple languages, and a product team of 40 engineers. The challenge was building something comprehensive enough to enforce consistency while remaining flexible enough for features that hadn\'t been imagined yet. The resulting system — 600+ components, 12 semantic color tokens, 3 typographic scales — reduced design-to-dev handoff time by 60%.',
    deliverables: [
      'Design system (600+ components)',
      'Product interface redesign',
      'Mobile app (iOS & Android)',
      'Design tokens & documentation',
      'Accessibility audit & fixes',
      'Developer handoff system',
    ],
    color: '#1A3A6E',
  },
  {
    slug: 'foret-collective',
    year: '2019',
    company: 'Forêt Collective',
    role: 'Digital Designer',
    description:
      'Editorial website and brand campaign for a sustainable fashion collective featured in Vogue and Wallpaper*.',
    tag: 'Fashion · Editorial',
    fullDescription:
      'Forêt Collective makes clothes from reclaimed materials and sells them at prices that don\'t exploit the makers. When Vogue reached out for a feature, they needed a digital presence that could hold its own next to the biggest names in fashion. We built an editorial site that felt like a magazine — rich, slow, intentional — and a campaign that let the garments and the people who made them speak for themselves.',
    deliverables: [
      'Editorial website',
      'Brand campaign (digital & print)',
      'Photography art direction',
      'Social media visual system',
      'Press kit & lookbook',
      'E-commerce integration',
    ],
    color: '#2A4A1A',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
