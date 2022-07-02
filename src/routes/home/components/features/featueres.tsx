import { Grid } from '@mui/material';
import ApproveIcon from 'components/icons/approve.icon';
import EnergyIcon from 'components/icons/energy.icon';
import StarIcon from 'components/icons/star.icon';
import ThumbUpIcon from 'components/icons/thumb-up.icon';
import React from 'react';
import FeatureItem from './feature-item';

const features = [
  {
    title: 'Тезкор етказиш',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    Icon: EnergyIcon,
  },
  {
    title: 'Тўлов химояси',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    Icon: ApproveIcon,
  },
  {
    title: 'Юқори сифат',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    Icon: ThumbUpIcon,
  },
  {
    title: 'Энг сара китоблар',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    Icon: StarIcon,
  },
];

const Features = () => (
  <Grid container sx={{ margin: '3rem 0' }}>
    {features.map((feature) => (
      <Grid item xs={3} key={feature.title}>
        <FeatureItem {...feature} />
      </Grid>
    ))}
  </Grid>
);

export default Features;
