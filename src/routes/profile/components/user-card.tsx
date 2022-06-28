import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import AvatarPng from '../../../assets/png/avatar.png'

const UserCard = () => {
    return (
        <FlexBox >
            <Box sx={{ width: 220 }}>
                <ImageBox>
                    <Image alt="Avatar" src={AvatarPng} width={163} height={163} objectFit="cover" />
                </ImageBox>
            </Box>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: 30, color: "#242424" }}>Суғдиёна Икромова</Typography>
                <Typography variant="subtitle1" sx={{ marginTop: "20px", fontWeight: 500, fontSize: 20, color: "#242424" }}>+998 90 253 77 53</Typography>
                <Typography variant="subtitle2" sx={{ marginTop: "10px", fontWeight: 500, fontSize: 20, color: "#9A9A9A" }}>ID: 0001  Баланс: 45 000 сўм</Typography>
            </Box>
        </FlexBox>
    )
}

export default UserCard

const FlexBox = styled.div`
display:flex;
padding:24px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
border-radius: 4px;
align-items: center;
background:#fff;
`
const ImageBox = styled.div`
border-radius:50%;
width:163px;
height:163px;
overflow:hidden;
`