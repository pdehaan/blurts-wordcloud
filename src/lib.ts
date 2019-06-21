import axios from "axios";

export interface Breach {
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: Date;
  AddedDate: Date;
  ModifiedDate: Date;
  PwnCount: number;
  Description: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  LogoPath: string;
}

export interface WordCount {
  word: string;
  freq: number;
}

export type WordMap = Map<string, number>;

export async function scan(email: string): Promise<Breach[]> {
  try {
    const url = `https://haveibeenpwned.com/api/v2/breachedaccount/${email}`;
    const breaches = await axios.get(new URL(url).href);
    return breaches.data;
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
    return [];
  }
}

export async function dataClassFrequency(
  breaches: Breach[]
): Promise<WordCount[]> {
  const breachReducer = (acc: WordMap, breach: Breach): WordMap => {
    breach.DataClasses.forEach((dataClass: string): void => {
      const value: number = acc.get(dataClass) || 0;
      acc.set(dataClass, value + 1);
    });
    return acc;
  };
  const freqSort = (wordA: WordCount, wordB: WordCount): number =>
    wordB.freq - wordA.freq;
  const wordMap: WordMap = breaches.reduce(breachReducer, new Map());
  const words: WordCount[] = [];
  for (const [dataClass, count] of wordMap.entries()) {
    words.push({
      word: dataClass,
      freq: count
    });
  }
  return words.sort(freqSort);
}
