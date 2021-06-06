import React from 'react';
import {Box} from "@chakra-ui/react";

const FidelityMessagingInfoSection = () => {
    return (
        <Box
            p={['50px 20px', '50px 50px 75px', '100px']}
        >
            <Box
                fontSize={['13vw', '64px']}
                color={'rgb(50, 215, 75)'}
                lineHeight={'1.03125em'}
                mb={'0.546875em'}
                fontWeight={700}
            >
                High fidelity messaging.
            </Box>

            <Box maxW={'650px'}
                 fontWeight={600}
                 fontSize={'24px'}
                 color={'rgb(255, 255, 255)'}
                 letterSpacing={'0.18px'}
                 lineHeight={1.16667}
            >
                Communicate as richly as you do in person. Share files, photos, video, or use powerful integrations.
                Messaging that’s designed to keep your team connected, without overburdening their day-to-day.
            </Box>

        </Box>
    );
};

export default FidelityMessagingInfoSection;
