import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Text,
  Image,
  Flex, // Import Flex for centering content
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
          position="fixed"
          right="40px"
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="auto">
          {" "}
          {/* Use "auto" for dynamic height */}
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {/* Wrap user.name with Text component and center it */}
            <Text textAlign="center">{user.name}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
              />
              <Text
                fontSize={{ base: "28px", md: "30px" }}
                fontFamily="Work sans"
                paddingTop="20px"
              >
                Email: {user.email}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
