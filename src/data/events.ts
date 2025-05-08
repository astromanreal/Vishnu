
/**
 * Represents a significant event in Hindu mythology related to Vishnu.
 */
export interface VishnuEvent {
  /**
   * The title of the event.
   */
  title: string;
  /**
   * A unique slug for URL generation.
   */
  slug: string;
  /**
   * A brief description or summary of the event.
   */
  description: string;
  /**
   * Keywords associated with the event, for searching or categorization.
   */
  keywords: string[];
  /**
   * Optional: URL to a relevant image (use placeholders for now).
   */
  imageUrl?: string;
  /**
   * Optional: Hint for AI image generation.
   */
  imageHint?: string;
  /**
   * Optional: Link to a more detailed page or section (if available).
   * This might be deprecated in favor of using slugs for internal routing.
   */
  link?: string; // Keep for now, but slug is primary for internal links
}

// Helper function to create slugs
const createSlug = (title: string): string => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

// Placeholder data for significant events with expanded descriptions and slugs
const eventsData: VishnuEvent[] = [
  {
    title: 'Samudra Manthan (Churning of the Ocean)',
    slug: 'samudra-manthan',
    description: 'A monumental event where Devas (gods) and Asuras (demons) churned the cosmic Ocean of Milk (Kshira Sagara) using Mount Mandara as the churning rod and the serpent Vasuki as the rope. Vishnu first appeared as Kurma (tortoise) to support the sinking mountain, ensuring the churning could continue. Later, He manifested as Mohini, an enchanting woman, to trick the Asuras and distribute the çıkan Amrita (nectar of immortality) solely among the Devas, restoring their power.',
    keywords: ['Samudra Manthan', 'Kurma Avatar', 'Mohini Avatar', 'Amrita', 'Churning', 'Ocean', 'Devas', 'Asuras'],
    imageHint: 'churning ocean cosmic turtle vishnu mohini',
    imageUrl: 'https://i.pinimg.com/736x/a6/b8/4a/a6b84a68d058388b91be33e38b458542.jpg',
    link: '/events/samudra-manthan', // Use slug for consistency
  },
  {
    title: 'Gajendra Moksha (Liberation of Gajendra)',
    slug: 'gajendra-moksha',
    description: 'The poignant story of Gajendra, the king of elephants, who was seized by a powerful crocodile (Makara) while bathing. Trapped and facing death, Gajendra offered a lotus flower with his trunk and prayed fervently to Lord Vishnu for salvation. Moved by his devotee\'s surrender, Vishnu appeared instantly, severed the crocodile\'s head with His Sudarshana Chakra, and granted liberation (Moksha) to Gajendra.',
    keywords: ['Gajendra Moksha', 'Vishnu', 'Elephant', 'Crocodile', 'Liberation', 'Prayer', 'Bhakti', 'Salvation'],
    imageHint: 'vishnu saving elephant crocodile lotus',
    imageUrl: 'https://i.pinimg.com/736x/95/02/93/9502930e2e91a32b4189d49322938a35.jpg',
    link: '/events/gajendra-moksha',
  },
  {
    title: 'Hiranyakashipu Vadha (Slaying of Hiranyakashipu)',
    slug: 'hiranyakashipu-vadha',
    description: 'The demon king Hiranyakashipu obtained a powerful boon from Brahma, making him nearly invincible—unkillable by man or beast, day or night, inside or outside, on land or in air, by any weapon. Driven by arrogance, he terrorized the Devas and demanded worship. His own son, Prahlada, remained an unwavering devotee of Vishnu. To protect Prahlada and uphold dharma, Vishnu incarnated as Narasimha (half-man, half-lion) at twilight, emerging from a pillar (neither inside nor outside), placing Hiranyakashipu on his lap (neither land nor air), and killing him with his claws (not a conventional weapon), cleverly bypassing the boon\'s conditions.',
    keywords: ['Narasimha Avatar', 'Hiranyakashipu', 'Prahlada', 'Demon', 'Protection', 'Man-lion', 'Boon', 'Dharma'],
    imageHint: 'narasimha killing demon prahlada twilight pillar',
    imageUrl: 'https://i.pinimg.com/736x/9f/fd/4b/9ffd4b1fd969fcafca9e6e607950d774.jpg',
    link: '/events/hiranyakashipu-vadha',
  },
  {
    title: 'Mahabharata War (Kurukshetra War)',
    slug: 'mahabharata-war',
    description: 'The colossal 18-day war fought on the battlefield of Kurukshetra between the five Pandava brothers and their hundred Kaurava cousins over the throne of Hastinapura. Lord Krishna, Vishnu\'s eighth avatar, chose not to fight directly but served as the charioteer and divine guide to Arjuna, the third Pandava. On the eve of the war, Krishna delivered the profound philosophical discourse known as the Bhagavad Gita, guiding Arjuna on duty (dharma), righteousness, and the path to spiritual realization amidst the conflict.',
    keywords: ['Mahabharata', 'Kurukshetra', 'Krishna', 'Arjuna', 'Pandavas', 'Kauravas', 'Bhagavad Gita', 'War', 'Dharma', 'Charioteer'],
    imageHint: 'krishna arjuna chariot battlefield mahabharata',
    imageUrl: 'https://i.pinimg.com/736x/55/c4/b6/55c4b6dfd061aaaff4c66c47c6152e0c.jpg',
    link: '/events/mahabharata-war',
  },
   {
    title: 'Krishna\'s Leelas in Vrindavan',
    slug: 'krishna-leelas-vrindavan',
    description: 'The enchanting childhood and youthful pastimes (Leelas) of Lord Krishna in the pastoral village of Vrindavan. These include His playful stealing of butter (Makhan Chor), captivating everyone with His flute melodies, the divine Rasa Lila dance with the Gopis under the full moon, subduing demons like Putana (the poisoned nurse) and Kaliya (the serpent polluting Yamuna), and showcasing His divine nature through various miracles, embodying divine love and joy.',
    keywords: ['Krishna', 'Vrindavan', 'Leela', 'Butter', 'Flute', 'Gopis', 'Rasa Lila', 'Demons', 'Kaliya', 'Childhood'],
    imageHint: 'krishna childhood vrindavan flute gopis rasa lila',
    imageUrl: 'https://i.pinimg.com/736x/ac/d8/01/acd801897bd1fa251b1782da02511a08.jpg',
    link: '/events/krishna-leelas-vrindavan',
  },
   {
    title: 'Lifting of Govardhan Hill (Govardhan Puja)',
    slug: 'govardhan-puja',
    description: 'When the residents of Vrindavan, guided by Krishna, stopped their traditional worship of Indra (the god of rain and thunder) in favor of worshipping Govardhan Hill which sustained their livelihood, Indra unleashed torrential rains in fury. To protect the villagers and their cattle, young Krishna effortlessly lifted the massive Govardhan Hill with his little finger, holding it like an umbrella for seven days and nights until Indra\'s pride was humbled.',
    keywords: ['Krishna', 'Govardhan Hill', 'Indra', 'Vrindavan', 'Protection', 'Mountain', 'Govardhan Puja', 'Rain'],
    imageHint: 'krishna lifting govardhan hill vrindavan rain',
    imageUrl: 'https://i.pinimg.com/736x/47/4e/15/474e150e3764664e71cb622e10155697.jpg',
    link: '/events/govardhan-puja',
  },
  {
    title: 'Killing of Kamsa',
    slug: 'killing-of-kamsa',
    description: 'Kamsa, the tyrannical king of Mathura and Krishna\'s maternal uncle, had imprisoned his sister Devaki and her husband Vasudeva due to a prophecy that their eighth son would kill him. Despite Kamsa\'s attempts to kill the child, Krishna survived and grew up in Vrindavan. Later, Krishna and Balarama went to Mathura, overthrew Kamsa in a wrestling match, fulfilling the prophecy and liberating the people from his oppressive rule.',
    keywords: ['Krishna', 'Kamsa', 'Mathura', 'Demon', 'Prophecy', 'Liberation', 'Devaki', 'Vasudeva', 'Tyrant'],
    imageHint: 'krishna killing kamsa mathura wrestling',
    imageUrl: 'https://i.pinimg.com/736x/b7/48/62/b748628c576525d80dec179634347b4c.jpg',
    link: '/events/killing-of-kamsa',
  },
  {
    title: 'Trivikrama (Vamana\'s Three Steps)',
    slug: 'vamana-trivikrama',
    description: 'The Asura king Mahabali, though righteous, grew overly powerful, threatening the Devas. Vishnu incarnated as Vamana, a small Brahmin boy, and approached Bali during a sacrifice, asking for land measurable by three steps. Bali agreed despite warnings. Vamana then expanded into a colossal cosmic form (Trivikrama). With his first step, he covered the Earth; with the second, the heavens. Lacking space for the third, the humbled Bali offered his own head. Pleased, Vishnu placed His foot on Bali, pushing him to the netherworld (Sutala) but granting him immortality and lordship there.',
    keywords: ['Vamana Avatar', 'Trivikrama', 'Mahabali', 'Three Steps', 'Cosmic', 'Dwarf', 'Sacrifice', 'Humility', 'Boon'],
    imageHint: 'vamana three steps cosmic giant bali king',
    imageUrl: 'https://i.pinimg.com/736x/a0/0e/33/a00e3397d4a40aef61c688205e19fe16.jpg',
    link: '/events/vamana-trivikrama',
  },
   {
    title: 'Ramayana Epic (Key Events Summary)',
    slug: 'ramayana-summary',
    description: 'The epic details the life of Lord Rama, Vishnu\'s seventh avatar. Key events include: Rama\'s exile to the forest for 14 years; the abduction of his wife Sita by the demon king Ravana of Lanka; the alliance with Sugriva and Hanuman\'s monkey army; the construction of Rama Setu (bridge) to Lanka; the great battle culminating in Ravana\'s defeat; Sita\'s trial by fire (Agni Pariksha); and Rama\'s eventual return to Ayodhya to establish Ram Rajya, an era of ideal governance and righteousness. This page provides a summary, linking to more detailed event pages where applicable.',
    keywords: ['Rama', 'Ramayana', 'Sita', 'Ravana', 'Hanuman', 'Lanka', 'Exile', 'Epic', 'Battle', 'Ram Rajya', 'Summary'],
    imageHint: 'rama sita hanuman ravana battle bridge lanka overview',
    imageUrl: 'https://i.pinimg.com/736x/3d/a3/50/3da35029e312944b2650e1fa9c2a893e.jpg',
    // No link here, this is a summary itself. Detail pages might exist for specific Ramayana events.
  },
].map(event => ({ ...event, slug: createSlug(event.title), link: `/events/${createSlug(event.title)}` })); // Ensure slugs and links are consistent

/**
 * Asynchronously retrieves all significant events.
 *
 * @returns A promise that resolves to an array of VishnuEvent objects.
 */
export async function getAllEvents(): Promise<VishnuEvent[]> {
  // In a real app, fetch from a DB or API. Here, we return static data.
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return eventsData;
}

/**
 * Asynchronously retrieves a single event by its slug.
 *
 * @param slug The slug of the event to retrieve.
 * @returns A promise that resolves to a VishnuEvent object, or null if not found.
 */
export async function getEventBySlug(slug: string): Promise<VishnuEvent | null> {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50));
  const event = eventsData.find(e => e.slug === slug);
  return event || null;
}
