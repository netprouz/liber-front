import React, { useState } from 'react'
import { Box, Container } from '@mui/material'
import { ProfileLayout } from './layout'
import UserCard from './components/user-card'
import Subscription from './tabs/subscription'
import Wallet from './tabs/wallet'
import Books from './tabs/books'
import SavedBooks from './tabs/saved-books'
import Settings from './tabs/settings'

const UserProfile = () => {
    const [activeItemId, setActiveItemId] = useState(1)

    return (
        <Box sx={{ background: "#FBFBFB" }} >
            <Container sx={{ padding: '1.5rem 0' }} maxWidth="lg">
                <UserCard />
                <ProfileLayout {...{ activeItemId, setActiveItemId }}>
                    {activeItemId === 1 && <Subscription />}
                    {activeItemId === 2 && <Wallet />}
                    {activeItemId === 3 && <Books />}
                    {activeItemId === 4 && <SavedBooks />}
                    {activeItemId === 5 && <Settings />}
                </ProfileLayout>
            </Container>
        </Box >

    )
}

export default UserProfile
