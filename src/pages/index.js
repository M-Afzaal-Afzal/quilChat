import {Box} from "@chakra-ui/react";
import HeroSection from "../components/Home/HeroSection";
import MessagingSection from "../components/Home/MessagingSection/MessagingSection";
import ConversationSection from "../components/Home/ConversationSection/ConversationSection";
import FidelityMessagingSection from "../components/Home/FidelityMessagingSection/FidelityMessagingSection";
import MuchMoreSection from "../components/Home/MuchMoreSection/MuchMoreSection";

const Home = () => {

    return (
        <Box bg={'rgb(245, 245, 247)'}>
            <HeroSection/>
            <MessagingSection/>
            <ConversationSection/>
            <FidelityMessagingSection/>
            <MuchMoreSection/>
        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;