import React, {useState} from 'react';
import {Box} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react"

const MessageVideoSection = () => {

    const [isCentered,setIsCentered] = useState(false);
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)")

    const isCenteredHandler = () => {
        setIsCentered(!isCentered);
    }

    return (
        <Box
            marginRight={['', 'calc(0px - 10px)']}
            marginLeft={['', 'calc(0px - 10px)']}
            display={'flex'}
            padding={'50px 0'}
            flexDirection={['column-reverse', 'row']}
            position={"relative"}
            zIndex={1}
            borderRadius={['0', 'calc(2* 10px)']}
            background={'linear-gradient( 320deg,rgba(235,70,52,0.5),rgba(235,70,52,0) ),linear-gradient(180deg,#bf5af2 0%,#7c0eb4 100%)'}
        >


            <Box
                w={['50%']}
                pos={['relative']}
                display={isLargerThan600 ? (!isCentered ? 'flex' : 'none') : 'flex'}
                opacity={isLargerThan600 ? (!isCentered ? 1 : '0') : 1}
                flexDirection={'column'}
                justifyContent={'space-around'}
                padding={['0px 20px 20px 30px', '40px 40px 40px 50px', '50px calc(50px + 0)', '50px calc(60px + 0)', '50px calc(75px + 0)']}
                width={['auto']}
                minW={['calc(40% + 80px)', '450px', null, '42%', '37%']}
            >

                <Box>

                    <Box position={'relative'}>
                        <img style={{width: '56px', height: '56px'}}
                             src={"https://quill.chat/images/homepage/section_messaging@2x.png?2"} width="56"
                             height="56"/>
                    </Box>

                    {/*--purple: rgb(47,16,62);*/}
                    {/*--turquoise: rgb(23,51,59);*/}
                    {/*--green: rgb(6,60,14);*/}

                    <Box
                        fontWeight={700}
                        fontSize={'35px'}
                        letterSpacing={'-.39px'}
                        marginTop={'25px'}
                        color={'rgb(47,16,62)'}
                    >
                        One conversation at a time. Messaging bliss.
                    </Box>


                    <Box
                        fontWeight={600}
                        fontSize={'22px'}
                        lineHeight={'1.16667em'}
                        m={'.5em 0'}
                        color={'rgba(255,255,255,.7)'}
                    >

                        <Box display={'inline-block'} fontWeight={600} color={'rgb(255,255,255)'}>
                            Threads keep your conversations discoverable and organized.
                        </Box>
                        When you need to stay focused on a topic, use Structured Channels to require each conversation
                        to be its own thread up front.
                    </Box>

                </Box>

                <Box
                    color={'rgb(255,255,255)'}
                    opacity={'.8'}
                    fontSize={'17px'}
                    lineHeight={'1.23536em'}
                    fontWeight={500}
                    pt={'15px'}
                    _before={{
                        content: "''",
                        display: 'block',
                        width: '90%',
                        marginBottom: '18px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        height: '2px',
                        borderRadius: '2px'
                    }}
                >
                    Revive ideas by sending a new message to a previous conversation. With history just a scroll away,
                    everyone starts off up to date.
                </Box>

            </Box>

            <Box
                margin={['20px 0px']}
                cursor={['pointer', 'w-resize']}
                position={'relative'}
                flexShrink={'0'}
                p={isLargerThan600 && isCentered ? '2rem':"0"}
                w={isLargerThan600 ? (isCentered ? '100%' : 'auto'): 'auto'}
                transition={'all .3s'}
            >

                <Box
                    ml={['20px','0']}
                    mb={[ '20px','0']}
                    height={['auto']}
                    width={isLargerThan600 ? (isCentered ? '100%' : ['calc(100% - 40px)', '962px']) : ['calc(100% - 40px)', '962px']}
                    position={['relative']}
                    borderRadius={['calc(1.8711%)', '10px']}
                    overflow={'hidden'}
                    bg={'rgb(51, 51, 51)'}
                    boxShadow={'rgb(0 0 0 / 50%) 0px 40px 80px -10px'}
                    onClick={isCenteredHandler}
                    // transform={ 'translateX(-483.094px) translateY(-1e-07px) scale(0.516632) translateZ(0px)'}
                    _before={{
                        content: isLargerThan600 ? (!isCentered ?  "''" : null) : "''" ,
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        paddingTop: (!isCentered && !isLargerThan600 ? '76.9231%' : (!isLargerThan600 && isCentered) ? '0' : isCentered ? '0' : '76.9231%'),
                    }}
                >
                    <video
                           style={{
                               position: !isCentered ? "absolute" : "relative",
                               top: '0',
                               left: "0",
                               width: '100%',
                               height: "100%",
                               zIndex: '5',
                               transition: 'filter 200ms ease 0s'
                           }}
                           playsInline muted
                           autoPlay={true}
                           src={"https://storage.googleapis.com/public-website-static-files.quill.chat/v3/homepage/section_1/mac_3_compressed.mp4"}
                           poster={"https://quill.chat/images/homepage/section_1/video/mac_compressed_first_frame.jpeg?1"}
                           width="360"
                           height="780"
                           loop={true}
                    />
                </Box>

            </Box>

        </Box>
    );
};

export default MessageVideoSection;
