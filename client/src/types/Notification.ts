export type Notification = {
  id: number;
  sender: any;
  receiver: any;
  type: 'like' | 'comment' | 'share' | 'info' | 'follow' | 'event' | 'poll';
  post_id: number;
  seen: boolean;
  timestamp: string;
};
