import React from 'react';
import {Box, forwardRef} from "@chakra-ui/react";

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

        </Box>
    );
}) ;

export default LogoWithText;
