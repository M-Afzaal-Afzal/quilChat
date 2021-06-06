import {Box} from "@chakra-ui/react";
import HeroSection from "../components/Home/HeroSection";
import MessagingSection from "../components/Home/MessagingSection/MessagingSection";
import ConversationSection from "../components/Home/ConversationSection/ConversationSection";
import FidelityMessagingSection from "../components/Home/FidelityMessagingSection/FidelityMessagingSection";

const Home = () => {

    return (
        <Box>
            <HeroSection/>
            <MessagingSection/>
            <ConversationSection/>
            <FidelityMessagingSection/>
        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;