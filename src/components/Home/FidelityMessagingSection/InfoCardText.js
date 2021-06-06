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

const InfoCardText = ({heading, firstText, secondText, thirdText, fourthText}) => {
    return (
        <Box
            position={'relative'}
            display={['block', 'inline-block']}
            flexDirection={'column'}
            justifyContent={'center'}
            w={'100%'}
            // overflow={'hidden'}
            h={['auto', '100%']}
            flexGrow={'1'}
            p={'30px'}
            fontSize={'34px'}
            // pt={'30px'}
            // pb={['50px']}
            mb={['10px', '50px']}
            borderRadius={'25px'}
            fontWeight={600}
            color={'rgb(255, 255, 255)'}
            bg={'rgb(50, 215, 75)'}

        >
            <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>

                <Box fontSize={'18px'} fontWeight={'bold'}
                     color={'rgb(230,230,230)'}
                     sx={{
                         mixBlendMode: 'color-dodge',
                     }}
                     display={'block'}
                     mb={'0.5em'}
                >
                    {heading}
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    flexGrow={1}
                >

                    <Box color={'rgb(60,60,60)'}
                         sx={{
                             mixBlendMode: 'color-burn',
                         }}
                    >

                        {firstText}
                        <br/>
                        <br/>
                        {secondText && secondText}
                        <br/>
                        {thirdText && thirdText}
                        <br/>
                        {fourthText && fourthText}

                    </Box>
                </Box>

            </Reveal>
        </Box>
    );
};

export default InfoCardText;
