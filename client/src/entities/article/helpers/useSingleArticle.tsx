import { articleService } from '@/shared/api/articleService';
import { useQuery } from '@tanstack/react-query';

export const useSingleArticle = (id: number) => {
  return useQuery({
    queryFn: () => articleService.getOne(id),
    queryKey: ['article', id],
    select: ({ data }) => data,
  });
};
