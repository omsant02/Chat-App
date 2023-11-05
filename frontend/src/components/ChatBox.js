import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";
import "./styles.css";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Flex
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "98%" }}
      h="100%"
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Flex>
  );
};

export default ChatBox;
