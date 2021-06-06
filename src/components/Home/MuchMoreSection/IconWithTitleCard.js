import React from 'react';
import {Box, forwardRef} from "@chakra-ui/react";

const IconWithTitleCard = forwardRef (({iconUrl,title},ref)=> {

    return (
        <Box
            ref={ref}
            flexShrink={0}
            padding={'20px'}
            textAlign={'center'}
            flexGrow={1}
            background={'rgba(0,0,0,.04)'}
            borderRadius={'10px'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <img
                style={{opacity: .7}}
                src={iconUrl}
                 width="38"
                 height="38"
            />

            <Box
                marginTop={'10px'}
                fontWeight={600}
                fontSize={'17px'}
            >
                {title}
            </Box>

            <Box
                m={'6px 0px 0px'}
                color={'rgba(0,0,0,.4)'}
                fontSize={'13px'}
            >
                Coming Soon
            </Box>

        </Box>
    );
}) ;

export default IconWithTitleCard;
