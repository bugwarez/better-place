import React, { useState } from 'react'
import {
  Button,
  Typography,
  Box,
  Stack,
  Card,
  TextField,
  Tabs,
  Tab,
  Chip,
  useTheme
} from '@mui/material'
import Image from 'next/image'

//!Icons
import LockIcon from '@mui/icons-material/Lock';
import AsyncButton from '../components/AsyncButton';
import Link from 'next/link';

function Index() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme()

  const [signinState, setSigninState] = useState<any>("normal")

  const handleSignin = () => {
    setSigninState("loading")
    const timer = setTimeout(() => {
      setSigninState("error")
    }, 2000)
    return () => clearTimeout(timer);
  }

  return (
    <>
      <Box sx={{
        width: "100vw",
        height: "100vh",
        // background: "cyan",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }} gap={5}>
        <Box sx={{
          width: "50vw",
          height: "50vh",
          // background: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "center"
          }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent="start" gap={1} width={"50%"} >
              <Image alt="betterplace logo" width={50} height={50} src="/static/images/website/logo/logo.png" />
              <Typography variant='h4' className='handwriting'>Betterplace</Typography>
            </Stack>
            <Image alt="betterplace hero" width={500} height={500} src={`/static/images/website/hero/hero_${value == 0 ? "1" : "2"}.gif`} />
          </Box>
        </Box>
        <Box sx={{
          width: "50vw",
          height: "100%",
          display: "flex",
          // background: "green",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}>
          <Box sx={{
            width: "fit-content",
            display: "flex",
            // background: "green",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Typography sx={{ my: 2 }} textAlign={"center"} variant='h5'>Just like the name, <b>betterplace</b> than others</Typography>
            <Card sx={{
              width: "500px",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }} elevation={3}>
              <Box sx={{ width: '100%', height: "100%" }}>

                <Box sx={{}}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab sx={{ paddingX: 10 }} label={
                      <>
                        <Chip label="Sign in" size="medium" sx={{
                          backgroundColor: value == 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                          color: "white"
                        }} />
                      </>
                    } {...a11yProps(0)} />
                    <Tab sx={{ paddingX: 10 }} label={
                      <>
                        <Chip label="Sign Up" size="medium" sx={{
                          backgroundColor: value == 1 ? theme.palette.primary.main : theme.palette.secondary.main,
                          color: "white"
                        }} />
                      </>
                    } {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <TextField type='email' required fullWidth id="outlined-basic" label="E-Mail address" variant="outlined" />
                  <TextField type='password' required fullWidth id="outlined-basic" label="Password(we'll keep it safe)" variant="outlined" />
                  <AsyncButton fullWidth color='primary' title="Login" state={signinState} onClick={handleSignin} />
                  <a className='web-link'>
                    Forgot Password?
                  </a>
                  <Typography>
                    Don&apos;t have an account? <span onClick={() => { setValue(1) }} className='web-link'>Sign Up</span>
                  </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <TextField type='text' required fullWidth id="outlined-basic" label="Username(Pick something cool)" variant="outlined" />
                  <TextField type='email' required fullWidth id="outlined-basic" label="E-Mail address" variant="outlined" />
                  <TextField type='password' required fullWidth id="outlined-basic" label="Password(we'll keep it safe)" variant="outlined" />
                  <AsyncButton fullWidth color='primary' title="Register" state={signinState} onClick={handleSignin} />
                  <Typography>
                    Already have an account? <span onClick={() => { setValue(0) }} className='web-link'>Sign In</span>
                  </Typography>
                </CustomTabPanel>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  )
}

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
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} gap={3}>
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


export default Index