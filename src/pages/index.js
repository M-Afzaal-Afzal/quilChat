import {Box} from "@chakra-ui/react";
import HeroSection from "../components/Home/HeroSection";

const Home = () => {

    return (
        <Box>
          <HeroSection/>
        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;