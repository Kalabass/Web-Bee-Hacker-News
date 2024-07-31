import { UseQueryResult } from '@tanstack/react-query';

export interface RefetchButtonProps {
  entity: string;
  query: UseQueryResult;
}
