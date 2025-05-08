
/**
 * Represents data for a Vishnu temple.
 */
export interface Temple {
  /**
   * The name of the temple.
   */
  name: string;
  /**
   * A unique slug for URL generation.
   */
  slug: string;
  /**
   * Location of the temple (can be city, state, country, or more specific).
   */
  location: string;
  /**
   * A brief description or significance of the temple.
   */
  description: string;
  /**
   * Placeholder hint for AI image generation or keywords.
   */
  imageHint: string;
  /**
   * Optional: URL to an image of the temple (using picsum for placeholders).
   */
  imageUrl?: string;
   /**
   * Optional: Coordinates for map integration.
   */
  coordinates?: string;
  /**
   * Optional: Affiliation of the temple.
   */
  affiliation?: string;
  /**
   * Optional: Presiding deity/deities.
   */
  deity?: string;
  /**
   * Optional: Major festivals celebrated.
   */
  festivals?: string[];
  /**
   * Optional: Architectural style and details.
   */
  architecture?: {
    type: string;
    creator?: string;
    completed?: string;
    specifications?: string;
    tower?: string; // For specific vimanam/tower names
    style?: string; // For styles like Khmer, Gupta etc.
    notes?: string; // Additional architectural notes
  };
  /**
   * Optional: Governance or administrative body.
   */
  governance?: string;
  /**
   * Optional: Official website URL.
   */
  website?: string;
  /**
   * Optional: Elevation if relevant.
   */
  elevation?: string;
  /**
   * Optional: UNESCO status if applicable.
   */
  unescoStatus?: string;
  /**
   * Optional: Builder if known.
   */
  builder?: string;
  /**
   * Optional: Year/period built.
   */
  built?: string;
  /**
   * Optional: Key features of the temple.
   */
  keyFeatures?: string[];
  /**
   * Optional: Tags for categorization and search.
   */
  tags?: string[];
  /**
   * Optional: Any other relevant notes.
   */
  notes?: string;
}

// Placeholder data for Vishnu temples
const templesData: Temple[] = [
  {
    name: '108 Divya Desams',
    slug: 'divya-desams',
    location: 'Various, India & Nepal',
    description: 'A group of 108 Vishnu temples mentioned in the works of the Alvars (Tamil poet-saints).',
    imageHint: 'divya desam vishnu temples india map collage',
    imageUrl: `https://i.pinimg.com/736x/9d/c2/56/9dc25657e604b337b9bb72aa1ba481d6.jpg`
  },
  {
    name: '108 Abhimana Kshethram',
    slug: 'abhimana-kshethrams',
    location: 'Various, India',
    description: 'Temples revered by Vaishnavites, similar to Divya Desams but not exclusively mentioned by Alvars.',
    imageHint: 'abhimana kshetram vishnu temples india collage',
    imageUrl: `https://i.pinimg.com/736x/9d/6f/06/9d6f06c35a6056b3bf4df4e58e55a864.jpg`
  },
  {
    name: 'Padmanabhaswamy Temple',
    slug: 'padmanabhaswamy',
    location: 'Thiruvananthapuram, Kerala, India',
    description: 'Famous for its reclining image of Vishnu (Anantha Padmanabha) and immense discovered wealth.',
    imageHint: 'padmanabhaswamy temple kerala vishnu reclining gold',
    imageUrl: `https://i.pinimg.com/736x/53/5f/93/535f93142597a9f343192b5094ae9e5f.jpg`,
    coordinates: '8°28′58″N 76°56′37″E',
    deity: 'Vishnu (Anantha Padmanabha) and Lakshmi',
    affiliation: 'Hinduism',
    governance: 'Travancore royal family (Trust)',
    architecture: {
      type: 'Fusion of Kerala architecture and Tamil architecture (Dravidian)',
    },
    tags: ['Padmanabhaswamy', 'Thiruvananthapuram', 'Kerala', 'Vishnu', 'Reclining Vishnu', 'Richest Temple', 'Travancore', 'Lakshmi']
  },
  {
    name: 'Ranganathaswamy Temple, Srirangam',
    slug: 'srirangam',
    location: 'Srirangam, Tamil Nadu, India',
    description: 'One of the most illustrious Vaishnava temples in South India, dedicated to Ranganatha, a reclining form of Vishnu. It is the first and foremost among the 108 Divya Desams and often considered the largest functioning Hindu temple complex in the world.',
    imageHint: 'ranganathaswamy temple srirangam vishnu reclining gopuram',
    imageUrl: `https://i.pinimg.com/736x/35/30/19/3530198eba30f1cd6d3b93195b20d191.jpg`,
    coordinates: '10°51′45″N 78°41′23″E',
    deity: 'Ranganatha (Vishnu), Ranganayaki (Lakshmi)',
    affiliation: 'Hinduism',
    festivals: ['Vaikuntha Ekadashi (21 days)', 'Jestabishekam', 'Brahmotsavam', 'Uriyadi'],
    architecture: {
      type: 'Dravidian Architecture (Tamil)',
      creator: 'Contributions from Early Cholas, Medieval Cholas, Later Cholas, Pandyas, Hoysalas, Vijayanagara Empire, Nayaks',
      specifications: 'Largest functioning Hindu temple complex (156 acres), 21 Gopurams (towers), including the tallest Rajagopuram in Asia, 7 Prakarams (enclosures)',
      tower: 'Pranavakara Vimanam (over sanctum)'
    },
    governance: 'Hindu Religious and Charitable Endowments Department, Government of Tamil Nadu',
    website: 'https://srirangam.org/',
    notes: 'Divya Desam #1. Often listed as the largest functioning Hindu temple in the world.',
    tags: ['Divya Desam', 'Srirangam', 'Tamil Nadu', 'Ranganatha', 'Vishnu', 'Reclining Vishnu', 'Largest Temple', 'Dravidian Architecture', 'Pancharanga Kshetram', 'Kaveri']
  },
  {
    name: 'Candi Wisnu, Prambanan',
    slug: 'prambanan',
    location: 'Prambanan, Yogyakarta/Central Java, Indonesia',
    description: 'Candi Wisnu is one of the three main temples within the Prambanan Temple Compounds, dedicated to Lord Vishnu. Prambanan is the largest Hindu temple site in Indonesia and one of the biggest in Southeast Asia, built in the 9th century during the Sanjaya Dynasty.',
    imageHint: 'prambanan vishnu temple indonesia candi stone carving',
    imageUrl: `https://picsum.photos/seed/prambanan/400/300`,
    coordinates: '7°45′8″S 110°29′30″E',
    deity: 'Vishnu',
    affiliation: 'Hinduism',
    built: 'c. 850 CE',
    unescoStatus: 'Part of UNESCO World Heritage Site (Prambanan Temple Compounds, Ref no. 642, designated 1991)',
    architecture: {
      type: 'Hindu temple architecture (influenced by Vastu Shastra)',
      style: 'Typical of the period in Central Java',
    },
    tags: ['Prambanan', 'Indonesia', 'Vishnu', 'Trimurti', 'Hindu Temple', 'UNESCO', 'Sanjaya Dynasty', 'Candi Wisnu', 'Java']
  },
  {
    name: 'Venkateswara Temple, Tirumala',
    slug: 'venkateswara-tirumala',
    location: 'Tirumala, Tirupati, Andhra Pradesh, India',
    description: 'One of the most visited and richest temples globally, dedicated to Lord Venkateswara, a form of Vishnu. It is located in the hill town of Tirumala, near Tirupati.',
    imageHint: 'venkateswara temple tirumala tirupati vishnu balaji gopuram',
    imageUrl: `https://i.pinimg.com/736x/d5/9d/20/d59d20fce45bad5a7c999f10bad989fe.jpg`,
    coordinates: '13°40′59.7″N 79°20′49.9″E',
    deity: 'Venkateswara (a form of Vishnu)',
    affiliation: 'Hinduism',
    festivals: ['Srivari Brahmotsavam', 'Vaikunta Ekadashi', 'Ratha Saptami'],
    architecture: {
      type: 'South Indian architecture (Dravidian)',
      creator: 'Various rulers including Veera Narasingadeva Yadavaraya, Krishnadevaraya, Ranganatharaya',
      specifications: 'Numerous shrines and mandapams within the complex'
    },
    governance: 'Tirumala Tirupati Devasthanams (TTD)',
    website: 'https://www.tirumala.org',
    elevation: '853 m (2,799 ft)',
    tags: ['Tirumala', 'Tirupati', 'Andhra Pradesh', 'Venkateswara', 'Balaji', 'Vishnu', 'Pilgrimage', 'Dravidian Architecture', 'Richest Temple']
  },
  {
    name: 'Jagannath Temple, Puri',
    slug: 'jagannath-puri',
    location: 'Puri, Odisha, India',
    description: 'A famous Hindu temple dedicated to Jagannath, a form of Vishnu, located on the eastern coast of India, at Puri in the state of Odisha. The temple is an important pilgrimage destination and one of the Char Dham pilgrimage sites.',
    imageHint: 'jagannath temple puri rath yatra krishna chariot',
    imageUrl: `https://i.pinimg.com/736x/89/89/21/8989214dd5109c10862af8eeaf1644c0.jpg`,
    coordinates: '19°48′17″N 85°49′6″E',
    deity: 'Jagannath (Krishna), Balarama, Subhadra',
    affiliation: 'Hinduism',
    festivals: ['Ratha Yatra', 'Chandan Yatra', 'Snana Yatra', 'Nabakalebara'],
    architecture: {
      type: 'Kalinga Architecture',
      creator: 'Believed to be initiated by King Indradyumna, rebuilt by Anantavarman Chodaganga',
      completed: 'c. 1161 CE (Current structure)',
      specifications: '31 Temples within complex, Main Tower Elevation: ~65.47 m (215 ft)'
    },
    governance: 'Shree Jagannath Temple Office, Puri; Shree Jagannath Temple Managing Committee, Puri',
    website: 'https://www.shreejagannatha.in',
    tags: ['Char Dham', 'Odisha', 'Puri', 'Jagannath', 'Krishna', 'Rath Yatra', 'Pilgrimage', 'Kalinga Architecture']
  },
  {
    name: 'Badrinath Temple',
    slug: 'badrinath',
    location: 'Badrinath, Uttarakhand, India',
    description: 'A Hindu temple dedicated to Vishnu, located in the town of Badrinath in the Chamoli district of Uttarakhand, India. The temple is also one of the 108 Divya Desams dedicated to Vishnu for Vaishnavas.',
    imageHint: 'badrinath temple himalayas vishnu mountain snow',
    imageUrl: `https://i.pinimg.com/736x/35/08/46/3508461f32bf2dcc762af80b2ca1ba6b.jpg`,
    deity: 'Vishnu as Badrinath / Badrinarayan',
    notes: 'Open for six months every year (between the end of April and the beginning of November), because of extreme weather conditions in the Himalayan region. The temple is located in Garhwal hill tracks in Chamoli district along the banks of Alaknanda River. It is one of the most visited pilgrimage centers of India, having recorded 2.8 million (28 lakh) visits in just 2 months in 2022. It is one of the Char Dham pilgrimage sites.\nThe image of the presiding deity worshipped in the temple is a 1 ft (0.30 m), the black granite deity of Vishnu in the form of Badrinarayan. The deity is considered by many Hindus to be one of eight svayam vyakta kshetras, or self-manifested deities of Vishnu.\nThe temple was included in the Uttar Pradesh state government Act No. 30/1948 as Act no. 16,1939, which later came to be known as "Shri Badarinath and Shri Kedarnath Mandir Act". The committee nominated by the state government administers both the temples and has seventeen members on its board.\nThe temple is mentioned in ancient religious texts like Vishnu Purana and Skanda Purana. It is glorified in the Naalayira Divya Prabandham, an early medieval Tamil canon of the Alvar saints from the 6th–9th centuries CE.',
    tags: ['Divya Desam', 'Char Dham', 'Uttarakhand', 'Himalayas', 'Vishnu', 'Pilgrimage']
  },
  {
    name: 'Swaminarayan Temples',
    slug: 'swaminarayan',
    location: 'Various Globally',
    description: 'Temples built by Swaminarayan and his followers, known for their distinct architecture and focus on deity worship, particularly forms of Krishna.',
    imageHint: 'swaminarayan temple akshardham architecture intricate carving',
    imageUrl: `https://i.pinimg.com/736x/85/f7/c8/85f7c8e5628dea70c2e15fc87e575471.jpg`,
    tags: ['Swaminarayan Sampraday', 'Mandir', 'Krishna', 'Nara-Narayana', 'Hindu Architecture', 'Gujarat', 'Global']
  },
  {
    name: 'Angkor Wat',
    slug: 'angkor-wat',
    location: 'Siem Reap, Cambodia',
    description: 'Originally a Hindu temple complex dedicated to Vishnu, built in the early 12th century by King Suryavarman II. It later transformed into a Buddhist temple. It is the largest religious monument in the world and a prime example of Khmer architecture.',
    imageHint: 'angkor wat cambodia vishnu temple ruins sunrise',
    imageUrl: `https://i.pinimg.com/736x/35/f6/4f/35f64f790f59e0ce49e69665ace86614.jpg`,
    coordinates: '13°24′45″N 103°52′0″E',
    affiliation: 'Originally Hinduism (Vishnu), later Buddhism',
    built: 'c. 1113–1150 CE',
    builder: 'King Suryavarman II',
    unescoStatus: 'Part of UNESCO World Heritage Site (Angkor, Ref no. 668, designated 1992)',
    architecture: {
      style: 'Classical Khmer architecture',
      notes: 'Represents Mount Meru, the home of the gods in Hindu mythology. Known for extensive bas-reliefs.'
    },
    tags: ['Angkor Wat', 'Cambodia', 'Khmer Empire', 'Vishnu', 'Hindu Temple', 'Buddhist Temple', 'UNESCO', 'Suryavarman II', 'Khmer Architecture']
  },
  {
    name: 'Laxminarayan Temple (Birla Mandir)', // Consolidated name
    slug: 'birla-mandir',
    location: 'New Delhi, India', // Specific to Delhi Birla Mandir
    description: 'A prominent Hindu temple in Delhi dedicated to Laxminarayan. Inaugurated by Mahatma Gandhi, it was built by the Birla family and is known for allowing entry to all castes.',
    imageHint: 'birla mandir delhi lakshmi narayan marble white',
    imageUrl: `https://i.pinimg.com/736x/5d/59/c8/5d59c804a763a582daced29a9f308c1a.jpg`,
    coordinates: '28°37′58″N 77°11′56″E',
    deity: 'Laxminarayan (Vishnu with Lakshmi)',
    affiliation: 'Hinduism',
    festivals: ['Janmashtami', 'Diwali'],
    architecture: {
      type: 'Nagara style',
      creator: 'Baldeo Das Birla & Jugal Kishore Birla (Built by)',
      architect: 'Sris Chandra Chatterjee',
      completed: '1939',
      specifications: 'Spread over 3 hectares (7.5 acres), Shikhara height ~49m (160 ft), adorned with carvings, frescoes. Includes shrines for Shiva, Ganesha, Hanuman, Buddha.'
    },
    keyFeatures: [
      'Inaugurated by Mahatma Gandhi',
      'Open to all castes',
      'Built by the Birla family (1933-1939)',
      'Features shrines, fountains, garden, Geeta Bhawan',
      'Major attraction during Janmashtami and Diwali',
    ],
    tags: ['Birla Mandir', 'Laxminarayan', 'New Delhi', 'Vishnu', 'Lakshmi', 'Hindu Temple', 'Nagara Architecture', 'Gandhi']
  },
  {
    name: 'Dashavatara Temple, Deogarh',
    slug: 'deogarh',
    location: 'Deogarh, Uttar Pradesh, India',
    description: 'An early 6th-century Gupta era Hindu temple located at Deogarh. It has a simple, one-cell square plan and is one of the earliest Hindu stone temples still surviving today. It showcases ornate Gupta style architecture.',
    imageHint: 'dashavatara temple deogarh gupta vishnu stone carving ancient',
    imageUrl: `https://i.pinimg.com/736x/15/ee/4c/15ee4c152c23f286ca06ac4d4f8963d9.jpg`,
    coordinates: '24°31′35.8″N 78°14′24.4″E',
    deity: 'Vishnu',
    affiliation: 'Hinduism',
    built: 'c. 500 CE',
    architecture: {
      style: 'Nagara style (Gupta Period)',
      notes: 'One of the earliest surviving Panchayatan temples in India.'
    },
    tags: ['Dashavatara Temple', 'Deogarh', 'Uttar Pradesh', 'Gupta Period', 'Vishnu', 'Nagara Architecture', 'Ancient Temple', 'Panchayatan']
  },
  {
    name: 'Pundarikakshan Perumal Temple',
    slug: 'pundarikakshan',
    location: 'Thiruvellarai, Tamil Nadu, India',
    description: 'A Divya Desam temple dedicated to Vishnu as Pundarikakshan (Lotus-Eyed One). Believed to have been built by the Pallava king Dantivarman, it features a unique swastika-shaped temple tank.',
    imageHint: 'pundarikakshan temple thiruvellarai vishnu gopuram swastika tank',
    imageUrl: `https://i.pinimg.com/736x/68/03/cf/6803cf198372b0254a14d2877df76a01.jpg`,
    coordinates: '10°57′21.6″N 78°40′03.7″E',
    deity: 'Pundarikakshan Perumal (Vishnu), Pankajavalli Thayar (Lakshmi)',
    affiliation: 'Hinduism',
    architecture: {
      type: 'Dravidian architecture',
      creator: 'Pallavas (Dantivarman), Cholas (later contributions)',
      tower: 'Vimalaakkruthi Vimanam (over sanctum)',
      features: 'Swastika-shaped temple tank (800 CE)'
    },
    tags: ['Divya Desam', 'Pundarikakshan', 'Thiruvellarai', 'Tamil Nadu', 'Vishnu', 'Lakshmi', 'Pallava', 'Chola', 'Swastika Tank']
  },
  {
    name: 'Kallalagar Temple, Madurai',
    slug: 'kallalagar',
    location: 'Alagar Koyil, Madurai, Tamil Nadu, India',
    description: 'Dedicated to Vishnu as Kallalagar (Azhagar), this Divya Desam is known for the annual Chithirai festival where the deity travels to Madurai.',
    imageHint: 'kallalagar temple madurai vishnu azhagar horse festival',
    imageUrl: `https://i.pinimg.com/736x/90/8f/30/908f306490a3551def989f1eeab5c9a2.jpg`,
    coordinates: '10.074136°N 78.214356°E',
    deity: 'Kallalagar (Sundararaja Perumal) (Vishnu), Kalyana (Sundaravalli Thayar) (Lakshmi)',
    affiliation: 'Hinduism',
    festivals: ['Float festival', 'Chitirai Thiruvila', 'Navaratri', 'Vaikunta Ekadashi'],
    architecture: {
      type: 'Dravidian architecture',
      tower: 'Somachandra Vimanam (over sanctum)'
    },
    website: 'https://alagarkoilkallalagar.hrce.tn.gov.in',
    tags: ['Divya Desam', 'Kallalagar', 'Alagar Koyil', 'Madurai', 'Tamil Nadu', 'Vishnu', 'Azhagar', 'Chithirai Festival', 'Dravidian Architecture']
  },
  {
    name: 'Guruvayur Temple, Thrissur',
    slug: 'guruvayur',
    location: 'Guruvayur, Thrissur district, Kerala, India',
    description: 'A famous and highly revered Hindu temple dedicated to Guruvayurappan (a form of Krishna/Vishnu), located in Kerala. It is one of the most important places of worship for Hindus in Kerala and often referred to as "Bhuloka Vaikunta" (Holy Abode of Vishnu on Earth).',
    imageHint: 'guruvayur temple kerala krishna elephants lamp gopuram',
    imageUrl: `https://i.pinimg.com/736x/50/dd/af/50ddaf19341938d30c8deb4b26ef8564.jpg`,
    coordinates: '10.5945°N 76.0390°E',
    deity: 'Guruvayurappan (Vishnu with four arms) in his form of Krishna',
    affiliation: 'Hinduism',
    festivals: ['Janmashtami', 'Kumbham Utsavam', 'Guruvayur Ekadasi', 'Vishu'],
    architecture: {
      type: 'Kerala Architecture',
      creator: 'As per tradition, Vishwakarma (sculptor), Brihaspati and Vayu (pratishta - installation)',
      completed: 'The temple structure dates back possibly to the 14th century, with earliest records from the 17th century.',
      specifications: 'Features traditional Kerala temple elements, murals, intricate wood carvings.',
    },
    governance: 'Guruvayur Devaswom Board',
    website: 'https://guruvayurtemple.org',
    elevation: '12 m (39 ft)',
    tags: ['Guruvayur', 'Guruvayurappan', 'Krishna', 'Vishnu', 'Kerala', 'Thrissur', 'Pilgrimage', 'Kerala Architecture', 'Bhuloka Vaikunta']
  },
  {
    name: 'Ananthapura Lake Temple, Kasaragod',
    slug: 'ananthapura',
    location: 'Naikap, Kumbla, Kasaragod district, Kerala, India',
    description: 'The only lake temple in Kerala, believed to be the original seat (moolasthanam) of Ananthapadmanabha Swamy of the Padmanabhaswamy Temple in Thiruvananthapuram. It is guarded by a vegetarian crocodile named Babiya (or its successor).',
    imageHint: 'ananthapura lake temple kasaragod kerala vishnu crocodile water',
    imageUrl: `https://i.pinimg.com/736x/e4/83/26/e48326a618aff6ea7b4aec2dce26ba8d.jpg`,
    coordinates: '12.5842449°N 74.979776°E',
    deity: 'Mahavishnu (Ananthapadmanabha)',
    affiliation: 'Hinduism',
    architecture: {
      type: 'Hindu temple architecture (Kerala style)',
    },
    website: 'http://ananthapuratemple.com/',
    keyFeatures: [
      'Only lake temple in Kerala',
      'Original seat (moolasthanam) of Ananthapadmanabha',
      'Guarded by a vegetarian crocodile (Babiya legend)',
    ],
    tags: ['Ananthapura', 'Kasaragod', 'Kerala', 'Vishnu', 'Lake Temple', 'Moolasthanam', 'Ananthapadmanabha', 'Babiya Crocodile']
  },
];

/**
 * Asynchronously retrieves all temple data.
 *
 * @returns A promise that resolves to an array of Temple objects.
 */
export async function getAllTemples(): Promise<Temple[]> {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50));
  return templesData;
}

/**
 * Asynchronously retrieves a single temple by its slug.
 *
 * @param slug The slug of the temple to retrieve.
 * @returns A promise that resolves to a Temple object, or undefined if not found.
 */
export async function getTempleBySlug(slug: string): Promise<Temple | undefined> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return templesData.find(temple => temple.slug === slug);
}
