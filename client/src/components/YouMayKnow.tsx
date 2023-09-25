import React, { useState } from 'react'
//!Icons
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

//!MUI
import {
    Box,
    Stack,
    Typography,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Card,
    ListItemButton,
    Divider,
    ListItemAvatar,
    Tooltip,
    Button
} from "@mui/material"

//!Data
import { trends } from '@/data/Trends'
import { nFormatter } from '@/utils/NumberUtils';
import { users } from '@/data/User';


export default function YouMayKnow() {



    return (
        <Card sx={{
            width: "100%",
            height: "73vh",
            border: "2px solid #E0E0E0",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            // padding: 2
        }} elevation={0}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ py: 2, px: 2, borderBottom: 1, borderColor: 'divider', textAlign: "start" }}>
                    <Typography variant='h6'>You may know</Typography>
                </Box>
                <List sx={{
                    padding: 0,
                    margin: 0,
                    // background: "red",
                    mt: 2,
                    width: "100%"
                }}>
                    {users.slice(0, 6).sort((a, b) => b.id - a.id).map((user, index) => (
                        <>
                            <ListItem key={user.id} disablePadding>
                                <ListItemButton disableRipple component="a" href="#simple-list">
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            width: 50,
                                            height: 50
                                        }} src={user.avatar} />
                                    </ListItemAvatar>
                                    <ListItemText primary={<Stack sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent={"start"}><Typography variant='body1' sx={{ padding: 0 }}>{user?.fullname}</Typography> {user?.isVerified ? <Tooltip placement='top' title="Verified Account" arrow><VerifiedIcon color='primary' sx={{ marginLeft: 1, fontSize: "18px" }} /></Tooltip> : null}</Stack>} secondary={<Typography variant='caption' color={"text.secondary"} sx={{ padding: 0 }}>{user?.username} • <Button sx={{ p: 0, borderRadius: "10px" }} size='small'>Follow</Button></Typography>} />
                                </ListItemButton>
                            </ListItem>
                            {index !== 5 && <Divider />}
                        </>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/people/connect">
                            <ListItemText primary={<Typography color={"primary"}>Show More</Typography>} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Card>
    );
}