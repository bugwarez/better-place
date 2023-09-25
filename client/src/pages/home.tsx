import CreatePostCard from '@/components/CreatePostCard'
import FeedPost from '@/components/FeedPost'
import Spacer from '@/components/Spacer'
import TrendListCard from '@/components/TrendsListCard'
import YouMayKnow from '@/components/YouMayKnow'
import { posts } from '@/data/Post'
import { Post } from '@/types/Post'
import { Box, Card, Divider, Chip, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'



function Home() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // background: "red"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-between",
                }}>
                    <Box sx={{
                        width: "68%",
                        height: "100%",
                    }}>
                        <CreatePostCard />
                        <Spacer size={15} />
                        <Divider variant='fullWidth'>
                            <Chip label={<Typography variant="h6">Feed</Typography>} color='primary' sx={{ width: 150, height: "2rem" }} />
                        </Divider>
                        {
                            posts.map((post: Post, index) => {
                                return (
                                    <FeedPost postDetails={post} key={post.id} />
                                )
                            })
                        }
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

            </Box>
        </>
    )
}

export default Home