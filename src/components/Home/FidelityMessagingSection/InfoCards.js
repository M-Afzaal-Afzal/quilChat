import React from 'react';
import {Box} from "@chakra-ui/react";
import InfoCardWithImage from "./InfoCardWithImage";
import InfoCardText from "./InfoCardText";
import ReactionsCard from "./ReactionsCard";

const InfoCards = () => {
    return (
        <Box
            p={['10px 0','23px 0']}
            display={['block','grid']}
            gridGap={'23px'}
            gridAutoRows={'minmax(500px, auto)'}
            gridTemplateColumns={['repeat(2, 1fr)',null,'repeat(3, 1fr)']}
        >

            <Box
                flexBasis={['','33%']}
               display={['contents','contents','flex']}
                flexDirection={['column']}
            >

                <InfoCardWithImage
                greenText={'Passive Mentions'}
                primaryText={' By default, @-mentions are passive;'}
                secondaryText={'mentions will add someone to a conversation without sending them a notification. Include people in conversations without disrupting them.'}
                imageUrl={"https://quill.chat/images/homepage/section_3/graphics/mentions@2x.png"}
                />

                <InfoCardWithImage
                greenText={'Granular Permissions'}
                primaryText={'Invites are as easy as adding an email or phone number'}
                secondaryText={'Add someone to a team, channel or thread. Granular control over who can access a conversation is only a click away.'}
                imageUrl={"https://quill.chat/images/homepage/section_3/graphics/granular_permissions@2x.png"}
                />

                <InfoCardText
                    heading={'SMS + Email'}
                    firstText={'Chat with anyone over SMS or email.'}
                    secondText={'No download.'}
                    thirdText={'No account.'}
                    fourthText={' No setup.'}
                />

            </Box>

            {/* second group*/}
            <Box
                flexBasis={['','33%']}
                display={['contents','contents','flex']}
                flexDirection={['column']}
            >
                <InfoCardWithImage
                    greenText={'Priority Mentions'}
                    primaryText={'For urgent messages, use a priority !!-mention.'}
                    secondaryText={'Priority mentions will always send a push notification.'}
                    imageUrl={"https://quill.chat/images/homepage/section_3/graphics/mentions_priority@2x.png"}
                />

                <InfoCardWithImage
                    greenText={'File Sharing'}
                    primaryText={'Send large files with accurate real-time progress.'}
                    secondaryText={'No more guessing if your file is going through when you’re on slow WiFi.'}
                    imageUrl={"https://quill.chat/images/homepage/section_3/graphics/files@2x.png"}
                />

                <InfoCardWithImage
                    greenText={'Customization'}
                    primaryText={'Choose between hundreds of icons and colors — or bring your own.'}
                    secondaryText={'Where you gather online is as personal as your in-person office, so make it feel like home.'}
                    imageUrl={"https://quill.chat/images/homepage/section_3/graphics/custom_icons_2@2x.png"}
                />
            </Box>

            {/* Third group*/}
            <Box
                flexBasis={['','33%']}
                display={['contents','contents','flex']}
                flexDirection={['column']}
            >
                <InfoCardWithImage
                    greenText={'App Integrations'}
                    primaryText={'Connect your favorite apps with Quill.'}
                    secondaryText={'Turn on popular integrations or point your custom-built apps to Quill in a breeze.'}
                    appIntegeration={true}
                    imageUrl={"https://quill.chat/images/homepage/section_3/logos/pagerduty.jpg"}
                />

                <InfoCardText
                    heading={'Networked Conversations'}
                    firstText={'Conversations in Quill are meant to be shared and remixed..'}
                    secondText={'Instead of repeating an idea — link it.'}

                />

                <ReactionsCard/>

            </Box>

        </Box>
    );
};

export default InfoCards;
