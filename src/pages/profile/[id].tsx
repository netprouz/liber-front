import React from 'react'
import Head from 'next/head'
import Main from 'layouts/main'
import UserProfile from 'routes/profile'

const Profile = () => {
    return (
        <Main>
            <Head>
                <title>User Profile</title>
            </Head>
            <UserProfile />
        </Main>
    )
}

export default Profile
