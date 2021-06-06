import React from 'react';
import {Box, forwardRef} from "@chakra-ui/react";
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

const LogoWithText = forwardRef (({width,height,brandLogo,brandText,...props},ref) => {
    return (
        <Box
            flexShrink={0}
            w={'230px'}
            h={'110px'}
            bg={'rgb(255, 255, 255)'}
            borderRadius={'10px'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            ml={['10px','15px']}
            justifyContent={'center'}
            {...props}
            ref={ref}
        >
            <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>

            <img
                // style={{
                //     width: '38px',
                //     height: '38px',
                // }}
                src={brandLogo}
                 width={width}
                 height={height}
            />

            <Box
            fontSize={'17px'}
            fontWeight={600}
            mt={'10px'}
            >
                {brandText}
            </Box>
            </Reveal>
        </Box>
    );
}) ;

export default LogoWithText;
