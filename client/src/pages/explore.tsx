import CreatePostCard from '@/components/CreatePostCard'
import FeedPost from '@/components/FeedPost'
import Spacer from '@/components/Spacer'
import TrendListCard from '@/components/TrendsListCard'
import YouMayKnow from '@/components/YouMayKnow'
import { posts } from '@/data/Post'
import { users } from '@/data/User'
import { Post } from '@/types/Post'
import { Box, Card, Divider, Chip, Typography, Stack, List, ListItem, ListItemIcon, ListItemText, ListItemButton, ListItemAvatar, Avatar, Tooltip, Button, IconButton } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import React, { useState } from 'react'
import { trends } from '@/data/Trends'
import { nFormatter } from '@/utils/NumberUtils'

function Explore() {
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
                        <Box sx={{ px: 2, borderBottom: 1, borderColor: 'divider', textAlign: "start" }}>
                            <Typography variant='h6'>Hashtags</Typography>
                        </Box>
                        <Card sx={{
                            marginY: 3,
                            width: "100%",
                            height: "fit-content",
                            // backgroundColor: "cyan",
                            border: "2px solid #E0E0E0",
                        }} elevation={0}>
                            <List sx={{
                                padding: 0,
                                margin: 0,
                                // background: "red",
                                width: "100%",
                                height: "100%"
                            }}>
                                {trends.slice(0, 6).sort((a, b) => b.postCount - a.postCount).map((trend, index) => (
                                    <>
                                        <ListItem key={trend.id} disablePadding>
                                            <ListItemButton component="a" href="#simple-list">
                                                <ListItemText primary={<Typography variant='body1' fontWeight={600} sx={{ padding: 0 }}>#{trend?.title}</Typography>} secondary={<Typography variant='caption' color={"text.secondary"} sx={{ padding: 0 }}>{`${nFormatter(trend?.postCount)} posts`}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                        {index !== 5 && <Divider />}
                                    </>
                                ))}
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="/trends#hashtags">
                                        <ListItemText primary={<Typography color={"primary"}>Show More</Typography>} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Card>
                    </Box>
                    <Box sx={{
                        width: '100%', height: "fit-content", display: "flex", flexDirection: "column"
                    }}>
                        <Box sx={{ px: 2, borderBottom: 1, borderColor: 'divider', textAlign: "start" }}>
                            <Typography variant='h6'>You may know</Typography>
                        </Box>
                        <Card sx={{
                            marginY: 3,
                            width: "100%",
                            height: "fit-content",
                            // backgroundColor: "cyan",
                            border: "2px solid #E0E0E0",
                        }} elevation={0}>
                            <List sx={{
                                padding: 0,
                                margin: 0,
                                // background: "red",
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
                                                <ListItemText primary={
                                                    <Stack sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent={"space-between"}>
                                                        <Box sx={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            alignItems: "center",
                                                            justifyContent: "start",
                                                        }}>
                                                            <Typography variant='body1' sx={{ padding: 0 }}>{user?.fullname}</Typography>
                                                            {
                                                                user?.isVerified ? <Tooltip placement='top' title="Verified Account" arrow>
                                                                    <VerifiedIcon color='primary' sx={{ marginLeft: 1, fontSize: "18px" }} />
                                                                </Tooltip> : null
                                                            }
                                                        </Box>
                                                        <Box>
                                                            <IconButton onClick={handleMoreOpen} size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content", fontSize: "24px" }}>
                                                                <img width="24" height="24" src={`/static/images/website/more_${showMore ? "filled" : "outlined"}_48.png`} alt="send-letter" />
                                                            </IconButton>
                                                        </Box>
                                                    </Stack>
                                                } secondary={<Typography variant='caption' color={"text.secondary"} sx={{ padding: 0 }}>{user?.username} • <Button sx={{ p: 0, borderRadius: "10px" }} size='small'>Follow</Button></Typography>} />
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
                        </Card>
                    </Box>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        justifyContent: "space-between",
                    }}>
                        <Box sx={{ width: '100%' }}>
                            {
                                posts.map((post: Post, index) => {
                                    return (
                                        <FeedPost postDetails={post} key={post.id} />
                                    )
                                })
                            }
                        </Box>
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
                    a
                    <Divider variant='fullWidth' sx={{ width: "100%" }} />
                </Box>
            </Box>

        </Box>
    )
}

export default Explore