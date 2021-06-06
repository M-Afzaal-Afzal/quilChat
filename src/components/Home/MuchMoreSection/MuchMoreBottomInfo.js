import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import IconWithTitleCard from "./IconWithTitleCard";
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

const MuchMoreBottomInfo = () => {

    return (
        <Container
            maxW={'container.xl'}
            p={0}
            m={'0 auto'}
        >
            <Box p={['50px 10px 50px', '50px 50px 75px', '75px 100px 100px']}>
                <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>

                    <Box
                        fontWeight={600}
                        fontSize={'24px'}
                        letterSpacing={'0.18px'}
                        lineHeight={'1.16667'}
                        maxW={'550px'}
                        color={'rgba(0,0,0,.5)'}
                    >

                        <Box color={'rgb(0,0,0)'} display={'inline-block'}>
                            Level up your messaging.
                        </Box>

                        This is just the beginning. We’re building the best way to message with a group or team.

                    </Box>

                    <Box
                        display={'grid'}
                        gridTemplateColumns={'repeat(4,1fr)'}
                        gridGap={['10px', '15px']}
                        paddingTop={'50px'}
                        sx={{
                            '@media only screen and (max-width: 1000px)': {
                                gridTemplateColumns: 'repeat(2,1fr)',
                            }
                        }}
                    >

                        <IconWithTitleCard
                            iconUrl={"https://quill.chat/images/homepage/section_4/soon/encryption@2x.png"}
                            title={'End-to-end Encryption'}
                        />

                        <IconWithTitleCard
                            iconUrl={"https://quill.chat/images/homepage/section_4/soon/smart_search@2x.png"}
                            title={'Context Search'}
                        />

                        <IconWithTitleCard
                            iconUrl={"https://quill.chat/images/homepage/section_4/soon/voice_channels@2x.png"}
                            title={'Voice Channels'}
                        />

                        <IconWithTitleCard
                            iconUrl={"https://quill.chat/images/homepage/section_4/soon/user_profiles@2x.png"}
                            title={'User Profiles'}
                        />

                    </Box>

                    <Box
                        fontSize={'13px'}
                        color={'rgba(0,0,0,.28)'}
                        letterSpacing={'-0.08px'}
                        lineHeight={'18px'}
                        mt={'50px'}
                        pos={'relative'}
                        zIndex={1}
                        maxW={['280px', 'none']}
                    >
                        Enable Experimental Features in Quill to get access to features early.
                    </Box>
                </Reveal>
            </Box>

        </Container>
    );
};

export default MuchMoreBottomInfo;
