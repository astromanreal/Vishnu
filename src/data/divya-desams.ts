/**
 * Represents data for a Divya Desam temple.
 */
export interface DivyaDesam {
  /**
   * The name of the Divya Desam temple.
   */
  name: string;
  /**
   * Location of the temple.
   */
  location: string;
  /**
   * State or region.
   */
  state: string;
  /**
   * Presiding deities of the temple.
   */
  deities: string;
  /**
   * Placeholder hint for AI image generation or keywords.
   */
  imageHint: string;
  /**
   * Optional: URL to an image of the temple (using picsum for placeholders).
   */
  imageUrl?: string;
  /**
   * Unique identifier (e.g., sequence number or specific name).
   */
  id: string | number;
}

// Placeholder data for Divya Desams based on the provided list
// Note: Parsing exact deities can be complex due to formatting variations. Using the provided string.
// Coordinates removed for brevity in this data structure.
const divyaDesamsData: DivyaDesam[] = [
  {
    id: 1,
    name: 'Ranganathaswamy Temple, Srirangam',
    location: 'Srirangam, Trichy district',
    state: 'Tamil Nadu',
    deities: 'Ranganathaswamy Perumal and Ranganayaki Thayar',
    imageHint: 'srirangam ranganathaswamy temple vishnu',
    imageUrl: `https://picsum.photos/seed/srirangam/400/300`
  },
  {
    id: 2,
    name: 'Thirukoḻi (Azhagiya Manavala Perumal Temple)',
    location: 'Uraiyur, Trichy district',
    state: 'Tamil Nadu',
    deities: 'Kamalavalli Nachiyar and Aḻagiya Manavala Perumal',
    imageHint: 'uraiyur azhagiya manavala perumal nachiyar koil',
    imageUrl: `https://picsum.photos/seed/uraiyur/400/300`
  },
  {
    id: 3,
    name: 'Thirukkarambanoor (Purushottama Perumal Temple)',
    location: 'Uthamarkoil, Tiruchirappalli district',
    state: 'Tamil Nadu',
    deities: 'Purushottama Nayaki and Purushottama Perumal',
    imageHint: 'uthamarkoil purushottama perumal trimurti',
    imageUrl: `https://picsum.photos/seed/uthamarkoil/400/300`
  },
  {
    id: 4,
    name: 'Pundarikakshan Perumal Koil',
    location: 'Thiruvellarai, Trichy district',
    state: 'Tamil Nadu',
    deities: 'Pankaja Nayaki and Pundarikaksha Perumal',
    imageHint: 'thiruvellarai pundarikakshan perumal swastika tank',
    imageUrl: `https://picsum.photos/seed/thiruvellarai/400/300`
  },
  {
    id: 5,
    name: 'Vadivaḻagiya Nambi Perumal Koil',
    location: 'Anbil, Trichy district',
    state: 'Tamil Nadu',
    deities: 'Saundaryavalli and Sundararaja Perumal',
    imageHint: 'anbil vadivalagiya nambi sundararaja perumal',
    imageUrl: `https://picsum.photos/seed/anbil/400/300`
  },
  {
    id: 6,
    name: 'Appakkudathaan Perumal Koil',
    location: 'Koviladi, Tanjore district',
    state: 'Tamil Nadu',
    deities: 'Indravalli and Appakudatthan Perumal',
    imageHint: 'koviladi appakkudathaan perumal pancharanga',
    imageUrl: `https://picsum.photos/seed/koviladi/400/300`
  },
  {
    id: 7,
    name: 'Hara Saabha Vimocchana Perumal Temple',
    location: 'Kandiyur, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Kamalavalli and Hara Saabha Vimochana Perumal',
    imageHint: 'kandiyur hara saabha vimochana perumal shiva',
    imageUrl: `https://picsum.photos/seed/kandiyur/400/300`
  },
  {
    id: 8,
    name: 'Thirukoodalur (Jagathrakshaga Perumal Temple)',
    location: 'Aduthurai, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Padmasani and Jagathrakshaga Perumal',
    imageHint: 'thirukoodalur jagathrakshaga perumal kaveri',
    imageUrl: `https://picsum.photos/seed/thirukoodalur/400/300`
  },
  {
    id: 9,
    name: 'Thirukavithalam (Gajendra Varadha Perumal Temple)',
    location: 'Kabisthalam, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Ramamanivalli and Gajendra Varadha Perumal',
    imageHint: 'kabisthalam gajendra varadha perumal panchakanna',
    imageUrl: `https://picsum.photos/seed/kabisthalam/400/300`
  },
  {
    id: 10,
    name: 'Thiruppullamboothangudi (Valvil Ramar Temple)',
    location: 'Pullabhoothangudi, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Hemambujavalli and Rama Perumal',
    imageHint: 'pullabhoothangudi valvil ramar jatayu',
    imageUrl: `https://picsum.photos/seed/pullabhoothangudi/400/300`
  },
  {
    id: 11,
    name: 'Thiruaadhanur (Andalakkum Aiyyan Temple)',
    location: 'Adanur, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Ranganayaki Thayar and Andalukkum Aiyyan Perumal',
    imageHint: 'adanur andalakkum aiyyan kamadhenu',
    imageUrl: `https://picsum.photos/seed/adanur/400/300`
  },
  {
    id: 12,
    name: 'Thirukudanthai (Sarangapani Temple)',
    location: 'Kumbakonam, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Komalavalli and Aravamuda Perumal (Sarangapani)',
    imageHint: 'kumbakonam sarangapani temple aravamudhan pancharanga',
    imageUrl: `https://picsum.photos/seed/kumbakonam/400/300`
  },
  {
    id: 13,
    name: 'Thiruvinnagar (Oppiliappan Temple)',
    location: 'Tirunageswaram, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Bhumidevi and Uppiliappan Perumal',
    imageHint: 'oppiliappan koil uppiliappan venkateswara',
    imageUrl: `https://picsum.photos/seed/oppiliappan/400/300`
  },
  {
    id: 14,
    name: 'Thirunaraiyur (Nachiyar Koil)',
    location: 'Nachiyar Kovil, Thiruvarur district',
    state: 'Tamil Nadu',
    deities: 'Vanchulavalli and Srinivasa Perumal (Thirunaraiyur Nambi)',
    imageHint: 'nachiyar koil kal garuda srinivasa',
    imageUrl: `https://picsum.photos/seed/nachiyarkoil/400/300`
  },
  {
    id: 15,
    name: 'Thirucherai (Saranatha Perumal Temple)',
    location: 'Tirucherai, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Saranayaki and Saranatha Perumal',
    imageHint: 'tirucherai saranatha perumal kaveri',
    imageUrl: `https://picsum.photos/seed/tirucherai/400/300`
  },
  {
    id: 16,
    name: 'Thirunandhipura Vinnagaram (Jagannatha Perumal Temple)',
    location: 'Nathan Kovil, Thiruvarur district',
    state: 'Tamil Nadu',
    deities: 'Shenbagavalli and Jagannatha Perumal',
    imageHint: 'nathan kovil jagannatha perumal nandi',
    imageUrl: `https://picsum.photos/seed/nathankovil/400/300`
  },
  {
    id: 17,
    name: 'Thiruvelliyangudi (Kolavilli Ramar Temple)',
    location: 'Thiruvelliyangudi, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Maragadhavalli and Kolavilli Rama Perumal',
    imageHint: 'thiruvelliyangudi kolavilli ramar sukran garuda',
    imageUrl: `https://picsum.photos/seed/thiruvelliyangudi/400/300`
  },
  {
    id: 18,
    name: 'Thirukannamangai (Bhaktavatsala Perumal Temple)',
    location: 'Thirukannamangai, Thiruvarur district',
    state: 'Tamil Nadu',
    deities: 'Abishekavalli and Bhaktavatsala Perumal',
    imageHint: 'thirukannamangai bhaktavatsala perumal panchakanna',
    imageUrl: `https://picsum.photos/seed/thirukannamangai/400/300`
  },
  {
    id: 19,
    name: 'Thirukannapuram (Neelamegha Perumal Temple)',
    location: 'Tirukannapuram, Nagapattinam district',
    state: 'Tamil Nadu',
    deities: 'Kannapura Nayaki and Sowriraja Perumal (Neelamegha)',
    imageHint: 'tirukannapuram sowriraja perumal neelamegha panchakanna',
    imageUrl: `https://picsum.photos/seed/tirukannapuram/400/300`
  },
  {
    id: 20,
    name: 'Thirukannangudi (Lokanatha Perumal Temple)',
    location: 'Tirukannankudi, Nagapattinam district',
    state: 'Tamil Nadu',
    deities: 'Loganayaki and Lokanatha Perumal',
    imageHint: 'tirukannankudi lokanatha perumal panchakanna',
    imageUrl: `https://picsum.photos/seed/tirukannankudi/400/300`
  },
  {
    id: 21,
    name: 'Thirunagai (Soundararaja Perumal Temple)',
    location: 'Nagapattinam, Nagapattinam district',
    state: 'Tamil Nadu',
    deities: 'Saundaryavalli and Sundararaja Perumal',
    imageHint: 'nagapattinam soundararaja perumal dhruva',
    imageUrl: `https://picsum.photos/seed/nagapattinam/400/300`
  },
  {
    id: 22, // Group of 3 temples
    name: 'Thiruthanjai Mamanikoil (Neelamegha Perumal Temple)',
    location: 'Thanjavur, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Raktapankajavalli and Neelamegha Perumal',
    imageHint: 'thanjavur neelamegha perumal mamanikoil',
    imageUrl: `https://picsum.photos/seed/thanjavur1/400/300`
  },
  {
    id: 23, // Group of 3 temples
    name: 'Manikundram (Manikundra Perumal Temple)',
    location: 'Thanjavur, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Ambujavalli and Manikundra Perumal',
    imageHint: 'thanjavur manikundra perumal mamanikoil',
    imageUrl: `https://picsum.photos/seed/thanjavur2/400/300`
  },
  {
    id: 24, // Group of 3 temples
    name: 'Thanjaiyali Nagar (Narasimha Perumal Temple)',
    location: 'Thanjavur, Thanjavur district',
    state: 'Tamil Nadu',
    deities: 'Thanjanayaki and Narasimha Perumal',
    imageHint: 'thanjavur narasimha perumal mamanikoil',
    imageUrl: `https://picsum.photos/seed/thanjavur3/400/300`
  },
  {
    id: 25,
    name: 'Thiruvazhundur (Devadiraja Perumal Temple)',
    location: 'Theranzhdur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Senkamalavalli and Sri Devadiraja Perumal (Amaruviappan)',
    imageHint: 'therazhundur devadiraja perumal amaruviappan',
    imageUrl: `https://picsum.photos/seed/therazhundur/400/300`
  },
  {
    id: 26,
    name: 'Thiruchirupuliyur (Krupasamudra Perumal Temple)',
    location: 'Thirusirupuliyur, Thiruvarur district',
    state: 'Tamil Nadu',
    deities: 'Dayanayaki and Krupasamudra Perumal',
    imageHint: 'tirusirupuliyur krupasamudra perumal vyaghrapada',
    imageUrl: `https://picsum.photos/seed/tirusirupuliyur/400/300`
  },
  {
    id: 27,
    name: 'Thiruthalaichanga Nanmadiyam (Naanmadhiya Perumal Temple)',
    location: 'Thalachangadu, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Thalaichanga Nachiyar and Chandrasaabahara Perumal (Naanmadhiya)',
    imageHint: 'thalachangadu naanmadhiya perumal chandra',
    imageUrl: `https://picsum.photos/seed/thalachangadu/400/300`
  },
  {
    id: 28,
    name: 'Thiruindalur (Parimala Ranganatha Perumal Temple)',
    location: 'Indalur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Parimala Ranganayaki and Sri Parimala Ranganatha Perumal',
    imageHint: 'mayiladuthurai parimala ranganatha perumal indalur chandra',
    imageUrl: `https://picsum.photos/seed/indalur/400/300`
  },
  {
    id: 29,
    name: 'Thirukazhicheerama Vinnagaram (Trivikrama Perumal Temple)',
    location: 'Sirkazhi, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Lokanayaki and Trivikrama Perumal (Tadalan)',
    imageHint: 'sirkazhi trivikrama perumal tadalan',
    imageUrl: `https://picsum.photos/seed/sirkazhi/400/300`
  },
  // Thirunangur Tirupatis (11 temples) - Grouping them for simplicity or list individually
   {
     id: 30,
     name: 'Thirukkavalambadi (Gopala Krishna Perumal Temple)',
     location: 'Thirunangur, Mayiladuthurai district',
     state: 'Tamil Nadu',
     deities: 'Senkamala Nachiyar and Gopala Krishna Perumal',
     imageHint: 'thirunangur gopala krishna thirukkavalambadi',
     imageUrl: `https://picsum.photos/seed/thirukkavalambadi/400/300`
   },
   {
     id: 31,
     name: 'Thiruarimeya Vinnagaram (Kudamudakoothan Perumal Temple)',
     location: 'Thirunangur, Mayiladuthurai district',
     state: 'Tamil Nadu',
     deities: 'Amrudhagadavalli and Kudamudakoothan Perumal',
     imageHint: 'thirunangur kudamudakoothan thiruarimeya vinnagaram',
     imageUrl: `https://picsum.photos/seed/thiruarimeya/400/300`
   },
   {
    id: 32,
    name: 'Thiruvanpurushothamam (Purushottama Perumal Temple)',
    location: 'Thirunangur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Purushotthama Nayaki and Purushottama Perumal',
    imageHint: 'thirunangur purushottama perumal thiruvanpurushothamam',
    imageUrl: `https://picsum.photos/seed/thiruvanpurushothamam/400/300`
  },
  {
    id: 33,
    name: 'Thirusemponsaikoil (Hemaranganatha Perumal Temple)',
    location: 'Thirunangur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Sweda Pushpavalli and Hemaranganatha Perumal',
    imageHint: 'thirunangur hemaranganatha perumal thirusemponsaikoil',
    imageUrl: `https://picsum.photos/seed/thirusemponsaikoil/400/300`
  },
  {
    id: 34,
    name: 'Thirumanimadakoil (Narayana Perumal Temple)',
    location: 'Thirunangur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Pundareegavalli and Sashvatha Deepaya Narayana Perumal',
    imageHint: 'thirunangur narayana perumal thirumanimadakoil',
    imageUrl: `https://picsum.photos/seed/thirumanimadakoil/400/300`
  },
  {
    id: 35,
    name: 'Thiruvaikunta Vinnagaram (Vaikundanatha Perumal Temple)',
    location: 'Thirunangur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Vaikundavalli and Vaikundanatha Perumal',
    imageHint: 'thirunangur vaikundanatha perumal thiruvaikunta vinnagaram',
    imageUrl: `https://picsum.photos/seed/thiruvaikunta/400/300`
  },
  {
    id: 36,
    name: 'Thiruthetriambalam (Lakshmiranga Perumal Temple)',
    location: 'Thirunangur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Rakthapankajavalli and Lakshmiranga Perumal',
    imageHint: 'thirunangur lakshmiranga perumal thiruthetriambalam',
    imageUrl: `https://picsum.photos/seed/thiruthetriambalam/400/300`
  },
  {
    id: 37,
    name: 'Thirumanikoodam (Varadharaja Perumal Temple)',
    location: 'Thirunangur, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Boonayagi and Varadharaja Perumal',
    imageHint: 'thirunangur varadharaja perumal thirumanikoodam',
    imageUrl: `https://picsum.photos/seed/thirumanikoodam/400/300`
  },
  {
    id: 38,
    name: 'Thiruparthanpalli (Taamaraiyaal Kelvan Perumal Temple)',
    location: 'Parthanpalli, Mayiladuthurai district',
    state: 'Tamil Nadu',
    deities: 'Tamarai Nayagi and Taamaraiyaal Kelvan Perumal',
    imageHint: 'thirunangur taamaraiyaal kelvan thiruparthanpalli arjuna',
    imageUrl: `https://picsum.photos/seed/thiruparthanpalli/400/300`
  },
   {
     id: 39, // Part of Thiruvali-Thirunagari duo
     name: 'Thiruvali (Lakshmi Narasimha Temple)',
     location: 'Thiruvali, Mayiladuthurai district',
     state: 'Tamil Nadu',
     deities: 'Amrudhagadavalli and Kedarapathivaraya Perumal (Lakshmi Narasimhar)',
     imageHint: 'thiruvali lakshmi narasimha',
     imageUrl: `https://picsum.photos/seed/thiruvali/400/300`
   },
   {
     id: 40, // Part of Thiruvali-Thirunagari duo
     name: 'Thirunagari (Vedharaja Perumal Temple)',
     location: 'Thirunagari, Mayiladuthurai district',
     state: 'Tamil Nadu',
     deities: 'Amurdha Valli and Devaraja Perumal (Vayalali Manavalan)',
     imageHint: 'thirunagari vedharaja perumal vayalali manavalan',
     imageUrl: `https://picsum.photos/seed/thirunagari/400/300`
   },
   {
     id: 41,
     name: 'Thiruthevanarthogai (Devanayaka Perumal Temple)',
     location: 'Thirunangur, Mayiladuthurai district',
     state: 'Tamil Nadu',
     deities: 'Samudradanaya and Devanayaka Perumal',
     imageHint: 'thirunangur devanayaka perumal thiruthevanarthogai',
     imageUrl: `https://picsum.photos/seed/thiruthevanarthogai/400/300`
   },
   {
     id: 42,
     name: 'Thiruvellakulam (Srinivasa Perumal Temple)',
     location: 'Thirunangur, Mayiladuthurai district',
     state: 'Tamil Nadu',
     deities: 'Padmavathi and Srinivasa Perumal (Annan Kovil)',
     imageHint: 'thirunangur srinivasa perumal annan kovil thiruvellakulam',
     imageUrl: `https://picsum.photos/seed/thiruvellakulam/400/300`
   },
   // End of Thirunangur group
  {
    id: 43,
    name: 'Thiruchitrakoodam (Govindaraja Perumal Temple)',
    location: 'Chidambaram, Cuddalore district',
    state: 'Tamil Nadu',
    deities: 'Pundareekavalli and Govindaraja Perumal',
    imageHint: 'chidambaram govindaraja perumal nataraja temple',
    imageUrl: `https://picsum.photos/seed/chidambaram/400/300`
  },
  {
    id: 44,
    name: 'Thiruvanthipuram (Devanatha Perumal Temple)',
    location: 'Thiruvanthipuram, Cuddalore district',
    state: 'Tamil Nadu',
    deities: 'Hemambujavalli and Devanatha Perumal',
    imageHint: 'thiruvanthipuram devanatha perumal hayagriva',
    imageUrl: `https://picsum.photos/seed/thiruvanthipuram/400/300`
  },
  {
    id: 45,
    name: 'Thirukkoyilur (Trivikrama Perumal Temple)',
    location: 'Thirukoyilur, Kallakurichi district',
    state: 'Tamil Nadu',
    deities: 'Pushpavalli and Trivikrama Perumal',
    imageHint: 'thirukoyilur trivikrama perumal first alvars panchakanna',
    imageUrl: `https://picsum.photos/seed/thirukoyilur/400/300`
  },
  {
    id: 46,
    name: 'Thirukkachi - Atthigiri (Varadharaja Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Perundevi Thayar and Varadharaja Perumal',
    imageHint: 'kanchipuram varadharaja perumal atthigiri',
    imageUrl: `https://picsum.photos/seed/kanchivaradha/400/300`
  },
  {
    id: 47,
    name: 'Ashtabujagaram (Ashtabhuja Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Padmasani and Ashtabhuja Perumal',
    imageHint: 'kanchipuram ashtabhuja perumal gajendra moksha',
    imageUrl: `https://picsum.photos/seed/ashtabujagaram/400/300`
  },
  {
    id: 48,
    name: 'Thiruthanka (Deepaprakasa Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Maragadhavalli and Deepaprakasa Perumal (Vilakkoli Perumal)',
    imageHint: 'kanchipuram deepaprakasa perumal thiruthanka vedanta desika',
    imageUrl: `https://picsum.photos/seed/thiruthanka/400/300`
  },
  {
    id: 49,
    name: 'Thiruvelukkai (Yoga Narasimha Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Amritavalli and Yoga Narasimha Perumal (Azhagiya Singar)',
    imageHint: 'kanchipuram yoga narasimha thiruvelukkai',
    imageUrl: `https://picsum.photos/seed/thiruvelukkai/400/300`
  },
  {
    id: 50,
    name: 'Thiruneeragam (Jagadeesha Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district (inside Ulagalantha Perumal Temple)',
    state: 'Tamil Nadu',
    deities: 'Nilamangai Valli and Jagadeesha Perumal',
    imageHint: 'kanchipuram jagadeesha perumal thiruneeragam ulagalantha',
    imageUrl: `https://picsum.photos/seed/thiruneeragam/400/300`
  },
  {
    id: 51,
    name: 'Thiruppadagam (Pandavadootha Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Rukmini and Pandavadootha Perumal',
    imageHint: 'kanchipuram pandavadootha perumal mahabharata krishna',
    imageUrl: `https://picsum.photos/seed/thiruppadagam/400/300`
  },
  {
    id: 52,
    name: 'Nilathingal Thundam (Chandrasooda Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district (inside Ekambareswarar Temple)',
    state: 'Tamil Nadu',
    deities: 'Chandrasoodavalli and Chandrasooda Perumal (Nilathingal Thundathan)',
    imageHint: 'kanchipuram nilathingal thundam ekambareswarar',
    imageUrl: `https://picsum.photos/seed/nilathingal/400/300`
  },
  {
    id: 53,
    name: 'Thiruooragam (Ulagalantha Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Amudavalli and Trivikrama Perumal (Ulagalantha)',
    imageHint: 'kanchipuram ulagalantha perumal trivikrama vamana',
    imageUrl: `https://picsum.photos/seed/thiruooragam/400/300`
  },
  {
    id: 54,
    name: 'Thiruvekka (Yathothkari Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Komalavalli and Yathottakari Perumal (Sonna Vannam Seitha Perumal)',
    imageHint: 'kanchipuram yathothkari perumal thiruvekka saraswati',
    imageUrl: `https://picsum.photos/seed/thiruvekka/400/300`
  },
  {
    id: 55,
    name: 'Thirukkaragam (Karunagara Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district (inside Ulagalantha Perumal Temple)',
    state: 'Tamil Nadu',
    deities: 'Padmamani and Karunagara Perumal',
    imageHint: 'kanchipuram karunagara perumal thirukkaragam ulagalantha',
    imageUrl: `https://picsum.photos/seed/thirukkaragam/400/300`
  },
  {
    id: 56,
    name: 'Thirukkarvaanam (Kalvar Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district (inside Ulagalantha Perumal Temple)',
    state: 'Tamil Nadu',
    deities: 'Kamalavalli and Neelamega Perumal (Kalvar)',
    imageHint: 'kanchipuram kalvar perumal thirukkarvaanam ulagalantha',
    imageUrl: `https://picsum.photos/seed/thirukkarvaanam/400/300`
  },
  {
    id: 57,
    name: 'Thirukkalvanur (Adi Varaha Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district (inside Kamakshi Amman Temple)',
    state: 'Tamil Nadu',
    deities: 'Anjilai Valli and Adi Varaha Perumal',
    imageHint: 'kanchipuram adi varaha perumal thirukkalvanur kamakshi amman',
    imageUrl: `https://picsum.photos/seed/thirukkalvanur/400/300`
  },
  {
    id: 58,
    name: 'Thiruppavalavannam (Pavalavarna Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Pavalavalli and Pavalavarna Perumal',
    imageHint: 'kanchipuram pavalavarna perumal',
    imageUrl: `https://picsum.photos/seed/thiruppavalavannam/400/300`
  },
  {
    id: 59,
    name: 'Thiru Parameswara Vinnagaram (Vaikunta Perumal Temple)',
    location: 'Kanchipuram, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Vaikundavalli and Vaikundanatha Perumal',
    imageHint: 'kanchipuram vaikunta perumal pallava',
    imageUrl: `https://picsum.photos/seed/thiruparameswara/400/300`
  },
  {
    id: 60,
    name: 'Thiruputkuzhi (Vijayaraghava Perumal Temple)',
    location: 'Thiruputkuzhi, Kanchipuram district',
    state: 'Tamil Nadu',
    deities: 'Maragadhavalli and Vijayaraghava Perumal',
    imageHint: 'thiruputkuzhi vijayaraghava perumal jatayu',
    imageUrl: `https://picsum.photos/seed/thiruputkuzhi/400/300`
  },
  {
    id: 61,
    name: 'Thirunindravur (Bhaktavatsala Perumal Temple)',
    location: 'Thirunindravur, Chennai, Tiruvallur District',
    state: 'Tamil Nadu',
    deities: 'Sudhavalli (Ennai Petra Thayar) and Bhaktavatsala Perumal',
    imageHint: 'thirunindravur bhaktavatsala perumal varuna',
    imageUrl: `https://picsum.photos/seed/thirunindravur/400/300`
  },
  {
    id: 62,
    name: 'Thiruvallur (Veeraraghava Perumal Temple)',
    location: 'Thiruvallur, Chennai, Tiruvallur district',
    state: 'Tamil Nadu',
    deities: 'Kanakavalli (Vasumathi) and Vaidya Veeraraghava Perumal',
    imageHint: 'thiruvallur veeraraghava perumal vaidya',
    imageUrl: `https://picsum.photos/seed/thiruvallur/400/300`
  },
  {
    id: 63,
    name: 'Thiruvallikeni (Parthasarathy Temple)',
    location: 'Chennai, Chennai district',
    state: 'Tamil Nadu',
    deities: 'Rukmini and Venkatakrishna Perumal (Parthasarathy)',
    imageHint: 'chennai parthasarathy temple thiruvallikeni mahabharata',
    imageUrl: `https://picsum.photos/seed/parthasarathy/400/300`
  },
  {
    id: 64,
    name: 'Thiruneermalai (Neervanna Perumal Temple)',
    location: 'Thiruneermalai, Chennai, Kanchipuram district', // Actually Chengalpattu district now
    state: 'Tamil Nadu',
    deities: 'Animamalar Mangai and Neervanna Perumal',
    imageHint: 'thiruneermalai neervanna perumal ranganatha narasimha',
    imageUrl: `https://picsum.photos/seed/thiruneermalai/400/300`
  },
  {
    id: 65,
    name: 'Thiruvidanthai (Nithyakalyana Perumal Temple)',
    location: 'Thiruvidanthai, Chennai, Chengalpattu district',
    state: 'Tamil Nadu',
    deities: 'Komalavalli and Nityakalyana Perumal (Varaha)',
    imageHint: 'thiruvidanthai nithyakalyana perumal varaha',
    imageUrl: `https://picsum.photos/seed/thiruvidanthai/400/300`
  },
  {
    id: 66,
    name: 'Thirukkadanmallai (Sthalasayana Perumal Temple)',
    location: 'Mahabalipuram, Chengalpattu district',
    state: 'Tamil Nadu',
    deities: 'Boosthalamangadevi (Nilamangai Thayar) and Sthalasayana Perumal',
    imageHint: 'mahabalipuram sthalasayana perumal shore temple',
    imageUrl: `https://picsum.photos/seed/mahabalipuram/400/300`
  },
  {
    id: 67,
    name: 'Thirukkadigai (Yoga Narasimha Perumal Temple)',
    location: 'Sholinghur, Vellore district', // Actually Ranipet district now
    state: 'Tamil Nadu',
    deities: 'Amritavalli and Yoga Narasimha Perumal',
    imageHint: 'sholinghur yoga narasimha hanuman',
    imageUrl: `https://picsum.photos/seed/sholinghur/400/300`
  },
  {
    id: 68,
    name: 'Thiruvayodhi (Ayodhya - Ram Janmabhoomi)',
    location: 'Ayodhya, Uttar Pradesh',
    state: 'Uttar Pradesh',
    deities: 'Seethadevi and Ramachandra Perumal',
    imageHint: 'ayodhya ram janmabhoomi rama temple',
    imageUrl: `https://picsum.photos/seed/ayodhya/400/300`
  },
  {
    id: 69,
    name: 'Naimisaranyam (Devaraja Perumal Temple)',
    location: 'Misrikh Neemsar, Uttar Pradesh',
    state: 'Uttar Pradesh',
    deities: 'Harilakshmi (Pundareekavalli) and Devaraja Perumal (Sree Hari)',
    imageHint: 'naimisaranyam devaraja perumal chakra tirtha',
    imageUrl: `https://picsum.photos/seed/naimisaranyam/400/300`
  },
  {
    id: 70,
    name: 'Thirupruthi (Jyothirmath - Narasimha Temple)',
    location: 'Jyotirmath (Joshimath), Chamoli district',
    state: 'Uttarakhand',
    deities: 'Parimalavalli and Paramapurusha Perumal (Narasimha)',
    imageHint: 'joshimath narasimha temple adi shankara',
    imageUrl: `https://picsum.photos/seed/joshimath/400/300`
  },
  {
    id: 71,
    name: 'Thirukkandamenum Kadinagar (Raghunath Temple)',
    location: 'Devaprayag, Tehri Garhwal district',
    state: 'Uttarakhand',
    deities: 'Pundareegavalli and Purushottama Perumal (Neelamegha)',
    imageHint: 'devaprayag raghunath temple confluence ganga',
    imageUrl: `https://picsum.photos/seed/devaprayag/400/300`
  },
  {
    id: 72,
    name: 'Thiruvadari (Badrinath Temple)',
    location: 'Badrinath, Chamoli district',
    state: 'Uttarakhand',
    deities: 'Aravindhavalli and Badrinarayana Perumal',
    imageHint: 'badrinath temple himalayas char dham',
    imageUrl: `https://picsum.photos/seed/badrinath/400/300`
  },
  {
    id: 73,
    name: 'Thiru Saligram (Muktinath Temple)',
    location: 'Muktinath Valley, Mustang District',
    state: 'Nepal', // Country
    deities: 'Sridevi and Srimurti Perumal',
    imageHint: 'muktinath temple nepal shaligram',
    imageUrl: `https://picsum.photos/seed/muktinath/400/300`
  },
  {
    id: 74,
    name: 'Thiruvadamadurai (Krishna Janmabhoomi)',
    location: 'Mathura, Mathura district',
    state: 'Uttar Pradesh',
    deities: 'Satyabama and Govardhanagiridhari Perumal',
    imageHint: 'mathura krishna janmabhoomi birthplace',
    imageUrl: `https://picsum.photos/seed/mathura/400/300`
  },
  {
    id: 75,
    name: 'Thiruvaipadi (Gokula - Nand Bhavan)',
    location: 'Gokul, Mathura district',
    state: 'Uttar Pradesh',
    deities: 'Rukmini, Sathyabama, and Navamohanakrishna Perumal',
    imageHint: 'gokul nand bhavan krishna childhood',
    imageUrl: `https://picsum.photos/seed/gokul/400/300`
  },
  {
    id: 76,
    name: 'Thirudwarakai (Dwarakadheesh Temple)',
    location: 'Dwarka, Devbhoomi Dwarka district',
    state: 'Gujarat',
    deities: 'Rukmini and Dwarakadheesha Perumal (Kalyana Narayana)',
    imageHint: 'dwarka dwarakadheesh temple krishna kingdom',
    imageUrl: `https://picsum.photos/seed/dwarka/400/300`
  },
  {
    id: 77,
    name: 'Ahobilam (Nava Narasimha Temples)',
    location: 'Ahobilam, Nandyal district', // District updated
    state: 'Andhra Pradesh',
    deities: 'Lakshmi and Prahlada Varada Narasimha swamy (and 8 other forms)',
    imageHint: 'ahobilam nava narasimha temples forest hills',
    imageUrl: `https://picsum.photos/seed/ahobilam/400/300`
  },
  {
    id: 78,
    name: 'Thiruvenkadam (Venkateswara Temple)',
    location: 'Tirumala, Tirupati district', // District updated
    state: 'Andhra Pradesh',
    deities: 'Padmavati and Srinivasa Perumal (Venkateswara)',
    imageHint: 'tirumala venkateswara temple tirupati balaji',
    imageUrl: `https://picsum.photos/seed/tirupati/400/300`
  },
  {
    id: 79,
    name: 'Thirunavai (Navamukunda Temple)',
    location: 'Tirunavaya, Malappuram district',
    state: 'Kerala',
    deities: 'Malarmangai (Sirudevi) and Navamukunda Perumal',
    imageHint: 'tirunavaya navamukunda temple bharathappuzha mamankam',
    imageUrl: `https://picsum.photos/seed/tirunavaya/400/300`
  },
  {
    id: 80,
    name: 'Thiruvithuvakodu (Uyyavantha Perumal Temple)',
    location: 'Thiruvithuvakoodu (Pattambi), Palakkad district',
    state: 'Kerala',
    deities: 'Vithuvakoduvalli (Padmasani Nachiyar) and Abhayapradhaya Perumal (Uyyavantha)',
    imageHint: 'thiruvithuvakoodu uyyavantha perumal ambareesha',
    imageUrl: `https://picsum.photos/seed/thiruvithuvakoodu/400/300`
  },
  {
    id: 81,
    name: 'Thrikkakara Vamanamoorthy Temple (Thirukatkarai)',
    location: 'Thrikkakara, Ernakulam district',
    state: 'Kerala',
    deities: 'Vathsalyavalli (Perunselva Nayaki) and Katkaraswami Perumal (Vamana)',
    imageHint: 'thrikkakara vamanamoorthy temple onam mahabali',
    imageUrl: `https://picsum.photos/seed/thrikkakara/400/300`
  },
  {
    id: 82,
    name: 'Thirumoozhikkalam (Lakshmana Perumal Temple)',
    location: 'Thirumoozhikulam, Ernakulam district',
    state: 'Kerala',
    deities: 'Madhuraveni (Sundaravalli) and Sookthinatha Perumal (Moozhikkalathappan/Lakshmana)',
    imageHint: 'thirumoozhikulam lakshmana perumal',
    imageUrl: `https://picsum.photos/seed/thirumoozhikulam/400/300`
  },
  {
    id: 83,
    name: 'Sree Vallabha Temple (Thiruvallavazh)',
    location: 'Thiruvalla, Pathanamthitta district',
    state: 'Kerala',
    deities: 'Vathsalyavalli (Selvathirukozhundhu Nachiyar) and Vallabhaswami Perumal (Kolapiran)',
    imageHint: 'thiruvalla sree vallabha temple kathakali sudarshana',
    imageUrl: `https://picsum.photos/seed/thiruvalla/400/300`
  },
  {
    id: 84,
    name: 'Thrikodithanam Mahavishnu Temple (Thirukkodithanam)',
    location: 'Thrikkodithanam, Changanassery, Kottayam District',
    state: 'Kerala',
    deities: 'Karpagavalli and Amruthanarayana Perumal (Adbhutha Narayanan)',
    imageHint: 'thrikkodithanam adbhutha narayanan sahadeva',
    imageUrl: `https://picsum.photos/seed/thrikkodithanam/400/300`
  },
  {
    id: 85,
    name: 'Thrichittatt Mahavishnu Temple (Thiruchengundrur)',
    location: 'Chengannur (Thrichittatt), Alappuzha District',
    state: 'Kerala',
    deities: 'Rakthapankajavalli (Shenbagavalli) and Devathideva Perumal (Imayavarappar)',
    imageHint: 'thrichittatt imayavarappar yudhishthira',
    imageUrl: `https://picsum.photos/seed/thrichittatt/400/300`
  },
  {
    id: 86,
    name: 'Thiruppuliyur (Mahavishnu Temple)',
    location: 'Thripuliyur (Puliyoor), Alappuzha District',
    state: 'Kerala',
    deities: 'Porkodi Nachiyar and Maayapiran Perumal',
    imageHint: 'puliyoor maayapiran bhima',
    imageUrl: `https://picsum.photos/seed/thrippuliyur/400/300`
  },
  {
    id: 87,
    name: 'Aranmula Parthasarathy Temple (Thiruvaranvilai)',
    location: 'Aranmula, Pathanamthitta District',
    state: 'Kerala',
    deities: 'Padmasani Nachiyar and Kuralappan Perumal (Parthasarathy)',
    imageHint: 'aranmula parthasarathy temple vallamkali arjuna',
    imageUrl: `https://picsum.photos/seed/aranmula/400/300`
  },
  {
    id: 88,
    name: 'Thiruvanvandoor (Mahavishnu Temple)',
    location: 'Thiruvanvandoor, Alappuzha District',
    state: 'Kerala',
    deities: 'Kamalavalli Nachiyar and Paambanaiyappan Perumal (Pambanaiappan)',
    imageHint: 'thiruvanvandoor pambanaiyappan nakula',
    imageUrl: `https://picsum.photos/seed/thiruvanvandoor/400/300`
  },
  {
    id: 89,
    name: 'Thiruvananthapuram (Padmanabhaswamy Temple)',
    location: 'Thiruvananthapuram, Thiruvananthapuram District',
    state: 'Kerala',
    deities: 'Harilakshmi (Sri) and Ananthapadmanabhaswami Perumal',
    imageHint: 'thiruvananthapuram padmanabhaswamy temple anantha reclining vishnu',
    imageUrl: `https://picsum.photos/seed/tvm/400/300` // Use different seed from standalone entry if needed
  },
  {
    id: 90,
    name: 'Thiruvattaru (Adikesava Perumal Temple)',
    location: 'Thiruvattar, Kanyakumari district',
    state: 'Tamil Nadu',
    deities: 'Maragadhavalli and Adhikesava Perumal',
    imageHint: 'thiruvattar adikesava perumal reclining vishnu',
    imageUrl: `https://picsum.photos/seed/thiruvattar/400/300`
  },
  {
    id: 91,
    name: 'Thiruvanparisaram (Thirukuralappan Perumal Temple)',
    location: 'Thiruppathisaram, Kanyakumari district',
    state: 'Tamil Nadu',
    deities: 'Kamalavalli and Thiruvaḻmarbhan Perumal (Thirukuralappan)',
    imageHint: 'thiruppathisaram thiruvalmarbhan kulasekara alvar',
    imageUrl: `https://picsum.photos/seed/thiruppathisaram/400/300`
  },
  {
    id: 92, // Group of 2 Nanguneri Temples
    name: 'Thirukkurungudi (Nambi Rayar Temple)',
    location: 'Thirukkurungudi, Tirunelveli district',
    state: 'Tamil Nadu',
    deities: 'Kurungudivalli Nachiyar and Azhagiya Nambi Rayar Perumal (Vaishnava Nambi)',
    imageHint: 'thirukkurungudi nambi rayar temple',
    imageUrl: `https://picsum.photos/seed/thirukkurungudi/400/300`
  },
  {
    id: 93, // Group of 2 Nanguneri Temples
    name: 'Thirucheeravaramangai (Vanamamalai Perumal Temple)',
    location: 'Nanguneri (Vanamamalai), Tirunelveli district',
    state: 'Tamil Nadu',
    deities: 'Chireevaramangai (Sirivaramangai Nachiyar) and Thothadhrinatha Perumal (Vanamamalai)',
    imageHint: 'nanguneri vanamamalai perumal thothadrinatha',
    imageUrl: `https://picsum.photos/seed/nanguneri/400/300`
  },
  // Nava Tirupathi temples (9 temples)
  {
    id: 94,
    name: 'Thiruvaigundam (Vaikuntanathan Perumal Temple)',
    location: 'Srivaikuntam, Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Vaikundavalli and Vaikuntanatha Perumal (Kallapiran)',
    imageHint: 'srivaikuntam vaikuntanatha perumal navatirupathi',
    imageUrl: `https://picsum.photos/seed/srivaikuntam/400/300`
  },
  {
    id: 95,
    name: 'Thiruvaragunamangai (Vijayasana Perumal Temple)',
    location: 'Natham (Varagunamangai), Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Varagunavalli and Vijayasana Perumal',
    imageHint: 'varagunamangai vijayasana perumal navatirupathi',
    imageUrl: `https://picsum.photos/seed/varagunamangai/400/300`
  },
  {
    id: 96,
    name: 'Thiruppuliangudi (Kaaichina Vendhan Perumal Temple)',
    location: 'Thirupulingudi, Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Malarmagal Nachiyar, Poomagal Nachiyar and Kaaichina Vendhan Perumal',
    imageHint: 'thirupulingudi kaaichina vendhan perumal navatirupathi',
    imageUrl: `https://picsum.photos/seed/thirupulingudi/400/300`
  },
  {
    id: 97, // Group of 2 temples at Tholavillimangalam
    name: 'Thirutholaivillimangalam (Aravindalochana Perumal Temple - Rettai Tirupati West)',
    location: 'Tholavillimangalam (Irattai Tirupati), Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Karunthadanganni Nachiyar and Aravindalochana Perumal (Senthamarai Kannan)',
    imageHint: 'tholavillimangalam aravindalochana perumal rettai tirupati navatirupathi',
    imageUrl: `https://picsum.photos/seed/tholavillimangalam1/400/300`
  },
  {
    id: 98, // Group of 2 temples at Tholavillimangalam
    name: 'Thirutholaivillimangalam (Devapiran Perumal Temple - Rettai Tirupati East)',
    location: 'Tholavillimangalam (Irattai Tirupati), Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Karunthadanganni Nachiyar and Devapiran Perumal', // Assuming same consort name
    imageHint: 'tholavillimangalam devapiran perumal rettai tirupati navatirupathi',
    imageUrl: `https://picsum.photos/seed/tholavillimangalam2/400/300`
  },
  {
    id: 99,
    name: 'Thirukkulandai (Srinivasa Perumal Temple)',
    location: 'Perungulam, Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Alamelumangai Thayar, Kulandhai Valli and Srinivasa Perumal (Mayakoothan)',
    imageHint: 'perungulam srinivasa perumal mayakoothan navatirupathi',
    imageUrl: `https://picsum.photos/seed/perungulam/400/300`
  },
  {
    id: 100,
    name: 'Thirukkolur (Vaithamanidhi Perumal Temple)',
    location: 'Thirukolur, Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Koloorvalli Nachiyar, Kumudavalli Nachiyar and Vaithamanithi Perumal',
    imageHint: 'thirukkolur vaithamanidhi perumal kubera navatirupathi madhurakavi alvar birth place',
    imageUrl: `https://picsum.photos/seed/thirukkolur/400/300`
  },
  {
    id: 101,
    name: 'Thirupperai (Magara Nedungkuḻai Kathar Perumal Temple)',
    location: 'Thenthiruperai, Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Kuḻaikkadhu Valli, Thirupperai Nachiyar and Magara Nedungkuḻai Kathar Perumal',
    imageHint: 'thenthiruperai makara nedungkulaikathar perumal navatirupathi',
    imageUrl: `https://picsum.photos/seed/thenthiruperai/400/300`
  },
  {
    id: 102,
    name: 'Thirukkurugur (Adinatha Perumal Temple)',
    location: 'Alwarthirunagari, Thoothukudi district',
    state: 'Tamil Nadu',
    deities: 'Aadhinadha Valli, Gurukoor valli and Aadhinatha Perumal',
    imageHint: 'alwarthirunagari adinatha perumal navatirupathi nammalvar',
    imageUrl: `https://picsum.photos/seed/alwarthirunagari/400/300`
  },
  // End of Nava Tirupathi
  {
    id: 103,
    name: 'Srivilliputhur (Andal Temple / Vatapatrasayee Temple)',
    location: 'Srivilliputhur, Virudhunagar district',
    state: 'Tamil Nadu',
    deities: 'Kodhadevi (Andal) and Vatapatrasayee Perumal (Ranganatha/Vadaperunkoviludaiyan)',
    imageHint: 'srivilliputhur andal temple vatapatrasayee',
    imageUrl: `https://picsum.photos/seed/srivilliputhur/400/300`
  },
  {
    id: 104,
    name: 'Thiruthangal (Ninra Narayana Perumal Temple)',
    location: 'Thiruthankal, Virudhunagar district',
    state: 'Tamil Nadu',
    deities: 'Sengamala Thayar (Kamala Mahalakshmi) and Ninra Narayana Perumal',
    imageHint: 'thiruthangal ninra narayana perumal',
    imageUrl: `https://picsum.photos/seed/thiruthangal/400/300`
  },
  {
    id: 105,
    name: 'Thirukkoodal (Koodal Azhagar Temple)',
    location: 'Madurai, Madurai district',
    state: 'Tamil Nadu',
    deities: 'Madhuravalli Thayar and Koodal Aḻagar Perumal',
    imageHint: 'madurai koodal azhagar temple ashtanga vimana',
    imageUrl: `https://picsum.photos/seed/maduraikoodal/400/300`
  },
  {
    id: 106,
    name: 'Thirumaliruncholai (Kallazhagar Temple)',
    location: 'Alagar Koyil, Madurai district',
    state: 'Tamil Nadu',
    deities: 'Sundaravalli and Kallaḻagar Perumal (Azhagar)',
    imageHint: 'alagar kovil kallazhagar perumal',
    imageUrl: `https://picsum.photos/seed/alagarkovil/400/300`
  },
  {
    id: 107,
    name: 'Thirumogur (Kalamega Perumal Temple)',
    location: 'Thirumohur, Madurai district',
    state: 'Tamil Nadu',
    deities: 'Mohavalli (Mohanavalli) and Kalamega Perumal',
    imageHint: 'thirumohur kalamega perumal mohini',
    imageUrl: `https://picsum.photos/seed/thirumohur/400/300`
  },
  {
    id: 108,
    name: 'Thirukkoshtiyur (Sowmyanarayana Perumal Temple)',
    location: 'Thirukoshtiyur, Sivaganga district',
    state: 'Tamil Nadu',
    deities: 'Mahalakshmi (Thirumamagal Nachiyar) and Uraga Mellanayaan Perumal (Sowmyanarayana)',
    imageHint: 'thirukoshtiyur sowmyanarayana perumal ramanuja',
    imageUrl: `https://picsum.photos/seed/thirukoshtiyur/400/300`
  },
  {
    id: 109,
    name: 'Thiruppullani (Adi Jagannatha Perumal Temple)',
    location: 'Thirupullani, Ramanathapuram district',
    state: 'Tamil Nadu',
    deities: 'Kalyanavalli, Padmasani and Kalyana Jagannatha Perumal (Adi Jagannatha/Dharbasayana Ramar)',
    imageHint: 'thirupullani adi jagannatha perumal dharbasayana rama',
    imageUrl: `https://picsum.photos/seed/thirupullani/400/300`
  },
  {
    id: 110,
    name: 'Thirumeyyam (Sathyagirinatha Perumal Temple)',
    location: 'Thirumayam, Pudukottai district',
    state: 'Tamil Nadu',
    deities: 'Uyya Vandha Nachiyar and Sathyagirinatha Perumal',
    imageHint: 'thirumayam sathyagirinatha perumal rock cut',
    imageUrl: `https://picsum.photos/seed/thirumayam/400/300`
  },
  // Heavenly Divya Desams
  {
    id: 111, // Often numbered 107
    name: 'Kshira Sagara (Tirupparkatal)',
    location: 'Ocean of Milk (Heavenly)',
    state: 'Celestial',
    deities: 'Kadal Magal (Lakshmi) and Parkadal Natha Perumal (Vishnu)',
    imageHint: 'ocean milk vishnu lakshmi shesha celestial',
    imageUrl: `https://picsum.photos/seed/parkadal/400/300`
  },
  {
    id: 112, // Often numbered 108
    name: 'Tirupparamapadam (Vaikuntha)',
    location: 'Vaikuntha (Heavenly)',
    state: 'Celestial',
    deities: 'Paramapada Nayaki (Lakshmi) and Paramapada Nathan (Vishnu)',
    imageHint: 'vaikuntha vishnu lakshmi celestial abode garuda',
    imageUrl: `https://picsum.photos/seed/vaikuntha/400/300`
  },
];

/**
 * Asynchronously retrieves all Divya Desam data.
 *
 * @returns A promise that resolves to an array of DivyaDesam objects.
 */
export async function getAllDivyaDesams(): Promise<DivyaDesam[]> {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50));
  return divyaDesamsData;
}

/**
 * Asynchronously retrieves a single Divya Desam by its ID.
 *
 * @param id The ID of the Divya Desam to retrieve.
 * @returns A promise that resolves to a DivyaDesam object, or null if not found.
 */
export async function getDivyaDesamById(id: string | number): Promise<DivyaDesam | null> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 50));
    const desam = divyaDesamsData.find(d => d.id.toString() === id.toString());
    return desam || null;
}
