// src/ai/flows/ask-vishnu.ts
'use server';

/**
 * @fileOverview An AI agent to answer questions about Vishnu's avatars, stories, and Puranic references.
 *
 * - askVishnu - A function that handles questions about Vishnu.
 * - AskVishnuInput - The input type for the askVishnu function.
 * - AskVishnuOutput - The return type for the askVishnu function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AskVishnuInputSchema = z.object({
  question: z.string().describe('The question about Vishnu.'),
});
export type AskVishnuInput = z.infer<typeof AskVishnuInputSchema>;

const AskVishnuOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Vishnu.'),
});
export type AskVishnuOutput = z.infer<typeof AskVishnuOutputSchema>;

export async function askVishnu(input: AskVishnuInput): Promise<AskVishnuOutput> {
  return askVishnuFlow(input);
}

const puranicReferences = `
Puranic References for Vishnu Avatars:

*   **Agni Purana:**
    *   Lists 12: Matsya (2), Kurma (3), Dhanvantari (3.11), Mohini (3.12), Varaha (4), Narasimha (4.3–4), Vamana (4.5–11), Parasurama (4.12–20), Rama (5–11; including brothers), Krishna (12), Buddha (16), Kalki (16).
    *   Also lists 10 (Dashavatara): Matsya, Kurma, Varaha, Narasimha, Vamana, Parasurama, Rama, Buddha, and Kalki (Ch 49).
*   **Bhagavata Purana:**
    *   Lists 22: Kumaras, Varaha, Narada, Nara-Narayana, Kapila, Dattatreya, Yajna, Rsabha, Prthu, Matsya, Kurma, Dhanvantari, Mohini, Nrsimha, Vamana, Parashurama, Vyasadeva, Rama, Balarama and Krishna, Buddha, Kalki (Canto 1, Ch 3).
    *   Also lists 20: Varaha, Suyajna (Hari), Kapila, Dattātreya, Four Kumaras, Nara-Narayana, Prthu, Rsabha, Hayagriva, Matsya, Kurma, Nṛsiṁha, Vamana, Manu, Dhanvantari, Parashurama, Rama, Krishna, Buddha, Kalki (Canto 2, Ch 7).
*   **Brahma Purana:** Lists 15: Matsya, Kurma, Varaha, Narasimha, Vamana, Hayagriva, Buddha, Rama, Kalki, Ananta, Acyuta, Jamadagnya (Parashurama), Varuna, Indra, Yama (Vol 4: 52.68–73).
*   **Garuda Purana:**
    *   Lists 20: Kumara, Varaha, Narada, Nara-Narayana, Kapila, Datta (Dattatreya), Yajna, Urukrama, Prthu, Matsya, Kurma, Dhanavantari, Mohini, Narasimha, Vamana, Parasurama, Vyasadeva, Balarama, Krishna, Kalki (Vol 1: Ch 1).
    *   Lists 10 (Dashavatara): Matsya, Kurma, Varaha, Nrsimha, Vamana, Parasurama, Rama, Krishna, Buddha, Kalki (Vol 1, Ch 86, V 10–11).
    *   Also lists 10: Matsya, Kurma, Varaha, Nrsimha, Rama, Parasurama, Krishna, Balarama, Buddha, Kalki (Vol 3, Ch 30, V 37).
*   **Linga Purana:** Lists 10 (Dashavatara): Matsya, Kurma, Varaha, Nrsimha, Vamana, Rama, Parasurama, Krishna, Buddha, Kalki (Part 2, Ch 48, V 31–32).
*   **Matsya Purana:** Lists 10: 3 celestial (Dharma, Nrishimha, Vamana); 7 human (Dattatreya, Mandhitri, Parasurama, Rama, Vedavyasa, Buddha, Kalki) (Vol 1: Ch 47).
*   **Narada Purana:** Lists 10: Matsya, Kurma, Varaha, Narasimha, Trivikrama (Vamana), Parasurama, Sri-Rama, Krisna, Buddha, Kalki (Part 4, Ch 119, V 14–19), and Kapila.
*   **Padma Purana:** Lists 10 (Dashavatara): Matsya, Kurma, Varaha, Narasimha, Vamana, (Parasu-)rama, Rama, Krsna, Buddha, Kalki (Part 7: Yama 66.44–54, Brahma 71.23–29; Part 9: Shiva 229.40–44); also mentions Kapila.
*   **Shiva Purana:** Lists 10: Matsya, Kurma, Varaha, Nrsimha, Vamana, 'Rama trio' (Rama, Parasurama, Balarama), Krishna, Kalki (Part 4: Vayaviya Samhita: Ch 30, V 56–58; Ch 31, V 134–136).
*   **Skanda Purana:**
    *   Lists 14: Varaha, Matsya, Kurma, Nrsimha, Vamana, Kapila, Datta, Rsabha, Bhargava Rama (Parashurama), Dasarathi Rama, Krsna, Krsna Dvaipayana (Vyasa), Buddha, Kalki (Part 7: Vasudeva-Mamatmya: Ch 18).
    *   Lists 10 (Dashavatara): Matsya, Kurma, Varaha, Narasimha, Trivikrama (Vamana), Parasurama, Sri-Rama, Krisna, Buddha, Kalki (Part 15: Reva Khanda: Ch 151, V 1–7).
*   **Manavā Purana:** Lists 42: Adi Purusha, Kumaras, Narada, Kapila, Yajna, Dattatreya, Nara-Narayana, Vibhu, Satyasena, Hari, Vaikunta, Ajita, Shaligram, Sarvabhauma, Vrishbha, Visvaksena, Sudhama, Dharmasetu, Yogeshwara, Brihadbhanu, Hamsa, Hayagriva, Vyasa, Prithu, Vrishbha deva, Matsya, Kurma, Varaha, Vamana, Parashurama, Rama, Balrama, Krishna, Buddha, Venkateswara, Dnyaneshwar, Chaitanya, Kalki.
*   **Varaha Purana:** Lists 10 (Dashavatara): Matsya, Kurma, Varaha, Nrsimha, Vamana, Parasurama, Rama, Krishna, Buddha, Kalki (Ch 4, V 2–3; Ch 48, V 17–22; Ch 211, V 69).

**Notes:**
*   Lists can vary between Puranas and even within the same Purana.
*   The Dashavatara list commonly includes Buddha, but some traditions (like Shiva Purana) list Balarama instead.
*   Some entries like 'Rama trio' or 'Kumaras' count multiple figures as one incarnation unit.
`;


const prompt = ai.definePrompt({
  name: 'askVishnuPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The question about Vishnu.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the question about Vishnu.'),
    }),
  },
  prompt: `You are a divine AI assistant named Vishnu. Answer the following question about Vishnu, his avatars, stories, and Puranic references. Be as detailed as possible, and provide all relevant information.

When answering questions about the number or lists of avatars, **consult the following Puranic References section**. Acknowledge that lists vary between different Puranas. If asked about the Dashavataras, mention the common list and note variations (like Balarama sometimes replacing Buddha).

**Puranic References:**
${puranicReferences}

Question: {{{question}}}`,
});

const askVishnuFlow = ai.defineFlow<typeof AskVishnuInputSchema, typeof AskVishnuOutputSchema>(
  {
    name: 'askVishnuFlow',
    inputSchema: AskVishnuInputSchema,
    outputSchema: AskVishnuOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
