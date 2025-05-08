/**
 * Represents data for an Abhimana Kshethram.
 */
export interface AbhimanaKshethram {
  /**
   * Serial number.
   */
  id: number;
  /**
   * The name of the temple.
   */
  name: string;
  /**
   * Presiding deities.
   */
  deity: string;
  /**
   * Placeholder hint for AI image generation or keywords.
   */
  imageHint: string;
  /**
   * Optional: URL to an image of the temple.
   */
  imageUrl?: string;
  /**
   * Optional: Location for more context if needed later.
   */
  location?: string; // Add location field for potential future use
}

// Data for 108 Abhimana Kshethrams
const abhimanaKshethramsData: AbhimanaKshethram[] = [
  { id: 1, name: 'Rajagopalaswamy Temple, Mannargudi', deity: 'Vidhya Rajagopalaswamy (Krishna)', imageHint: 'mannargudi rajagopalaswamy krishna temple' },
  { id: 2, name: 'Kothandaramar temple, Vaduvur', deity: 'Rama and Sita', imageHint: 'vaduvur kothandaramar rama sita temple' },
  { id: 3, name: 'Kothandaramar temple, Paruthiyur', deity: 'Rama and Sita', imageHint: 'paruthiyur kothandaramar rama sita temple' },
  { id: 4, name: 'Srinivasa Perumal Temple, Kudavasal', deity: 'Srinivasa Perumal with Sridevi, Bhudevi', imageHint: 'kudavasal srinivasa perumal temple' },
  { id: 5, name: 'Kalinga narthana krishna Temple', deity: 'Veda Naarayanar with Sridevi and Bhudevi', imageHint: 'kalinga narthana krishna veda narayanar temple' },
  { id: 6, name: 'Chakrapani Temple, Kumbakonam', deity: 'Chakrapani Perumal and Vijayalakshmi Thayar', imageHint: 'kumbakonam chakrapani vishnu temple' },
  { id: 7, name: 'Kothandaramar Temple, Adambar', deity: 'Rama with Sita', imageHint: 'adambar kothandaramar rama sita temple' },
  { id: 8, name: 'Kothandaramar Temple, Thillaivilagam', deity: 'Rama with Sita', imageHint: 'thillaivilagam kothandaramar rama sita temple' },
  { id: 9, name: 'Sri Lakshmi Narayana Perumal, Varagur', deity: 'Lakshmi Narayana Perumal, Venkatesha Perumal and Navaneetha Krishnan', imageHint: 'varagur lakshmi narayana venkatesha krishna temple' },
  { id: 10, name: 'Mudikondan Kothandaramar Temple', deity: 'Rama with Sita', imageHint: 'mudikondan kothandaramar rama sita temple' },
  { id: 11, name: 'Kothandaramaswamy Temple, Patteeswaram', deity: 'Rama with Sita', imageHint: 'patteeswaram kothandaramaswamy rama sita temple' },
  { id: 12, name: 'Sri Ranganathaswamy Temple, Thirumandangudi', deity: 'Ranganthaswamy and Ranganayaki Thayar.(Thondaradippodi Alvar avathara sthalam)', imageHint: 'thirumandangudi ranganathaswamy temple thondaradippodi alvar' },
  { id: 13, name: 'Ramaswamy Temple, Kumbakonam', deity: 'Rama with Sita', imageHint: 'kumbakonam ramaswamy rama sita temple' },
  { id: 14, name: 'Rajagopalaswamy Temple, Kumbakonam', deity: 'Rajagopalaswamy with Sridevi and Bhudevi', imageHint: 'kumbakonam rajagopalaswamy krishna temple' },
  { id: 15, name: 'Varahaperumal Temple, Kumbakonam', deity: 'Varaha with Bhudevi', imageHint: 'kumbakonam varahaperumal varaha temple' },
  { id: 16, name: 'Vasudeva Perumal Temple', deity: 'Vasudeva perumal with Sridevi and Bhudevi', imageHint: 'vasudeva perumal temple sridevi bhudevi' },
  { id: 17, name: 'Veetrirundha Perumal Temple', deity: 'Veetrindha Perumal with Bhudevi and Niladevi', imageHint: 'veetrirundha perumal temple bhudevi niladevi' },
  { id: 18, name: 'Amrithanarayana Perumal Temple', deity: 'Amritanarayana Perumal and Amrithavalli Thayar', imageHint: 'amrithanarayana perumal temple amrithavalli' },
  { id: 19, name: 'Anandha narayana perumal temple, Abaranadari, Nagapattinam', deity: 'Anandha narayana perumal and Alankaravalli Thayar', imageHint: 'abaranadari anandha narayana perumal temple' },
  { id: 20, name: 'Devanarayana Perumal temple, Thevur, Nagapattinam', deity: 'Deva Narayana Perumal with Sridevi and Bhudevi', imageHint: 'thevur devanarayana perumal temple' },
  { id: 21, name: 'Varadha Narayana Perumal Temple, Vadakalathur, Nagapattinam', deity: 'Varadha Narayana Perumal and Perundevi Thayar', imageHint: 'vadakalathur varadha narayana perumal temple' },
  { id: 22, name: 'Yadhava Perumal Temple, Kizhvelur, Nangapattinam', deity: 'Yadhava Perumal with Sridevi and Bhudevi', imageHint: 'kizhvelur yadhava perumal temple' },
  { id: 23, name: 'Sri Veeranarayana Perumal', deity: 'Veeranarayana Perumal and Maragadhavalli Thayar', imageHint: 'veeranarayana perumal temple maragadhavalli' },
  { id: 24, name: 'Sri Renganatha Perumal Temple, Vadarengam', deity: 'Ranganatha Perumal and Ranganayaki Thayar', imageHint: 'vadarengam ranganatha perumal temple' },
  { id: 25, name: 'Bhu Varaha Swamy temple', deity: 'Varaha and Ambujavalli Thayar', imageHint: 'bhu varaha swamy temple ambujavalli' },
  { id: 26, name: 'Adhirangam Ranganathaswamy temple', deity: 'Adi Ranganatha Perumal and Ranganayaki Thayar', imageHint: 'adhirangam ranganathaswamy temple' },
  { id: 27, name: 'Sri Lakshmi Narasimhswamy Temple, Polur', deity: 'Narasimha and Kanagavalli Thayar', imageHint: 'polur lakshmi narasimha temple' },
  { id: 28, name: 'Sri Yoga Rama temple', deity: 'Yoga Rama and Shengamalavalli Thayar', imageHint: 'yoga rama temple shengamalavalli' },
  { id: 29, name: 'Eri-Katha Ramar Temple', deity: 'Erikatha Rama and Janakavalli Thayar (Sita)', imageHint: 'eri katha ramar temple sita' },
  { id: 30, name: 'Sundaravarada Perumal temple', deity: 'Sundaravarada Perumal and Anandavalli Thayar', imageHint: 'sundaravarada perumal temple anandavalli' },
  { id: 31, name: 'Padalathri Narasimhar Temple', deity: 'Padalathri Narasimhar and Ahobilavalli Thayar', imageHint: 'padalathri narasimha temple ahobilavalli' },
  { id: 32, name: 'Adikesava Perumal temple, Mylapore', deity: 'Adi Keshava perumal and Mayuravalli Thayar', imageHint: 'mylapore adikesava perumal temple' },
  { id: 33, name: 'Madhava Perumal temple, Mylapore', deity: 'Madhava Perumal and Amrithavalli Thayar', imageHint: 'mylapore madhava perumal temple' },
  { id: 34, name: 'Jagannatha Perumal temple', deity: 'Jaganatha Perumal and Thirumangaivalli Thayar', imageHint: 'jagannatha perumal temple thirumangaivalli' },
  { id: 35, name: 'Adikesava Perumal temple, Sriperumpudur', deity: 'Adi Keshava Perumal and Yathirajavalli Thayar', imageHint: 'sriperumpudur adikesava perumal temple ramanuja' },
  { id: 36, name: 'Prasanna Venkatesa Perumal Temple, Thiruparkadal', deity: 'Venkateshwara and Padmavathy', imageHint: 'thiruparkadal prasanna venkatesa perumal temple' },
  { id: 37, name: 'Varadaraja Perumal Temple, Shoolagiri', deity: 'Varadaraja Perumal and Perundevi Thayar', imageHint: 'shoolagiri varadaraja perumal temple' },
  { id: 38, name: 'Betrayaswamy Perumal temple, Denkanikottai', deity: 'Betrayaswamy Perumal and Soundaryavalli Thayar', imageHint: 'denkanikottai betrayaswamy perumal temple' },
  { id: 39, name: 'Adi Srinivasa perumal temple, Mookanur, Dharmapuri', deity: 'Adi moola Srinivasa Perumal and Padmavathy Thayar', imageHint: 'mookanur adi srinivasa perumal temple' },
  { id: 40, name: 'Kodandaramaswamy Temple, Ayothyapatinam, Salem', deity: 'Rama with Sita', imageHint: 'ayothyapatinam kodandaramaswamy rama sita temple' },
  { id: 41, name: 'Sundararaja Perumal Temple, Salem', deity: 'Sundararaja Perumal and Sundaravalli Thayar', imageHint: 'salem sundararaja perumal temple' },
  { id: 42, name: 'Narasimhaswamy Temple, Namakkal', deity: 'Narasimha and Namagiri Thayar', imageHint: 'namakkal narasimha temple hanuman' },
  { id: 43, name: 'Sri Kalyana Venkataramanaswamy, Thanthonimalai', deity: 'Swayambu Sri Kalyana Venkataramanaswamy and Lakshmi in Vakshasthalam', imageHint: 'thanthonimalai kalyana venkataramanaswamy temple' },
  { id: 44, name: 'Vedanarayana perumal temple, Thirunarayanapuram', deity: 'Vedanarayana Perumal and Vedanayaki Thayar', imageHint: 'thirunarayanapuram vedanarayana perumal temple' },
  { id: 45, name: 'Gunaseelam Prasanna Venkatachalapathy Temple', deity: 'Prasanna Venkatachalapathy and Lakshmi in Vakshasthalam', imageHint: 'gunaseelam prasanna venkatachalapathy temple' },
  { id: 46, name: 'Kattu Narasimhaperumal Temple, Srirangam', deity: 'Lakshmi Narasimha Perumal And Lakshmi on his lap', imageHint: 'srirangam kattu narasimha temple' },
  { id: 47, name: 'Kaliyuga Varadaraja Perumal Temple, Ariyalur', deity: 'Varadaraja Perumal and Lakshmi in The Vakshasthala', imageHint: 'ariyalur kaliyuga varadaraja perumal temple' },
  { id: 48, name: 'Sri Venkatesa Perumal Temple (Melathiruppathi) – Mondipalayam', deity: 'Shaligrama Srinivasa Perumal', imageHint: 'mondipalayam venkatesa perumal melathiruppathi temple' },
  { id: 49, name: 'Soundararajaperumal temple, Thadikombu', deity: 'Soundararajaperumal and Soundaravalli', imageHint: 'thadikombu soundararaja perumal temple' },
  { id: 50, name: 'Ranganathaswamy temple, Karamadai', deity: 'Ranganatha Perumal and Ranganayaki Thayar', imageHint: 'karamadai ranganathaswamy temple' },
  { id: 51, name: 'Guruvayur Temple', deity: 'Guruvayoorapan and Lakshmi in Vakshasthalam', imageHint: 'guruvayur krishna temple kerala' },
  { id: 52, name: 'Janardanaswamy Temple, Varkala', deity: 'Janardanaswamy Perumal', imageHint: 'varkala janardanaswamy temple kerala' },
  { id: 53, name: 'Panniyur Sri Varahamurthy Temple', deity: 'Varaha with Bhudevi', imageHint: 'panniyur varahamurthy varaha temple kerala' },
  { id: 54, name: 'Ananthapura Lake Temple, Kasaragod', deity: 'Ananthapadmanabhaswamy Perumal', imageHint: 'ananthapura lake temple kasaragod kerala vishnu crocodile' },
  { id: 55, name: 'Thirunelli, Maha Vishnu Temple', deity: 'Maha Vishnu', imageHint: 'thirunelli maha vishnu temple kerala' },
  { id: 56, name: 'Thirupalkadal Sreekrishnaswamy Temple', deity: 'Krishna as Thirupalkadal Bhattarakar with Bhoodevi and Mahalakshmi', imageHint: 'thirupalkadal krishna temple kerala' },
  { id: 57, name: 'Thriprayar Rama Temple', deity: 'Rama', imageHint: 'thriprayar rama temple kerala' },
  { id: 58, name: 'Koodalmanikyam Temple', deity: 'Bharata', imageHint: 'koodalmanikyam bharata temple kerala' },
  { id: 59, name: 'Payammal Shatrughna Temple', deity: 'Shatrughna', imageHint: 'payammal shatrughna temple kerala' },
  { id: 60, name: 'Sri Krishna Trichambaram Temple', deity: 'Raudra Krishna', imageHint: 'trichambaram krishna temple kerala raudra' },
  { id: 61, name: 'Kanipura Sri Gopalakrishna Temple', deity: 'Gopalakrishna (Krishna)', imageHint: 'kanipura gopalakrishna temple kerala' },
  { id: 62, name: 'Maramkulangara Krishna Temple', deity: 'Krishna', imageHint: 'maramkulangara krishna temple kerala' },
  { id: 63, name: 'Sree Vasudevapuram Mahavishnu Temple', deity: 'Maha Vishnu and Ashta Lakshmi', imageHint: 'vasudevapuram mahavishnu ashta lakshmi temple kerala' },
  { id: 64, name: 'Sree Poornathrayeesa Temple', deity: 'Adi Narayana as Santhana gopala murthi', imageHint: 'poornathrayeesa santhana gopala temple kerala' },
  { id: 65, name: 'Ambalappuzha Sree Krishna Swamy Temple', deity: 'Krishna', imageHint: 'ambalappuzha krishna temple kerala paal payasam' },
  { id: 66, name: 'Chottanikkara Temple', deity: 'Lakshmi Narayana', imageHint: 'chottanikkara lakshmi narayana temple kerala bhagavathy' },
  { id: 67, name: 'Andalurkavu Sri Ramachandramoorthi Temple', deity: 'Rama', imageHint: 'andalurkavu ramachandra theyyam temple kerala' },
  { id: 68, name: 'Sree Krishna Swami Temple, Thodupuzha', deity: 'Krishna', imageHint: 'thodupuzha krishna temple kerala' },
  { id: 69, name: 'Evoor Major Sri Krishnaswamy Temple', deity: 'Krishna', imageHint: 'evoor krishna temple kerala' },
  { id: 70, name: 'Thiruvallam Sree Parasurama Temple', deity: 'Parashurama', imageHint: 'thiruvallam parasurama temple kerala' },
  { id: 71, name: 'Vilwadrinatha Temple', deity: 'Rama', imageHint: 'vilwadrinatha rama temple kerala' },
  { id: 72, name: 'Trikkulasekharapuram Sri Krishna Temple', deity: 'Krishna', imageHint: 'trikkulasekharapuram krishna temple kerala' },
  { id: 73, name: 'Ramapuram Sree Rama Temple', deity: 'Rama with Sita', imageHint: 'ramapuram rama sita temple kerala nalambalam' },
  { id: 74, name: 'Varadaraja Perumal, Thiruvenkatanathapuram', deity: 'Varadaraja Perumal With Sri Devi and Bhoo Devi', imageHint: 'thiruvenkatanathapuram varadaraja perumal temple' },
  { id: 75, name: 'Thanumalayan Temple', deity: 'Brahma Vishnu and Shiva', imageHint: 'suchindram thanumalayan trimurti temple' },
  { id: 76, name: 'Padhmanabhaswamy Perumal temple, Nellaiappar Temple', deity: 'Anathapadhmanabhaswamy and Gajalakshmi Thayar', imageHint: 'nellai padhmanabhaswamy vishnu nellaiappar temple' },
  { id: 77, name: 'Sri Varadharaja Perumal Kovil', deity: 'Varadaraja Perumal and Mahalakshmi Thayar', imageHint: 'varadharaja perumal kovil mahalakshmi' },
  { id: 78, name: 'Rajagopalaswamy Manarkoil', deity: 'Rajagopalaswamy Perumal', imageHint: 'manarkoil rajagopalaswamy temple' },
  { id: 79, name: 'Kattalagar Perumal Temple', deity: 'Kallazhagar Perumal', imageHint: 'kattalagar perumal temple kallazhagar' },
  { id: 80, name: 'Kothandaramaswamy Temple, Rameshwaram', deity: 'Rama and Seetha Pirati (Sita)', imageHint: 'rameshwaram kothandaramaswamy rama sita temple' },
  { id: 81, name: 'Ranganathaswamy Temple, Srirangapatna', deity: 'Ranganathaswamy and Ranganayaki Devi', imageHint: 'srirangapatna ranganathaswamy temple karnataka pancharanga' },
  { id: 82, name: 'Ranganathaswamy Temple, Shivanasamudra', deity: 'Ranganathaswamy and Ranganayaki', imageHint: 'shivanasamudra ranganathaswamy temple karnataka pancharanga' },
  { id: 83, name: 'Cheluvanarayana Swamy Temple', deity: 'Cheluvanarayana Swamy', imageHint: 'melkote cheluvanarayana swamy temple karnataka vairamudi' },
  { id: 84, name: 'Gunja Narasimha Swamy Temple, Tirumakudal Narasipura', deity: 'Narasimha and Lakshmi Devi', imageHint: 'tirumakudal narasipura gunja narasimha temple karnataka' },
  { id: 85, name: 'Udupi Sri Krishna Matha', deity: 'Krishna', imageHint: 'udupi krishna matha karnataka madhvacharya' },
  { id: 86, name: 'Kalady Krishna Temple', deity: 'Sree Krishnaswamy', imageHint: 'kalady krishna temple kerala adi shankara' },
  { id: 87, name: 'Narasimha Jharni', deity: 'Sri Lakshmi Nararasimhswamy', imageHint: 'bidar narasimha jharni cave temple karnataka' },
  { id: 88, name: 'Kurmanathaswamy temple, Srikurmam', deity: 'Kurmanathaswamy and Kurmanayaki Devi', imageHint: 'srikurmam kurmanathaswamy kurma temple andhra pradesh' },
  { id: 89, name: 'Yogananda Lakshmi Narasimha Swamy Temple, Mattapalli', deity: 'Sri Yogananda Lakshmi Narasimha with Rajalakshmi Thayar and Chenchu Lakshmi Thayar', imageHint: 'mattapalli yogananda lakshmi narasimha temple andhra pradesh' },
  { id: 90, name: 'Varaha Lakshmi Narasimha temple, Simhachalam', deity: 'Varaha Narasimha and Simhavalli thayar', imageHint: 'simhachalam varaha lakshmi narasimha temple andhra pradesh' },
  { id: 91, name: 'Sita Ramachandraswamy Temple, Bhadrachalam', deity: 'Rama with Sita', imageHint: 'bhadrachalam sita ramachandraswamy temple telangana' },
  { id: 92, name: 'Lakshmi Narasimha Temple, Mangalagiri', deity: 'Lakshmi Narasimha', imageHint: 'mangalagiri lakshmi narasimha temple andhra pradesh panakala swamy' },
  { id: 93, name: 'Kodandarama Temple, Tirupati', deity: 'Rama with Sita', imageHint: 'tirupati kodandarama temple andhra pradesh rama sita' },
  { id: 94, name: 'Jagannath Temple, Puri', deity: 'Jaganatha', imageHint: 'puri jagannath temple odisha rath yatra' },
  { id: 95, name: 'Chakra Narasimha Temple', deity: 'Chakra Narasimha', imageHint: 'chakra narasimha temple location needed' }, // Needs location
  { id: 96, name: 'Vithoba Temple', deity: 'Vithoba and Rakhumai', imageHint: 'pandharpur vithoba temple maharashtra' },
  { id: 97, name: 'Alarnatha Mandira', deity: 'Maha Vishnu as Jaganatha (Azhwarnathar)', imageHint: 'alarnath mandir odisha jagannath' },
  { id: 98, name: 'Jyotisar', deity: 'Krishna', imageHint: 'jyotisar kurukshetra krishna gita updesh haryana' },
  { id: 99, name: 'Narayan Sarovar', deity: 'Maha Vishnu', imageHint: 'narayan sarovar gujarat kutch vishnu sacred lake' },
  { id: 100, name: 'Sakhigopal Temple', deity: 'Gopinatha', imageHint: 'sakhigopal temple odisha gopinatha krishna' },
  { id: 101, name: 'Khirachora Gopinatha Temple', deity: 'Gopinatha', imageHint: 'remuna khirachora gopinatha temple odisha krishna' },
  { id: 102, name: 'Charbhuja Nath Temple', deity: 'Charbhuja Nath', imageHint: 'charbhuja nath temple rajasthan vishnu' },
  { id: 103, name: 'Vishnuprayag', deity: 'Maha Vishnu as Theertham', imageHint: 'vishnuprayag uttarakhand confluence alaknanda river' },
  { id: 104, name: 'Vishnupad Temple, Gaya', deity: 'Maha Vishnu', imageHint: 'gaya vishnupad temple bihar vishnu footprint' },
  { id: 105, name: 'Tri Yugi Narayanaswamy Temple', deity: 'Narayana and Lakshmi', imageHint: 'triyuginarayan temple uttarakhand shiva parvati wedding vishnu' },
  { id: 106, name: 'Narasimha temple, Jyothir Math', deity: 'Narasimha', imageHint: 'joshimath narasimha temple uttarakhand adi shankara' },
  { id: 107, name: 'Adi Keshava Temple, Kashi', deity: 'Adi Keshava', imageHint: 'varanasi adi keshava temple kashi vishnu' },
  { id: 108, name: 'Yoga-Narasimha Swamy Temple', deity: 'Saligrama Yoga Narasimha', imageHint: 'yoga narasimha swamy temple location needed saligrama' }, // Needs location
].map(temple => ({
  ...temple,
  imageUrl: `https://picsum.photos/seed/${temple.id}-${temple.name.split(',')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')}/400/300`
}));

/**
 * Asynchronously retrieves all Abhimana Kshethram data.
 *
 * @returns A promise that resolves to an array of AbhimanaKshethram objects.
 */
export async function getAllAbhimanaKshethrams(): Promise<AbhimanaKshethram[]> {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50));
  return abhimanaKshethramsData;
}

/**
 * Asynchronously retrieves a single Abhimana Kshethram by its ID.
 *
 * @param id The ID of the Abhimana Kshethram to retrieve.
 * @returns A promise that resolves to an AbhimanaKshethram object, or null if not found.
 */
export async function getAbhimanaKshethramById(id: number): Promise<AbhimanaKshethram | null> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 50));
    const kshethram = abhimanaKshethramsData.find(k => k.id === id);
    return kshethram || null;
}
