import React, { useState, useEffect } from 'react';
import {
    Button,
    Typography,
    Stack,
    CircularProgress,
    SxProps,
    Theme
} from "@mui/material"

interface AsyncButtonProps {
    title: any;
    state: "error" | "normal" | "loading";
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    color: "error" | "primary" | "inherit" | "secondary" | "success" | "info" | "warning"
    sx?: SxProps<Theme> | undefined;
    fullWidth?: boolean;
    titleVariant?: any;

}

const AsyncButton = (props: AsyncButtonProps) => {
    return (
        <Button
            variant="contained"
            color={props.state == "error" ? "error" : props.color}
            disabled={props.state != "loading" ? false : true}
            onClick={props.onClick}
            sx={props.sx}
            fullWidth={props.fullWidth}

        >
            <Stack direction={"row"} alignItems="center" justifyContent="center" gap={2}>
                <Typography sx={{ paddingY: 1 }} variant={props.titleVariant ? props.titleVariant : "h6"}>{props.title}</Typography>{props.state == "loading" ? <CircularProgress color='secondary' size={20} /> : null}
            </Stack>

        </Button >
    );
};

export default AsyncButton;