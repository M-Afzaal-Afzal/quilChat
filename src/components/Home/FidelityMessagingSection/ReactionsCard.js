import React from 'react';
import {Box} from "@chakra-ui/react";

const ReactionsCard = () => {
    return (
        <Box
            pos={'relative'}
            display={'inline-flex'}
            flexDirection={'column'}
            h={['100%', '100%', '800px']}
            w={'100%'}
            mt={0}
            mb={'50px'}
            pb={['10px', '50px']}
            bg={'linear-gradient(rgba(118, 118, 128, 0.24), rgba(118, 118, 128, 0.18))'}
            overflow={'hidden'}
            borderRadius={'25px'}
        >

            <Box
                h={['100%', '100%', 'auto']}
            >

                <Box
                    fontSize={'18px'}
                    fontWeight={600}
                    color={'rgb(50,215,75)'}
                    lineHeight={'1.1111em'}
                    m={'5px 0px 1em'}
                    p={'30px'}
                >
                    Reactions
                </Box>

            </Box>

            {/* icons box*/}
            <Box
                alignSelf={'center'}
                fontSize={0}
                width={'100%'}
                maxW={'calc(100% - 2*30px)'}
                nt={'-20px'}
                mb={'-10px'}
            >
                <Box
                    mt={'10px'}
                    ml={'calc(0px - 30px - 10px)'}
                    w={'calc(100% + (2 * 30px) + (2 * 10px)) !important'}
                >

                    <Box
                        pos={'relative'}
                        width={'auto'}
                        pt={'63%'}
                    >

                        <img
                            style={{
                                left: '8.5%',
                                top: '19%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/shock.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '20%',
                                top: '19%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/100.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '45%',
                                top: '30%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/love.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '-15%',
                                top: '48%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/laugh.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '43%',
                                top: '62%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/thumbsup.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '55%',
                                top: '0%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/confetti.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '26%',
                                top: '66%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/raisedhands.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                        <img
                            style={{
                                left: '74%',
                                top: '0%',
                                transition: 'transform 600ms cubic-bezier(0.45, 1.81, 0.55, 0.88) 0s, opacity 200ms ease 0s',
                                opacity: 1,
                                transform: 'none',
                                zIndex: 3,
                                position: 'absolute',
                            }}
                            src={"https://quill.chat/images/homepage/section_3/reactions/looking.svg"}
                             width="28%" height="28%"
                             // style="left:8.5%;top:19%"
                        />

                    </Box>

                </Box>

            </Box>


        </Box>
    );
};

export default ReactionsCard;
