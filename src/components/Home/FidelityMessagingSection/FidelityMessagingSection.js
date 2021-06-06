import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import FidelityMessagingInfoSection from "./FidelityMessagingInfoSection";
import FidelityVideoSection from "./FidelityVideoSection";
import InfoCards from "./InfoCards";

const FidelityMessagingSection = () => {

    return (
        <Box pb={['50px']}
             p={['10px','43px']}
            position={'relative'}
             zIndex={5}
             bg={'rgb(0,0,0)'}
             overflow={'hidden'}
             w={'100%'}
        >

            <Container p={0} m={'0 auto'} maxW={'container.xl'}>

                <FidelityMessagingInfoSection/>
                <FidelityVideoSection/>
                <InfoCards/>
            </Container>

        </Box>
    );
};

export default FidelityMessagingSection;
