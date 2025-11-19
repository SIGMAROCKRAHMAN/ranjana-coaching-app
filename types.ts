export enum Sender {
  User = 'user',
  Bot = 'bot'
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: number;
  imageUrl?: string;
  isError?: boolean;
}

export type UserRole = 'student' | 'admin';

export interface User {
  name: string;
  phone: string;
  role: UserRole;
  class?: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  type: 'exam' | 'holiday' | 'general';
}

export interface Material {
  id: string;
  title: string;
  type: 'pdf' | 'video';
  subject: string;
  classLevel: string; // 9th, 10th, etc.
  url: string; // Link to PDF or YouTube
}

export interface QuizQuestion {
  question: string;
  questionHi: string;
  options: string[];
  optionsHi: string[];
  correctOptionIndex: number;
}

export interface QuizResult {
  score: number;
  total: number;
  subject: string;
  date: number;
}