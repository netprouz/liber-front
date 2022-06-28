import React, { useState } from 'react';
import ProfileSidebarMenu from '../components/sidebar-menu';
import { Box } from '@mui/material';
interface Content {
    children?: React.ReactNode;
    activeItemId: number;
    setActiveItemId: any;
}

const ProfileLayout: React.FC<Content> = ({ children, activeItemId, setActiveItemId }) => {
    return (
        <Box sx={(theme)=>({ margin: "60px 0", display: "flex", alignItems: "flex-start",[theme.breakpoints.down('md')]:{
            flexDirection:"column"
        } })}>
            <ProfileSidebarMenu {...{activeItemId,setActiveItemId}} />
            <Box sx={(theme)=>({ paddingLeft: "36px", width: "100%",[theme.breakpoints.down('md')]:{ paddingLeft:0, marginTop: "30px"} })}>{children}
            </Box>
        </Box>
    );
}
export default ProfileLayout