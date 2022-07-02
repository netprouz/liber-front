import { Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { LinksWrapper } from './links.styles';

const links = [
  {
    label: 'Аудиокитоб',
    href: '#',
  },
  {
    label: 'Электрон китоблар',
    href: '#',
  },
  {
    label: 'Босма китоблар',
    href: '#',
  },
  {
    label: 'Контакт',
    href: '#',
  },
  {
    label: 'Биз хақимизда',
    href: '#',
  },
];

const Links = () => (
  <LinksWrapper>
    <Container maxWidth="lg">
      <Stack direction="row" gap="20px">
        {links.map((link) => (
          <Link key={link.label} href={link.href} passHref>
            <Typography
              component="a"
              color="primary"
              fontWeight={600}
              variant="h6"
            >
              {link.label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Container>
  </LinksWrapper>
);

export default Links;
