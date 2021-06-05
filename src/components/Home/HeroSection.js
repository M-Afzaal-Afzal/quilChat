import React from 'react';
import {Box, Container, Text} from "@chakra-ui/react";

const HeroSection = () => {

    return (
        <Box display={'flex'}
             flexDirection={'column'}
             // minH={['600px', 'auto']}
             maxH={['1000px', '1100px']}
             height={['82vh', '100vh']}
             margin={'0 auto'}
        >

            <Box
                bg={'rgb(0,0,0)'}
                flexGrow={0}
                flexShrink={0}
                margin={0}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                position={'relative'}
                overflow={'hidden'}
                // maxWidth={'1300px'}
                // minW={'400px'}
            >

                {/* navigation box*/}

                {/*<Box>*/}

                {/*</Box>*/}

                {/* second box*/}
                {/*pointer-events: none;*/}

                <Box
                    position={'relative'}
                    zIndex={2}
                    display={"flex"}
                    width={'100%'}
                    flexGrow={1}
                    overflow={'hidden'}
                    bg={'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 40%), radial-gradient(closest-side, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), radial-gradient(circle at center -48%, rgb(188, 202, 228) 50%, rgb(80, 94, 135) 110%)'}
                    _after={{
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        content: '" "',
                        display: 'block',
                        position: 'absolute',
                        zIndex: 1,
                        inset: '-20px -50px',
                        contain: 'strict',
                        background: `radial-gradient(closest-side, rgba(228, 79, 79, 0.7), rgba(228, 79, 79, 0)) 600% 500% / 90% 90% no-repeat, radial-gradient(closest-side, rgba(228, 79, 79, 0.7), rgba(228, 79, 79, 0)) 600% 180% / 90% 90% no-repeat, radial-gradient(closest-side, rgba(250, 250, 218, 0.2), rgba(250, 250, 218, 0)) 100% 150% / 75% 50% no-repeat, radial-gradient(closest-side, rgba(250, 250, 218, 0.3), rgba(250, 250, 218, 0)) -400% -100% / 90% 80% no-repeat, radial-gradient(closest-side, rgba(94, 225, 249, 0.8), rgba(94, 225, 249, 0)) -100% -250% / 85% 80% no-repeat, radial-gradient(closest-side, rgba(94, 225, 249, 0.6), rgba(94, 225, 249, 0)) -170% 100% / 70% 60% no-repeat, linear-gradient(30deg, rgb(110, 16, 206) 10%, rgba(110, 16, 206, 0) 70%, rgba(255, 255, 255, 0) 90%) 50% 50% / 100% 100% no-repeat, linear-gradient(144deg, rgba(233, 235, 104, 0), rgba(233, 235, 104, 0.3)) no-repeat, linear-gradient(90deg, rgba(104, 184, 235, 0.11), rgba(15, 216, 223, 0.11)) no-repeat, rgb(255, 255, 255)`
                    }}
                >


                    <Container
                        flexGrow={1}
                        pt={'2rem'}
                        margin={'0px auto'}
                        padding={'20px 0 40px'}
                        position={"relative"}
                        zIndex={2}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        maxWidth={'container.xl'}
                    >

                        <Box
                            position={'relative'}
                            top={'1px'}
                            zIndex={5}
                            w={['34.5%', '33.8%']}
                            _after={{
                                content: "''",
                                display: 'block',
                                paddingTop: '100%',
                            }}
                        >

                            <Box
                                position={'absolute'}
                                width={'100%'}
                                height={'100%'}
                                sx={{
                                    perspective: '1100px'
                                }}
                            >

                                <img style={{
                                    width: "100%",
                                    height: "auto",
                                    borderStyle: 'none',
                                    position: 'absolute',
                                }} src={"https://quill.chat/images/homepage/icon/Back_alt@2x.png"}
                                     width="596"
                                     height="596"
                                     draggable="false"
                                     className="ParallaxIcon__Back-sc-1ho19da-1 fRSgRJ"

                                />

                                <img style={{
                                    width: "100%",
                                    height: "auto",
                                    borderStyle: 'none',
                                    position: 'absolute',
                                }} src={"https://quill.chat/images/homepage/icon/Feather@2x.png"} width="596"
                                     height="596"
                                     draggable="false" className="ParallaxIcon__Feather-sc-1ho19da-3 kkyQgh"

                                />

                                <img style={{
                                    width: "100%",
                                    height: "auto",
                                    borderStyle: 'none',
                                    position: 'absolute',
                                }} src={"https://quill.chat/images/homepage/icon/Bubble@2x.png"} width="596"
                                     height="596"
                                     draggable="false" className="ParallaxIcon__Bubble-sc-1ho19da-2 dcaWUr"

                                />

                            </Box>


                        </Box>

                        <Box fontWeight={700}
                             fontSize={['5vw', '26px']}
                             color={'rgb(255,255,255)'}
                             letterSpacing={'.3px'}
                             textAlign={'center'}
                             lineHeight={'32.61px'}
                             background={'rgba(32,0,105,.2)'}
                             borderRadius={'25px'}
                             p={['0.1em 0.6em','6px 14px']}
                             mt={'10px'}
                             position={'relative'}
                             zIndex={1}
                        >
                            Quil

                            <Box
                                color={'rgb(255,255,255)'}
                                position={'absolute'}
                                right={'-10px'}
                                top={'-10px'}
                                bg={'linear-gradient(rgb(59, 157, 237), rgb(122, 50, 200)) rgb(105, 195, 255)'}
                                boxShadow={'rgb(0 0 0 / 30%) 0px -1px 2px -1px inset, rgb(53 0 117 / 20%) 0px 1px 3px 0px, rgb(53 0 117 / 20%) 0px 5px 10px 0px, rgb(0 0 0 / 5%) 0px 0px 0px 0.5px'}
                                fontSize={'12px'}
                                width={'26px'}
                                height={'26px'}
                                lineHeight={'12px'}
                                padding={'7px 0'}
                                letterSpacing={'-1px'}
                                borderRadius={'50%'}
                            >
                                1.0
                            </Box>
                        </Box>

                        <Text as={'h1'}
                              fontWeight={700}
                              fontSize={['9vw', '40px']}
                              color={'rgb(255,255,255)'}
                              textAlign={'center'}
                              lineHeight={'1.1226em'}
                              letterSpacing={'-0.01em'}
                              m={'17px 20px 23px'}
                              mt={[null, '1rem']}
                              position={'relative'}
                              zIndex={1}
                              maxWidth={'500px'}
                        >
                            Messaging to make your team better. Meet Quill.
                        </Text>


                        <Box
                            display={'flex'}
                            width={'100%'}
                            justifyContent={'center'}
                            position={'relative'}
                            zIndex={1}
                            flexDirection={['column-reverse', 'row']}
                            p={['0 20px', '0 0']}
                            maxWidth={['300px']}
                        >

                            <Box
                                minW={'139px'}
                                textDecoration={'none'}
                                fontSize={'16px'}
                                fontWeight={[600,500]}
                                color={'rgb(255,255,255)'}
                                letterSpacing={'-0.3px'}
                                textAlign={'center'}
                                lineHeight={'22px'}
                                p={'12px 20px'}
                                flexGrow={[1,'auto']}
                                bg={'rgb(118, 60, 247)'}
                                borderRadius={'18px'}
                                transition={'filter 200ms ease 0s'}
                                _hover={{
                                    filter: 'brightness(110%)'
                                }}
                                cursor={'pointer'}
                            >
                                Try it free
                            </Box>
                        </Box>


                        <Box
                            textDecoration={'none'}
                            fontSize={'12px'}
                            color={'rgba(235, 235, 245, 0.68)'}
                            letterSpacing={'-0.08px'}
                            textAlign={'center'}
                            lineHeight={'18px'}
                            mt={['1em','24px']}
                            mb={'30px'}
                            zIndex={1}
                        transition={'color 200ms ease 0s'}
                            maxWidth={'220px'}
                        >
                            Available for web, macOS, Windows, Linux, iOS, and Android.
                        </Box>

                    </Container>


                    <Container
                        position={'absolute'}
                        zIndex={30}
                        left={0}
                        right={0}
                        bottom={0}
                        display={'flex'}
                        alignItems={'center'}
                        pb={'30px'}
                        transition={'opacity 1.2s ease 1.5s, transform 1.2s ease 1.5s'}
                        opacity={1}
                    >

                        <Box m={'0 auto'} display={'inline-block'}>

                            <Box
                                transition={'background-color 200ms ease 0s'}
                                position={'relative'}
                                zIndex={5}
                                fontSize={'13px'}
                                fontWeight={500}
                                textDecoration={'none'}
                                lineHeight={'18px'}
                                mt={'60px'}
                                p={'6px 11px 6px 13px'}
                                borderRadius={'50px'}
                                textAlign={'center'}
                                bg={' rgba(0, 0, 70, 0.12)'}
                                display={'inline-block'}
                                color={'white'}
                            >

                                Import from Slack:Transfer all team-wide content.→

                            </Box>

                        </Box>

                    </Container>

                </Box>


            </Box>

        </Box>
    );
};

export default HeroSection;
