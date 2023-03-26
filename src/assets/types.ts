export interface PostType {
  username: string;
  avatar: string;
  shopName: string;
  images: string[];
  comments: number;
  likes: number;
  text: string;
  date: string;
  didLike: boolean;
  premium?: boolean;
}
