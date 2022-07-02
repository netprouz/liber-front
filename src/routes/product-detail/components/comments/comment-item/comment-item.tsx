import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Default from 'assets/png/default.png';
import { CardWrapper } from 'routes/product-detail/layout/card-wrapper';
import { Button } from 'components/button';
import CustomRating from 'components/custom-rating';

interface CommentItemProps {
  isMy?: boolean;
}

const CommentItem: React.FC<CommentItemProps> = ({ isMy }) => (
  <CardWrapper>
    <Stack gap="2rem">
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap="20px">
          <Box
            sx={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image src={Default} alt="user_image" layout="fill" />
          </Box>
          <Stack>
            <Typography variant="subtitle1" fontSize="18px">
              Shuxrat Boboyev
            </Typography>
            <Typography variant="subtitle2" color="#AAAAAA">
              Апрель 7, 2020
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap="1.5rem" alignItems="center">
          <CustomRating defaultValue={4} />
          <Typography variant="h5" fontWeight={700}>
            4.0
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="subtitle1">
        Kitobni audiosini ham tayyorlanganda zo’r ish bo’lardi, umuman olganda
        yaxshi kitob
      </Typography>
      {isMy && (
        <Button variant="contained" size="large">
          Ўзгартириш
        </Button>
      )}
    </Stack>
  </CardWrapper>
);

export default CommentItem;
