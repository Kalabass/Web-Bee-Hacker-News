import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CommentState } from '../model/stores/interfaces';

export const useCommentStore = create<CommentState>()(
  devtools(
    (set, get) => ({
      visibleComments: new Set(),

      toggleCommentVisibility: (commentId: number) =>
        set((state) => {
          const newVisibleComments = new Set(state.visibleComments);
          if (newVisibleComments.has(commentId)) {
            newVisibleComments.delete(commentId);
          } else {
            newVisibleComments.add(commentId);
          }
          return { visibleComments: newVisibleComments };
        }),

      isCommentVisible: (commentId: number) =>
        get().visibleComments.has(commentId),
    }),
    { name: 'commentVisibilityStore' },
  ),
);
