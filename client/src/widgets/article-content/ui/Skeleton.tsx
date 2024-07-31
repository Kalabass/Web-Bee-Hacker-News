import { Divider, Skeleton } from "@mui/material";
import { FC } from "react";

const ArticleContentSkeleton: FC = () => {
  return (
    <>
      <Skeleton height="40px" width="100%" />
      <Divider sx={{ mb: 2 }} />
      <Skeleton animation="wave" component="h6" width="15%" height="25px" />
      <Skeleton animation="wave" component="h5" width="15%" height="25px" />
      <Skeleton animation="wave" component="h6" width="15%" height="25px" />
    </>
  );
};

export default ArticleContentSkeleton;
