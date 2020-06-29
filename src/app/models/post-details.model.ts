import {UserLikesModel} from './user-likes.model';
import {CommentModel} from './comment.model';

export interface PostDetailsModel {
  id: number;
  title: string;
  body: string;
  date_created: Date;
  user_id: number;
  user_name: string;
  user_last_name: string;
  likes: UserLikesModel[];
  comments: CommentModel[];
}
