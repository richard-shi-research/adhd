import React, {type ReactNode} from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import CommentSection from "@site/src/components/CommentSection";
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <BlogPostPaginator {...props} />
      <CommentSection/>
    </>
  );
}
