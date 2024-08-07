import { articleService } from '@/shared/api/articleService';
import { REFETCH_INTERVAL_MS } from '@/shared/const/RefetchIntervalMS';

import { useQuery } from '@tanstack/react-query';

export const useComments = (id: number) => {
  return useQuery({
    queryKey: ['comments', id],
    queryFn: () => articleService.getComments(id),
    refetchInterval: REFETCH_INTERVAL_MS,
  });
};
