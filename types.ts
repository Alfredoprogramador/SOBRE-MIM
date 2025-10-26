
export type TranslatedString = Record<'en' | 'es' | 'pt', string>;

export interface Post {
  id: number;
  title: TranslatedString;
  category: TranslatedString;
  excerpt: TranslatedString;
  content: TranslatedString;
  author: string;
  date: string;
  imageUrl: string;
}
