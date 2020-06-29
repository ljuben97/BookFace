export interface CommentModel {
  id: number;
  text: string;
  created_at: Date;
  user_id: number;
  user_name: string;
  user_last_name: string;
  likes: number;
}
