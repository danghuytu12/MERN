import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import Button from '@mui/material/Button';
export default function Login() {
    return (
        <Container>
            <TextField  label="Email" variant="standard" />
            <TextField  label="Password" variant="standard" />
            <Button variant="contained">Contained</Button>
        </Container>
        
    );
}
const Container=styled.div`
    flex-direction: column;
    display: inline-flex;
    padding: 20px;
    margin: 100px;
    margin-left: 400px;
    width: 500px;
`