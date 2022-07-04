import { Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UzCard from 'assets/png/uzcard.png';
import Humocard from 'assets/png/humocard.png';
import Payme from 'assets/png/payme.png';
import {
  FooterDownWrapper,
  FooterWrapper,
  PaymentTypes,
} from './footer.styles';
import footerLinks, { socialLins } from './footer-links';

const Footer = () => (
  <footer>
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container rowGap="3rem">
          {footerLinks.map((item) => (
            <Grid key={item.title.toString()} item lg={3} md={3} sm={6} xs={12}>
              <Stack gap="18px" width="96%">
                <Typography variant="h6" fontWeight={700}>
                  {item.title}
                </Typography>
                {item.links.map((link) =>
                  link.img ? (
                    <Link key={link.toString()} href={link.href} passHref>
                      <Image layout="fixed" src={link.img} alt="stores" />
                    </Link>
                  ) : (
                    <Link key={link?.label} href={link.href} passHref>
                      <Typography variant="body1" fontSize="18px" component="a">
                        {link?.label}
                      </Typography>
                    </Link>
                  )
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FooterWrapper>
    <FooterDownWrapper>
      <Container maxWidth="lg">
        <Grid container rowGap="2rem">
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack gap="12px">
              <Typography color="white" variant="body2">
                Ижтимоий тармоқлар
              </Typography>
              <Stack direction="row" gap="24px">
                {socialLins.map((link) => (
                  <Link key={link.toString()} passHref href={link.link}>
                    <a href={link.link}>
                      <link.Icon />
                    </a>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack gap="12px">
              <Typography color="white" variant="body2">
                Боғланиш
              </Typography>
              <Stack direction="row" gap="1.5rem">
                <Typography color="white" variant="body1" fontWeight={300}>
                  +998 90 253 77 53
                </Typography>
                <Typography color="white" variant="body1" fontWeight={300}>
                  support@liber.uz
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack gap="12px">
              <Typography color="white" variant="body2">
                Биз қабул қиламиз
              </Typography>
              <Stack direction="row" gap="0.5rem">
                <PaymentTypes>
                  <Image
                    layout="fixed"
                    width={46}
                    height={10}
                    src={UzCard}
                    alt="uzcard"
                  />
                </PaymentTypes>
                <PaymentTypes>
                  <Image
                    layout="fixed"
                    width={46}
                    height={10}
                    src={Humocard}
                    alt="humocard"
                  />
                </PaymentTypes>
                <PaymentTypes>
                  <Image
                    layout="fixed"
                    width={46}
                    height={10}
                    src={Payme}
                    alt="payme"
                  />
                </PaymentTypes>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </FooterDownWrapper>
  </footer>
);

export default Footer;
