import React from 'react';
import {Box, forwardRef} from "@chakra-ui/react";

const HeaderButton = forwardRef ((props,ref)=> {
    return (
        <Box
            display={'inline-block'}
            ref={ref}
            fontSize={'13px'}
            fontWeight={500}
            _hover={{color: '#000'}}
            {...props}
            cursor={'pointer'}
            transition={'all .3s ease-in'}
        >
            {props.children}
        </Box>
    );
} ) ;

export default HeaderButton;
