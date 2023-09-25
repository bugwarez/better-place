import React, { useState } from 'react'
import {
    Box,
    Stack,
    Avatar,
    Typography,
    IconButton,
    Card,
    useTheme,
    Tooltip
} from "@mui/material"

import Image from 'next/image';
//!Icons
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Post } from '@/types/Post';
import { users } from '@/data/User';
import { getTimeSince } from '@/utils/DateUtils';
import { nFormatter } from '@/utils/NumberUtils';

interface FeedPostProps {
    postDetails: Post

}

function FeedPost(props: FeedPostProps) {
    const { type, media, mediaType } = props.postDetails;
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showMore, setShowMore] = useState(false)

    const [postDetails, setPostDetails] = useState(props.postDetails);

    console.log("postDetails", postDetails)


    const handleUpvote = () => {
        if (upvoted) {
            setPostDetails({
                ...postDetails,
                upvotes: postDetails.upvotes - 1,
            });
        } else if (!downvoted) {
            setPostDetails({
                ...postDetails,
                upvotes: postDetails.upvotes + 1,
            });
        }

        //!decrease downvotes if upvoted after a downvote
        if (downvoted) {
            setPostDetails({
                ...postDetails,
                downvotes: postDetails.downvotes - 1,
                upvotes: postDetails.upvotes + 1,
            });
        }

        setUpvoted(!upvoted);
        setDownvoted(false);

    };

    const handleDownvote = () => {
        if (downvoted) {
            setPostDetails({
                ...postDetails,
                downvotes: postDetails.downvotes - 1,
            });
        } else if (!upvoted) {
            setPostDetails({
                ...postDetails,
                downvotes: postDetails.downvotes + 1,
            });
        }

        //!decrease upvotes if downvoted after a upvote
        if (upvoted) {
            setPostDetails({
                ...postDetails,
                upvotes: postDetails.upvotes - 1,
                downvotes: postDetails.downvotes + 1,
            });
        }

        setDownvoted(!downvoted);
        setUpvoted(false);

    };

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    const handleMoreOpen = () => {
        setShowMore(!showMore);
    };

    const postOwner = users.find((user) => user.id === postDetails.owner);




    const theme = useTheme()
    return (
        <>
            <Card sx={{
                marginY: 3,
                width: "100%",
                height: "fit-content",
                paddingX: 2,
                paddingY: 2,
                // backgroundColor: "red",
                border: "2px solid #E0E0E0",
            }} elevation={0}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start"
                }} gap={2}>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "start",
                            justifyContent: "space-between"
                        }} gap={3}>
                            <Box sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "start",
                                justifyContent: "start"
                            }} gap={3}>
                                <Avatar src={postOwner?.avatar} sx={{ width: "55px", height: "55px", borderRadius: "10px" }} variant='rounded' />
                                <Box sx={{ width: "100%", heigth: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start" }}>
                                    <Box sx={{ width: "100%", heigth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
                                        <Typography variant='body2' fontSize={"1.2em"} fontWeight={600}>{postOwner?.fullname}</Typography>
                                        {postOwner?.isVerified ? <Tooltip placement='top' title="Verified Account" arrow><VerifiedIcon color='primary' sx={{ marginLeft: 1, fontSize: "18px" }} /></Tooltip> : null}
                                        <Typography color={theme.palette.text.secondary} variant='body1' sx={{ ml: 1 }}>{postOwner?.username}</Typography>
                                        <Typography color={theme.palette.text.secondary} variant='body1' sx={{ ml: 1 }}>•&nbsp;{getTimeSince(new Date(postDetails?.timestamp))}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <IconButton onClick={handleMoreOpen} size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content" }}>
                            <img width="32" height="32" src={`/static/images/website/more_${showMore ? "filled" : "outlined"}_48.png`} alt="send-letter" />
                        </IconButton>
                    </Box>
                    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start" }}>
                        <Typography variant='body2' fontSize={"1em"} fontWeight={400}>
                            {postDetails?.text}
                        </Typography>
                        {
                            type == "media" ? <Card sx={{ width: "100%", height: "435px", minHeight: "300px", maxHeight: "550px", borderRadius: "10px", mt: 2 }}>
                                {mediaType == "image" ? <img src={media} width={"100%"} height={"auto"} alt='post' /> : "video"}
                            </Card> : null
                        }
                    </Box>
                    <Box sx={{ width: "100%", heigth: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", mt: 0 }}>
                        <Stack direction="row" alignItems={"center"} justifyContent={"space-around"} spacing={5} sx={{ paddingX: 0, width: "100%", height: "100%" }}>
                            <Box sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <IconButton onClick={handleUpvote} size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content" }}>
                                    <img width="32" height="32" src={`/static/images/website/upvote_${upvoted ? "filled" : "outlined"}_48.png`} alt="send-letter" />
                                </IconButton>
                                <Typography variant='body1' color={"text.primary"}>&nbsp;{nFormatter(postDetails?.upvotes)}</Typography>
                            </Box>
                            <Box sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <IconButton onClick={handleDownvote} size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content" }}>
                                    <img width="32" height="32" src={`/static/images/website/downvote_${downvoted ? "filled" : "outlined"}_48.png`} alt="send-letter" />
                                </IconButton>
                                <Typography variant='body1' color={"text.primary"}>&nbsp;{nFormatter(postDetails?.downvotes)}</Typography>
                            </Box>
                            <Box sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <IconButton size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content" }}>
                                    <img width="32" height="32" src="/static/images/website/comment_outlined_48.png" alt="send-letter" />
                                </IconButton>
                                <Typography variant='body1' color={"text.primary"}>&nbsp;{postDetails?.comments}</Typography>
                            </Box>
                            <Box sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <IconButton size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content" }}>
                                    <img width="32" height="32" src="/static/images/website/share_filled_48.png" alt="send-letter" />
                                </IconButton>
                                <Typography variant='body1' color={"text.primary"}>&nbsp;{postDetails?.shares}</Typography>
                            </Box>
                            <Box sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <IconButton onClick={handleBookmark} size='small' sx={{ padding: 0, width: "fit-content", height: "fit-content" }}>
                                    <img width="32" height="32" src={`/static/images/website/bookmark_${bookmarked ? "filled" : "outlined"}_48.png`} alt="send-letter" />
                                </IconButton>
                            </Box>


                        </Stack>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default FeedPost