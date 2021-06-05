import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import MessagingInfo from "./MessagingInfo";
import MessageVideoSection from "./MessageVideoSection";
import MessageActivitySection from "./MessageActivitySection";

const MessagingSection = () => {


    return (
        <Box
        bg={'rgb(0, 0, 0)'}
        p={'50px 10px'}
        overflow={'hidden'}
        position={'relative'}
        pb={['50px','50px']}
        zIndex={5}
        _before={{
            content: "''",
            pointerEvents: 'none',
            position: 'absolute',
            left: '0px',
            right: '0px',
            top: '0px',
            height: '130px',
            background: 'linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0))',
            zIndex: 30,
        }}
        >

            <Container
                maxWidth={'container.xl'}
                m={'0px auto'}
            >

                <MessagingInfo/>
                <MessageVideoSection/>
                <MessageActivitySection/>

            </Container>

        </Box>
    );
};

export default MessagingSection;
