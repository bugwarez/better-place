import { Notification } from '@/types/Notification';

export const notifications: Notification[] = [
  {
    id: 1,
    sender: 1,
    receiver: 3,
    type: 'like',
    post_id: 3,
    seen: false,
    timestamp: '2023-08-17T10:00:00Z',
  },
  {
    id: 2,
    sender: 7,
    receiver: 3,
    type: 'comment',
    post_id: 3,
    seen: true,
    timestamp: '2023-08-17T12:30:00Z',
  },
  {
    id: 3,
    sender: 8,
    receiver: 1,
    type: 'follow',
    post_id: 1,
    seen: false,
    timestamp: '2023-08-17T15:15:00Z',
  },
  {
    id: 4,
    sender: 9,
    receiver: 1,
    type: 'follow',
    post_id: 1,
    seen: false,
    timestamp: '2023-08-17T15:15:00Z',
  },
  {
    id: 5,
    sender: 10,
    receiver: 1,
    type: 'follow',
    post_id: 1,
    seen: false,
    timestamp: '2023-08-17T15:15:00Z',
  },
];
