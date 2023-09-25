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



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0, m: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function TrendListCard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Card sx={{
            width: "100%",
            height: "75vh",
            border: "2px solid #E0E0E0",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            // padding: 2
        }} elevation={0}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs sx={{ paddingX: 2 }} value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab icon={value == 0 ? <img width="24" height="24" src="https://img.icons8.com/material/24/FFAF35/hashtag-key.png" alt="hashtag-key" /> : <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFAF35/hashtag-2.png" alt="hashtag-2" />} sx={{
                            width: "50%",
                            margin: 0,
                            padding: 0
                        }} label="Hashtags" {...a11yProps(0)} />
                        <Tab icon={value == 1 ? <PersonIcon /> : <PersonOutlineOutlinedIcon />} sx={{
                            width: "50%",
                            margin: 0,
                            padding: 0
                        }} label="People" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <List sx={{
                        padding: 0,
                        margin: 0,
                        // background: "red",
                        mt: 2,
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
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
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
                                        <ListItemText primary={<Stack sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent={"start"}><Typography variant='body1' sx={{ padding: 0 }}>{user?.fullname}</Typography> {user?.isVerified ? <Tooltip placement='top' title="Verified Account" arrow><VerifiedIcon color='primary' sx={{ marginLeft: 1, fontSize: "18px" }} /></Tooltip> : null}</Stack>} secondary={
                                            <Typography variant='caption' color={"text.secondary"} sx={{ padding: 0 }}>{user?.username} • <Button sx={{ p: 0, borderRadius: "10px" }} size='small'>Follow</Button></Typography>
                                        } />
                                    </ListItemButton>
                                </ListItem>
                                {index !== 5 && <Divider />}
                            </>
                        ))}
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/trends#people">
                                <ListItemText primary={<Typography color={"primary"}>Show More</Typography>} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </CustomTabPanel>

            </Box>
        </Card>
    );
}