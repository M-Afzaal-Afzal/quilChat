import React from 'react';
import {Box} from "@chakra-ui/react";

const MessagingInfo = () => {

    return (
        <Box
            p={['50px 20px', '50px 50px 75px', '75px 100px 100px']}
        >

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

            font-weight: 500;
            font-size: 24px;
            color: rgba(255, 255, 255, 0.7);
            letter-spacing: 0.18px;
            line-height: 1.16667;
            max-width: var(--width)

            <Box
                fontWeight={500}
                fontSize={'24px'}
                color={'rgba(255,255,255,.7)'}
                letterSpacing={'.18px'}
                lineHeight={'1.16667'}
                maxWidth={'680px'}
            >
                We grew exhausted having to skim thousands of messages every day to keep up, so we built a way to chat
                that’s even better than how we already communicate in person. A more deliberate way to chat. That’s what
                Quill is all about.
            </Box>

        </Box>
    );
};

export default MessagingInfo;
