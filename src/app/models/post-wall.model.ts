export interface PostWallModel {
  id: number;
  title: string;
  body: string;
  date_created: Date;
  user_id: number;
  user_name: string;
  user_last_name: string;
  likes: number;
}
