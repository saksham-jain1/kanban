"use client";
import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import useShareModal from "../../Hooks/useShareModal";
import MyModal from "./MyModal";
import PersonShareCard from "../Helpers/PersonShareCard";
import { IoLinkSharp } from "react-icons/io5";

const ShareModal = () => {
  const { isOpen, onClose } = useShareModal();
  const toast = useToast();

  const body = (
    <Box>
      <Input placeholder="Add People" autoFocus />
      <Text fontSize="xl" fontWeight="500" mt="4">
        People with acess
      </Text>
      <Flex direction="column" py="3" gap="2">
        <PersonShareCard />
        <PersonShareCard />
        <PersonShareCard />
      </Flex>
      <Flex>
        <Button
          variant="outline"
          borderRadius="full"
          mt="1"
          colorScheme="blue"
          leftIcon={<IoLinkSharp />}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({
              title: "Link Copied",
              status: "success",
              position: "top",
              isClosable: true,
              duration: 5000,
            });
          }}
        >
          Copy link.
        </Button>
      </Flex>
    </Box>
  );

  return (
    <MyModal
      isOpen={isOpen}
      onClose={onClose}
      title="Share"
      body={body}
      action={() => {}}
      actionLabel="Share"
      secondaryAction={onClose}
      secondaryActionLabel="Cancel"
    />
  );
};

export default ShareModal;
