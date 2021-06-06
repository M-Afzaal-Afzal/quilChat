import React from 'react';
import {Box} from "@chakra-ui/react";

const MuchMoreInfo = () => {
    return (

        <Box
            p={['50px 20px','50px','100px 100px 75px']}
        >

            <Box
                fontSize={['13vw','44px']}
                fontWeight={700}
                mb={'0.2em'}
                lineHeight={'1.03125em'}
                color={'rgb(255, 23, 50)'}
                maxW={'700px'}
            >
                And so much more.
            </Box>

            <Box
                fontSize={['9vw','30px']}
                fontWeight={'700'}
                mt={'0px'}
                mb={'0px'}
                color={'rgba(0, 0, 0, 0.9)'}
                letterSpacing={'0.39px'}
                lineHeight={'1.16667em'}
                maxW={'700px'}
            >
                Quill is packed with features, but your conversations always come first.
            </Box>

        </Box>

    );
};

export default MuchMoreInfo;
