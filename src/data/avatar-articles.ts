/**
 * @fileOverview Provides data for articles related to Vishnu avatars.
 */

export interface AvatarArticle {
  /**
   * Title of the article or story.
   */
  title: string;
  /**
   * A brief summary of the article or story.
   */
  summary: string;
  /**
   * Optional: A slug for linking if a dedicated article page exists.
   */
  slug?: string;
}

interface AvatarArticlesData {
  [avatarName: string]: AvatarArticle[];
}

// Placeholder article data - replace with actual content
const articlesData: AvatarArticlesData = {
  matsya: [
    {
      title: 'The Great Flood and Manu',
      summary: 'Learn how Matsya Avatar guided Manu, the progenitor of humanity, saving life and the sacred Vedas from the cosmic deluge.',
      slug: 'matsya-great-flood',
    },
    {
      title: 'Symbolism of the Fish',
      summary: 'Explore the deeper meanings behind Vishnu taking the form of a fish in His first major incarnation.',
      slug: 'matsya-symbolism',
    },
  ],
  kurma: [
    {
      title: 'The Churning of the Ocean (Samudra Manthan)',
      summary: 'Discover the pivotal role of Kurma Avatar in supporting Mount Mandara during the churning of the cosmic ocean to obtain Amrita.',
      slug: 'kurma-samudra-manthan',
    },
    {
      title: 'Foundation and Stability',
      summary: 'Understand the symbolism of the tortoise form representing stability and support in the cosmic order.',
      slug: 'kurma-symbolism',
    },
  ],
  varaha: [
    {
      title: 'Rescuing Goddess Bhudevi',
      summary: 'Read the story of how Varaha Avatar defeated the demon Hiranyaksha and lifted the Earth Goddess Bhudevi from the depths of the cosmic ocean.',
      slug: 'varaha-rescue-bhudevi',
    },
    {
      title: 'The Boar Incarnation: Strength and Upliftment',
      summary: 'Explore the symbolism of the boar form, representing strength, determination, and the rescuing of dharma.',
      slug: 'varaha-symbolism',
    },
  ],
  narasimha: [
    {
      title: 'Slaying of Hiranyakashipu',
      summary: 'The thrilling tale of how Narasimha, the man-lion avatar, emerged to protect his devotee Prahlada and vanquish the invincible demon Hiranyakashipu.',
      slug: 'narasimha-slaying-hiranyakashipu',
    },
    {
      title: 'Protection Beyond Limits',
      summary: 'Explore the significance of Narasimha\'s unique form and how it bypassed Hiranyakashipu\'s boon, symbolizing divine protection that transcends limitations.',
      slug: 'narasimha-protection',
    },
    {
      title: 'Prahlada\'s Unwavering Devotion',
      summary: 'Learn about the deep devotion of Prahlada, whose faith invoked the appearance of Lord Narasimha.',
      slug: 'narasimha-prahlada-devotion',
    },
  ],
  vamana: [
    {
      title: 'The Three Steps',
      summary: 'Discover how Vamana Avatar, in the guise of a dwarf Brahmin, cleverly subdued King Mahabali and reclaimed the three worlds in just three steps.',
      slug: 'vamana-three-steps',
    },
    {
      title: 'Humility and Cosmic Expansion',
      summary: 'Explore the symbolism of Vamana\'s story, representing divine power hidden in humility and the cosmic nature of Vishnu.',
      slug: 'vamana-symbolism',
    },
  ],
  parashurama: [
    {
      title: 'The Warrior Sage',
      summary: 'Learn about Parashurama, the axe-wielding avatar who restored dharma by challenging the arrogant Kshatriya warrior class.',
      slug: 'parashurama-warrior-sage',
    },
    {
      title: 'Encounter with Rama',
      summary: 'Read about the significant encounter between Parashurama and Lord Rama after the latter broke Shiva\'s bow.',
      slug: 'parashurama-rama-encounter',
    },
  ],
  rama: [
    {
      title: 'The Ramayana Epic',
      summary: 'An overview of Lord Rama\'s life, his exile, the abduction of Sita, the battle against Ravana, and the establishment of Ram Rajya.',
      slug: 'rama-ramayana-overview',
    },
    {
      title: 'The Ideal King and Embodiment of Dharma',
      summary: 'Explore the qualities of Lord Rama that make him Maryada Purushottam, the ideal man and upholder of righteousness.',
      slug: 'rama-dharma-king',
    },
    {
      title: 'Hanuman\'s Devotion',
      summary: 'Discover the unwavering devotion and service of Hanuman to Lord Rama throughout the epic Ramayana.',
      slug: 'rama-hanuman-devotion',
    },
  ],
  krishna: [
    {
      title: 'Childhood Leelas in Vrindavan',
      summary: 'Explore the enchanting pastimes of young Krishna, including stealing butter, playing the flute, and dancing with the Gopis.',
      slug: 'krishna-vrindavan-leelas',
    },
    {
      title: 'The Bhagavad Gita Discourse',
      summary: 'Delve into the profound wisdom shared by Lord Krishna with Arjuna on the battlefield of Kurukshetra.',
      slug: 'krishna-bhagavad-gita',
    },
    {
      title: 'Lifting Govardhan Hill',
      summary: 'The story of how Krishna protected the residents of Vrindavan from Indra\'s wrath by lifting Govardhan Hill.',
      slug: 'krishna-govardhan-hill',
    },
    {
      title: 'Slaying of Kamsa',
      summary: 'Learn how Krishna fulfilled the prophecy by defeating the tyrannical king Kamsa in Mathura.',
      slug: 'krishna-slaying-kamsa',
    }
  ],
  buddha: [
    {
      title: 'The Path to Enlightenment',
      summary: 'An overview of Siddhartha Gautama\'s journey to becoming the Buddha and his core teachings.',
      slug: 'buddha-enlightenment',
    },
    {
      title: 'Vishnu\'s Incarnation as Buddha: Interpretations',
      summary: 'Explore the Puranic perspective on Buddha as an avatar of Vishnu, often seen as appearing to guide or mislead beings based on context.',
      slug: 'buddha-puranic-view',
    },
  ],
  kalki: [
    {
      title: 'The Prophesied Final Avatar',
      summary: 'Learn about Kalki, the avatar yet to come, who is prophesied to appear at the end of Kali Yuga to restore dharma.',
      slug: 'kalki-prophecy',
    },
    {
      title: 'Ushering in Satya Yuga',
      summary: 'Understand Kalki\'s role in vanquishing evil and initiating a new golden age of truth and righteousness.',
      slug: 'kalki-satya-yuga',
    },
  ],
  // Add entries for other avatars like Kumaras, Narada, Nara-Narayana, Kapila, etc.
  kumaras: [
    {
      title: 'The Four Mind-Born Sons',
      summary: 'Learn about Sanaka, Sanandana, Sanatana, and Sanatkumara, the eternally youthful sages born from Brahma\'s mind.',
      slug: 'kumaras-mind-born',
    },
    {
       title: 'Guardians of Vaikuntha Incident',
       summary: 'Read the story of how the Kumaras cursed Jaya and Vijaya, the gatekeepers of Vaikuntha, leading to their subsequent births as demons.',
       slug: 'kumaras-vaikuntha-curse',
    },
  ],
  narada: [
    {
      title: 'The Celestial Messenger',
      summary: 'Explore the role of Narada Muni as a divine messenger, musician, and storyteller traveling across the three worlds.',
      slug: 'narada-messenger',
    },
    {
       title: 'Propagator of Bhakti',
       summary: 'Understand Narada\'s significance in promoting Bhakti Yoga (the path of devotion) through his teachings and hymns.',
       slug: 'narada-bhakti-yoga',
    },
  ],
  'nara-narayana': [
      {
          title: 'The Twin Sages of Badrinath',
          summary: 'Discover the story of Nara and Narayana, the twin incarnations performing intense austerities for world welfare.',
          slug: 'nara-narayana-badrinath'
      },
      {
          title: 'Indra\'s Test',
          summary: 'Learn how Indra attempted to disrupt their meditation with celestial nymphs and how the sages responded.',
          slug: 'nara-narayana-indra-test'
      }
  ],
  kapila: [
      {
          title: 'Founder of Samkhya Philosophy',
          summary: 'Explore the teachings of Sage Kapila, who expounded the Samkhya system explaining Purusha and Prakriti.',
          slug: 'kapila-samkhya'
      },
      {
          title: 'Teaching Devahuti',
          summary: 'Read about Kapila imparting spiritual wisdom to his mother, Devahuti, as detailed in the Srimad Bhagavatam.',
          slug: 'kapila-devahuti'
      }
  ],
   dattatreya: [
    {
      title: 'Embodiment of the Trimurti',
      summary: 'Learn about Dattatreya, the unique avatar embodying Brahma, Vishnu, and Shiva, and his role as the Adi-Guru.',
      slug: 'dattatreya-trimurti',
    },
    {
      title: 'Lessons from Nature (24 Gurus)',
      summary: 'Explore the famous teaching where Dattatreya learned wisdom from 24 different gurus found in nature and society.',
      slug: 'dattatreya-24-gurus',
    },
  ],
  yajna: [
    {
      title: 'Vishnu as Sacrifice',
      summary: 'Understand the concept of Yajna (sacrifice) as an incarnation of Vishnu, maintaining cosmic balance through rituals.',
      slug: 'yajna-sacrifice-incarnate',
    },
  ],
  rishabha: [
    {
      title: 'The Ascetic King',
      summary: 'Discover Rishabhadeva, revered in both Hinduism and Jainism, who taught the path of detachment and self-control.',
      slug: 'rishabha-ascetic-king',
    },
  ],
  prithu: [
    {
      title: 'The First Sovereign King',
      summary: 'Learn how King Prithu leveled the earth, introduced agriculture, and established righteous governance.',
      slug: 'prithu-first-king',
    },
  ],
  dhanvantari: [
    {
      title: 'The Divine Physician',
      summary: 'Explore the emergence of Dhanvantari from the Samudra Manthan, bearing the pot of Amrita and bestowing Ayurveda.',
      slug: 'dhanvantari-divine-physician',
    },
  ],
  mohini: [
    {
      title: 'The Enchanting Female Form',
      summary: 'Read about Mohini, Vishnu\'s captivating female avatar, who tricked the Asuras during the distribution of Amrita.',
      slug: 'mohini-enchantress',
    },
    {
      title: 'The Bhasmasura Incident',
      summary: 'Learn how Mohini cleverly led the demon Bhasmasura to his own destruction.',
      slug: 'mohini-bhasmasura',
    },
  ],
  vyasa: [
    {
      title: 'Compiler of the Vedas',
      summary: 'Understand the monumental task undertaken by Veda Vyasa in organizing the Vedic scriptures.',
      slug: 'vyasa-veda-compiler',
    },
    {
      title: 'Author of Epics and Puranas',
      summary: 'Explore Vyasa\'s role as the author of the Mahabharata, including the Bhagavad Gita, and the major Puranas.',
      slug: 'vyasa-epic-author',
    },
  ],
   balarama: [
    {
      title: 'Krishna\'s Elder Brother',
      summary: 'Learn about Balarama, the incarnation of Shesha Naga, known for his immense strength and association with agriculture.',
      slug: 'balarama-elder-brother',
    },
    {
      title: 'Wielder of the Plow',
      summary: 'Explore the symbolism of Balarama\'s weapon, the plow (Hala), representing fertility and power.',
      slug: 'balarama-plow',
    },
  ],
  hayagriva: [
    {
      title: 'The Horse-Headed Avatar',
      summary: 'Discover Hayagriva, the incarnation revered as the god of knowledge and wisdom, who rescued the Vedas.',
      slug: 'hayagriva-knowledge-god',
    },
  ],
  'gajendra-varada': [
    {
      title: 'Liberation of the Elephant King',
      summary: 'Read the moving story of Gajendra Moksha, where Vishnu appeared instantly to save his devotee Gajendra from a crocodile.',
      slug: 'gajendra-moksha-story',
    },
  ],
  // Add more articles for each avatar as needed
};

/**
 * Retrieves articles related to a specific avatar.
 *
 * @param avatarName The lowercase name of the avatar (e.g., "narasimha").
 * @returns An array of AvatarArticle objects, or an empty array if none found.
 */
export function getAvatarArticles(avatarName: string): AvatarArticle[] {
  // Normalize name just in case
  const normalizedName = avatarName.toLowerCase();
  return articlesData[normalizedName] || [];
}
