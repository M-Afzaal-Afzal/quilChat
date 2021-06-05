import React from 'react';
import {Box, Container} from "@chakra-ui/react";

const ConversationCardsSection = () => {
    return (
        <Container
            display={['block', 'grid']}
            gridGap={['23px']}
            gridTemplateColumns={'repeat(8,1fr)'}
            gap={'23px'}
            py={'23px'}
            px={'23px'}
            m={'0 auto'}
            maxW={'container.xl'}
            bg={'#eee'}
        >
            {/* First Card*/}

            <Box bg={'rgb(255,255,255)'}
                 overflow={'hidden'}
                 borderRadius={'calc(2 * 12px)'}
                 display={'flex'}
                 flexDirection={'column'}
                 gridColumn={'1/6'}
                 gridRow={'1'}

            >

                <Box p={['30px 30px 0px', '40px 50px 0px']}
                     maxW={'790px'}
                >

                    <Box>
                        <img
                            style={{width: "42px", height: "42px"}}
                            src={"https://quill.chat/images/homepage/section_2/threads.svg"}
                            width="42"
                            height="42"
                        />
                    </Box>

                    <Box
                        lineHeight={'1.28em'}
                        letterSpacing={'.18px'}
                        color={'rgb(39, 164, 214)'}
                        fontWeight={600}
                        fontSize={'18px'}
                        m={['5px 0px 1em']}
                    >
                        Retroactive Threads
                    </Box>

                    <Box
                        color={'rgba(0,0,0,.6)'}
                        lineHeight={'1.23536em'}
                        fontWeight={500}
                        fontSize={'22px'}
                        mb={'1em'}
                    >

                        <Box display={'inline-block'} fontWeight={600} color={'rgb(0, 0, 0)'}>
                            Create a thread from any set of messages.
                        </Box>
                        It happens all the time, someone said something that should be in its own thread. No sweat —
                        grab any set of messages and roll them up.
                    </Box>

                </Box>

                <Box
                    pos={'relative'}
                    m={'5px 5px -15px'}
                    mb={['20px', -'15px']}
                    w={'calc(100% - 10px)'}
                    _before={{
                        display: 'block',
                        content: "''",
                        paddingTop: '39.0456%',
                        position: 'relative',
                    }}
                >
                    <video
                        style={{
                            width: '100%',
                            height: 'auto',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                        }}
                        autoPlay={true} muted playsInline=""
                        width="922" height="360"
                        poster={"https://quil-chat.vercel.app/images/homepage/section_2/video/move_messages_first_frame.jpeg?1"}
                        className="Section_2_Social__MoveVideo-gqrwsz-14 fQaPy">
                        <source
                            src="https://storage.googleapis.com/public-website-static-files.quill.chat/v3/homepage/move_messages_compressed.mp4"
                            type="video/mp4"/>
                    </video>
                </Box>

            </Box>

            {/*    Second Card   */}

            <Box
                bg={'rgb(255,255,255)'}
                display={'flex'}
                flexDirection={'column'}
                overflow={'hidden'}
                borderRadius={'calc(2 * 12px)'}
                gridColumn={'6/9'}
                gridRow={1}
                mt={['10px', 0]}
            >

                <Box p={['40px 50px 0px', '40px 50px 0px']}
                     maxW={'790px'}
                >

                    <Box>

                        <img
                            style={{
                                width: '42px',
                                height: '42px'
                            }}
                            src={"https://quill.chat/images/homepage/section_2/replies.svg"}
                            width="42"
                            height="42"/>
                    </Box>

                    <Box m={['5px 0px 1rem', '5px 0px 1rem']}
                         fontSize={'18px'}
                         fontWeight={600}
                         color={'rgb(39, 164, 214)'}
                         letterSpacing={'0.18px'}
                         lineHeight={'1.28em'}
                    >
                        Replies
                    </Box>

                    <Box
                        color={'rgba(0,0,0,.6)'}
                        lineHeight={'1.23536em'}
                        fontWeight={500}
                        fontSize={'22px'}
                        mb={'1em'}
                    >

                        <Box display={'inline-block'}
                             color={'rgb(0, 0, 0)'}
                             fontWeight={600}

                        >
                            Reply directly to a message.
                        </Box>
                        For those quick back-and-forths.
                    </Box>

                </Box>

                {/* video section*/}

                <Box flexGrow={1}
                     display={'flex'}
                     alignItems={'center'}
                >
                    <img
                        style={{
                            margin: '25px auto 75px',
                            display: 'block',
                            width: '75%',
                            height: 'auto',
                            maxWidth: '314px',
                        }}
                        src={"https://quill.chat/images/homepage/section_2/graphic_replies@2x.jpg"}
                        width="341"
                        height="142"
                        className="Section_2_Social__ReplyImage-gqrwsz-17 fjDDRU"/>
                </Box>

            </Box>

            {/*    third Card   */}

            <Box
                gridColumn={'4/9'}
                gridRow={2}
                mt={['10px',]}
                bg={'rgb(255, 255, 255)'}
                overflow={'hidden'}
                borderRadius={'calc(2 * 12px)'}
                display={'flex'}
                flexDirection={'column'}
            >

                <Box
                    p={['30px 30px 0px', '40px 50px 0px']}
                    maxW={'790px'}
                >

                    <Box>
                        <img src={"https://quill.chat/images/homepage/section_2/split.svg"}
                             width="42"
                             height="42"
                        />
                    </Box>

                    <Box
                        m={['5px 0px 1em', '5px 0px 1em']}
                        color={'rgb(39, 164, 214)'}
                        lineHeight={'1.28em'}
                        letterSpacing={'0.18px'}
                        fontWeight={600}
                        fontSize={'18px'}
                    >
                        Split + Move
                    </Box>

                    <Box
                        maxW={['520px', 'auto']}
                        color={'rgba(0, 0, 0, 0.6)'}
                        lineHeight={'1.23536em'}
                        fontWeight={500}
                        fontSize={'22px'}
                        mb={'1em'}
                    >

                        <Box display={'inline-block'}
                             color={'rgb(0, 0, 0)'}
                             fontWeight={600}
                        >

                            Split threads and move messages.

                        </Box>

                        If there’s a better home for a topic, move it. Keep things organized and easy to find.

                    </Box>


                </Box>

                <img
                    style={{
                        margin: '25px auto 35px',
                        display: 'block',
                        width: 'calc(100% - 100px)',
                        height: 'auto',
                        maxWidth: '729px',
                    }}
                    src={"https://quill.chat/images/homepage/section_2/graphic_move@2x.jpg?2"}
                    width="729"
                    height="470"
                    className="Section_2_Social__MoveImage-gqrwsz-18 emDfKw"/>

            </Box>

        {/*    Fourth Card  */}

            <Box
                gridColumn={'1 / 4'}
                gridRow={2}
                mt={['10px',]}
                bg={'rgb(255, 255, 255)'}
                overflow={'hidden'}
                borderRadius={'calc(2 * 12px)'}
                display={'flex'}
                flexDirection={'column'}
            >

                <Box
                    p={['30px 30px 0px', '40px 50px 0px']}
                    maxW={'790px'}
                >

                    <Box>
                        <img src={"https://quill.chat/images/homepage/section_2/pin.svg"}
                             width="42"
                             height="42"
                        />
                    </Box>

                    <Box
                        m={['5px 0px 1em', '5px 0px 1em']}
                        color={'rgb(39, 164, 214)'}
                        lineHeight={'1.28em'}
                        letterSpacing={'0.18px'}
                        fontWeight={600}
                        fontSize={'18px'}
                    >
                        Pinned Messages
                    </Box>

                    <Box
                        maxW={['520px', 'auto']}
                        color={'rgba(0, 0, 0, 0.6)'}
                        lineHeight={'1.23536em'}
                        fontWeight={500}
                        fontSize={'22px'}
                        mb={'1em'}
                    >

                        <Box display={'inline-block'}
                             color={'rgb(0, 0, 0)'}
                             fontWeight={600}
                        >

                            Make sure everyone sees what’s important.

                        </Box>

                        Pin any message and have it float above the rest.

                    </Box>


                </Box>

                <img
                    style={{
                        margin: '25px auto 35px',
                        display: 'block',
                        width: 'calc(100% - 100px)',
                        height: 'auto',
                        maxWidth: '729px',
                    }}
                    src={"https://quill.chat/images/homepage/section_2/graphic_move@2x.jpg?2"}
                    width="729"
                    height="470"
                    className="Section_2_Social__MoveImage-gqrwsz-18 emDfKw"/>

            </Box>

        </Container>
    );
};

export default ConversationCardsSection;
