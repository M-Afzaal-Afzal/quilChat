import React from 'react';
import {Box} from "@chakra-ui/react";

const FidelityVideoSection = () => {

    return (
        <Box
            pos={'relative'}
            flexDirection={['column-reverse','row-reverse']}
            p={'50px 0px'}
            pt={[0,'50px']}
            display={'flex'}
            borderRadius={[0,'20px']}
            mr={['-10px',0]}
            ml={['-10px',0]}
            zIndex={1}
            bg={'linear-gradient( -220deg,rgba(255,251,0,0.4),rgba(255,251,0,0) 50% ),linear-gradient(180deg,rgba(0,0,0,0.21),rgba(0,0,0,0)),linear-gradient(179deg,#32d74b,#1b892b)'}
        >
            {/* Text Section*/}
            <Box p={['20px 20px 20px 30px','40px 40px 40px 50px','50px calc(50px)','50px calc(60px)','50px calc(75px )']}
            w={['auto','50%']}
                 minW={['calc(40% + 80px)',null,'calc(42%)','calc(37%)','450px']}
                 pos={'relative'}
                 display={'flex'}
                 flexDirection={'column'}
                 justifyContent={'space-around'}
            >

                {/* icon and heading box*/}
                <Box>

                    <Box>
                        <img
                            style={{width:'56px',height: '56px'}}
                            src={"https://quill.chat/images/homepage/section_videochat@2x.png?2"}
                             width="56" height="56"
                        />
                    </Box>

                    <Box
                        fontWeight={700}
                        fontSize={'35px'}
                        letterSpacing={'-0.39px'}
                        color={'rgb(6, 60, 14)'}
                        mt={'25px'}
                    >
                        Video Chat. Now with side conversations.
                    </Box>

                    <Box
                        mb={['0']}
                        fontWeight={600}
                        fontSize={'22px'}
                        lineHeight={'1.16667em'}
                        margin={'0.5em 0px'}
                        color={'rgba(255, 255, 255, 0.7)'}
                    >

                        <Box display={'inline-block'}
                            color={'rgb(255, 255, 255)'}
                             fontWeight={600}
                        >
                            Keep video side-by-side with your chat.
                        </Box>

                        Keep sending photos, files, links, ask questions, or have a side conversation, without interrupting the conversation.
                    </Box>

                    <Box
                        border={'1px solid rgba(255, 255, 255, 0.7)'}
                        color={'rgb(255, 255, 255)'}
                        borderRadius={'6px'}
                        fontSize={'14px'}
                        fontWeight={'500'}
                        p={'5px 9px'}
                        opacity={0.6}
                        display={'inline-block'}
                        mt={'10px'}
                    >
                        Early Access
                    </Box>


                </Box>

                {/* p box*/}
                <Box
                    _before={{
                        content: "''",
                        display: 'block',
                        width: '90%',
                        marginBottom: '18px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        height: '2px',
                        borderRadius: '2px'
                    }}
                    color={'rgb(255, 255, 255)'}
                    opacity={0.8}
                    fontSize={'17px'}
                    lineHeight={'1.23536em'}
                    fontWeight={500}
                    mt={'15px'}
                >
                    Quill makes it easy to view any video call, channel, or conversation side-by-side — just open a split view.
                </Box>

            </Box>

        {/*    Video Section*/}
            <Box
                m={['20px 0',0]}
                cursor={['default','w-resize']}
                pos={'relative'}
                flexShrink={0}
            >

                <Box
                    pos={['relative']}
                    w={['calc(100% - 40px)','962px']}
                    ml={['20px']}
                    mb={['20px']}
                    height={['auto']}
                    bg={'rgb(51, 51, 51)'}
                    borderRadius={['calc(1.8711%)','10px']}
                    overflow={'hidden'}
                    boxShadow={'rgb(0 0 0 / 50%) 0px 40px 80px -15px'}
                    _before={{
                        content: "''",
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        paddingTop: '76.9231%',
                    }}
                >

                    <img
                        style={{
                            top: '0px',
                            left: '0px',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            transition: 'filter 200ms ease 0s',
                            zIndex: 10
                        }}
                        src={"https://quill.chat/images/homepage/section_3/video_call_masked.png"}
                         width="962" height="740" draggable="false"
                    />


                    <video
                        style={{
                            position:'absolute',
                            width: '36.5904%' ,
                            height: 'auto' ,
                            left: '62.3701%' ,
                            top: '18.2432%' ,
                            zIndex: '5',
                            transition: 'filter 200ms ease 0s',
                        }}
                        autoPlay={true} loop={true} playsInline muted
                           src="https://storage.googleapis.com/public-website-static-files.quill.chat/v3/homepage/section_3/person_1_export_compressed_24_1.mp4?11"
                           poster={"https://quill.chat/images/homepage/section_3/video/person_1_compressed_first_frame.jpeg"}
                           width="716"
                           height="716"
                    />

                    <video autoPlay={true} playsInline muted
                           style={{
                               zIndex: '5',
                               transition: 'filter 200ms ease 0s',
                               position: 'absolute',
                               width: '7.27651%' ,
                               height: 'auto' ,
                               left: '63.2017%' ,
                               top: '88.5135%' ,
                           }}
                           src="https://storage.googleapis.com/public-website-static-files.quill.chat/v3/homepage/section_3/person_2_looped_compressed_24.mp4?5"
                           poster={"https://quill.chat/images/homepage/section_3/video/person_2_compressed_first_frame.jpeg"}
                           width="140"
                           height="140" loop={true}
                    />


                </Box>

            </Box>
            
        </Box>
    );

};

export default FidelityVideoSection;
