import React, {useState} from 'react';
import {Box, Container, Flex, Spacer} from "@chakra-ui/react";
import HeaderButton from "../Buttons/HeaderButton";
import BlueButton from "../Buttons/BlueButton";
import {useMediaQuery} from "@chakra-ui/react"

const Header = () => {

    const [isLarger600] = useMediaQuery("(min-width: 600px)");

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerHandler = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const drawerOpenHandler = () => {
        setIsDrawerOpen(true);
    }

    const drawerCloseHandler = () => {
        setIsDrawerOpen(false);
    }

    return (
        <Box h={'42px'} zIndex={999999999} position={'fixed'} top={0} left={0}  w={'100%'}>
            <Container zIndex={999999999} left={'50%'} transform={'translateX(-50%)'} position={'fixed'} maxWidth={'container.xl'}>
                <Flex h={42} alignItems={'center'}>
                    {
                        isLarger600 && (
                            <>
                                <Flex alignItems={'center'}>
                                    <Box
                                        w={'22px'}
                                        h={'24px'}
                                        bg={'url("data:image/svg+xml,%3Csvg width=\'22\' height=\'22\' viewBox=\'0 0 54 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M47.9764 11.6298C47.3113 15.2599 45.8563 18.6994 43.7144 21.7047C41.5099 20.888 39.1773 20.4715 36.8264 20.4748H36.5534C35.5565 20.488 34.5619 20.5732 33.5774 20.7297C25.7264 21.9907 20.0284 27.6967 20.0284 34.2987C20.0334 34.885 20.0833 35.47 20.1774 36.0487C18.8457 36.2422 17.5043 36.3617 16.1594 36.4067C17.5278 36.9279 18.9713 37.2251 20.4344 37.2867C20.5224 37.6127 20.6214 37.9357 20.7344 38.2527C18.2094 39.3004 15.5642 40.0306 12.8594 40.4268C13.8771 40.6682 14.9097 40.8422 15.9504 40.9478C15.9821 40.9514 16.0116 40.9658 16.034 40.9886C16.0563 41.0114 16.0701 41.0413 16.073 41.0731C16.076 41.1049 16.0679 41.1367 16.0501 41.1633C16.0323 41.1898 16.0059 41.2094 15.9754 41.2187C10.7274 42.7857 7.39337 42.7597 5.36137 42.2397C4.16937 44.1731 3.03605 46.1731 1.96138 48.2397C1.63038 48.8577 -0.810611 53.0138 0.277389 49.1898C0.311389 49.0698 0.360373 48.9197 0.417373 48.7567L0.450362 48.6617C0.509362 48.4957 0.580384 48.3097 0.660384 48.1057L0.707381 47.9907C0.793381 47.7767 0.887383 47.5477 0.996383 47.2967L1.00737 47.2697C1.11837 47.0137 1.24438 46.7337 1.37938 46.4417L1.45637 46.2737C1.59371 45.9797 1.74137 45.6701 1.89937 45.3448L1.97636 45.1877C2.1337 44.8691 2.30036 44.5357 2.47636 44.1877L2.53038 44.0818C2.71838 43.7188 2.92139 43.3367 3.13039 42.9447L3.25838 42.7087C3.47438 42.3127 3.70138 41.9041 3.93938 41.4828C8.21717 34.0247 13.4627 27.1652 19.5394 21.0827C25.9224 14.5247 32.9394 9.78273 43.2944 4.89373C43.8124 4.68173 43.8674 4.62575 44.5224 4.34875C29.6944 8.44875 15.0974 18.1207 2.81538 39.1277C1.45395 35.8226 1.30377 32.1428 2.39137 28.7378C2.4002 28.7078 2.41901 28.6817 2.44469 28.6639C2.47036 28.6461 2.50134 28.6375 2.53252 28.6398C2.56369 28.642 2.59318 28.6548 2.61607 28.6761C2.63896 28.6974 2.65388 28.7258 2.65837 28.7567C2.85792 30.3854 3.33375 31.9681 4.06538 33.4367C3.52238 28.9157 3.63837 23.4158 5.83537 20.3668C5.85217 20.343 5.87612 20.3253 5.90373 20.3162C5.93134 20.307 5.96116 20.307 5.98878 20.3161C6.01641 20.3251 6.04039 20.3428 6.05723 20.3665C6.07408 20.3902 6.08291 20.4187 6.08238 20.4478C6.09938 23.0818 6.28237 28.0237 7.01137 28.9197C7.25537 25.2817 7.33937 18.4937 8.97337 16.1437C18.9944 1.89773 42.4884 -3.97026 53.1924 2.82174C50.4071 4.99664 48.5445 8.14193 47.9764 11.6298ZM33.8884 22.7238C34.7785 22.5811 35.6779 22.5042 36.5794 22.4937H36.8264C45.0054 22.4937 51.6364 27.7807 51.6364 34.3027C51.6107 35.7388 51.2895 37.1542 50.6928 38.4607C50.0962 39.7672 49.2368 40.9369 48.1684 41.8968C47.9535 42.1325 47.79 42.4103 47.6882 42.7126C47.5865 43.0149 47.5487 43.3351 47.5774 43.6527C47.7034 45.2831 48.061 46.8872 48.6394 48.4167C48.6652 48.5051 48.6786 48.5967 48.6794 48.6887C48.6833 48.7656 48.671 48.8424 48.6432 48.9142C48.6153 48.9859 48.5726 49.0509 48.5178 49.1049C48.463 49.159 48.3974 49.2008 48.3253 49.2277C48.2532 49.2545 48.1762 49.2658 48.0994 49.2607C47.946 49.26 47.7959 49.216 47.6664 49.1338C45.2264 47.5948 42.7394 45.5967 41.3174 45.5967C41.2307 45.5962 41.1443 45.6046 41.0594 45.6217L40.9994 45.6357L40.9754 45.6428C39.6148 45.9572 38.2228 46.1152 36.8264 46.1137C28.6464 46.1137 22.0154 40.8267 22.0154 34.3037C22.0154 28.5847 27.1154 23.8108 33.8884 22.7238V22.7238ZM43.6414 36.7238C44.08 36.7301 44.5106 36.6058 44.8783 36.3668C45.2461 36.1277 45.5345 35.7847 45.7067 35.3813C45.879 34.9778 45.9274 34.5323 45.8457 34.1013C45.7641 33.6704 45.5561 33.2734 45.2482 32.961C44.9403 32.6486 44.5464 32.4348 44.1166 32.3469C43.6869 32.2589 43.2407 32.3008 42.8348 32.4672C42.4289 32.6335 42.0817 32.9169 41.8373 33.2811C41.5929 33.6454 41.4624 34.0741 41.4624 34.5128C41.4592 35.0947 41.6867 35.6542 42.095 36.0688C42.5034 36.4833 43.0595 36.7192 43.6414 36.7248V36.7238ZM36.6174 36.7238C37.056 36.7301 37.4865 36.6058 37.8543 36.3668C38.2221 36.1277 38.5105 35.7847 38.6828 35.3813C38.855 34.9778 38.9034 34.5323 38.8217 34.1013C38.7401 33.6704 38.532 33.2734 38.2241 32.961C37.9162 32.6486 37.5224 32.4348 37.0926 32.3469C36.6629 32.2589 36.2167 32.3008 35.8108 32.4672C35.4049 32.6335 35.0577 32.9169 34.8133 33.2811C34.5689 33.6454 34.4384 34.0741 34.4384 34.5128C34.4352 35.0947 34.6627 35.6542 35.0711 36.0688C35.4794 36.4833 36.0355 36.7192 36.6174 36.7248V36.7238ZM29.5934 36.7238C30.032 36.7301 30.4626 36.6058 30.8303 36.3668C31.1981 36.1277 31.4865 35.7847 31.6587 35.3813C31.831 34.9778 31.8794 34.5323 31.7977 34.1013C31.7161 33.6704 31.5081 33.2734 31.2001 32.961C30.8922 32.6486 30.4984 32.4348 30.0686 32.3469C29.6389 32.2589 29.1927 32.3008 28.7868 32.4672C28.3809 32.6335 28.0337 32.9169 27.7893 33.2811C27.5449 33.6454 27.4144 34.0741 27.4144 34.5128C27.4112 35.0947 27.6387 35.6542 28.0471 36.0688C28.4555 36.4833 29.0115 36.7192 29.5934 36.7248V36.7238Z\' fill=\'black\'/%3E%3C/svg%3E%0A") no-repeat'}
                                    />
                                    <Box p={'10px'} ml={'12px'}>
                                        <HeaderButton>
                                            Overview
                                        </HeaderButton>
                                    </Box>

                                </Flex>

                                <Box p={'10px'}>
                                    <HeaderButton>
                                        Pricing
                                    </HeaderButton>
                                </Box>

                                <Box p={'10px'}>
                                    <HeaderButton>
                                        Updates
                                    </HeaderButton>
                                </Box>

                                <Spacer/>

                                <Box p={'10px'}>
                                    <HeaderButton>
                                        Download
                                    </HeaderButton>
                                </Box>

                                <Box p={'10px'}>
                                    <BlueButton>
                                        Try it free
                                    </BlueButton>
                                </Box>
                            </>
                        )
                    }

                    {
                        !isLarger600 && (
                            <>
                                <Box flexGrow={1}>

                                    <Box
                                        width={'40px'}
                                        height={'40px'}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        alignItems={'flex-start'}
                                        justifyContent={'center'}
                                        cursor={'pointer'}
                                        onClick={toggleDrawerHandler}
                                    >

                                        <Box w={'20px'}
                                             h={'2px'}
                                             bg={isDrawerOpen ? '#000' : 'rgba(0,0,0,0.6)'}
                                             borderRadius={'2px'}
                                             transition={'background-color 200ms ease 0s, transform 200ms ease 0s'}
                                             transform={isDrawerOpen ? 'translateX(3px) rotate(45deg) translateY(5px)' : "none"}
                                        />

                                        <Box w={'20px'}
                                             mt={'5px'}
                                             h={'2px'}
                                             bg={isDrawerOpen ? '#000' : 'rgba(0,0,0,0.6)'}
                                             borderRadius={'2px'}
                                             transition={'background-color 200ms ease 0s, transform 200ms ease 0s'}
                                             transform={isDrawerOpen ? 'translateX(3px) rotate(-45deg) translateY(-5px)' : null}
                                        />


                                    </Box>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'} flexGrow={1}>
                                    <Box
                                        w={'22px'}
                                        h={'24px'}
                                        bg={'url("data:image/svg+xml,%3Csvg width=\'22\' height=\'22\' viewBox=\'0 0 54 51\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M47.9764 11.6298C47.3113 15.2599 45.8563 18.6994 43.7144 21.7047C41.5099 20.888 39.1773 20.4715 36.8264 20.4748H36.5534C35.5565 20.488 34.5619 20.5732 33.5774 20.7297C25.7264 21.9907 20.0284 27.6967 20.0284 34.2987C20.0334 34.885 20.0833 35.47 20.1774 36.0487C18.8457 36.2422 17.5043 36.3617 16.1594 36.4067C17.5278 36.9279 18.9713 37.2251 20.4344 37.2867C20.5224 37.6127 20.6214 37.9357 20.7344 38.2527C18.2094 39.3004 15.5642 40.0306 12.8594 40.4268C13.8771 40.6682 14.9097 40.8422 15.9504 40.9478C15.9821 40.9514 16.0116 40.9658 16.034 40.9886C16.0563 41.0114 16.0701 41.0413 16.073 41.0731C16.076 41.1049 16.0679 41.1367 16.0501 41.1633C16.0323 41.1898 16.0059 41.2094 15.9754 41.2187C10.7274 42.7857 7.39337 42.7597 5.36137 42.2397C4.16937 44.1731 3.03605 46.1731 1.96138 48.2397C1.63038 48.8577 -0.810611 53.0138 0.277389 49.1898C0.311389 49.0698 0.360373 48.9197 0.417373 48.7567L0.450362 48.6617C0.509362 48.4957 0.580384 48.3097 0.660384 48.1057L0.707381 47.9907C0.793381 47.7767 0.887383 47.5477 0.996383 47.2967L1.00737 47.2697C1.11837 47.0137 1.24438 46.7337 1.37938 46.4417L1.45637 46.2737C1.59371 45.9797 1.74137 45.6701 1.89937 45.3448L1.97636 45.1877C2.1337 44.8691 2.30036 44.5357 2.47636 44.1877L2.53038 44.0818C2.71838 43.7188 2.92139 43.3367 3.13039 42.9447L3.25838 42.7087C3.47438 42.3127 3.70138 41.9041 3.93938 41.4828C8.21717 34.0247 13.4627 27.1652 19.5394 21.0827C25.9224 14.5247 32.9394 9.78273 43.2944 4.89373C43.8124 4.68173 43.8674 4.62575 44.5224 4.34875C29.6944 8.44875 15.0974 18.1207 2.81538 39.1277C1.45395 35.8226 1.30377 32.1428 2.39137 28.7378C2.4002 28.7078 2.41901 28.6817 2.44469 28.6639C2.47036 28.6461 2.50134 28.6375 2.53252 28.6398C2.56369 28.642 2.59318 28.6548 2.61607 28.6761C2.63896 28.6974 2.65388 28.7258 2.65837 28.7567C2.85792 30.3854 3.33375 31.9681 4.06538 33.4367C3.52238 28.9157 3.63837 23.4158 5.83537 20.3668C5.85217 20.343 5.87612 20.3253 5.90373 20.3162C5.93134 20.307 5.96116 20.307 5.98878 20.3161C6.01641 20.3251 6.04039 20.3428 6.05723 20.3665C6.07408 20.3902 6.08291 20.4187 6.08238 20.4478C6.09938 23.0818 6.28237 28.0237 7.01137 28.9197C7.25537 25.2817 7.33937 18.4937 8.97337 16.1437C18.9944 1.89773 42.4884 -3.97026 53.1924 2.82174C50.4071 4.99664 48.5445 8.14193 47.9764 11.6298ZM33.8884 22.7238C34.7785 22.5811 35.6779 22.5042 36.5794 22.4937H36.8264C45.0054 22.4937 51.6364 27.7807 51.6364 34.3027C51.6107 35.7388 51.2895 37.1542 50.6928 38.4607C50.0962 39.7672 49.2368 40.9369 48.1684 41.8968C47.9535 42.1325 47.79 42.4103 47.6882 42.7126C47.5865 43.0149 47.5487 43.3351 47.5774 43.6527C47.7034 45.2831 48.061 46.8872 48.6394 48.4167C48.6652 48.5051 48.6786 48.5967 48.6794 48.6887C48.6833 48.7656 48.671 48.8424 48.6432 48.9142C48.6153 48.9859 48.5726 49.0509 48.5178 49.1049C48.463 49.159 48.3974 49.2008 48.3253 49.2277C48.2532 49.2545 48.1762 49.2658 48.0994 49.2607C47.946 49.26 47.7959 49.216 47.6664 49.1338C45.2264 47.5948 42.7394 45.5967 41.3174 45.5967C41.2307 45.5962 41.1443 45.6046 41.0594 45.6217L40.9994 45.6357L40.9754 45.6428C39.6148 45.9572 38.2228 46.1152 36.8264 46.1137C28.6464 46.1137 22.0154 40.8267 22.0154 34.3037C22.0154 28.5847 27.1154 23.8108 33.8884 22.7238V22.7238ZM43.6414 36.7238C44.08 36.7301 44.5106 36.6058 44.8783 36.3668C45.2461 36.1277 45.5345 35.7847 45.7067 35.3813C45.879 34.9778 45.9274 34.5323 45.8457 34.1013C45.7641 33.6704 45.5561 33.2734 45.2482 32.961C44.9403 32.6486 44.5464 32.4348 44.1166 32.3469C43.6869 32.2589 43.2407 32.3008 42.8348 32.4672C42.4289 32.6335 42.0817 32.9169 41.8373 33.2811C41.5929 33.6454 41.4624 34.0741 41.4624 34.5128C41.4592 35.0947 41.6867 35.6542 42.095 36.0688C42.5034 36.4833 43.0595 36.7192 43.6414 36.7248V36.7238ZM36.6174 36.7238C37.056 36.7301 37.4865 36.6058 37.8543 36.3668C38.2221 36.1277 38.5105 35.7847 38.6828 35.3813C38.855 34.9778 38.9034 34.5323 38.8217 34.1013C38.7401 33.6704 38.532 33.2734 38.2241 32.961C37.9162 32.6486 37.5224 32.4348 37.0926 32.3469C36.6629 32.2589 36.2167 32.3008 35.8108 32.4672C35.4049 32.6335 35.0577 32.9169 34.8133 33.2811C34.5689 33.6454 34.4384 34.0741 34.4384 34.5128C34.4352 35.0947 34.6627 35.6542 35.0711 36.0688C35.4794 36.4833 36.0355 36.7192 36.6174 36.7248V36.7238ZM29.5934 36.7238C30.032 36.7301 30.4626 36.6058 30.8303 36.3668C31.1981 36.1277 31.4865 35.7847 31.6587 35.3813C31.831 34.9778 31.8794 34.5323 31.7977 34.1013C31.7161 33.6704 31.5081 33.2734 31.2001 32.961C30.8922 32.6486 30.4984 32.4348 30.0686 32.3469C29.6389 32.2589 29.1927 32.3008 28.7868 32.4672C28.3809 32.6335 28.0337 32.9169 27.7893 33.2811C27.5449 33.6454 27.4144 34.0741 27.4144 34.5128C27.4112 35.0947 27.6387 35.6542 28.0471 36.0688C28.4555 36.4833 29.0115 36.7192 29.5934 36.7248V36.7238Z\' fill=\'black\'/%3E%3C/svg%3E%0A") no-repeat'}
                                    />
                                </Box>
                                <Box display={'flex'} justifyContent={'flex-end'} flexGrow={1}>
                                    <Box p={'10px'}>
                                        <BlueButton>
                                            Try it free
                                        </BlueButton>
                                    </Box>
                                </Box>


                            </>
                        )
                    }


                </Flex>


            </Container>

            {/*    mobile navigation open data*/}
            {
                isDrawerOpen && (
                    <>
                        <Box
                            as={'ul'}
                            // transform={isDrawerOpen ? 'none' : "tranlateY(100px)"}
                            opacity={isDrawerOpen ? 1 : 0}
                            bg={'#fff'}
                            top={0}
                            left={0}

                            transition={'all .5s ease-in-out'}
                            right={0}
                            margin={0}
                            padding={'50px 10px 10px'}
                            sx={{listStyle: "none"}}
                            zIndex={'99'}
                            pos={'absolute'}
                            boxShadow={'rgb(0 0 0 / 15%) 0px 4px 12px 5px'}
                        >

                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Overview
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Pricing
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Updated
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Downloads
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Jobs
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Api Documentation
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    About
                                </Box>

                            </Box>
                            <Box as={'li'} cursor={'pointer'} m={0} p={0} color={'rgba(0,0,0,0.05)'}>
                                <Box display={'block'}
                                    // width={'100%'}
                                     fontSize={'16px'}
                                     textDecoration={'none'}
                                     padding={'15px 10px'}
                                     color={'rgba(0,0,0,0.6)'}
                                     borderTop={'1px solid rgba(0,0,0,0.05)'}
                                >
                                    Twitter
                                </Box>

                            </Box>

                        </Box>

                        <Box
                            onClick={toggleDrawerHandler}
                            position={'fixed'}
                            zIndex={9}
                            bg={'rgba(0,0,0,.35)'}
                            inset={'0px'}
                            opacity={isDrawerOpen ? 1 : 0}
                        />
                    </>
                )
            }

            <Box position={'absolute'}
                 bg={'rgba(255, 255, 255, 0.7)'}
                 boxShadow={'rgb(0 0 0 / 2%) 0px 1px 0px 0px'}
                 transition={'opacity 200ms ease-in-out 0s'}
                 inset={'0px 0px -1px'}
                 top={0}
                 left={0}
                 width={'100%'}
                 height={'100%'}
                 sx={{backdropFilter: 'blur(20px) brightness(125%)'}}
                 zIndex={-1}
            />
        </Box>
    );
};

export default Header;
