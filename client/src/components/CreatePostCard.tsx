import React, { useState } from 'react'

import {
    Card,
    CardContent,
    Box,
    Stack,
    Typography,
    Avatar,
    Tooltip,
    TextField,
    Chip
} from "@mui/material"

//!Icons
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PollIcon from '@mui/icons-material/Poll';
import EventIcon from '@mui/icons-material/Event';
import AsyncButton from './AsyncButton';

function CreatePostCard() {
    const [isFocused, setIsFocused] = useState(false)

    const handleClick = () => {
        console.log("clicked!!")
    }

    const [postState, setPostState] = useState<any>("normal")

    const handleSignin = () => {
        setPostState("loading")
        const timer = setTimeout(() => {
            setPostState("error")
        }, 2000)
        return () => clearTimeout(timer);
    }

    return (
        <>
            <Card sx={{
                width: "100%",
                height: "fit-content",
                border: "2px solid #E0E0E0",
                borderRadius: "10px",
            }} elevation={0}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                    width: "100%",
                    height: "100%",
                    padding: 5,
                    // backgroundColor: "red",
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        justifyContent: "start",
                        width: "100%",
                        height: "100%",
                    }} gap={3}>
                        <Avatar src='' sx={{ width: "55px", height: "55px", borderRadius: "10px" }} variant='rounded' />
                        <TextField onFocus={() => setIsFocused(true)} multiline
                            rows={isFocused ? 4 : 1} id="outlined-basic" variant="outlined" fullWidth placeholder='What do you think?' autoComplete='off' />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={{
                            mt: 3
                        }} gap={3}>
                            <Chip sx={{ width: 90 }} icon={<AddPhotoAlternateIcon />} label="Media" color="primary" onClick={handleClick} />
                            <Chip sx={{ width: 90 }} icon={<PollIcon />} label="Poll" color="secondary" onClick={handleClick} />
                            <Chip sx={{ width: 90 }} icon={<EventIcon />} label="Event" color="success" onClick={handleClick} />
                        </Stack>
                        <AsyncButton color='primary' titleVariant={"body1"} sx={{ height: "3em", borderRadius: "10px", fontSize: "12px" }} title="Post" state={postState} onClick={handleSignin} />
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default CreatePostCard