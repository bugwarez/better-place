import CreatePostCard from '@/components/CreatePostCard'
import FeedPost from '@/components/FeedPost'
import Spacer from '@/components/Spacer'
import TrendListCard from '@/components/TrendsListCard'
import YouMayKnow from '@/components/YouMayKnow'
import { posts } from '@/data/Post'
import { users } from '@/data/User'
import { Post } from '@/types/Post'
import { Box, Card, Divider, Chip, Typography, Stack, List, ListItem, ListItemIcon, ListItemText, ListItemButton, ListItemAvatar, Avatar, Tooltip, Button, IconButton, Tab, Tabs } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import React, { useState } from 'react'
import { trends } from '@/data/Trends'
import { nFormatter } from '@/utils/NumberUtils'
import { messages } from '@/data/Messages'
import { Message } from '@/types/Message'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function Messages() {
    const [showMore, setShowMore] = useState(false)
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const receivedMessages = messages.filter((message: Message) => message.receiver === 2)
    return (
        <Box sx={{ width: '100%', height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{
                width: '100%', height: "100%", display: "flex", flexDirection: "column"
            }}>
                <Card sx={{
                    marginY: 3,
                    width: "100%",
                    height: "fit-content",
                    border: "2px solid #E0E0E0",
                }} elevation={0}>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "80vh" }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider', width: "20%" }}
                        >
                            {receivedMessages.map((message: Message, index: number) => {

                                const messageSender = users.find((user) => user.id === message.sender)
                                return (
                                    <Tab key={index} sx={{
                                        height: "75px",
                                        '&.Mui-selected': {
                                            color: "text.primary",
                                            fontWeight: "bold",
                                        }
                                    }} label={
                                        <Stack direction="row" alignItems={"center"} justifyContent={"start"} spacing={2} sx={{ width: "100%" }}>
                                            <Avatar sx={{
                                                width: 50,
                                                height: 50
                                            }} src={messageSender?.avatar} />
                                            <Box sx={{
                                                overflow: "hidden", textOverflow: "ellipsis",
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "start",
                                                justifyContent: "center"
                                            }}>
                                                <ListItemText sx={{ width: "100%" }} primary={
                                                    <Stack sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent={"start"}>
                                                        <Typography variant='body1' sx={{ padding: 0 }}>{messageSender?.fullname}</Typography>
                                                        {true ? <Tooltip placement='top' title="Verified Account" arrow><VerifiedIcon color='primary' sx={{ marginLeft: 1, fontSize: "18px" }} /></Tooltip> : null}
                                                    </Stack>
                                                } secondary={
                                                    <Box sx={{
                                                        width: "100%",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent: "start",
                                                        padding: 0

                                                    }}>
                                                        <Typography
                                                            noWrap textAlign={"start"} variant='caption' color={"text.secondary"}>{message?.content}</Typography>
                                                    </Box>
                                                } />
                                            </Box>
                                        </Stack>
                                    } {...a11yProps(index)} />
                                )
                            })}


                        </Tabs>
                        {
                            messages.map((message: Message, index: number) => {
                                return (
                                    <TabPanel key={message.id} value={value} index={index}>
                                        {message.content}
                                    </TabPanel>
                                )
                            })
                        }
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Messages