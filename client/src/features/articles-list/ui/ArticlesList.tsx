import { ArticleCard } from '@/entities/article';
import { List, ListItem } from '@mui/material';
import { FC } from 'react';

import { ArticlesListProps } from '../model/interfaces';

export const ArticlesList: FC<ArticlesListProps> = ({ data }) => {
  return (
    <List disablePadding>
      {data.map((article) => (
        <ListItem key={article.id} disablePadding>
          <ArticleCard {...article} />
        </ListItem>
      ))}
    </List>
  );
};
