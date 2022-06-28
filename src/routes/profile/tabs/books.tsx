import { Box } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import * as React from 'react';
import BookTabs from '../components/books-tab';

export default function Books() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <BookTabs {...{ value, handleChange }} />
            <Box sx={{margin:"30px 0"}}>
            <ProductCard horizontal />
            </Box>
        </>
    );
}

