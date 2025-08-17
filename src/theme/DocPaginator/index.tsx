import React, {type ReactNode} from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import CommentSection from "@site/src/components/CommentSection";
import type DocPaginatorType from '@theme/DocPaginator';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocPaginatorType>;

export default function DocPaginatorWrapper(props: Props): ReactNode {
  return (
    <>
      <DocPaginator {...props} />
       <CommentSection/>
    </>
  );
}
