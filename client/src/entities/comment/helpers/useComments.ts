import { articleService } from '@/shared/api/article-service';
import { useQuery } from '@tanstack/react-query';

export const useComments = (id: number) => {
  return useQuery({
    queryKey: ['comments', id],
    queryFn: () => articleService.getComments(id),
    refetchInterval: 60000,
    select: ({ data }) => data,
  });
};
