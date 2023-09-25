import { Message } from '@/types/Message';

export const messages: Message[] = [
  {
    id: 1,
    sender: 1,
    receiver: 2,
    content: 'Hello, how are you?',
    timestamp: '2023-08-15T12:10:00',
    seen: false,
  },
  {
    id: 2,
    sender: 11,
    receiver: 2,
    content: 'Bro you there?',
    timestamp: '2023-08-15T12:11:00',
    seen: false,
  },
  {
    id: 3,
    sender: 2,
    receiver: 4,
    content: 'Yo!',
    timestamp: '2023-01-15T15:15:00',
    seen: false,
  },
  {
    id: 4,
    sender: 6,
    receiver: 1,
    content: 'GG!',
    timestamp: '2023-05-15T12:10:00',
    seen: false,
  },
];
