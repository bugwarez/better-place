import CreatePostCard from '@/components/CreatePostCard'
import FeedPost from '@/components/FeedPost'
import Spacer from '@/components/Spacer'
import TrendListCard from '@/components/TrendsListCard'
import YouMayKnow from '@/components/YouMayKnow'
import { posts } from '@/data/Post'
import { users } from '@/data/User'
import { notifications } from '@/data/Notification'
import { Post } from '@/types/Post'
import { Box, Card, Divider, Chip, Typography, Stack, List, ListItem, ListItemIcon, ListItemText, ListItemButton, ListItemAvatar, Avatar, Tooltip, Button, IconButton } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import React, { useState } from 'react'
import { trends } from '@/data/Trends'
import { nFormatter } from '@/utils/NumberUtils'
import { User } from '@/types/User'

function Notifications() {


    const [showMore, setShowMore] = useState(false)
    const handleMoreOpen = () => {
        setShowMore(!showMore);
    };
    return (
        <Box sx={{
            width: "100%",
            // height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // background: "red"
        }}>
            <Box sx={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "space-between",
                // background: "green"
            }}>
                <Box sx={{ width: '67%', height: "fit-content", display: "flex", flexDirection: "column" }}>
                    <Box sx={{
                        width: '100%', height: "fit-content", display: "flex", flexDirection: "column"
                    }}>
                        <Card sx={{
                            width: "100%",
                            height: "fit-content",
                            // backgroundColor: "cyan",
                            border: "2px solid #E0E0E0",
                            borderRadius: "10px"
                        }} elevation={0}>
                            <List sx={{
                                padding: 0,
                                margin: 0,
                                // background: "red",
                                width: "100%"
                            }}>
                                {notifications.slice(0, 6).sort((a, b) => b.id - a.id).map((notification, index) => {
                                    const userFrom: any = users.find((u) => u.id === notification.sender)
                                    return (
                                        <>
                                            <ListItem key={userFrom.id} disablePadding>
                                                <ListItemButton disableRipple component="a" href="#simple-list">
                                                    <ListItemAvatar sx={{ mr: 1 }}>
                                                        <Avatar sx={{
                                                            width: 50,
                                                            height: 50
                                                        }} src={userFrom.avatar} />
                                                    </ListItemAvatar>
                                                    <ListItemText primary={
                                                        <Stack sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent={"space-between"}>
                                                            <Box sx={{
                                                                display: "flex",
                                                                flexDirection: "row",
                                                                alignItems: "center",
                                                                justifyContent: "start",
                                                            }}>
                                                                <Typography variant='body1' sx={{ padding: 0 }}><b>{userFrom?.fullname}</b></Typography>
                                                                {
                                                                    userFrom?.isVerified ? <Tooltip placement='top' title="Verified Account" arrow>
                                                                        <VerifiedIcon color='primary' sx={{ marginLeft: 1, fontSize: "18px" }} />
                                                                    </Tooltip> : null
                                                                }
                                                                <span style={{ marginLeft: 5 }}>{notification.type == "comment" ? "commented your post" : notification.type == "like" ? "liked your post" : notification.type == "follow" ? "wants to follow you" : notification.type}</span>
                                                            </Box>
                                                            <Box>
                                                                <IconButton onClick={handleMoreOpen} size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content", fontSize: "24px" }}>
                                                                    <img width="24" height="24" src={`/static/images/website/more_${showMore ? "filled" : "outlined"}_48.png`} alt="send-letter" />
                                                                </IconButton>
                                                            </Box>
                                                        </Stack>
                                                    } secondary={
                                                        <Box sx={{
                                                            display: "flex", flexDirection: "row",
                                                            alignItems: "start", justifyContent: "start"
                                                        }}>
                                                            <Button variant="outlined" sx={{
                                                                p: 0,
                                                                borderRadius: "10px",
                                                                '&:hover': {
                                                                    backgroundColor: 'primary.main',
                                                                    color: 'primary.contrastText',
                                                                },
                                                            }} size='medium' color="primary">Allow</Button>
                                                            <Button variant="outlined" sx={{
                                                                p: 0,
                                                                borderRadius: "10px",
                                                                ml: 2,
                                                                '&:hover': {
                                                                    backgroundColor: 'secondary.main',
                                                                    color: 'primary.contrastText',
                                                                },
                                                            }} size='medium' color="secondary">Reject</Button>
                                                        </Box>
                                                    } />
                                                </ListItemButton>
                                            </ListItem>
                                            {index !== 5 && <Divider />
                                            }
                                        </>
                                    )
                                })}
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="/people/connect">
                                        <ListItemText primary={<Typography color={"primary"}>Show More</Typography>} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Card>
                    </Box>
                </Box>
                <Box sx={{
                    width: "30%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                }}>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                    }}>
                        <TrendListCard />
                    </Box>
                    <Spacer size={15} />
                    <Divider variant='fullWidth' sx={{ width: "100%" }} />
                    <Spacer size={15} />
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                    }}>
                        <Card sx={{
                            width: "100%",
                            height: "30vh",
                            border: "2px solid #E0E0E0",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }} elevation={0}>
                            <img alt='ad' src="https://i.ytimg.com/vi/q5T-v5lYnck/hqdefault.jpg?v=6352a00a" style={{
                                width: "100%",
                                height: "100%",
                                background: "white"
                            }} />
                        </Card>
                        <Stack sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant='caption'>Sponsored</Typography>
                            <Typography variant='caption'>Porsche 911 GT3RS</Typography>
                        </Stack>
                    </Box>
                    <Spacer size={15} />
                    <Divider variant='fullWidth' sx={{ width: "100%" }} />
                    <Spacer size={15} />
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                    }}>
                        <YouMayKnow />
                    </Box>
                </Box>
            </Box>

        </Box >
    )
}

export default Notifications