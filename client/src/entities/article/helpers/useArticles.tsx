import { articleService } from '@/shared/api/article-service';
import { useQuery } from '@tanstack/react-query';

export const useArticles = () => {
  return useQuery({
    queryFn: () => articleService.getAll(),
    queryKey: ['articles'],
    refetchInterval: 60000,
    select: ({ data }) => data,
  });
};
