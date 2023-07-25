import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { styled } from "@mui/material";

const Header = styled(AppBar)`
    background: #111111
`
const Tabs = styled('p')`
    font-size: 20px;
    margin-right: 20px; 
`


export default function Navbar () {
    return (
        <>
        <Header>
            <Toolbar>
                <Tabs>Code For Interview</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>Add Users</Tabs>
            </Toolbar>
        </Header>
        </>
    )
}