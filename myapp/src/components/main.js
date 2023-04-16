import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stepper from './Stepps';
export default function Main() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Stepper />
            </Container>
        </React.Fragment>
    );
}
