import React from 'react'
import { Box } from "@mui/material"

interface Props {
    size: number;
}

function Spacer(props: Props) {
    return (
        <Box sx={{
            height: props.size
        }}>
        </Box>
    )
}

export default Spacer