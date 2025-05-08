

/**
 * Represents an Avatar.
 */
export interface Avatar {
  /**
   * The name of the Avatar
   */
  name: string;
  /**
   * The Yuga or context of the avatar.
   */
  yuga: string; // Can be Yuga or context like 'Cosmic/Vedic'
  /**
   * The symbolism of the avatar.
   */
  symbolism: string;
    /**
   * The purpose of the avatar.
   */
  purpose: string;
    /**
   * A description of the avatar.
   */
  description: string;
    /**
   * URL to the image of the avatar
   */
  imageUrl: string;
}

/**
 * Asynchronously retrieves an avatar by its name.
 *
 * @param avatarName The name of the avatar to retrieve.
 * @returns A promise that resolves to an Avatar object.
 */
export async function getAvatar(avatarName: string): Promise<Avatar> {
  // Simulate fetching data based on avatarName
  const allAvatars = await getAllAvatars();
  const avatar = allAvatars.find(a => a.name.toLowerCase() === avatarName.toLowerCase());

  if (!avatar) {
    // In a real app, you might throw an error or return a specific not found state
    // For now, returning a default or throwing an error handled by the page
    throw new Error(`Avatar "${avatarName}" not found`);
  }

  return avatar;
}

/**
 * Asynchronously retrieves all avatars.
 *
 * @returns A promise that resolves to an array of Avatar objects.
 */
export async function getAllAvatars(): Promise<Avatar[]> {
  // Full list of avatars based on Bhagavata Purana and common Dashavatara list.
  // Descriptions updated based on provided text.

  return [
    // The Four Kumaras (Sanat Kumaras)
    {
      name: 'Kumaras',
      yuga: 'Cosmic (Beginning)',
      symbolism: 'Eternal youth, purity, knowledge, renunciation',
      purpose: 'To propagate spiritual knowledge and exemplify the path of devotion',
      description: 'The four sons of Brahma (Sanaka, Sanandana, Sanatana, Sanatkumara) who exemplify the path of devotion.',
      imageUrl: `https://i.pinimg.com/736x/e6/5e/56/e65e566ff4bf0372822cd15244e8121d.jpg`,
    },
    // Varaha (Also a Dashavatara)
    {
      name: 'Varaha',
      yuga: 'Satya Yuga',
      symbolism: 'Rescue, upliftment of the Earth, strength',
      purpose: 'To rescue the Earth (Bhudevi) from the demon Hiranyaksha who dragged her to the cosmic ocean',
      description: 'The boar avatar. He rescues Bhumi, the goddess of the earth, when the asura Hiranyaksha abducts her, restoring her rightful place in the universe.',
      imageUrl: `https://lh3.googleusercontent.com/d/1MflneHlBTDf7VznY6TtCPfBjMrbW2Tds`,
    },
    // Narada
    {
      name: 'Narada',
      yuga: 'Cosmic/Vedic',
      symbolism: 'Divine messenger, music, devotion (bhakti)',
      purpose: 'To travel the worlds spreading devotional news, singing praises of Vishnu, and guiding souls',
      description: 'The divine-sage who travels the worlds as a devotee of Vishnu.',
      imageUrl: `https://i.pinimg.com/736x/01/26/b8/0126b8e1e274ecbed62d9b6971c9d16d.jpg`,
    },
    // Nara-Narayana
    {
      name: 'Nara-Narayana',
      yuga: 'Cosmic/Vedic',
      symbolism: 'Twin sages, austerity, meditation, divine power',
      purpose: 'To perform severe austerities for the welfare of the world and demonstrate the power of meditation',
      description: 'The twin-sages performing penance in Badrinath.',
      imageUrl: `https://i.pinimg.com/736x/09/80/b3/0980b3ececc07c1c0df321fe95d041b2.jpg`,
    },
    // Kapila
    {
      name: 'Kapila',
      yuga: 'Cosmic/Vedic',
      symbolism: 'Sage, founder of Samkhya philosophy, wisdom',
      purpose: 'To teach the philosophical system of Samkhya',
      description: 'A renowned sage, son of Kardama and Devahuti. He is sometimes identified with the founder of the Samkhya school of philosophy.',
      imageUrl: `https://i.pinimg.com/736x/07/88/3f/07883fb8d5511cf80e37b67794670de1.jpg`,
    },
    // Dattatreya
    {
      name: 'Dattatreya',
      yuga: 'Cosmic/Vedic',
      symbolism: 'Combined Trimurti (Brahma, Vishnu, Shiva), Guru principle, Yoga',
      purpose: 'To embody the powers of the Trimurti and teach the path of Yoga and renunciation',
      description: 'The combined avatar of the Hindu trinity of Brahma, Vishnu, and Shiva.',
      imageUrl: `https://i.pinimg.com/736x/3c/e7/2d/3ce72dc3c3be3aab00bcf9cdb50ae912.jpg`,
    },
    // Yajna
    {
      name: 'Yajna',
      yuga: 'Satya Yuga (Swayambhuva Manvantara)',
      symbolism: 'Sacrifice, rituals, divine offering',
      purpose: 'To preside over sacrifices (Yajnas) and maintain cosmic order through ritual',
      description: 'The embodiment of sacrifices performed for the pleasure of the gods.',
      imageUrl: `https://i.pinimg.com/736x/c5/b8/25/c5b825b1acde4e559d2a95ec13aed989.jpg`,
    },
    // Rishabha
    {
      name: 'Rishabha',
      yuga: 'Vedic/Jain Tradition',
      symbolism: 'Asceticism, detachment, self-control',
      purpose: 'To teach the path of asceticism, non-violence, and self-control',
      description: 'The father of emperor Bharata, known for teaching the path of renunciation.',
      imageUrl: `https://i.pinimg.com/736x/a8/e0/d5/a8e0d591b99229312beeb0f97daa2609.jpg`,
    },
    // Prithu
    {
      name: 'Prithu',
      yuga: 'Satya Yuga',
      symbolism: 'Ideal king, agriculture, prosperity, sovereignty',
      purpose: 'To establish righteous rule, level the Earth for agriculture, and ensure prosperity',
      description: 'The sovereign-king who milked the earth as a cow to obtain the world\'s grain and vegetation.',
      imageUrl: `https://i.pinimg.com/736x/5f/8e/03/5f8e03fa1519261eed612642287cbc02.jpg`,
    },
    // Hayagriva
    {
        name: 'Hayagriva',
        yuga: 'Cosmic/Vedic',
        symbolism: 'Knowledge, wisdom, speech, Vedas',
        purpose: 'To restore the Vedas stolen by demons Madhu and Kaitabha',
        description: 'An incarnation of Vishnu with the head of a horse, revered as the god of wisdom and knowledge.',
        imageUrl: `https://i.pinimg.com/736x/8e/32/35/8e32350fedf55212d405f19f5b885b56.jpg`,
    },
    // Matsya (Also a Dashavatara)
    {
      name: 'Matsya',
      yuga: 'Satya Yuga',
      symbolism: 'Preservation of life and knowledge during deluge',
      purpose: 'To save Manu (progenitor of humanity) and the Vedas from the great flood',
      description: 'The fish avatar. He saves Manu and the seven sages from the cosmic flood, and in some traditions, saves the Vedas from an asura called Hayagriva.',
      imageUrl: `https://lh3.googleusercontent.com/d/1Iu-MLPHzClTAPKWjBcZpWBjwaOY9ewC1`,
    },
    // Kurma (Also a Dashavatara)
    {
      name: 'Kurma',
      yuga: 'Satya Yuga',
      symbolism: 'Stability, support, foundation',
      purpose: 'To support Mount Mandara on His back during the Samudra Manthan (Churning of the Ocean)',
      description: 'The tortoise/turtle avatar. He supports the mountain named Mandara while the devas and the asuras churn the ocean of milk to produce the nectar of immortality.',
      imageUrl: `https://www.poojn.in/wp-content/uploads/2025/03/Kurma-Avatar-Significance-and-Importance-in-Hindu-Mythology.jpeg.jpg`,
    },
    // Dhanvantari
    {
      name: 'Dhanvantari',
      yuga: 'Satya Yuga (during Samudra Manthan)',
      symbolism: 'Ayurveda, healing, nectar of immortality',
      purpose: 'To emerge from the Churning of the Ocean with the pot of Amrita (nectar) and bestow the science of Ayurveda',
      description: 'The father of Ayurvedic medicine and a physician to the devas.',
      imageUrl: `https://i.pinimg.com/736x/ac/53/5e/ac535ef6b7a1e27ef0ad9b9db608c405.jpg`,
    },
    // Mohini
    {
      name: 'Mohini',
      yuga: 'Satya Yuga (during Samudra Manthan)',
      symbolism: 'Enchantment, illusion, divine feminine power',
      purpose: 'To enchant the Asuras and ensure the Amrita was distributed only to the Devas',
      description: 'The enchantress who beguiles the asuras into offering her the elixir of eternal life.',
      imageUrl: `https://i.pinimg.com/736x/67/74/2a/67742a265b656ffd9723fc66c496495c.jpg`,
    },
    // Narasimha (Also a Dashavatara)
    {
      name: 'Narasimha',
      yuga: 'Satya Yuga',
      symbolism: 'Divine protection, destruction of evil impervious to normal means',
      purpose: 'To kill the demon Hiranyakashipu who was blessed with near-invincibility and protect devotee Prahlada',
      description: 'The lion avatar. He saves his devotee Prahlada and frees the three worlds from the tyranny of an asura named Hiranyakashipu.',
      imageUrl: `https://lh3.googleusercontent.com/d/1x3sOHijI2yi9-erQxkyzbfupq-feycrQ`,
    },
    // Vamana (Also a Dashavatara)
    {
      name: 'Vamana',
      yuga: 'Treta Yuga',
      symbolism: 'Humility, cosmic expansion, reclaiming divine right',
      purpose: 'To subdue the benevolent but overly ambitious King Mahabali and restore the three worlds to the Devas',
      description: 'The dwarf avatar. He vanquishes the asura king Mahabali to the netherworld after taking three strides upon the universe, restoring the rule of Indra.',
      imageUrl: `https://lh3.googleusercontent.com/d/1DYVE_qnKoCghfZa63cdHxBqggj0D6QG0`,
    },
    // Parashurama (Also a Dashavatara)
    {
      name: 'Parashurama',
      yuga: 'Treta Yuga',
      symbolism: 'Righteous anger, destruction of tyranny, warrior sage',
      purpose: 'To eliminate the arrogant and oppressive Kshatriya warrior class who had strayed from Dharma',
      description: 'The warrior-sage avatar. He destroys the oppressive kings of the military class and creates a new social order.',
      imageUrl: `https://lh3.googleusercontent.com/d/146hE9DLKYZb4bWMVkL_kOOOpWdSCttXk`,
    },
    // Vyasa (Veda Vyasa)
    {
      name: 'Vyasa',
      yuga: 'Dvapara Yuga',
      symbolism: 'Compiler of Vedas, author of Mahabharata & Puranas, wisdom',
      purpose: 'To compile and organize the Vedic knowledge, and compose epic scriptures',
      description: 'The compiler of the Vedas and writer of the scriptures (Puranas) and the epic Mahabharata.',
      imageUrl: `https://i.pinimg.com/736x/fc/be/26/fcbe26c2afc9878f91630b35fd030b3a.jpg`,
    },
    // Rama (Also a Dashavatara)
    {
      name: 'Rama',
      yuga: 'Treta Yuga',
      symbolism: 'Righteousness (Dharma), duty, ideal leadership, archery',
      purpose: 'To uphold Dharma, defeat the demon king Ravana, and exemplify the ideal human and king',
      description: 'The prince avatar. He rescues his wife Sita when she is abducted by the rakshasa king Ravana, restoring just rule to the world.',
      imageUrl: `https://lh3.googleusercontent.com/d/17YsZpVAr7z6CmA51vw3UQJ-Sk8KHe97_`,
    },
    // Balarama
    {
      name: 'Balarama',
      yuga: 'Dvapara Yuga',
      symbolism: 'Strength, agriculture (plow), divine serpent (Shesha)',
      purpose: 'To support his younger brother Krishna and uphold Dharma with his immense strength',
      description: 'The elder brother of Krishna. He is variously described as an avatar of Shesha, the serpent-mount of Vishnu, or an avatar of Vishnu.',
      imageUrl: `https://i.pinimg.com/736x/e4/9a/d8/e49ad80161cc4a15eca0b3b704ddad3c.jpg`,
    },
    // Krishna (Also a Dashavatara)
    {
      name: 'Krishna',
      yuga: 'Dvapara Yuga',
      symbolism: 'Divine love, wisdom, diplomacy, flute, protector',
      purpose: 'To re-establish Dharma, deliver the Bhagavad Gita, and exhibit divine Leelas (plays)',
      description: 'The eighth avatar of Vishnu who incarnates to re-establish righteousness. He slays Kamsa and participates in the Kurukshetra War.',
      imageUrl: `https://lh3.googleusercontent.com/d/1K-SvLbsAJKEOHObZkB_6TPMM5C_brdkA`,
    },
    // Buddha (Also a Dashavatara - interpretation varies)
    {
      name: 'Buddha',
      yuga: 'Kali Yuga', // Historically lived early Kali Yuga
      symbolism: 'Enlightenment, compassion, detachment, non-violence',
      purpose: 'To teach the path to enlightenment and liberation from suffering',
      description: 'The historical Buddha, who incarnates to delude the asuras from the path of the Vedas, ensuring the victory of the devas. In some traditions, he is referred to as an avatar of Vishnu.',
      imageUrl: `https://i.pinimg.com/736x/54/6c/e7/546ce7b91563c367748b9af1d1b6c916.jpg`,
    },
    // Gajendra Varada (Vishnu in the act of saving Gajendra)
    {
      name: 'Gajendra Varada',
      yuga: 'Satya Yuga (Event Context)',
      symbolism: 'Salvation, mercy, instant response to devotion',
      purpose: 'To save the devotee Gajendra, the elephant king, from a crocodile, demonstrating His mercy',
      description: 'Vishnu appearing specifically to grant liberation (Varada) to Gajendra the elephant.',
      imageUrl: `https://i.pinimg.com/736x/54/46/27/5446278fd8fe1cb9e7665629472d7679.jpg`,
    },
    // Kalki (Also a Dashavatara)
    {
      name: 'Kalki',
      yuga: 'Kali Yuga (Future)',
      symbolism: 'Destruction of evil, renewal, righteous warrior',
      purpose: 'To appear at the end of Kali Yuga, destroy wickedness, and usher in the next Satya Yuga',
      description: 'The prophesied tenth avatar of Vishnu. He incarnates to bring an end to the present age of corruption called the Kali Yuga.',
      imageUrl: `https://lh3.googleusercontent.com/d/13XtLK00QrsQa2wntZP2OXCXeCXYUixaA`,
    },
  ];
}

