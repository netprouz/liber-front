import { Stack } from '@mui/material';
import { Button } from 'components/button';
import React from 'react';
import CommentDetails from './comment-details';
import CommentItem from './comment-item/comment-item';
import WriteComment from './comment-item/write-comment';

const Comments = () => (
  <Stack gap="1.5rem">
    <CommentDetails />
    <WriteComment />
    <CommentItem />
    <CommentItem />
    <CommentItem />
    <Button variant="contained" fullWidth>
      Кўпроқ
    </Button>
  </Stack>
);

export default Comments;
