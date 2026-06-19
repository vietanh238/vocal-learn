export interface User {
  id: number;
  username: string;
  email: string;
  preferred_language: 'vi' | 'en';
  avatar?: string;
  daily_goal: number;
}

export interface Folder {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  created_at: string;
  updated_at: string;
  decks?: Deck[];
}

export interface Deck {
  id: number;
  folder?: number;
  name: string;
  description: string;
  word_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Word {
  id: number;
  deck: number;
  term: string;
  ipa: string;
  part_of_speech: string;
  definition_en: string;
  definition_vi: string;
  example_sentences: string[];
  image?: string;
  audio_url?: string;
  collocations: string[];
  synonyms: string[];
  antonyms: string[];
  context_paragraph: string;
  user_notes: string;
  user_explanation: string;
  created_at: string;
  updated_at: string;
  review?: CardReview;
}

export interface CardReview {
  id: number;
  word: number;
  word_term: string;
  word_definition_vi: string;
  word_definition_en?: string;
  word_ipa?: string;
  word_example_sentences?: string[];
  word_image?: string;
  word_part_of_speech?: string;
  word_collocations?: string[];
  word_synonyms?: string[];
  word_antonyms?: string[];
  word_context_paragraph?: string;
  word_user_notes?: string;
  word_user_explanation?: string;
  word_audio_url?: string;
  deck_name?: string;
  repetitions: number;
  ease_factor: number;
  interval: number;
  next_review_date: string;
  leitner_box: number;
  status: 'new' | 'learning' | 'young' | 'mature' | 'relearn';
  quality_history: number[];
  total_reviews: number;
  correct_count: number;
  last_reviewed_at: string;
}

export interface SRSStats {
  status: {
    new: number;
    learning: number;
    young: number;
    mature: number;
    relearn: number;
  };
  leitner_boxes: {
    [key: number]: number;
  };
  due_count: number;
  total: number;
}

export interface StudySession {
  id: number;
  session_type: string;
  started_at: string;
  ended_at?: string;
  cards_studied: number;
  correct_count: number;
  xp_earned: number;
  pomodoro_count: number;
}

export interface UserStatsData {
  total_xp: number;
  level: number;
  current_streak: number;
  longest_streak: number;
  cards_mastered: number;
  total_reviews: number;
  last_study_date: string;
}

export interface Achievement {
  id: number;
  code: string;
  name_en: string;
  name_vi: string;
  description_en: string;
  description_vi: string;
  icon: string;
  xp_reward: number;
  unlocked_at?: string;
}

export interface QuizQuestion {
  word: Word;
  question_type: 'en_to_vi' | 'vi_to_en' | 'definition' | 'cloze';
  options: string[];
  correct_answer: string;
  hint?: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}
