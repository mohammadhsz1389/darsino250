
export type Page = 'home' | 'lessons' | 'tools' | 'profile' | 'settings';

export interface NavItem {
    id: Page;
    label: string;
    icon: React.ReactNode;
}

export interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface ProfileData {
    name: string;
    studyTime: number; // in minutes
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface Deck {
    id: number;
    name: string;
    cards: FlashCard[];
}

export interface FlashCard {
    id: number;
    front: string;
    back: string;
}

export interface Grade {
    id: number;
    subject: string;
    score: number;
}