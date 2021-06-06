import React from 'react';
import {Box} from "@chakra-ui/react";
import Reveal from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

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

const MessagingInfo = () => {

    return (
        <Box
            p={['50px 20px', '50px 50px 75px', '75px 100px 100px']}
        >
            <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>


                <Box
                    lineHeight={'1.03125em'}
                    color={'rgb(201, 94, 255)'}
                    fontWeight={700}
                    fontSize={['13vw', '64px']}
                    mb={'0.546875em'}
                    maxWidth={'680px'}
                >
                    Quill is messaging for people that focus.
                </Box>


                <Box
                    fontSize={['9vw', '32px']}
                    mb={'1em'}
                    color={'rgb(255,255,255)'}
                    letterSpacing={'.39px'}
                    lineHeight={'1.16667em'}
                    fontWeight={600}
                    maxWidth={'680px'}
                >
                    We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and
                    disorganized. We believe there’s a better way.
                </Box>

                <Box
                    fontWeight={500}
                    fontSize={'24px'}
                    color={'rgba(255,255,255,.7)'}
                    letterSpacing={'.18px'}
                    lineHeight={'1.16667'}
                    maxWidth={'680px'}
                >
                    We grew exhausted having to skim thousands of messages every day to keep up, so we built a way to
                    chat
                    that’s even better than how we already communicate in person. A more deliberate way to chat. That’s
                    what
                    Quill is all about.
                </Box>
            </Reveal>
        </Box>
    );
};

export default MessagingInfo;
