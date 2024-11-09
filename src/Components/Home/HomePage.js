import {Paper} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

function HomePage() {
    const posters = [
        {
            id:1,
            url: "https://www.iphones.ru/wp-content/uploads/2020/01/5F6EF5F3-13BC-4E08-B757-9A89E031B676.jpeg"
        },
        {
        id:2,
        url: "https://www.iphones.ru/wp-content/uploads/2020/01/%D1%815.jpg"
    },
    {
    id:3,
    url: "https://www.iphones.ru/wp-content/uploads/2020/01/%D1%818.jpg"
    },
    {
    id:4,
    url: "https://www.iphones.ru/wp-content/uploads/2020/01/%D1%8121.jpg"
}
    ]

    return (
        <Carousel>
            {posters.map((poster) => {
                return (
                    <Box key={poster.id}>
                        <Paper>
                            <img src={poster.url} alt={poster.id} style={{width: "100%"}}/>
                        </Paper>
                    </Box>
                )
            })}
        </Carousel>
    )
}
export default HomePage;