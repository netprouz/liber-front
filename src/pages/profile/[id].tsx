import React from 'react';
import Head from 'next/head';
import Main from 'layouts/main';
import UserProfile from 'routes/profile';
import { GetStaticPaths } from 'next';

const Profile = () => (
  <Main>
    <Head>
      <title>User Profile</title>
    </Head>
    <UserProfile />
  </Main>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticPaths: GetStaticPaths = ({ locales }) => ({
  paths: [
    // if no `locale` is provided only the defaultLocale will be generated
   
  ],
  fallback: true,
});

export default Profile;
