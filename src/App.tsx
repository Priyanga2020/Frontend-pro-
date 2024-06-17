import React from 'react';
import Form from './Form';
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                Detailed Form
            </Typography>
            <Form />
        </Container>
    );
};

export default App;
