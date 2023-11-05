import { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Flex } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <Flex flexDirection="column" w="100%">
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <Box flex="1">
            <MyChats fetchAgain={fetchAgain} />
          </Box>
        )}
        {user && (
          <Box flex="1">
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default ChatPage;
