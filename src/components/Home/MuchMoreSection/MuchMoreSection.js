import React from 'react';
import {Box} from "@chakra-ui/react";
import MuchMoreInfo from "./MuchMoreInfo";
import MuchMoreHorizontalMoving from "./MuchMoreHorizontalMoving";

const MuchMoreSection = () => {
    return (
        <Box bg={'rgb(247,247,247)'}
             p={['10px','43px']}
            zIndex={5}
             pos={'relative'}
             overflow={'hidden'}
        >
            <MuchMoreInfo/>
            <MuchMoreHorizontalMoving/>
        </Box>
    );
};

export default MuchMoreSection;
