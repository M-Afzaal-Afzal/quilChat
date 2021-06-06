import React from 'react';
import {Box} from "@chakra-ui/react";

const InfoCardWithImage = ({greenText,primaryText,secondaryText,imageUrl,appIntegeration}) => {
    return (


        <Box
            position={'relative'}
            display={'inline-flex'}
            flexDirection={'column'}
            w={'100%'}
            bg={'linear-gradient(rgba(118, 118, 128, 0.24), rgba(118, 118, 128, 0.18))'}
            overflow={'hidden'}
            h={['auto','100%']}
            flexGrow={'1'}
            pt={'30px'}
            pb={['50px']}
            mb={['10px', '50px']}
            borderRadius={'25px'}
        >

            {/*info card textbox*/}
            <Box
                height={['auto','100%',]}
                p={'0 30px'}
            >

                <Box
                    fontSize={'18px'}
                    fontWeight={600}
                    color={'rgb(50,215,75)'}
                    lineHeight={'1.1111em'}
                    m={'5px 0px 1em'}
                >
                    {greenText}
                </Box>

                <Box
                    color={'rgba(255,255,255,0.7)'}
                    lineHeight={'1.23536em'}
                    fontWeight={500}
                    fontSize={'22px'}
                    mb={['50px']}

                >

                    <Box display={"inline-block"}
                        color={'#fff'}
                    >
                        {primaryText}
                    </Box>
                    {secondaryText}
                </Box>

            </Box>

            {/*image box*/}
            <Box
                h={['auto','100%']}
                alignSelf={'center'}
                fontSize={'0'}
                flexGrow={'1'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={"center"}
                width={'100%'}
                maxW={['calc(100% - (2 * 30px))','calc(100% - (2 * 40px))']}
                mt={0}
                mb={'30px'}
            >
                {
                    appIntegeration && (
                        <Box
                            display={'grid'}
                            gridTemplateColumns={'repeat(4, 1fr)'}
                            gridGap={'15px'}
                            sx={{
                                perspective: '1000px'
                            }}
                        >

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/openai.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/google_calendar.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/pagerduty.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/zoom.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/sentry.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/github.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/dropbox.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                            <img
                                style={{
                                    borderRadius: '26%',
                                    height: 'auto',
                                    backfaceVisibility: 'hidden',
                                    transform: 'none',
                                    transition: "transform 1000ms ease-in-out 0s",
                                    width: '100%',
                                }}
                                src={"https://quill.chat/images/homepage/section_3/logos/linear.jpg"}
                                 width="75"
                                 height="75"
                                 className="Integrations__Icon-clza94-1 TBiUA"/>

                        </Box>
                    )
                }

                {
                    !appIntegeration && (
                        <img style={{
                            width: "100%",
                            height: 'auto',
                        }}
                             src={imageUrl} width="316" height="34"
                             className="Section_3_HighFidelity__MentionsImage-sc-1oyws2k-12 bspOgZ"/>
                    )
                }


            </Box>


        </Box>
    );
};

export default InfoCardWithImage;
