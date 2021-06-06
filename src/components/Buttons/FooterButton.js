import React from 'react';
import {Box, forwardRef} from "@chakra-ui/react";

const FooterButton = forwardRef ((props,ref)=> {
    return (
        <Box
            display={'inline-block'}
            ref={ref}
            color={'rgba(255,255,255,0.6)'}
            fontSize={'13px'}
            fontWeight={500}
            _hover={{color: 'rgba(255,255,255,1)'}}
            {...props}
            cursor={'pointer'}
            transition={'all .3s ease-in'}
        >
            {props.children}
        </Box>
    );
} ) ;

export default FooterButton;
