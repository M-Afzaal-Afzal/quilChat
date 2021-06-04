import React from 'react';
import {Box, forwardRef} from "@chakra-ui/react";

const BlueButton = forwardRef ((props,ref) => {
    return (
        <Box
            cursor={'pointer'}
            bg={'rgb(0, 122, 255)'}
            display={'inline-block'}
            ref={ref}
            color={'#fff'}
            borderRadius={'50px'}
            p={'2px 12px'}
            fontSize={'13px'}
            fontWeight={500}
            dispay={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            _hover={{
                filter: 'brightness(110%)'
            }}
            transition={'all .5s'}
            {...props}
        >
            {props.children}
        </Box>
    );
})

export default BlueButton;
