import React from 'react'

import { Box } from "@mui/material"

import { useRouter } from 'next/router'

function Layout({ children }: any) {

    const router = useRouter()
    return (
        <Box sx={{
            padding: router.pathname === "/messages" ? 0 : { xs: 1, sm: 2, md: 4, lg: 5, xl: 7 },
        }}>
            {children}
        </Box>
    )
}

export default Layout