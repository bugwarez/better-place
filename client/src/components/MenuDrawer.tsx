import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

//!Icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import Groups3Icon from '@mui/icons-material/Groups3';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';

//!Icons outlined
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupIcon from '@mui/icons-material/Group';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Link from 'next/link';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: any
}

export default function ResponsiveDrawer(props: Props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const theme = useTheme();
    const router = useRouter()


    const { pathname } = router

    const drawer = (
        <div>
            <Toolbar sx={{
                background: theme.palette.primary.main
            }}>
                <Image src={"/static/images/website/logo/logo_secondary.png"} width={50} height={50} alt="betterplace logo" />
                <Typography className="handwriting" sx={{ ml: 2, fontSize: "2em !important", fontWeight: "600 !important", color: "#fff" }} >Betterplace</Typography>
            </Toolbar>
            {/* <Divider /> */}
            <List>
                <ListItem component={Link} href="/home" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/home" ? <HomeIcon /> : <HomeOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/explore" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/explore" ? <ExploreIcon /> : <ExploreOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Explore"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/notifications" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/notifications" ? <NotificationsIcon /> : <NotificationsNoneOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Notifications"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/messages" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/messages" ? <EmailIcon /> : <EmailOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Messages"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/groups" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/groups" ? <Groups3Icon /> : <Groups3OutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Groups"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/profile" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/profile" ? <PersonIcon /> : <PersonOutlineOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Profile"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem component={Link} href="/bookmarks" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/bookmarks" ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Bookmarks"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/dsda" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Change Account"} />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} href="/settings" disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {pathname == "/settings" ? <SettingsIcon /> : <SettingsOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={"Settings"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    if (router.pathname == "/") {
        return children
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {router.pathname.replace("/", "").charAt(0).toUpperCase() + router.pathname.slice(2)}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
