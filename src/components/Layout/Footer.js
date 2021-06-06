import React from 'react';
import {Box} from "@chakra-ui/react";
import FooterButton from "../Buttons/FooterButton";
import BlueButton from "../Buttons/BlueButton";

const Footer = () => {
    return (
        <Box
            // mt={'43px'}
            mx={'auto'}
            mb={'0'}
            p={0}
            bg={'#000'}
            display={'flex'}
            justifyContent={'center'}
            // maxW={'container.xl'}
        >

            <Box
                w={'100%'}
                maxW={'container.xl'}
                mx={'auto'}
                alignItems={'center'}
                padding={'0px 20px'}
                borderBottomColor={'rgba(0,0,0,.1)'}
                minH={['50px', 'none']}
                margin={['0 0px 0px !important', '0 auto 0']}
            >

                {/* First footer section*/}
                <Box
                    alignItems={'center'}
                    display={['block', 'flex']}
                    padding={['10px 20px','20px 20px']}
                    borderTop={'1px solid rgba(255,255,255,0.1)'}
                >

                    <Box
                        display={['block', 'inline']}
                        padding={'0px'}
                        margin={'0px'}
                        textAlign={['center', 'left']}
                        flexGrow={1}
                    >

                        <FooterButton px={2}>
                            Overview
                        </FooterButton>

                        <FooterButton px={2}>
                            Pricing
                        </FooterButton >

                        <FooterButton px={2}>
                            Updates
                        </FooterButton>

                        <FooterButton px={2}>
                            Api Documentation
                        </FooterButton>

                        <FooterButton px={2}>
                            Newsletter
                        </FooterButton>

                    </Box>

                    <Box
                        display={['block', 'inline']}
                        padding={'0px'}
                        margin={'0px'}
                        textAlign={['center', 'left']}
                        // flexGrow={1}
                    >
                        <FooterButton px={2}>
                            Download
                        </FooterButton>

                        <BlueButton>
                            Try it free
                        </BlueButton>

                    </Box>

                </Box>

                {/* second footer section*/}
                <Box
                    alignItems={'center'}
                    display={['block', 'flex']}
                    padding={['10px 20px','20px 20px']}
                    borderTop={'1px solid rgba(255,255,255,0.1)'}
                >

                    <Box
                        display={['block', 'inline']}
                        padding={'0px'}
                        margin={'0px'}
                        textAlign={['center', 'left']}
                        flexGrow={1}
                    >

                        <FooterButton px={2}>
                            About
                        </FooterButton>

                        <FooterButton px={2}>
                            Jobs
                        </FooterButton >

                        <FooterButton px={2}>
                            Press
                        </FooterButton>

                        <FooterButton px={2}>
                            Security
                        </FooterButton>

                        <FooterButton px={2}>
                            Contact
                        </FooterButton>

                    </Box>

                    <Box
                        display={['block', 'inline']}
                        padding={'0px'}
                        margin={'0px'}
                        textAlign={['center', 'left']}
                        // flexGrow={1}
                    >

                        <Box opacity={'.8'}>
                            <Box
                                cursor={'pointer'}
                                p={'10px'}
                                display={'inline-block'}
                                color={'rgba(255,255,255,0.6)'}
                                bg={'url(https://quill.chat/images/footer/twitter/white.svg) 50% 50% / 18px 18px no-repeat'}
                            >

                            </Box>
                        </Box>

                    </Box>

                </Box>

            </Box>

        </Box>
    );
};

export default Footer;
