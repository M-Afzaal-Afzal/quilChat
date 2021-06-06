import React from 'react';
import {Box} from "@chakra-ui/react";
import {keyframes} from "@emotion/react";
import Reveal from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    animation-delay: 1s;
    opacity: 1;
    transform: translateY(0);
  }`;

const ConversationSectionInfo = () => {

    return (
        <Box
            pos={'relative'}
            p={['50px 20px','50px 50px 75px','100px']}
        >
            <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>

            <Box
                fontWeight={700}
                fontSize={['12vw','64px']}
                lineHeight={'1.01em'}
                mb={'0.546875em'}
                color={'rgb(39, 164, 214)'}
                maxW={'750px'}
            >
                Conversations designed for people, not bots.
            </Box>

            <Box
                fontWeight={600}
                fontSize={'24px'}
                color={'rgb(0,0,0)'}
                letterSpacing={'.18px'}
                lineHeight={1.16667}
                maxW={'600px'}
            >
                Split a conversation if someone goes off-topic. Move it if there’s a better place for it. Reply to
                specific questions, or start a new conversation from an idea. Quill is designed for better expression of
                thought.
            </Box>
            </Reveal>
        </Box>
    );
};

export default ConversationSectionInfo;
