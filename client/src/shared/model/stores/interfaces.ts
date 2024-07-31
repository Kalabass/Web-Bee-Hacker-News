export interface CommentState {
  visibleComments: Set<number>;
  toggleCommentVisibility: (commentId: number) => void;
  isCommentVisible: (commentId: number) => boolean;
}
