import {Box} from "@chakra-ui/react";
import HeroSection from "../components/Home/HeroSection";
import MessagingSection from "../components/Home/MessagingSection/MessagingSection";
import ConversationSection from "../components/Home/ConversationSection/ConversationSection";
import ConversationCardsSection from "../components/Home/ConversationSection/ConversationCardsSection";

const Home = () => {

    return (
        <Box>
            <HeroSection/>
            <MessagingSection/>
            <ConversationSection/>
            <ConversationCardsSection/>
        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;