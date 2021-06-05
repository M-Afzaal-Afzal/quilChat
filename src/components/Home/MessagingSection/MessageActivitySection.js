import React from 'react';
import {Box} from "@chakra-ui/react";

const MessageActivitySection = () => {
    return (
        <Box p={['23px 0']}
             display={'flex'}
             flexDirection={['column', 'row']}
        >
            {/* First Mobile*/}

            <Box flexDirection={['column']}
                 mt={['10px']}
                 overflow={'hidden'}
                 display={'flex'}
                 borderRadius={'calc(2 * 10px)'}
                 flexBasis={'50%'}
                // color={'rgba(255,255,255,0.6)'}
                 bg={'linear-gradient(rgba(118, 118, 128, 0.35), rgba(118, 118, 128, 0.18))'}
                 p={['30px 30px 0px', '60px 75px 0px']}
                 ml={['0px !important']}
            >

                <img
                    style={{
                        width: '56px',
                        height: '56px'
                    }}
                    src={"https://quill.chat/images/homepage/section_1/activity_feed@2x.png?2"}
                    width="56" height="56"
                />

                <Box
                    fontWeight={600}
                    fontSize={'18px'}
                    color={'rgb(175,82,222)'}
                    letterSpacing={'.18px'}
                    lineHeight={'1.28em'}
                    margin={'15px 0px 1em'}
                >
                    Activity Feed
                </Box>

                <Box
                    flexGrow={1}
                    color={'rgba(255,255,255,0.6)'}
                    lineHeight={'1.23536em'}
                    fontWeight={500}
                    letterSpacing={'-0.01em'}
                    fontSize={'20px'}
                >
                    <Box display={'inline-block'}
                         color={'rgba(255,255,255,1)'}
                         fontWeight={600}
                    >
                        See your most important conversations first. Snooze, archive, or jump back in.
                    </Box>
                    Activity Feed always keeps your conversations within reach, so you can quickly catch up on what’s
                    new.
                </Box>

                <Box mt={['30px', '60px']}
                     position={'relative'}
                     alignSelf={'center'}
                     fontSize={'0px'}
                >
                    <img
                        style={{
                            width: "272px",
                            height: "376px",
                            position: "relative",
                            zIndex: 5,
                        }}
                        src={"https://quill.chat/images/homepage/section_1/iphone_frame@2x.png?3"}
                        width="272" height="376"
                    />

                    <video autoPlay={true} playsInline muted
                           style={{
                               position: 'absolute',
                               width: '88.9706%',
                               height: 'auto',
                               left: '5.51471%',
                               top: '3.45745%',
                           }}
                           src={"https://storage.googleapis.com/public-website-static-files.quill.chat/v3/homepage/section_1/activity_2_compressed.mp4?3"}
                           poster={"https://quill.chat/images/homepage/section_1/video/activity_2_first_frame.jpeg?1"}
                           width="232"
                           height="353"
                           loop={true}
                           className="Section_1_Messaging__ActivityVideo-sc-17uue3h-11 ecPopq"/>

                </Box>

            </Box>

            {/* Second Mobile*/}

            <Box
                flexBasis={'50%'}
                bg={'linear-gradient(rgba(245, 245, 245, 0.95), rgba(240, 240, 240, 0.9)) rgb(191, 90, 242)'}
                borderRadius={'calc(2 * 10px)'}
                overflow={'hidden'}
                display={'flex'}
                mt={['10px']}
                flexDirection={['column']}
                padding={['30px 30px 0px', '60px 75px 0px']}
                ml={['0px','23px']}
            >
                <img
                    style={{
                        width: "56px",
                        height:"56px"
                    }}
                    src={"https://quill.chat/images/homepage/section_1/fewer_notifications@2x.png?2"}
                    width="56"
                    height="56"
                />

                <Box
                    fontWeight={600}
                    fontSize={'18px'}
                    color={'rgb(175,82,222)'}
                    letterSpacing={'.18px'}
                    lineHeight={'1.28em'}
                    margin={'15px 0 1em'}
                >
                    Fewer Notifications
                </Box>

                <Box
                    color={'rgba(0,0,0,0.6)'}
                    flexGrow={1}
                    lineHeight={'1.23536em'}
                    fontWeight={500}
                    letterSpacing={'-0.01em'}
                    fontSize={'20px'}
                >

                    <Box color={'rgba(0,0,0,1)'} fontWeight={600} display={'inline-block'}>
                        Your phone should only buzz when something is truly important.
                    </Box>

                    That’s why Quill reduces notifications, and reserves disruptions for critical or time sensitive messages.

                </Box>

                <Box
                    mt={['30px','60px']}
                    alignSelf={'center'}
                    fontSize={0}
                    position={'relative'}
                >
                    <img
                        style={{
                            position: 'relative',
                            zIndex: 5,
                        }}
                        src={"https://quill.chat/images/homepage/section_1/mobile_android_fewer_notifications@2x.png"}
                         width="269"
                         height="376"
                    />
                </Box>


            </Box>


        </Box>
    );
};

export default MessageActivitySection;
