

/**
 * Represents a simple Mantra.
 */
export interface Mantra {
  /**
   * The mantra text in Sanskrit/original script.
   */
  sanskrit: string;
  /**
   * The transliteration of the mantra.
   */
  transliteration: string;
  /**
   * A brief meaning or purpose of the mantra.
   */
  meaning: string;
   /**
   * Deity associated with the Mantra
   */
  deity: string;
  /**
   * Optional: A short description or context.
   */
  description?: string;
}

// Updated placeholder data for mantras
// Combine existing and new mantras
const mantrasData: Mantra[] = [
  {
    sanskrit: 'नमो ब्रह्मण्य देवाय गोब्राह्मण हिताय च ।\nजगत् हिताय कृष्णाय गोविन्दाय नमो नमः ॥',
    transliteration: 'Namo Brahmanya Devaya Go Brahmana Hitaya Cha |\nJagat Hitaya Krishnaya Govindaya Namo Namah ||',
    meaning: 'Salutations to the Lord who is dear to the Brahmanas, the well-wisher of cows and Brahmanas, the well-wisher of the universe, Krishna, Govinda, salutations again and again.',
    deity: 'Lord Krishna / Vishnu',
    description: 'A prayer glorifying Lord Krishna as the protector of cows, Brahmanas, and the entire universe.'
  },
  {
    sanskrit: 'मूकं करोति वाचालं पङ्गुं लङ्घयते गिरिं ।\nयत्कृपा तमहं वन्दे परमानन्द माधवम् ॥',
    transliteration: 'Mukam Karoti Vachalam Pangum Langhayate Girim |\nJatkripa Tamaham Vande Paramananda Madhavam ||',
    meaning: 'By His grace, the mute becomes eloquent and the lame can cross mountains. I bow to that Madhava, the embodiment of supreme bliss.',
    deity: 'Lord Vishnu (Madhava)',
    description: 'A prayer acknowledging the power of divine grace.'
  },
  {
    sanskrit: 'कृष्णाय वासुदेवाय देवकी नन्दनाय च ।\nनन्दगोप कुमाराय गोविन्दाय नमो नमः ॥',
    transliteration: 'Krishnaya Vasudevaya Devaki Nandanaya Cha |\nNandagopa Kumaraya Govindaya Namo Namah ||',
    meaning: 'Salutations to Krishna, son of Vasudeva and Devaki, the beloved son of Nanda Gopa, Govinda, salutations again and again.',
    deity: 'Lord Krishna',
    description: 'A popular mantra praising Lord Krishna by various names and relations.'
  },
  {
    sanskrit: 'एकोनविंशे विंशतिमे वृष्णिषु प्राप्य जन्मनी ।\nरामकृष्णाविति भुवो भगवानहरद्भ‍रम् ॥१.३.२३॥',
    transliteration: 'Ekonovimse Vimsatime Vrisnisu Prapya Janmani |\nRamakrishnaviti Bhuvo Bhagavanahardbharram ||1.3.23||',
    meaning: 'In the nineteenth and twentieth incarnations, the Lord appeared in the Vrishni dynasty as Rama and Krishna, and thus the Personality of Godhead relieved the burden of the world.',
    deity: 'Lord Rama & Lord Krishna',
    description: 'From Shrimad Bhagavatam (1.3.23), describing the incarnations of Rama and Krishna.'
  },
   {
    sanskrit: 'कस्तूरीतिलकं ललाटपटले वक्षःस्थले कौस्तुभं\nनासाग्रे नवमौक्तिकं करतले वेणुं करे कङ्कणम् ।\nसर्वाङ्गे हरिचन्दनं सुललितं कण्ठे च मुक्तावलिं\nगोपस्त्री परिवेष्टितो विजयते गोपाल चूडामणिः ॥',
    transliteration: 'Kasturi Tilakam Lalata Patale Vakshah Sthale Kaustubham\nNasagre Nava Mauktikam Karatale Venum Kare Kankanam |\nSarvange Hari Chandanam Sulalitam Kanthe Cha Muktavalim\nGopa Stri Pariveshtito Vijayate Gopala Chudamanihi ||',
    meaning: 'With a Kasturi mark on His forehead, Kaustubha jewel on His chest, a fresh pearl on His nose-tip, flute in His palm, bracelet on His wrist, fine sandalwood paste smeared all over His body, a pearl necklace around His neck, surrounded by Gopis - Victorious is Gopala, the crest-jewel!',
    deity: 'Lord Krishna (Gopala)',
    description: 'A beautiful description of the adorned form of Lord Gopala (Krishna).'
  },
  // Rama Mantras
  {
    sanskrit: 'लोकाभिरामं रणरङ्गधीरं राजीवनेत्रं रघुवंशनाथम् ।\nकारुण्यरुपं करुणाकरंतं श्रीरामचंद्रं शरणं प्रपद्ये ॥',
    transliteration: 'Lokabhiramam Ranarangadhiram Rajivane tram Raghuvamshanatham |\nKarunyarupam Karunakarantaṃ Shriramachandram Sharanam Prapadye ||',
    meaning: 'He who is charming to the people, steadfast in the battlefield, lotus-eyed, the Lord of the Raghu dynasty, the embodiment of compassion, the merciful one - I take refuge in Lord Ramachandra.',
    deity: 'Lord Rama',
    description: 'A prayer seeking refuge in Lord Rama, highlighting His virtues.'
  },
  {
    sanskrit: 'माता रामो मत्पिता रामचन्द्रः ।\nस्वामी रामो मत्सखा रामचन्द्रः ॥\nसर्वस्वं मे रामचन्द्रो दयालु ।\nनान्यं जाने नैव जाने न जाने ॥',
    transliteration: 'Maataa Raamo Mat-Pitaa Raamacandrah |\nSvaamii Raamo Mat-Sakhaa Raamacandrah ||\nSarvasvam Me Raamacandro Dayaalu |\nNa-Anyam Jaane Nai[a-E]va Jaane Na Jaane ||',
    meaning: 'Rama is my mother, Ramachandra is my father. Rama is my Lord, Ramachandra is my friend. The merciful Ramachandra is everything to me. I know no other, I know no other, I know no other.',
    deity: 'Lord Rama',
    description: 'A declaration of complete surrender and devotion to Lord Rama.'
  },
  {
    sanskrit: 'नरदेवत्वमापन्नः सुरकार्यचिकीर्षया ।\nसमुद्रनिग्रहादीनि चक्रे वीर्याण्यतः परम् ॥१.३.२२॥',
    transliteration: 'Naradeva-Tvam-Aapannah Sura-Kaarya-Cikiirssayaa |\nSamudra-Nigraha-[A]adiini Cakre Viiryaanny[i]-Atah Param ||1.3.22||',
    meaning: 'Assuming the form of a human king (Rama) with the desire to perform deeds for the Devas, He performed heroic acts like controlling the ocean and others thereafter.',
    deity: 'Lord Rama',
    description: 'From Shrimad Bhagavatam (1.3.22), describing Lord Rama\'s incarnation and deeds.'
  },
  {
    sanskrit: 'राम राम रामेति रमे रामे मनोरमे ।\nसहस्रनाम तत्तुल्यं रामनाम वरानने ॥',
    transliteration: 'Rama Rama Rameti Rame Rame Manorame |\nSahasranama Tat Tulyam Rama Nama Varanane ||',
    meaning: 'Uttering "Rama Rama Rama," I rejoice in the enchanting Rama. O beautiful-faced one (Parvati), the name "Rama" is equivalent to a thousand names (of Vishnu).',
    deity: 'Lord Rama',
    description: 'A famous verse from the Padma Purana, highlighting the potency of chanting Rama\'s name, as told by Lord Shiva to Parvati.'
  },
  {
    sanskrit: 'रामो राजमणिः सदा विजयते रामं रमेशं भजे\nरामेणाभिहता निशाचरचमूः रामाय तस्मै नमः ।\nरामान्नास्ति परायणंपरतरं रामस्य दासोस्म्यहं\nरामे चित्तलयस्सदा भवतु मे भो राम मामुद्धर ॥',
    transliteration: 'Ramo Rajamanih Sada Vijayate Ramam Ramesham Bhaje\nRamenabhihata Nishacharacamuuh Ramaya Tasmai Namah |\nRamannasti Parayanamparataram Ramasya Dasosmyaham\nRame Cittalahassayada Bhavatu Me Bho Rama Mamuddhara ||',
    meaning: 'Rama, the jewel among kings, is always victorious. I worship Rama, the Lord of Lakshmi. By Rama, the army of night-wanderers (demons) was destroyed. Salutations to that Rama. There is no higher refuge than Rama. I am the servant of Rama. May my mind always be absorbed in Rama. O Rama, please uplift me!',
    deity: 'Lord Rama',
    description: 'A comprehensive prayer extolling Lord Rama\'s glory, seeking refuge, and praying for devotion and liberation.'
  },
  // Dashavatar Mantras from Bhagavatam
  {
    sanskrit: 'रूपं स जगृहे मात्स्यं चाक्षुषोदधिसम्प्लवे ।\nनाव्यारोप्य महीमय्यामपाद्वैवस्वतं मनुम् ॥१.३.१५॥',
    transliteration: 'Rūpaṃ sa jagṛhe mātsyaṃ cākṣuṣodadhisamplave |\n Nāvyāropya mahīmayyāmapādvaivasvataṃ manum ||1.3.15||',
    meaning: 'He took the form of Matsya during the Cākṣuṣa Manvantara flood, protecting Vaivasvata Manu by placing him on a boat.',
    deity: 'Matsya',
    description: 'Shrimad Bhagavatam 1.3.15 on Matsya Avatar.'
  },
  {
    sanskrit: 'सुरासुराणामुदधिं मथ्नतां मन्दराचलम् ।\nदध्रे कमठरूपेण पृष्ठ एकादशे विभुः ॥१.३.१६॥',
    transliteration: 'Surāsurāṇāmudadhiṃ mathnatāṃ mandarācalam |\n Dadhre kamaṭharūpeṇa pṛṣṭha ekādaśe vibhuḥ ||1.3.16||',
    meaning: 'In His eleventh incarnation as Kurma (tortoise), the Lord supported the Mandara Mountain on His back as the gods and demons churned the ocean.',
    deity: 'Kurma',
    description: 'Shrimad Bhagavatam 1.3.16 on Kurma Avatar.'
  },
  {
    sanskrit: 'द्वितीयं तु भवायास्य रसातलगतां महीम् ।\nउद्धरिष्यन्नुपादत्त यज्ञेशः सौकरं वपुः ॥१.३.७॥',
    transliteration: 'Dvitīyaṃ tu bhavāyāsya rasātalagatāṃ mahīm |\n Uddhariṣyannupādatta yajñeśaḥ saukaraṃ vapuḥ ||1.3.7||',
    meaning: 'For the welfare of the world, the Lord of sacrifices assumed His second incarnation as Varaha (boar) to lift the Earth which had sunk into the Rasātala ocean.',
    deity: 'Varaha',
    description: 'Shrimad Bhagavatam 1.3.7 on Varaha Avatar.'
  },
  {
    sanskrit: 'चतुर्दशं नारसिंहं बिभ्रद्दैत्येन्द्रमूर्जितम् ।\nददार करजैरूरावेरकां कटकृद्यथा ॥१.३.१८॥',
    transliteration: 'Caturdaśaṃ nārasiṃhaṃ bibhraddaityendramūrjitam |\n Dadāra karajairūrāverakāṃ kaṭakṛdyathā ||1.3.18||',
    meaning: 'In His fourteenth incarnation as Narasimha, He tore apart the powerful king of demons (Hiranyakashipu) with His nails on His lap, like a mat-maker splitting cane.',
    deity: 'Narasimha',
    description: 'Shrimad Bhagavatam 1.3.18 on Narasimha Avatar.'
  },
  {
    sanskrit: 'पञ्चदशं वामनकं कृत्वागादध्वरं बलेः ।\nपदत्रयं याचमानः प्रत्यादित्सुस्त्रिपिष्टपम् ॥१.३.१९॥',
    transliteration: 'Pañcadaśaṃ vāmanakaṃ kṛtvāgādadhvaraṃ baleḥ |\n Padatrayaṃ yācamānaḥ pratyāditsustripiṣṭapam ||1.3.19||',
    meaning: 'In His fifteenth incarnation as Vamana, He went to the sacrifice of Bali, asking for three steps of land, desiring to reclaim the three worlds.',
    deity: 'Vamana',
    description: 'Shrimad Bhagavatam 1.3.19 on Vamana Avatar.'
  },
  {
    sanskrit: 'अवतारे षोडशमे पश्यन् ब्रह्मद्रुहो नृपान् ।\nत्रिःसप्तकृत्वः कुपितो निःक्षत्रामकरोन्महीम् ॥१.३.२०॥',
    transliteration: 'Avatāre ṣoḍaśame paśyan brahmadruho nṛpān |\n Trisaptakṛtvaḥ kupito niḥkṣatrāmakaronmahīm ||1.3.20||',
    meaning: 'In His sixteenth incarnation (as Parashurama), seeing kings hostile to Brahmanas, He became angry and annihilated the Kshatriyas from the earth twenty-one times.',
    deity: 'Parashurama',
    description: 'Shrimad Bhagavatam 1.3.20 on Parashurama Avatar.'
  },
  {
    sanskrit: 'ततः कलौ सम्प्रवृत्ते सम्मोहाय सुरद्विषाम् ।\nबुद्धो नाम्नाञ्जनसुतः कीकटेषु भविष्यति ॥१.३.२४॥',
    transliteration: 'Tataḥ kalau sampravṛtte sammohāya suradviṣām |\n Buddho nāmnāñjanasutaḥ kīkaṭeṣu bhaviṣyati ||1.3.24||',
    meaning: 'Then, at the beginning of Kali Yuga, to delude the enemies of the gods, He will be born as Buddha, son of Anjana, in the Kīkaṭa region (Bihar).',
    deity: 'Buddha',
    description: 'Shrimad Bhagavatam 1.3.24 on Buddha Avatar.'
  },
  {
    sanskrit: 'अथासौ युगसन्ध्यायां दस्युप्रायेषु राजसु ।\nजनिता विष्णुयशसो नाम्ना कल्किर्जगत्पतिः ॥१.३.२५॥',
    transliteration: 'Athāsau yugasandhyāyāṃ dasyuprāyeṣu rājasu |\n Janitā viṣṇuyaśaso nāmnā kalkirjagatpatiḥ ||1.3.25||',
    meaning: 'Thereafter, at the conjunction of the age (end of Kali Yuga), when rulers are mostly like thieves, the Lord of the universe will be born as Kalki, son of Vishnuyasha.',
    deity: 'Kalki',
    description: 'Shrimad Bhagavatam 1.3.25 on Kalki Avatar.'
  },
];

/**
 * Asynchronously retrieves all available mantras.
 *
 * @returns A promise that resolves to an array of Mantra objects.
 */
export async function getAllMantras(): Promise<Mantra[]> {
  // In a real app, fetch from a DB or API. Here, we return static data.
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return mantrasData;
}
