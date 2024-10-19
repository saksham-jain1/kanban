import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  IoCheckboxOutline,
  IoCopyOutline,
  IoCreateOutline,
  IoEllipsisHorizontalOutline,
  IoMoveOutline,
  IoTimerOutline,
  IoTrashOutline,
} from "react-icons/io5";
import useEditModal from "../../Hooks/useEditModal";
import { useState } from "react";
import CardInfoModal from "../Modals.js/CardInfoModal";

const Card = () => {
  const editModal = useEditModal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      p="2"
      bg="gray.100"
      my="3"
      borderRadius="md"
      position="relative"
      className="touch"
      _hover={{
        "& button": {
          opacity: 1,
        },
      }}
      boxShadow="lg"
      cursor="pointer"
      onClick={() => setIsOpen(true)}
    >
      <CardInfoModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <Menu isLazy lazyBehavior="unmount">
        <MenuButton
          as={IconButton}
          ml="auto"
          size="sm"
          top="1"
          right="1"
          position="absolute"
          icon={<IoEllipsisHorizontalOutline />}
          opacity="0"
          onClick={(e) => e.stopPropagation()}
          className="touch"
          bgColor="gray.300"
          _hover={{ bgColor: "gray.400" }}
          _active={{ bgColor: "gray.400" }}
        />
        <MenuList onClick={(e) => e.stopPropagation()}>
          <MenuItem
            icon={<IoCreateOutline />}
            onClick={() => {
              editModal.setTitle("Card");
              editModal.onOpen();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem icon={<IoMoveOutline />}>Move to</MenuItem>
          <MenuItem icon={<IoCopyOutline />}>Create a copy</MenuItem>
          <MenuItem icon={<IoTrashOutline />}>Delete</MenuItem>
        </MenuList>
      </Menu>
      <Flex gap="2">
        <Tag variant="solid" borderRadius="full" colorScheme="red">
          Hello
        </Tag>
        <Tag variant="solid" borderRadius="full" colorScheme="teal">
          New{" "}
        </Tag>
        <Tag variant="solid" borderRadius="full" colorScheme="green">
          World
        </Tag>
      </Flex>
      <Heading mt="2" size="sm">
        Card 1
      </Heading>
      <Text noOfLines="2" my="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni
        delectus in, totam possimus officiis deleniti aliquam laudantium,
        facere, deserunt recusandae exercitationem. Dicta, cupiditate eligendi
        earum nisi voluptatum exercitationem dignissimos!
      </Text>
      <Flex>
        <Flex alignItems="center" gap="1" flex="1" color="red.500">
          <IoTimerOutline /> Fri, 12 Apr, 2024
        </Flex>
        <Flex alignItems="center" gap="1" color="green.500">
          <IoCheckboxOutline /> 1/3
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
