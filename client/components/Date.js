import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moment from "moment";

export const AppDate = () => {

    const getDate = () => {
        let dateObject = new Date();
        let formattedDate = moment(dateObject).format('dddd, DD MMM, YYYY');
        return formattedDate;
    }

    return (
        <Typography component="div">
            <Box fontFamily="fontFamily">
                { getDate() }
            </Box>
        </Typography>
    );
}

export default AppDate;