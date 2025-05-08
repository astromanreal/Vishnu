





/**
 * Represents a verse from a stotra.
 */
export interface StotraVerse {
  /**
   * The verse in Sanskrit.
   */
  sanskrit: string;
  /**
   * The transliteration of the verse.
   */
  transliteration: string;
  /**
   * The English meaning of the verse.
   */
  englishMeaning: string;
}

/**
 * Represents a Stotra, with title and verses
 */
export interface Stotra {
    /**
     * Title of the Stotra
     */
    title: string;
    /**
     * Slug for URL routing
     */
    slug: string;
    /**
     * Language of the Stotra
     */
    language: string;
    /**
     * Deity associated with the Stotra
     */
    deity: string;
    /**
     * Composer of the Stotra (if known)
     */
    composer: string;
    /**
     * The verses of the stotra.
     */
    verses: StotraVerse[];
}

// Helper function to create slugs
const createSlug = (title: string): string => {
  // Extract the main part before the first colon or parenthesis for a cleaner slug
  const mainTitle = title.split(/[:(]/)[0].trim();
  return mainTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};


// Placeholder data for stotras
const stotrasData: Stotra[] = [
  {
    title: 'Shree Hari Stotram (श्री हरि स्तोत्रम्)',
    slug: 'shree-hari-stotram',
    language: 'Sanskrit',
    deity: 'Lord Vishnu (Hari)',
    composer: 'Traditionally attributed to ancient devotees',
    verses: [
      {
        sanskrit: 'जगज्जालपालं चलत्कण्ठमालं\nशरच्चन्द्रभालं महादैत्यकालम् ।',
        transliteration: 'jagajjālapālaṃ calatkaṇṭhamālaṃ\nśaraccandrabhālaṃ mahādaityakālam ।',
        englishMeaning: 'He who protects the web of the worlds (universe), who wears a moving garland around His neck, whose forehead shines like the autumn moon, and who is the death of the great demons.',
      },
      {
        sanskrit: 'नभोनीलकायं दुरावारमायं\nसुपद्मासहायम् भजेऽहं भजेऽहं ॥१॥',
        transliteration: 'nabhonīlakāyaṃ durāvāramāyaṃ\nsupadmāsahāyam bhaje’haṃ bhaje’haṃ ॥1॥',
        englishMeaning: 'Whose body is blue like the sky, whose Maya (illusion) is difficult to overcome, and who is the consort of the beautiful Padma (Lakshmi) - Him I worship, Him I worship. (1)',
      },
      {
        sanskrit: 'सदाम्भोधिवासं गलत्पुष्पहासं\nजगत्सन्निवासं शतादित्यभासम् ।',
        transliteration: 'sadāmbhodhivāsaṃ galatpuṣpahāsaṃ\njagatsannivāsaṃ śatādityabhāsam ।',
        englishMeaning: 'He who always resides in the ocean, whose smile is like a blossoming flower, who pervades the entire universe, and whose radiance is like a hundred suns.',
      },
      {
        sanskrit: 'गदाचक्रशस्त्रं लसत्पीतवस्त्रं\nhसच्चारुवक्त्रं भजेऽहं भजेऽहं ॥२॥',
        transliteration: 'gadācakraśastraṃ lasatpītavastraṃ\nhasaccāruvaktraṃ bhaje’haṃ bhaje’haṃ ॥2॥',
        englishMeaning: 'Who wields the mace and discus as weapons, who wears shining yellow garments, and whose charming face is always smiling - Him I worship, Him I worship. (2)',
      },
      {
        sanskrit: 'रमाकण्ठहारं श्रुतिव्रातसारं\nजलान्तर्विहारं धराभारहारम् ।',
        transliteration: 'ramākaṇṭhahāraṃ śrutivrātasāraṃ\njalāntarvihāraṃ dharābhārahāram ।',
        englishMeaning: 'He who is the necklace around Ramaa\'s (Lakshmi\'s) neck, the essence of all the Vedas, who sports within the waters, and who removes the burden of the Earth.',
      },
      {
        sanskrit: 'चिदानन्दरूपं मनोज्ञस्वरूपं\nध्रुतानेकरूपं भजेऽहं भजेऽहं ॥३॥',
        transliteration: 'cidānandarūpaṃ manojñasvarūpaṃ\ndhr̥tānekarūpaṃ bhaje’haṃ bhaje’haṃ ॥3॥',
        englishMeaning: 'Whose form is consciousness and bliss, whose form is captivatingly beautiful, and who assumes many forms - Him I worship, Him I worship. (3)',
      },
      {
        sanskrit: 'जराजन्महीनं परानन्दपीनं\nसमाधानलीनं सदैवानवीनम् ।',
        transliteration: 'jarājanmahīnaṃ parānandapīnaṃ\nsamādhānalīnaṃ sadaivānavīnam ।',
        englishMeaning: 'He who is devoid of old age and birth, who is full of supreme bliss, who is absorbed in deep meditation (Samadhi), and who is eternally new.',
      },
      {
        sanskrit: 'जगज्जन्महेतुं सुरानीककेतुं\nत्रिलोकैकसेतुं भजेऽहं भजेऽहं ॥४॥',
        transliteration: 'jagajjanmahētuṃ surānīkakētuṃ\ntrilōkaikasētuṃ bhaje’haṃ bhaje’haṃ ॥4॥',
        englishMeaning: 'Who is the cause of the universe\'s birth, the banner (leader) of the army of Devas, and the sole bridge across the three worlds - Him I worship, Him I worship. (4)',
      },
      {
        sanskrit: 'कृताम्नायगानं खगाधीशयानं\nविमुक्तेर्निदानं हरारातिमानम् ।',
        transliteration: 'kṛtāmnāyagānaṃ khagādhīśayānaṃ\nvimuktērnidānaṃ harārātimānam ।',
        englishMeaning: 'Whose glories are sung by the Vedas, who rides the king of birds (Garuda), who is the fundamental cause of liberation, and who destroys the pride of enemies.',
      },
      {
        sanskrit: 'स्वभक्तानुकूलं जगद्व्रुक्षमूलं\nनिरस्तार्तशूलं भजेऽहं भजेऽहं ॥५॥',
        transliteration: 'svabhaktānukūlaṃ jagadvrukṣamūlaṃ\nnirastārtaśūlaṃ bhaje’haṃ bhaje’haṃ ॥5॥',
        englishMeaning: 'Who is favorable to His devotees, the root of the tree of the universe, and who removes the piercing pain of suffering - Him I worship, Him I worship. (5)',
      },
      {
        sanskrit: 'समस्तामरेशं द्विरेफाभकेशं\nजगद्विम्बलेशं ह्रुदाकाशदेशम् ।',
        transliteration: 'samastāmarēśaṃ dvirēphābhakēśaṃ\njagadvimbalēśaṃ hrudākāśadēśam ।',
        englishMeaning: 'Who is the Lord of all the Devas, whose hair is dark like black bees, who holds a fragment of the universe\'s reflection, and who resides in the space of the heart.',
      },
      {
        sanskrit: 'सदा दिव्यदेहं विमुक्ताखिलेहं\nसुवैकुण्ठगेहं भजेऽहं भजेऽहं ॥६॥',
        transliteration: 'sadā divyadēhaṃ vimuktākhilēhaṃ\nsuvaikuṇṭhagēhaṃ bhaje’haṃ bhaje’haṃ ॥6॥',
        englishMeaning: 'Who possesses an eternally divine body, who is free from all worldly desires, and whose abode is the glorious Vaikuntha - Him I worship, Him I worship. (6)',
      },
      {
        sanskrit: 'सुरालिबलिष्ठं त्रिलोकीवरिष्ठं\nगुरूणां गरिष्ठं स्वरूपैकनिष्ठम् ।',
        transliteration: 'surālibaliṣṭhaṃ trilōkīvariṣṭhaṃ\ngurūṇāṁ gariṣṭhaṃ svarūpaikaniṣṭham ।',
        englishMeaning: 'Who is the strongest among the hosts of Devas, the most excellent in the three worlds, the most venerable among Gurus, and who is firmly established in His own true form.',
      },
      {
        sanskrit: 'सदा युद्धधीरं महावीरवीरं\nमहाम्भोधितीरं भजेऽहं भजेऽहं ॥७॥',
        transliteration: 'sadā yuddhadhīraṃ mahāvīravīraṃ\nmahāmbhōdhitīraṃ bhaje’haṃ bhaje’haṃ ॥7॥',
        englishMeaning: 'Who is always valiant in battle, the hero of heroes, and like the shore of the great ocean (providing refuge) - Him I worship, Him I worship. (7)',
      },
      {
        sanskrit: 'रमावामभागं तलानग्रनागं\nकृताधीनयागं गतारागरागम् ।',
        transliteration: 'ramāvāmabhāgaṃ talānagranāgaṃ\nkṛtādhīnayāgaṃ gatārāgarāgam ।',
        englishMeaning: 'Who has Ramaa (Lakshmi) on His left side, who rests upon the serpent Ananta, under whose control are all sacrifices, and who is beyond attachment and passion.',
      },
      {
        sanskrit: 'मुनीन्द्रैः सुगीतं सुरैः संपरीतं\nगुणौधैरतीतं भजेऽहं भजेऽहं ॥८॥',
        transliteration: 'munīndraiḥ sugītaṃ suraiḥ samparītaṃ\nguṇaughairatītaṃ bhaje’haṃ bhaje’haṃ ॥8॥',
        englishMeaning: 'Who is beautifully sung by the best of sages, surrounded by the Devas, and who transcends the multitude of Gunas (qualities) - Him I worship, Him I worship. (8)',
      },
    ],
  },
  {
    title: 'Achyutashtakam (अच्युताष्टकम् : अच्युतं केशवं)',
    slug: 'achyutashtakam',
    language: 'Sanskrit',
    deity: 'Lord Krishna / Rama',
    composer: 'Adi Shankaracharya',
    verses: [
      {
        sanskrit: 'अच्युतं केशवं रामनारायणं\nकृष्णदामोदरं वासुदेवं हरिम् ।',
        transliteration: 'Acyutam Keshavam Raama-Naaraayannam\nKrssnna-Daamodaram Vaasudevam Harim |',
        englishMeaning: 'I worship Achyuta (the Infallible), Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva, Hari,',
      },
       {
        sanskrit: 'श्रीधरं माधवं गोपिकावल्लभं\nजानकीनायकं रामचंद्रं भजे ॥१॥',
        transliteration: 'Shrii-Dharam Maadhavam Gopikaa-Vallabham\nJaanakii-Naayakam Raamacamdram Bhaje ||1||',
        englishMeaning: 'Shridhara (Bearer of Sri), Madhava, the Beloved of the Gopis, the Lord of Janaki (Sita), Ramachandra. (1)',
       },
       {
        sanskrit: 'अच्युतं केशवं सत्यभामाधवं\nमाधवं श्रीधरं राधिकाराधितम् ।',
        transliteration: 'Acyutam Keshavam Satyabhaamaa-Dhavam\nMaadhavam Shrii-Dharam Raadhika-[A]araadhitam |',
        englishMeaning: 'Achyuta, Keshava, the Lord of Satyabhama, Madhava, Shridhara, the One worshipped by Radhika,',
       },
       {
        sanskrit: 'इन्दिरामन्दिरं चेतसा सुन्दरं\nदेवकीनन्दनं नन्दजं सन्दधे ॥२॥',
        transliteration: 'Indiraa-Mandiram Cetasaa Sundaram\nDevakii-Nandanam Nanda-Jam San-Dadhe ||2||',
        englishMeaning: 'The Temple of Indira (Lakshmi), beautiful in mind, the son of Devaki, born of Nanda, I meditate upon Him. (2)',
       },
       {
        sanskrit: 'विष्णवे जिष्णवे शाङ्खिने चक्रिणे\nरुक्मिणिरागिणे जानकीजानये ।',
        transliteration: 'Vissnnave Jissnnave Shaangkhine Cakrinne\nRukminni-Raaginne Jaanakii-Jaanaye |',
        englishMeaning: 'To Vishnu, the Victorious, the holder of the Shankha (conch) and Chakra (discus), the beloved of Rukmini, the husband of Janaki (Sita),',
       },
       {
        sanskrit: 'बल्लवीवल्लभायार्चितायात्मने\nकंसविध्वंसिने वंशिने ते नमः ॥३॥',
        transliteration: 'Ballavii-Vallabhaay-Aarcitaay-Aatmane\nKamsa-Vidhvamsine Vamshine Te Namah ||3||',
        englishMeaning: 'To the beloved of the cowherd women (Gopis), the worshipped Self, the destroyer of Kamsa, the flute-player, salutations unto You. (3)',
       },
       {
        sanskrit: 'कृष्ण गोविन्द हे राम नारायण\nश्रीपते वासुदेवाजित श्रीनिधे ।',
        transliteration: 'Krssnna Govinda He Raama Naaraayanna\nShrii-Pate Vaasudeva-Ajita Shrii-Nidhe |',
        englishMeaning: 'O Krishna, Govinda, O Rama, Narayana, O Lord of Sri (Lakshmi), O Vasudeva, the Unconquered, O treasure of Sri,',
       },
       {
        sanskrit: 'अच्युतानन्त हे माधवाधोक्षज\nद्वारकानायक द्रौपदीरक्षक ॥४॥',
        transliteration: 'Acyuta-Ananta He Maadhava-Adhokssaja\nDvaarakaa-Naayaka Draupadii-Rakssaka ||4||',
        englishMeaning: 'O Achyuta, Ananta (Infinite), O Madhava, Adhokshaja (Beyond Senses), O Lord of Dwaraka, O Protector of Draupadi. (4)',
       },
       {
        sanskrit: 'राक्षसक्षोभितः सीतया शोभितो\nदण्डकारण्यभूपुण्यताकारणः ।',
        transliteration: 'Raakssasa-Kssobhitah Siitayaa Shobhito\nDannddakaarannya-Bhuu-Punnyataa-Kaarannah |',
        englishMeaning: 'Disturbed by Rakshasas, adorned by Sita, the cause of the sanctity of the land of Dandakaranya forest,',
       },
       {
        sanskrit: 'लक्ष्मणेनान्वितो वानरौः सेवितो_\nऽगस्तसम्पूजितो राघव पातु माम् ॥५॥',
        transliteration: 'Lakssmannen-Aanvito Vaanarauh Sevito-\n[A]gasta-Sampuujito Raaghava Paatu Maam ||5||',
        englishMeaning: 'Accompanied by Lakshmana, served by monkeys, worshipped by Sage Agastya, O Raghava (Rama), protect me. (5)',
       },
       {
        sanskrit: 'धेनुकारिष्टकानिष्टकृद्द्वेषिहा\nकेशिहा कंसहृद्वंशिकावादकः ।',
        transliteration: 'Dhenuka-Arissttaka-Anisstta-Krd-Dvessihaa\nKeshihaa Kamsa-Hrd-Vamshikaa-Vaadakah |',
        englishMeaning: 'The destroyer of the malevolent demons Dhenuka and Arishta, the slayer of Keshi, the destroyer of Kamsa, the flute player,',
       },
       {
        sanskrit: 'पूतनाकोपकःसूरजाखेलनो\nबालगोपालकः पातु मां सर्वदा ॥६॥',
        transliteration: 'Puutanaa-Kopakah-Suura-Jaa-Khelano\nBaala-Gopaalakah Paatu Maam Sarvadaa ||6||',
        englishMeaning: 'The one who became angry with Putana, the player on the banks of the Yamuna (Suraja), the child Gopala, protect me always. (6)',
       },
       {
        sanskrit: 'विद्युदुद्योतवत्प्रस्फुरद्वाससं\nप्रावृडम्भोदवत्प्रोल्लसद्विग्रहम् ।',
        transliteration: 'Vidyud-Udyota-Vat-Prasphurad-Vaasasam\nPraavrdd-Ambhoda-Vat-Prollasad-Vigraham |',
        englishMeaning: 'His garments flash like the rise of lightning, His handsome form shines like the clouds of the rainy season,',
       },
       {
         sanskrit: 'वन्यया मालया शोभितोरःस्थलं\nलोहिताङ्घ्रिद्वयं वारिजाक्षं भजे ॥७॥',
         transliteration: 'Vanyayaa Maalayaa Shobhito[a-U]rahsthalam\nLohita-Angghri-Dvayam Vaarija-Akssam Bhaje ||7||',
         englishMeaning: 'His chest is adorned with a Vanamala (garland of forest flowers), His pair of feet are reddish, and His eyes are like lotuses - Him I worship. (7)',
       },
       {
        sanskrit: 'कुञ्चितैः कुन्तलैर्भ्राजमानाननं\nरत्नमौलिं लसत्कुण्डलं गण्डयोः ।',
        transliteration: 'Kun.citaih Kuntalair-Bhraajamaana-Ananam\nRatna-Maulim Lasat-Kunnddalam Gannddayoh |',
        englishMeaning: 'His face shines with curly locks of hair, He wears a jewel-studded crown and sparkling earrings on his cheeks,',
       },
       {
        sanskrit: 'हारकेयूरकं कङ्कणप्रोज्ज्वलं\nकिङ्किणीमञ्जुलं श्यामलं तं भजे ॥८॥',
        transliteration: 'Haara-Keyuurakam Kangkanna-Projjvalam\nKingkinnii-Man.julam Shyaamalam Tam Bhaje ||8||',
        englishMeaning: 'Adorned with necklaces and armlets, radiant bracelets, charming little bells - Him, the dark-complexioned one, I worship. (8)',
       },
       {
        sanskrit: 'अच्युतस्याष्टकं यः पठेदिष्टदं\nप्रेमतः प्रत्यहं पूरुषः सस्पृहम् ।',
        transliteration: 'Acyutasyaassttakam Yah Patthed-Isstta-Dam\nPrematah Pratyaham Puurussah Sasprham |',
        englishMeaning: 'Whoever recites this Achyutashtakam, which grants desired wishes, with love and devotion every day, eagerly,',
       },
       {
        sanskrit: 'वृत्ततः सुन्दरं कर्तृविश्वम्भरस्तस्य\nवश्यो हरिर्जायते सत्वरम् ॥९॥',
        transliteration: 'Vrttatah Sundaram Kartr-Vvishvambharas-Tasya\nVashyo Harirjaayate Satvaram ||9||',
        englishMeaning: 'Which is beautiful in meter and composed by the sustainer of the universe (Adi Shankaracharya), to him Hari (Vishnu) quickly becomes subservient (grants his wishes). (9)',
       },
    ],
   },
   {
    title: 'Madhurashtakam (मधुराष्टकम् : अधरं मधुरं)',
    slug: 'madhurashtakam',
    language: 'Sanskrit',
    deity: 'Lord Krishna',
    composer: 'Vallabhacharya',
    verses: [
      {
        sanskrit: 'अधरं मधुरं वदनं मधुरं\nनयनं मधुरं हसितं मधुरम् ।',
        transliteration: 'Adharam Madhuram Vadanam Madhuram\nNayanam Madhuram Hasitam Madhuram |',
        englishMeaning: 'His Lips are Sweet, His Face is Sweet,\nHis Eyes are Sweet, His Smile is Sweet.',
      },
      {
        sanskrit: 'हृदयं मधुरं गमनं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥१॥',
        transliteration: 'Hrdayam Madhuram Gamanam Madhuram\nMadhura-Adhipater-Akhilam Madhuram ||1||',
        englishMeaning: 'His Heart is Sweet, His Gait (Moving) is Sweet;\nEverything is Sweet about the Lord of Sweetness. (1)',
      },
      {
        sanskrit: 'वचनं मधुरं चरितं मधुरं\nवसनं मधुरं वलितं मधुरम् ।',
        transliteration: 'Vacanam Madhuram Caritam Madhuram\nVasanam Madhuram Valitam Madhuram |',
        englishMeaning: 'His Words are Sweet, His Character is Sweet,\nHis Garments (Wearing) are Sweet, His Folds (Posture) are Sweet.',
      },
      {
        sanskrit: 'चलितं मधुरं भ्रमितं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥२॥',
        transliteration: 'Calitam Madhuram Bhramitam Madhuram\nMadhura-Adhipater-Akhilam Madhuram ||2||',
        englishMeaning: 'His Movement is Sweet, His Wandering is Sweet;\nEverything is Sweet about the Lord of Sweetness. (2)',
      },
      {
        sanskrit: 'वेणुर्मधुरो रेणुर्मधुरः\nपाणिर्मधुरः पादौ मधुरौ ।',
        transliteration: 'Vennur-Madhuro Rennur-Madhurah\nPaannir-Madhurah Paadau Madhurau |',
        englishMeaning: 'His Flute is Sweet, His Foot-Dust is Sweet,\nHis Hands are Sweet, His Feet are Sweet.',
      },
      {
        sanskrit: 'नृत्यं मधुरं सख्यं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥३॥',
        transliteration: 'Nrtyam Madhuram Sakhyam Madhuram\nMadhura-Adhipater-Akhilam Madhuram ||3||',
        englishMeaning: 'His Dance is Sweet, His Friendship is Sweet;\nEverything is Sweet about the Lord of Sweetness. (3)',
      },
      {
        sanskrit: 'गीतं मधुरं पीतं मधुरं\nभुक्तं मधुरं सुप्तं मधुरम् ।',
        transliteration: 'Giitam Madhuram Piitam Madhuram\nBhuktam Madhuram Suptam Madhuram |',
        englishMeaning: 'His Song is Sweet, His Drinking is Sweet,\nHis Eating is Sweet, His Sleeping is Sweet.',
      },
      {
        sanskrit: 'रूपं मधुरं तिलकं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥४॥',
        transliteration: 'Ruupam Madhuram Tilakam Madhuram\nMadhura-Adhipater-Akhilam Madhuram ||4||',
        englishMeaning: 'His Form is Sweet, His Tilaka (Sacred Mark) is Sweet;\nEverything is Sweet about the Lord of Sweetness. (4)',
      },
      {
        sanskrit: 'करणं मधुरं तरणं मधुरं\nहरणं मधुरं रमणं मधुरम् ।',
        transliteration: 'Karannam Madhuram Tarannam Madhuram\nHarannam Madhuram Ramannam Madhuram |',
        englishMeaning: 'His Deeds (Activities) are Sweet, His Carrying Across (Liberation) is Sweet,\nHis Stealing (Hearts) is Sweet, His Love-Play is Sweet.',
      },
      {
        sanskrit: 'वमितं मधुरं शमितं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥५॥',
        transliteration: 'Vamitam Madhuram Shamitam Madhuram\nMadhura-Adhipater-Akhilam Madhuram ||5||',
        englishMeaning: 'His Offerings (to fire) are Sweet, His Pacification (Peacefulness) is Sweet;\nEverything is Sweet about the Lord of Sweetness. (5)',
      },
      {
        sanskrit: 'गुञ्जा मधुरा माला मधुरा\nयमुना मधुरा वीची मधुरा ।',
        transliteration: 'Gun.jaa Madhuraa Maalaa Madhuraa\nYamunaa Madhuraa Viicii Madhuraa |',
        englishMeaning: 'His Gunja Berry Garland is Sweet, His Garland is Sweet,\nThe Yamuna River is Sweet, Its Waves are Sweet.',
      },
      {
        sanskrit: 'सलिलं मधुरं कमलं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥६॥',
        transliteration: 'Salilam Madhuram Kamalam Madhuram\nMadhura-Adhipaterakhilam Madhuram ||6||',
        englishMeaning: 'Its Water is Sweet, Its Lotus is Sweet;\nEverything is Sweet about the Lord of Sweetness. (6)',
      },
      {
        sanskrit: 'गोपी मधुरा लीला मधुरा\nयुक्तं मधुरं मुक्तं मधुरम् ।',
        transliteration: 'Gopii Madhuraa Liilaa Madhuraa\nYuktam Madhuram Muktam Madhuram |',
        englishMeaning: 'His Gopis (Cowherd Girls) are Sweet, His Play (Leela) is Sweet,\nHis Union (with devotees) is Sweet, His Liberation (of devotees) is Sweet.',
      },
      {
        sanskrit: 'दृष्टं मधुरं शिष्टं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥७॥',
        transliteration: 'Drssttam Madhuram Shissttam Madhuram\nMadhura-Adhipaterakhilam Madhuram ||7||',
        englishMeaning: 'His Glance is Sweet, His Etiquette is Sweet;\nEverything is Sweet about the Lord of Sweetness. (7)',
      },
      {
        sanskrit: 'गोपा मधुरा गावो मधुरा\nयष्टिर्मधुरा सृष्टिर्मधुरा ।',
        transliteration: 'Gopaa Madhuraa Gaavo Madhuraa\nYassttir-Madhuraa Srssttir-Madhuraa |',
        englishMeaning: 'His Gopas (Cowherd Boys) are Sweet, His Cows are Sweet,\nHis Staff (Stick) is Sweet, His Creation is Sweet.',
      },
      {
        sanskrit: 'दलितं मधुरं फलितं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥८॥',
        transliteration: 'Dalitam Madhuram Phalitam Madhuram\nMadhura-Adhipaterakhilam Madhuram ||8||',
        englishMeaning: 'His Trampling (over evil) is Sweet, His Fruition (as results) is Sweet;\nEverything is Sweet about the Lord of Sweetness. (8)',
      },
    ],
   },
   {
     title: 'Shree Bala Mukundashtakam (श्री बालमुकुन्दाष्टकम्)',
     slug: 'shree-bala-mukundashtakam',
     language: 'Sanskrit',
     deity: 'Lord Krishna (Bala Mukunda)',
     composer: 'Traditionally attributed',
     verses: [
       {
         sanskrit: 'करारविन्देन पदारविन्दं\nमुखारविन्दे विनिवेशयन्तम् ।',
         transliteration: 'Kara-Aravindena Pada-Aravindam\nMukha-Aravinde Vi-Niveshay-Antam |',
         englishMeaning: '(I meditate on Bala Mukunda) Who with His Lotus-like Hand holds His Lotus-like Feet and places it in His Lotus-like Mouth,',
       },
       {
         sanskrit: 'वटस्य पत्रस्य पुटे शयानं\nबालं मुकुन्दं मनसा स्मरामि ॥१॥',
         transliteration: 'Vattasya Patrasya Putte Shayaanam\nBaalam Mukundam Manasaa Smaraami ||1||',
         englishMeaning: 'Who lies in the fold of a Banyan Leaf; I meditate on that Bala Mukunda (the Child Mukunda). (1)',
       },
       {
         sanskrit: 'संहृत्य लोकान् वटपत्रमध्ये\nशयानमाद्यन्तविहीनरूपम् ।',
         transliteration: 'Samhrtya Lokaan Vatta-Patra-Madhye\nShayaanam-Aady[i]-Anta-Vihiina-Ruupam |',
         englishMeaning: 'Having withdrawn the Worlds within Himself, He lies in the middle of the Banyan Leaf; His Form is without Beginning or End,',
       },
       {
         sanskrit: 'सर्वेश्वरं सर्वहितावतारं\nबालं मुकुन्दं मनसा स्मरामि ॥२॥',
         transliteration: 'Sarve[a-Ii]shvaram Sarva-Hita-Avataaram\nBaalam Mukundam Manasaa Smaraami ||2||',
         englishMeaning: 'He is the Lord of All, His Incarnation is for the Welfare of All; I meditate on that Bala Mukunda. (2)',
       },
       {
         sanskrit: 'इन्दीवरश्यामलकोमलाङ्गं\nइन्द्रादिदेवार्चितपादपद्मम् ।',
         transliteration: 'Indiivara-Shyaamala-Komala-Anggam\nIndra-[A]adi-Deva-Arcita-Paada-Padmam |',
         englishMeaning: 'His Body has the Dark-Blue soft lustre of Blue Lotuses, His Lotus Feet are worshipped by Indra and other Devas,',
       },
       {
         sanskrit: 'सन्तानकल्पद्रुममाश्रितानां\nबालं मुकुन्दं मनसा स्मरामि ॥३॥',
         transliteration: 'Santaana-Kalpadrumam-Aashritaanaam\nBaalam Mukundam Manasaa Smaraami ||3||',
         englishMeaning: 'He is the Kalpa-Druma (Wish-Fulfilling Tree) yielding progeny for those who take His Refuge; I meditate on that Bala Mukunda. (3)',
       },
       {
         sanskrit: 'लंबालकं लंवितहारयष्टिं\nशृङ्गारलीलाङ्कितदन्तपङ्क्तिम् ।',
         transliteration: 'Lamba-Alakam Lamvita-Haara-Yassttim\nShrnggaara-Liila-Angkita-Danta-Pangktim |',
         englishMeaning: 'His Curly Hair Locks are hanging down, as also His Pearl Necklace, His rows of Teeth are marked with the playfulness of Love,',
       },
       {
         sanskrit: 'बिंबाधरं चारुविशालनेत्रं\nबालं मुकुन्दं मनसा स्मरामि ॥४॥',
         transliteration: 'Bimba-Adharam Caaru-Vishaala-Netram\nBaalam Mukundam Manasaa Smaraami ||4||',
         englishMeaning: 'His Lips are like Bimba Fruits and His Beautiful Eyes are Large; I meditate on that Bala Mukunda. (4)',
       },
       {
         sanskrit: 'शिक्ये निधायाद्य पयोदधीनि\nबहिर्गतायां व्रजनायिकायाम् ।',
         transliteration: 'Shikye Nidhaaya-Adya Payo-Dadhiini\nBahir-Gataayaam Vraja-Naayikaayaam |',
         englishMeaning: 'Keeping the Milk and Curd in a hanging net today, when the lady of Vraja has gone out,',
       },
       {
         sanskrit: 'भुक्त्वा यथेष्टं कपटेन सुप्तं\nबालं मुकुन्दं मनसा स्मरामि ॥५॥',
         transliteration: 'Bhuktvaa Yathessttam Kapattena Suptam\nBaalam Mukundam Manasaa Smaraami ||5||',
         englishMeaning: 'He ate as He wished and is sleeping with pretence; I meditate on that Bala Mukunda. (5)',
       },
       {
         sanskrit: 'कलिन्दजान्तस्थितकालियस्य\nफणाग्ररङ्गे नटनप्रियन्तम् ।',
         transliteration: 'Kalinda-Ja-Anta-Sthita-Kaaliyasya\nPhanna-Agrar-Angge Nattana-Priyantam |',
         englishMeaning: 'On the stage of the hood of the Kaliya serpent residing inside the Yamuna river, He loves to Dance,',
       },
       {
         sanskrit: 'तत्पुच्छहस्तं शरदिन्दुवक्त्रं\nबालं मुकुन्दं मनसा स्मरामि ॥६॥',
         transliteration: 'Tat-Puccha-Hastam Sharad-Indu-vaktram\nBaalam Mukundam Manasaa Smaraami ||6||',
         englishMeaning: 'Holding its tail with His Hand, His Face is like the Autumn Moon; I meditate on that Bala Mukunda. (6)',
       },
       {
         sanskrit: 'उलुखले बद्धमुदारशौर्यं\nउत्तुङ्गयुग्मार्जुनमङ्गलीलम् ।',
         transliteration: 'Ulukhale Baddham-Udaara-Shauryam\nUttungga-Yugma-Arjunam-Angga-Liilam |',
         englishMeaning: 'Bound to the Grinding Mortar, His Valour is Noble (leading to liberation), His playful Body broke the pair of lofty Arjuna Trees,',
       },
       {
         sanskrit: 'उत्फुल्लपद्मायतचारुनेत्रं\nबालं मुकुन्दं मनसा स्मरामि ॥७॥',
         transliteration: 'Utphulla-Padma-[A]ayata-Caaru-Netram\nBaalam Mukundam Manasaa Smaraami ||7||',
         englishMeaning: 'His Beautiful Eyes are like Full-Blown Lotuses; I meditate on that Bala Mukunda. (7)',
       },
       {
         sanskrit: 'आलोक्य मातुर्मुखमादेण\nस्तन्यं पिबन्तं सरसीरुहाक्षम् ।',
         transliteration: 'Aalokya Maatur-Mukham-Aadenna\nStanyam Pibantam Sarasii-Ruha-Akssam |',
         englishMeaning: 'Seeing His Mother\'s Face with Respect, He drinks the Mother\'s Milk, His Eyes are like Lotus,',
       },
       {
         sanskrit: 'सच्चिन्मयं देवमनन्तरूपं\nबालं मुकुन्दं मनसा स्मरामि ॥८॥',
         transliteration: 'Sac[t]-Cinmayam Devam-Ananta-Ruupam\nBaalam Mukundam Manasaa Smaraami ||8||',
         englishMeaning: 'He is the God whose Nature is Existence-Consciousness, whose Form is Infinite; I meditate on that Bala Mukunda. (8)',
       },
     ],
   },
    {
      title: 'Nandakumar Ashtakam (नन्दकुमाराष्टकम्)',
      slug: 'nandakumar-ashtakam',
      language: 'Sanskrit',
      deity: 'Lord Krishna (Nandakumara)',
      composer: 'Unknown', // Often attributed to Vallabhacharya, but confirmation needed
      verses: [
        {
          sanskrit: 'सुन्दरगोपालम् उरवनमालं नयनविशालं दुःखहरम् ।\nवृन्दावनचन्द्रमानन्दकन्दं परमानन्दं धरणिधरम् ॥',
          transliteration: 'Sundara-Gopaalam Ura-Vana-Maalam Nayana-Vishaalam Duhkha-Haram |\nVrndaavana-Candram-Aananda-Kandam Parama-[A]anandam Dharanni-Dharam ||',
          englishMeaning: 'Beautiful Gopala, adorned with a forest garland on His chest, with large eyes, the remover of sorrows. The moon of Vrindavan, the source of bliss, the supreme joy, the supporter of the Earth.',
        },
        {
          sanskrit: 'वल्लभघनश्यामं पूर्णकामम् अत्यभिरामं प्रीतिकरम् ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥१॥',
          transliteration: 'Vallabha-Ghanashyaamam Puurnna-Kaamam Atya[i-A]bhiraamam Priiti-Karam |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||1||',
          englishMeaning: 'The beloved Ghana-shyama (dark like a cloud), whose desires are fulfilled, extremely charming, bestower of love. Worship Nandakumara (son of Nanda), the essence of all happiness, the contemplation of truth, the supreme Brahman. (1)',
        },
        {
          sanskrit: 'सुन्दरवारिजवदनं निर्जितमदनम् आनन्दसदनं मुकुटधरम् ।\nगुञ्जाकृतिहारं विपिनविहारं परमोदारं चीरहरम् ॥',
          transliteration: 'Sundara-Vaarija-Vadanam Nirjita-Madanam Aananda-Sadanam Mukutta-Dharam |\nGun.jaa-Krti-Haaram Vipina-Vihaaram Paramo[a-U]daaram Ciira-Haram ||',
          englishMeaning: 'His face is like a beautiful lotus, conquering Madana (Cupid), the abode of bliss, wearing a crown. Wearing a garland of Gunja berries, wandering in the forest, supremely generous, the stealer of clothes (of Gopis).',
        },
        {
          sanskrit: 'वल्लभपटपीतं कृतउपवीतं करनवनीतं विबुधवरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥२॥',
          transliteration: 'Vallabha-Patta-Piitam Krta-Upaviitam Kara-Navaniitam Vibudha-Varam |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||2||',
          englishMeaning: 'The beloved wearing yellow garments, wearing the sacred thread, holding butter in His hand, the best among the wise. Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (2)',
        },
        {
          sanskrit: 'शोभितमुखधूलं यमुनाकूलं निपट_अतूलं सुखदतरम् ।\nमुखमण्डितरेणुं चारितधेनुं वादितवेणुं मधुरसुरम् ॥',
          transliteration: 'Shobhita-Mukha-Dhuulam Yamunaa-Kuulam Nipatta-Atuulam Sukhada-Taram |\nMukha-Mannddita-Rennum Caarita-Dhenum Vaadita-Vennum Madhura-Suram ||',
          englishMeaning: 'His face adorned with dust, on the banks of the Yamuna, utterly incomparable, the bestower of greater happiness. His face decorated with pollen, grazing the cows, playing the flute with a sweet melody.',
        },
        {
          sanskrit: 'वल्लभमतिविमलं शुभपदकमलं नखरुचिअमलं तिमिरहरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥३॥',
          transliteration: 'Vallabham-Ati-Vimalam Shubha-Pada-Kamalam Nakha-Ruci-Amalam Timira-Haram |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||3||',
          englishMeaning: 'The beloved, extremely pure, His auspicious lotus feet, the pure radiance of His nails, the remover of darkness (ignorance). Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (3)',
        },
        {
          sanskrit: 'शिरमुकुटसुदेशं कुञ्चितकेशं नटवरवेशं कामवरम् ।\nमायाकृतमनुजं हलधर_अनुजं प्रतिहतदनुजं भारहरम् ॥',
          transliteration: 'Shira-Mukutta-Sudesham Kun.cita-Kesham Nattavara-Vesham Kaama-Varam |\nMaayaa-Krta-Manujam Haladhara-Anujam Pratihata-Danujam Bhaara-Haram ||',
          englishMeaning: 'A beautiful crown on His head, curly hair, dressed as the best dancer, the granter of desires. Appearing human through Maya, the younger brother of Haladhara (Balarama), the slayer of demons, the remover of burdens.',
        },
        {
          sanskrit: 'वल्लभव्रजपालं सुभगसुचालं हितमनुकालं भाववरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥४॥',
          transliteration: 'Vallabha-Vraja-Paalam Subhaga-Sucaalam Hitam-Anukaalam Bhaava-Varam |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||4||',
          englishMeaning: 'The beloved protector of Vraja, fortunate and graceful in movement, always beneficial, the bestower of divine emotion. Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (4)',
        },
        {
          sanskrit: 'इन्दीवरभासं प्रकटसुरासं कुसुमविकासं वंशिधरम् ।\nहृतमन्मथमानं रूपनिधानं कृतकलगानं चित्तहरम् ॥',
          transliteration: 'Indiivara-Bhaasam Prakatta-Suraasam Kusuma-Vikaasam Vamshi-Dharam |\nHrta-Manmatha-Maanam Ruupa-Nidhaanam Krta-Kala-Gaanam Citta-Haram ||',
          englishMeaning: 'Shining like a blue lotus, manifesting divine play (Rasa dance), blooming like a flower, the holder of the flute. Who humbled the pride of Manmatha (Cupid), the repository of beauty, the singer of sweet melodies, the captivator of the mind.',
        },
        {
          sanskrit: 'वल्लभमृदुहासं कुञ्जनिवासं विविधविलासं केलिकरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥५॥',
          transliteration: 'Vallabha-Mrdu-Haasam Kun.ja-Nivaasam Vividha-Vilaasam Keli-Karam |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||5||',
          englishMeaning: 'The beloved with a gentle smile, residing in the groves, engaged in various plays, the performer of sports. Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (5)',
        },
        {
          sanskrit: 'अतिपरप्रवीणं पालितदीनं भक्ताधीनं कर्मकरम् ।\nमोहनमतिधीरं फणिबलवीरं हतपरवीरं तरलतरम् ॥',
          transliteration: 'Ati-Para-Praviinnam Paalita-Diinam Bhakta-Adhiinam Karma-Karam |\nMohanam-Ati-Dhiiram Phanni-Bala-Viiram Hata-Para-Viiram Tarala-Taram ||',
          englishMeaning: 'Supremely skilled, the protector of the distressed, subservient to devotees, the performer of actions. Enchanting, extremely courageous, the hero who defeated the serpent (Kaliya), slayer of other heroes, extremely agile.',
        },
        {
          sanskrit: 'वल्लभव्रजरमणं वारिजवदनं हलधरशमनं शैलधरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥६॥',
          transliteration: 'Vallabha-Vraja-Ramannam Vaarija-Vadanam Haladhara-Shamanam Shaila-Dharam |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||6||',
          englishMeaning: 'The beloved who delights Vraja, with a lotus face, the pacifier of Haladhara (Balarama), the lifter of the mountain (Govardhan). Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (6)',
        },
        {
          sanskrit: 'जलधरद्युतिअङ्गं ललितत्रिभङ्गं बहुकृतरङ्गं रसिकवरम् ।\nगोकुलपरिवारं मदनाकारं कुञ्जविहारं गूढतरम् ॥',
          transliteration: 'Jaladhara-Dyuti-Anggam Lalita-Tri-Bhanggam Bahu-Krta-Ranggam Rasika-Varam |\nGokula-Parivaaram Madana-[A]akaaram Kun.ja-Vihaaram Guuddha-Taram ||',
          englishMeaning: 'His body shines like a rain cloud, gracefully posed in three bends (Tribhanga), performing many dramas, the best of connoisseurs. Surrounded by the family of Gokul, having the form of Madana (Cupid), wandering in the groves, extremely mysterious.',
        },
        {
          sanskrit: 'वल्लभव्रजचन्द्रं सुभगसुछन्दं कृतआनन्दं भ्रान्तिहरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥७॥',
          transliteration: 'Vallabha-Vraja-Candram Subhaga-Suchandam Krta-[A]anandam Bhraanti-Haram |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||7||',
          englishMeaning: 'The beloved moon of Vraja, fortunate and graceful, the creator of joy, the remover of delusion. Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (7)',
        },
        {
          sanskrit: 'वन्दितयुगचरणं पावनकरणं जगदुद्धरणं विमलधरम् ।\nकालियशिरगमनं कृतफणिनमनं घातितयमनं मृदुलतरम् ॥',
          transliteration: 'Vandita-Yuga-Carannam Paavana-Karannam Jagad-Uddharannam Vimala-Dharam |\nKaaliya-Shira-Gamanam Krta-Phanni-Namanam Ghaatita-Yamanam Mrdula-Taram ||',
          englishMeaning: 'Whose pair of feet are worshipped, the cause of purification, the savior of the universe, the bearer of purity. Who went upon the head of Kaliya, made the serpent bow, subdued Yama (or controlled death), extremely gentle.',
        },
        {
          sanskrit: 'वल्लभदुःखहरणं निर्मलचरणम् अशरणशरणं मुक्तिकरं ।\nभज नन्दकुमारं सर्वसुखसारं तत्त्वविचारं ब्रह्मपरम् ॥८॥',
          transliteration: 'Vallabha-Duhkha-Harannam Nirmala-Carannam Asharanna-Sharannam Mukti-Karam |\nBhaja Nanda-Kumaaram Sarva-Sukhasaaram Tattva-Vicaaram Brahma-Param ||8||',
          englishMeaning: 'The beloved remover of sorrow, whose feet are pure, the refuge of the refugeless, the bestower of liberation. Worship Nandakumara, the essence of all happiness, the contemplation of truth, the supreme Brahman. (8)',
        },
      ],
    },
     {
      title: 'Sri Jagannathashtakam (श्रीजगन्नाथाष्टकम्)',
      slug: 'sri-jagannathashtakam',
      language: 'Sanskrit',
      deity: 'Lord Jagannath (Krishna)',
      composer: 'Adi Shankaracharya',
      verses: [
        {
          sanskrit: 'कदाचित् कालिन्दी_तट_विपिन_सङ्गीत_तरलो\nमुदाभीरी_नारी_वदन_कमलास्वाद_मधुपः ।',
          transliteration: 'Kadaacit Kaalindii_Tatta_Vipina_Sanggiita_Taralo\nMudaa-[Aa]bhiirii_Naarii_Vadana_Kamala-[A]asvaada_Madhupah |',
          englishMeaning: 'Sometimes, He revels in the music of the forest on the banks of the Yamuna, joyfully sipping the nectar from the lotus faces of the Gopi women like a bee.',
        },
        {
          sanskrit: 'रमा_शम्भु_ब्रह्मामर_पति_गणेशार्चित_पदो\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥१॥',
          transliteration: 'Ramaa_Shambhu_Brahmaa-[A]mara_Pati_Gannesha-Arcita_Pado\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||1||',
          englishMeaning: 'His feet are worshipped by Lakshmi, Shiva, Brahma, Indra (lord of gods), and Ganesha. May that Lord Jagannath be the object of my vision. (1)',
        },
        {
          sanskrit: 'भुजे सव्ये वेणुं शिरसि शिखि_पिच्छं कटितटे\nदुकूलं नेत्रान्ते सहचर_कटाक्षं च विदधत् ।',
          transliteration: 'Bhuje Savye Vennum Shirasi Shikhi_Piccham Kattitatte\nDukuulam Netra-Ante Sahacara_Kattaakssam Ca Vidadhat |',
          englishMeaning: 'Holding a flute in His left arm, a peacock feather on His head, silk cloth around His waist, and casting sidelong glances towards His companions.',
        },
        {
          sanskrit: 'सदा श्रीमद्वृन्दावन_वसति_लीला_परिचयो\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥२॥',
          transliteration: 'Sadaa Shriimad-Vrndaavana_Vasati_Liilaa_Paricayo\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||2||',
          englishMeaning: 'Always engaged in the pastimes of residing in the opulent Vrindavan. May that Lord Jagannath be the object of my vision. (2)',
        },
        {
          sanskrit: 'महाम्भोधेस्तीरे कनक_रुचिरे नील_शिखरे\nवसन् प्रासादान्तः सहज_वलभद्रेण बलिना ।',
          transliteration: 'Mahaa-[A]mbhodhes-Tiire Kanaka_Rucire Niila_Shikhare\nVasan Praasaada-Antah Sahaja_Valabhadrenna Balinaa |',
          englishMeaning: 'Residing on the shore of the great ocean, on the golden, beautiful Nilgiri hill, within a palace, along with His powerful elder brother Balarama.',
        },
        {
          sanskrit: 'सुभद्रा_मध्यस्थः सकल_सुर_सेवावसर_दो\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥३॥',
          transliteration: 'Subhadraa_Madhyasthah Sakala_Sura_Sevaa-[A]vasara_Do\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||3||',
          englishMeaning: 'With Subhadra in the middle, He grants opportunities for service to all the gods. May that Lord Jagannath be the object of my vision. (3)',
        },
        {
          sanskrit: 'कृपा_पारावारः सजल_जलद_श्रेणि_रुचिरो\nरमा_वाणी_रामः स्फुरदमल_पंकेरुह_मुखः ।',
          transliteration: 'Krpaa_Paaraavaarah Sajala_Jalada_Shrenni_Ruciro\nRamaa_Vaannii_Raamah Sphurad-Amala_Pangkeruha_Mukhah |',
          englishMeaning: 'He is an ocean of mercy, beautiful like a row of water-laden clouds. He is the delight of Lakshmi and Saraswati, His face is like a radiant, pure lotus.',
        },
        {
          sanskrit: 'सुरेन्द्रैराराध्यः श्रुति_गण_शिखा_गीत_चरितो\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥४॥',
          transliteration: 'Sure[a-I]ndrair-Aaraadhyah Shruti_Ganna_Shikhaa_Giita_Carito\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||4||',
          englishMeaning: 'Worshipped by the best of gods, His exploits are sung by the Upanishads (crest of the Vedas). May that Lord Jagannath be the object of my vision. (4)',
        },
        {
          sanskrit: 'रथारूढो गच्छन् पथि मिलित_भूदेव पटलैः\nस्तुति_प्रादुर्भावं प्रति_पदमुपाकर्ण्य सदयः ।',
          transliteration: 'Ratha-[A]aruuddho Gacchan Pathi Milita_Bhuudeva Pattalaih\nStuti_Praadurbhaavam Prati_Padam-Upaakarnnya Sadayah |',
          englishMeaning: 'Mounted on His chariot, moving along the path, He compassionately listens at every step to the outpouring of prayers from the assemblies of Brahmanas gathered there.',
        },
        {
          sanskrit: 'दया_सिन्धुर्बन्धुः सकल_जगतां सिन्धु_सुतया\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥५॥',
          transliteration: 'Dayaa_Sindhur-Bandhuh Sakala_Jagataam Sindhu_Sutayaa\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||5||',
          englishMeaning: 'He is an ocean of compassion, the friend of all worlds, accompanied by the daughter of the ocean (Lakshmi). May that Lord Jagannath be the object of my vision. (5)',
        },
        {
          sanskrit: 'परंब्रह्मापीडः कुवलय_दलोत्फुल्ल_नयनो\nनिवासी नीलाद्रौ निहित_चरणोऽनन्त_शिरसि ।',
          transliteration: 'Param-Brahma-[A]apiiddah Kuvalaya_Dalo[a-U]tphulla_Nayano\nNivaasii Niila-[A]adrau Nihita_Caranno-[A]nanta_Shirasi |',
          englishMeaning: 'He is the crest-jewel of the Supreme Brahman, His eyes are like blooming blue lotus petals. He resides on the Nilgiri hill, His feet resting on the head of Ananta (Shesha).',
        },
        {
          sanskrit: 'रसानन्दी राधा_सरस_वपुरालिङ्गन_सुखो\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥६॥',
          transliteration: 'Rasa-[A]anandii Raadhaa_Sarasa_Vapur-Aalinggana_Sukho\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||6||',
          englishMeaning: 'He revels in the bliss of divine mellows (Rasa), finding joy in embracing the charming form of Radha. May that Lord Jagannath be the object of my vision. (6)',
        },
        {
          sanskrit: 'न वै याचे राज्यं न च कनक_माणिक्य_विभवं\nन याचेऽहं रम्यां सकल_जन_काम्यां वरवधूम् ।',
          transliteration: 'Na Vai Yaace Raajyam Na Ca Kanaka_Maannikya_Vibhavam\nNa Yaace-[A]ham Ramyaam Sakala_Jana_Kaamyaam Vara-Vadhuum |',
          englishMeaning: 'I do not ask for a kingdom, nor for the wealth of gold and jewels. I do not ask for a beautiful, desirable bride coveted by all men.',
        },
        {
          sanskrit: 'सदा काले काले प्रमथ_पतिना गीत_चरितो\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥७॥',
          transliteration: 'Sadaa Kaale Kaale Pramatha_Patinaa Giita_Carito\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||7||',
          englishMeaning: 'Whose glories are always sung at appropriate times by Lord Shiva (Lord of the Pramathas). May that Lord Jagannath be the object of my vision. (7)',
        },
        {
          sanskrit: 'हर त्वं संसारं द्रुततरमसारं सुरपते\nहर त्वं पापानां विततिमपरां यादवपते ।',
          transliteration: 'Hara Tvam Samsaaram Drutataram-Asaaram Sura-Pate\nHara Tvam Paapaanaam Vitatim-Aparaam Yaadava-Pate |',
          englishMeaning: 'O Lord of the gods, quickly remove this worthless cycle of birth and death! O Lord of the Yadus, remove the vast expanse of my sins!',
        },
        {
          sanskrit: 'अहो दीनेऽनाथे निहित_चरणो निश्चितमिदं\nजगन्नाथः स्वामी नयन_पथ_गामी भवतु मे ॥८॥',
          transliteration: 'Aho Diine-[A]naathe Nihita_Caranno Nishcitam-Idam\nJagannaathah Svaamii Nayana_Patha_Gaamii Bhavatu Me ||8||',
          englishMeaning: 'Ah, it is certain that You place Your feet upon the helpless and destitute. May that Lord Jagannath be the object of my vision. (8)',
        },
        {
          sanskrit: 'जगन्नाथाष्टकं पुण्यं यः पठेत् प्रयतः शुचि ।\nसर्वपाप_विशुद्धात्मा विष्णुलोकं स गच्छति ॥९॥',
          transliteration: 'Jagannaatha-Assttakam Punnyam Yah Patthet Prayatah Shuci |\nSarva-Paapa_Vishuddha-[A]atmaa Vissnnu-Lokam Sa Gacchati ||9||',
          englishMeaning: 'He who recites this sacred Jagannathashtakam with effort and purity, his soul purified from all sins, goes to the abode of Vishnu. (9)',
        },
      ],
    },
     {
      title: 'Lakshmi Nrisimha Karavalamba Stotram (लक्ष्मीनृसिंह करावलम्बम्)',
      slug: 'lakshmi-nrisimha-karavalamba-stotram',
      language: 'Sanskrit',
      deity: 'Lord Narasimha (Lakshmi Nrisimha)',
      composer: 'Adi Shankaracharya',
      verses: [
        {
          sanskrit: 'श्रीमत्पयोनिधिनिकेतन चक्रपाणे\nभोगीन्द्रभोगमणिरञ्जितपुण्यमूर्ते ।',
          transliteration: 'Shriimat-Payo-Nidhi-Niketana Cakra-Paanne\nBhogiindra-Bhoga-Manni-Ran.jita-Punnya-Muurte |',
          englishMeaning: 'O resident of the milky ocean, holding the Chakra in hand, O sacred form adorned with the gems on the hood of the king of serpents (Shesha).',
        },
        {
          sanskrit: 'योगीश शाश्वत शरण्य भवाब्धिपोत\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥१॥',
          transliteration: 'Yogiisha Shaashvata Sharannya Bhava-Abdhi-Pota\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||1||',
          englishMeaning: 'O Lord of Yogis, eternal refuge, boat across the ocean of existence, O Lakshmi Narasimha, please give me Your helping hand. (1)',
        },
        {
          sanskrit: 'ब्रह्मेन्द्ररुद्रमरुदर्ककिरीटकोटि_\nसङ्घट्टिताङ्घ्रिकमलामलकान्तिकान्त ।',
          transliteration: 'Brahmendra-Rudra-Marud-Arka-Kiriitta-Kotti_\nSangghattttita-Angghri-Kamala-Amala-Kaanti-Kaanta |',
          englishMeaning: 'Your lotus feet, pure and radiant, are touched by the crores of crowns of Brahma, Indra, Rudra, Maruts, and Surya.',
        },
        {
          sanskrit: 'लक्ष्मीलसत्कुचसरोरुहराजहंस\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥२॥',
          transliteration: 'Lakssmii-Lasat-Kuca-Saro-Ruha-Raajahamsa\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||2||',
          englishMeaning: 'O royal swan residing in the lotus-like bosom of shining Lakshmi, O Lakshmi Narasimha, please give me Your helping hand. (2)',
        },
        {
          sanskrit: 'संसारघोरगहने चरतो मुरारे\nमारोग्रभीकरमृगप्रवरार्दितस्य ।',
          transliteration: 'Samsaara-Ghora-Gahane Carato Muraare\nMaaro[a-U]gra-Bhiikara-Mrga-Pravara-Arditasya |',
          englishMeaning: 'O Murari, I wander in the dreadful forest of Samsara, tormented by the fierce and terrifying beast of desire.',
        },
        {
          sanskrit: 'आर्तस्य मत्सरनिदाघनिपीडितस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥३॥',
          transliteration: 'Aartasya Matsara-Nidaagha-Nipiidditasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||3||',
          englishMeaning: 'Afflicted and oppressed by the heat of jealousy, O Lakshmi Narasimha, please give me Your helping hand. (3)',
        },
        {
          sanskrit: 'संसारकूपमतिघोरमगाधमूलं\nसम्प्राप्य दुःखशतसर्पसमाकुलस्य ।',
          transliteration: 'Samsaara-Kuupam-Ati-Ghoram-Agaadha-Muulam\nSampraapya Duhkha-Shata-Sarpa-Samaakulasya |',
          englishMeaning: 'Having fallen into the extremely dreadful, bottomless well of Samsara, infested with hundreds of serpents of sorrow.',
        },
        {
          sanskrit: 'दीनस्य देव कृपणापदमागतस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥४॥',
          transliteration: 'Diinasya Deva Krpanna-[A]apadam-Aagatasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||4||',
          englishMeaning: 'O Lord, I am wretched and have fallen into a miserable state, O Lakshmi Narasimha, please give me Your helping hand. (4)',
        },
        {
          sanskrit: 'संसारसागरविशालकरालकाल_\nनक्रग्रहग्रसननिग्रहविग्रहस्य ।',
          transliteration: 'Samsaara-Saagara-Vishaala-Karaala-Kaala_\nNakra-Graha-Grasana-Nigraha-Vigrahasya |',
          englishMeaning: 'In the vast ocean of Samsara, I am being seized and devoured by the terrible crocodile of Time.',
        },
        {
          sanskrit: 'व्यग्रस्य रागरसनोर्मिनिपीडितस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥५॥',
          transliteration: 'Vyagrasya Raaga-Rasano[a-U]rmi-Nipiidditasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||5||',
          englishMeaning: 'Distressed and tormented by the waves of attachment and desire, O Lakshmi Narasimha, please give me Your helping hand. (5)',
        },
        {
          sanskrit: 'संसारवृक्षमघबीजमनन्तकर्म_\nशाखाशतं करणपत्रमनङ्गपुष्पम् ।',
          transliteration: 'Samsaara-Vrkssam-Agha-Biijam-Ananta-Karma_\nShaakhaa-Shatam Karanna-Patram-Anangga-Pusspam |',
          englishMeaning: 'The tree of Samsara has sin as its seed, infinite karmas as its hundreds of branches, the senses as its leaves, and desire as its flower.',
        },
        {
          sanskrit: 'आरुह्य दुःखफलितं पततो दयालो\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥६॥',
          transliteration: 'Aaruhya Duhkha-Phalitam Patato Dayaalo\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||6||',
          englishMeaning: 'Having climbed it, yielding the fruit of sorrow, I am falling down. O Compassionate One, O Lakshmi Narasimha, please give me Your helping hand. (6)',
        },
        {
          sanskrit: 'संसारसर्पघनवक्त्रभयोग्रतीव्र_\nदंष्ट्राकरालविषदग्धविनष्टमूर्तेः ।',
          transliteration: 'Samsaara-Sarpa-Ghana-Vaktra-Bhayo[a-U]gra-Tiivra_\nDamssttraa-Karaala-Vissa-Dagdha-Vinasstta-Muurteh |',
          englishMeaning: 'My form is destroyed, burnt by the terrible poison from the fangs in the dreadful, fierce mouth of the dense serpent of Samsara.',
        },
        {
          sanskrit: 'नागारिवाहन सुधाब्धिनिवास शौरे\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥७॥',
          transliteration: 'Naagaari-Vaahana Sudhaa-[A]bdhi-Nivaasa Shaure\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||7||',
          englishMeaning: 'O rider of Garuda (enemy of serpents), O resident of the nectar ocean, O Shauri, O Lakshmi Narasimha, please give me Your helping hand. (7)',
        },
        {
          sanskrit: 'संसारदावदहनातुरभीकरोरु_\nज्वालावलीभिरतिदग्धतनूरुहस्य ।',
          transliteration: 'Samsaara-Daava-Dahana-[A]atura-Bhiikaro-Ru_\nJvaalaa-Valiibhir-Ati-Dagdha-Tanuuruhasya |',
          englishMeaning: 'Afflicted by the dreadful forest fire of Samsara, my body hair excessively burnt by rows of huge flames.',
        },
        {
          sanskrit: 'त्वत्पादपद्मसरसीशरणागतस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥८॥',
          transliteration: 'Tvat-Paada-Padma-Sarasii-Sharannaagatasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||8||',
          englishMeaning: 'Having taken refuge in the lake of Your lotus feet, O Lakshmi Narasimha, please give me Your helping hand. (8)',
        },
        {
          sanskrit: 'संसारजालपतितस्य जगन्निवास\nसर्वेन्द्रियार्तवडिशार्थझषोपमस्य ।',
          transliteration: 'Samsaara-Jaala-Patitasya Jagan-Nivaasa\nSarve[a-I]ndriya-[A]arta-Vaddisha-[A]artha-Jhasso[a-U]pamasya |',
          englishMeaning: 'O Abode of the Universe, I have fallen into the net of Samsara, like a fish caught by the bait (sense objects) on the hook of the afflicted senses.',
        },
        {
          sanskrit: 'प्रोत्खण्डितप्रचुरतालुकमस्तकस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥९॥',
          transliteration: 'Protkhannddita-Pracura-Taaluka-Mastakasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||9||',
          englishMeaning: 'My palate and head are severely torn apart, O Lakshmi Narasimha, please give me Your helping hand. (9)',
        },
        {
          sanskrit: 'संसारभीकरकरीन्द्रकराभिघात_\nनिष्पिष्टमर्मवपुषः सकलार्तिनाश ।',
          transliteration: 'Samsaara-Bhiikara-Kariindra-Kara-Abhighaata_\nNisspisstta-Marma-Vapussah Sakala-[A]arti-Naasha |',
          englishMeaning: 'O Destroyer of all afflictions, my vital parts and body are crushed by the blows from the trunk of the terrible elephant of Samsara.',
        },
        {
          sanskrit: 'प्राणप्रयाणभवभीतिसमाकुलस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥१०॥',
          transliteration: 'Praanna-Prayaanna-Bhava-Bhiiti-Samaakulasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||10||',
          englishMeaning: 'Greatly agitated by the fear of death and departing life-breath, O Lakshmi Narasimha, please give me Your helping hand. (10)',
        },
        {
          sanskrit: 'अन्धस्य मे हृतविवेकमहाधनस्य\nचोरैः प्रभो बलिभिरिन्द्रियनामधेयैः ।',
          transliteration: 'Andhasya Me Hrta-Viveka-Mahaa-Dhanasya\nCoraih Prabho Balibhir-Indriyanaam-Adheyaih |',
          englishMeaning: 'O Lord, I am blind, my great wealth of discrimination has been stolen by the powerful thieves called the senses.',
        },
        {
          sanskrit: 'मोहान्धकूपकुहरे विनिपातितस्य\nलक्ष्मीनृसिंह मम देहि करावलम्बम् ॥११॥',
          transliteration: 'Moha-Andha-Kuupa-Kuhare Vinipaatitasya\nLakssmii-Nrsimha Mama Dehi Kara-Avalambam ||11||',
          englishMeaning: 'Cast down into the dark pit of delusion, O Lakshmi Narasimha, please give me Your helping hand. (11)',
        },
        {
          sanskrit: 'लक्ष्मीपते कमलनाभ सुरेश विष्णो\nवैकुण्ठ कृष्ण मधुसूदन पुष्कराक्ष ।',
          transliteration: 'Lakssmii-Pate Kamala-Naabha Suresha Vissnno\nVaikunnttha Krssnna Madhusuudana Pusskara-Akssa |',
          englishMeaning: 'O Lord of Lakshmi, Lotus-naveled One, Lord of gods, Vishnu, Vaikuntha, Krishna, Slayer of Madhu, Lotus-eyed One,',
        },
        {
          sanskrit: 'ब्रह्मण्य केशव जनार्दन वासुदेव\nदेवेश देहि कृपणस्य करावलम्बम् ॥१२॥',
          transliteration: 'Brahmannya Keshava Janaardana Vaasudeva\nDevesha Dehi Krpannasya Kara-Avalambam ||12||',
          englishMeaning: 'O Friend of Brahmanas, Keshava, Janardana, Vasudeva, Lord of gods, please give this wretched one Your helping hand. (12)',
        },
        {
          sanskrit: 'यन्माययोर्जितवपुःप्रचुरप्रवाह_\nमग्नार्थमत्र निवहोरुकरावलम्बम् ।',
          transliteration: 'Yan-Maayayo[a-U]rjita-Vapuh-Pracura-Pravaaha_\nMagna-Artham-Atra Nivaho[a-U]ru-Kara-Avalambam |',
          englishMeaning: 'By whose Maya this strong body is immersed in the abundant flow (of Samsara); for their sake, this great helping hand (stotra) is composed.',
        },
        {
          sanskrit: 'लक्ष्मीनृसिंहचरणाब्जमधुव्रतेन\nस्तोत्रं कृतं सुखकरं भुवि शङ्करेण ॥१३॥',
          transliteration: 'Lakssmii-Nrsimha-Caranna-Abja-Madhuvratena\nStotram Krtam Sukha-Karam Bhuvi Shangkarenna ||13||',
          englishMeaning: 'By Shankara, a bee at the lotus feet of Lakshmi Narasimha, this stotra, bestower of happiness on earth, was created. (13)',
        },
      ],
    },
  // Add more stotras here in the future
].map(stotra => ({ ...stotra, slug: createSlug(stotra.title) })); // Ensure slugs are generated correctly


/**
 * Asynchronously retrieves a stotra by its slug.
 *
 * @param stotraSlug The slug of the stotra to retrieve.
 * @returns A promise that resolves to a Stotra object.
 * @throws Error if the stotra is not found.
 */
export async function getStotra(stotraSlug: string): Promise<Stotra> {
  // Simulate finding the stotra from the data array
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  const stotra = stotrasData.find(s => s.slug === stotraSlug);

  if (!stotra) {
    throw new Error(`Stotra with slug "${stotraSlug}" not found.`);
  }

  return stotra;
}


/**
 * Asynchronously retrieves all available stotras.
 *
 * @returns A promise that resolves to an array of Stotra objects.
 */
export async function getAllStotras(): Promise<Stotra[]> {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  // Return the placeholder data
  return stotrasData;
}

/**
 * Asynchronously retrieves stotras associated with a specific deity.
 *
 * @param deityName The name of the deity.
 * @returns A promise that resolves to an array of Stotra objects related to the deity.
 */
export async function getStotrasByDeity(deityName: string): Promise<Stotra[]> {
  const allStotras = await getAllStotras();
  // Filter stotras where the deity name includes the provided name (case-insensitive)
  // Also check if the deity name is part of a compound deity string like "Lord Krishna / Rama"
  // Normalize deity names for comparison
  const normalizedDeityName = deityName.toLowerCase().trim();
  return allStotras.filter(stotra =>
      stotra.deity.toLowerCase().split('/').map(d => d.trim()).includes(normalizedDeityName) ||
      stotra.deity.toLowerCase().includes(normalizedDeityName) ||
      // Handle cases like "Lord Krishna (Nandakumara)" or "Lord Jagannath (Krishna)" or "Lord Narasimha (Lakshmi Nrisimha)"
      stotra.deity.toLowerCase().includes(`(${normalizedDeityName})`)
  );
}
