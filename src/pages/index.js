import {Box} from "@chakra-ui/react";
import HeroSection from "../components/Home/HeroSection";
import MessagingSection from "../components/Home/MessagingSection/MessagingSection";

const Home = () => {

    return (
        <Box>
          <HeroSection/>
            <MessagingSection/>
        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;