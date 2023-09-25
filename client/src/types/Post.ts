export type Post = {
  id: number;
  owner: any;
  type: 'media' | 'text' | 'poll' | 'event';
  text: string;
  media: string;
  mediaType: 'image' | 'video';
  upvotes: number;
  downvotes: number;
  comments: number;
  shares: number;
  timestamp: string;
};
