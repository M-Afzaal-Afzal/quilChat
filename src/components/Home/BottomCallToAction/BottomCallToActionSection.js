import React from 'react';
import {Box, Button, Container} from "@chakra-ui/react";
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

const BottomCallToActionSection = () => {
    return (
        <Box
            pos={'relative'}
            zIndex={5}
            bg={'rgb(0,0,0)'}
            padding={'0px 20px'}


            overflow={'hidden'}
            pb={['50px', null, '0']}
        >
            <Container
                maxW={'container.lg'}
                m={'0 auto'}
                p={0}
                mt={'43px'}
                mx={'auto'}
                mb={'0'}
            >
                <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>

                    <Box
                        borderRadius={['calc(2 * 10px)', 'calc(2 * 15px)']}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        p={'100px 0px 120px'}
                        minH={'300px'}
                        pos={'relative'}
                        zIndex={1}
                        bg={'linear-gradient(150deg, rgba(255, 64, 207, 0.5), rgba(101, 20, 252, 0.5)) rgb(0, 0, 0)'}
                    >

                        <img
                            style={{
                                width: '128px',
                                height: '128px',
                                display: 'block',
                            }}
                            src={"https://quill.chat/images/homepage/Quill_256@2x.png"}
                            width="256"
                            height="256"
                        />

                        <Box
                            fontSize={'17px'}
                            textAlign={'center'}
                            lineHeight={'1.23536em'}
                            fontWeight={500}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                        >

                            <Box
                                fontWeight={600}
                                fontSize={'28px'}
                                lineHeight={'1.16667em'}
                                letterSpacing={'-0.18px'}
                                marginTop={'25px'}
                                color={'rgb(255,255,255)'}
                                minW={'450px'}
                                p={'0px 20px'}
                            >
                                The best messaging experience. Now available for work.
                            </Box>

                            <Box
                                color={'rgba(255,255,255,.7)'}
                                fontWeight={500}
                                fontSize={'22px'}
                                lineHeight={'1.16667em'}
                                letterSpacing={'-.18px'}
                                margin={'0.6em 0px 1em'}
                                maxW={'550px'}
                                padding={'0px 20px'}
                            >
                                Quill is free for small groups and teams, and scales up to even the largest companies
                                and enterprises.
                            </Box>

                            <Box
                                display={'flex'}
                                width={'100%'}
                                justifyContent={'center'}
                                mt={'10px'}
                                pos={'relative'}
                                zIndex={1}
                            >

                                <Button
                                    minWidth={'139px'}
                                    textDecoration={'none'}
                                    fontSize={'15px'}
                                    fontWeight={500}
                                    letterSpacing={'-0.4px'}
                                    textAlign={'center'}
                                    lineHeight={'22px'}
                                    p={'10px 20px'}
                                >
                                    Try it for free
                                </Button>
                            </Box>

                            <Box
                                fontSize={'12px'}
                                color={'rgba(235,235,245,.4)'}
                                letterSpacing={'-0.08px'}
                                textAlign={'center'}
                                lineHeight={'18px'}
                                mt={'20px'}
                                textDecoration={'none'}
                                pos={'relative'}
                                zIndex={1}
                            >
                                Available for web, macOS, Windows, Linux, iOS, and Android.
                            </Box>

                        </Box>

                    </Box>

                    {/* bottom heart section*/}
                    <Box
                        maxW={'700px'}
                        display={'flex'}
                        alignItems={'center'}
                        margin={'0px auto -10px'}
                        padding={'25px 0px 0px'}
                    >
                        <img
                            style={{
                                opacity: .8,
                                marginRight: '15px',
                                marginLeft: '-10px'
                            }}
                            src={"https://quill.chat/images/homepage/section_6/chat_2@2x.png"} width="142" height="124"
                            className="Team__Chat-sc-1sa7l79-1 emDesc"
                        />

                        <Box
                            fontSize={'17px'}
                            lineHeight={'1.23536em'}
                            fontWeight={'500px'}
                        >

                        <span
                            style={{
                                color: 'rgba(255,255,255,.9)',
                                fontWeight: 600,
                            }}


                        >
                            We love messaging. &nbsp;
                        </span>

                            <span
                                style={{
                                    color: 'rgba(255,255,255,.7)',
                                    fontWeight: 600,
                                }}
                            >
                            We’ve built, launched and scaled products at Apple, Square, Stripe, Snap, Wish, and OpenAI. If you care deeply about high quality software — we’d love to chat.
                        </span>

                        </Box>

                    </Box>

                </Reveal>
            </Container>
            bottom call to action section
        </Box>
    );
};

export default BottomCallToActionSection;
