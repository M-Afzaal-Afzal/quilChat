import React from 'react';
import {Box, useMediaQuery} from "@chakra-ui/react";
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

const ConversationSectionMobile = () => {

    const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

    return (
        <Box
            pos={'relative'}
            p={'50px 0px'}
            zIndex={1}
            bg={'linear-gradient( 320deg,rgba(92,235,52,0.3),rgba(92,235,52,0) ),linear-gradient(180deg,#27a4d6 0%,#1a6d8e 100%)'}
            borderRadius={[0, 'calc(2 * 10px)']}
            ml={['calc(0 - 10px)']}
            mr={['calc(0 - 10px)']}
            display={'flex'}
            flexDirection={['column-reverse', 'row']}
        >

            {/* First Section */}
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-around'}
                p={['0px 20px 20px 30px', '40px 40px 40px 50px', '50px calc(50px + 20px)', '50px calc(60px + 20px)']}
                minW={['calc(40% + 80px)', null, 'calc(42%)', 'calc(37%)', '450px']}
                pos={'relative'}
                width={['auto', '50%']}
            >

                <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>


                    <Box pos={'relative'}>

                        <img
                            style={{
                                width: '56px',
                                height: '56px',
                            }}
                            src={"https://quill.chat/images/homepage/section_social@2x.png?2"}
                            width="56" height="56"
                        />

                    </Box>


                    <Box
                        fontWeight={700}
                        fontSize={'35px'}
                        letterSpacing={'-0.39px'}
                        mt={'25px'}
                        color={'rgb(23,51,59)'}
                    >
                        There’s more to a team than work.
                    </Box>


                    <Box
                        fontWeight={600}
                        fontSize={'22px'}
                        lineHeight={'1.16667em'}
                        margin={'.5em 0'}
                        color={'rgba(255,255,255,.7)'}
                    >

                        <Box display={'inline-block'} fontWeight={600} color={'rgb(255, 255, 255)'}>
                            Social Channels are for free flowing chat. No structure required. Roll up messages you’ve
                            already sent into a thread of their own.
                        </Box>

                        When you want to share photos from your weekend hike, or talk about the book you’re reading,
                        Quill has Social Channels. Dip in and out of conversations, without requiring threads.

                    </Box>

                </Reveal>

                <Reveal keyframes={customAnimation} direction={'down'} cascade triggerOnce>

                    <Box
                        color={'rgb(255, 255, 255)'}
                        opacity={'.8'}
                        fontSize={'17px'}
                        lineHeight={'1.23536em'}
                        fontWeight={500}
                        paddingTop={'15px'}
                        _before={{
                            content: "''",
                            display: 'block',
                            width: '90%',
                            marginBottom: '18px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            height: '2px',
                            borderRadius: '2px',
                        }}
                    >
                        Flip your channels from social to structured, and vice versa, any time. Adapt your level of
                        structure as your needs change.
                    </Box>
                </Reveal>
            </Box>

            {/* Second Section*/}

            <Box
                mr={[null, '-70px']}
                mb={[null, '-20px']}
                pos={'relative'}
                display={'flex'}
                w={['100%']}
                margin={['0 0 50px']}
                padding={[0]}
                left={[0, '-20px']}
                top={[0, '50px']}
                alignItems={['flex-start', 'center']}
            >

                <Box pos={'relative'}
                     top={0}
                     fontSize={0}
                     mr={[null, '40px']}
                     m={['0px auto']}

                >

                    <Box pos={'relative'} fontSize={0}
                         _after={{
                             content: "''",
                             position: 'absolute',
                             zIndex: 3,
                             inset: '10px',
                             borderRadius: '40px',
                             background: 'rgb(0, 0, 0)',
                             boxShadow: 'rgb(0 0 0 / 25%) 0px 40px 80px -10px',

                         }}
                    >

                        <Box pos={'absolute'}
                             zIndex={5}
                             sx={{
                                 inset: '2.43902% 5.95533% 2.43902% 4.71464%'
                             }}
                             width={'100%'}
                             height={'95%'}
                             mt={'12px'}
                        >
                            <video playsInline muted
                                   style={{
                                       position: 'absolute',
                                       width: '100%',
                                       height: '100%',
                                   }}
                                   autoPlay={true}
                                   src="https://storage.googleapis.com/public-website-static-files.quill.chat/v3/homepage/section_2/reactions_android_web.mp4"
                                   poster={"https://quill.chat/images/homepage/section_2/mobile/reactions_first_frame.jpeg"}
                                   width="360"
                                   height="780"
                                   className="ScreenshotBlock__AndroidVideo-txfd2i-12 iPspkY"
                            />
                        </Box>

                        <img
                            style={{
                                position: "relative",
                                zIndex: '10 !important',
                            }}
                            src={"https://quill.chat/images/homepage/section_2/mobile/android_frame@2x.png"}
                            width="350"
                            height="713"
                            draggable="false" className="ScreenshotBlock__AndroidFrame-txfd2i-13 cofklR"/>

                    </Box>

                </Box>

                {
                    isLargerThan900 && (
                        <Box pos={'relative'}
                             top={'50px'}
                             _after={{
                                 content: "''",
                                 position: 'absolute',
                                 zIndex: 3,
                                 inset: '10px',
                                 borderRadius: '40px',
                                 background: 'rgb(0, 0, 0)',
                                 boxShadow: 'rgb(0 0 0 / 25%) 0px 40px 80px -10px'
                             }}
                        >
                            <img
                                style={{
                                    position: 'relative',
                                    zIndex: '10 !important'
                                }}
                                src={"https://quill.chat/images/homepage/section_2/mobile/iphone/frame@2x.png"}
                                width="366"
                                height="738"
                                draggable="false" className="ScreenshotBlock__AppleFrame-txfd2i-15 eSDAis"/>

                            <img
                                style={{
                                    position: 'absolute',
                                    width: '88.7978%',
                                    height: '95.122%',
                                    left: '5.46448%',
                                    top: '2.43902%',
                                    zIndex: 5,
                                }}
                                src={"https://quill.chat/images/homepage/section_2/mobile/iphone/content@2x.jpg"}
                                width="325" height="1404/2"
                                draggable="false" className="ScreenshotBlock__AppleContent-txfd2i-16 jRmsQD"/>

                        </Box>
                    )
                }


            </Box>


        </Box>
    );
};

export default ConversationSectionMobile;
