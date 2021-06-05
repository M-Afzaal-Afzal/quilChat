import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import ConversationSectionInfo from "./ConversationSectionInfo";
import ConversationSectionMobile from "./ConversationSectionMobile";
import ConversationCardsSection from "./ConversationCardsSection";

const ConversationSection = () => {
    return (
        <Box
            p={['10px 10px 50px', '43px 43px 50px']}
            bg={'rgb(245, 245, 247)'}
            overflow={'hidden'}
            pos={'relative'}
            zIndex={5}
            w={'100%'}

        >
            <Container
                maxW={'container.xl'}
                padding={0}
                margin={'0px auto'}
            >

                <ConversationSectionInfo/>
                <ConversationSectionMobile/>
                <ConversationCardsSection/>

            </Container>


        </Box>
    );
};

export default ConversationSection;
