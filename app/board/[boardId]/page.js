"use client";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
} from "@chakra-ui/react";
import InnerHeader from "../../Components/InnerHeader";
import {
  IoCopyOutline,
  IoCreateOutline,
  IoEllipsisHorizontalOutline,
  IoMoveOutline,
  IoTrashOutline,
} from "react-icons/io5";
import AddItem from "../../Components/Helpers/AddItem";
import Card from "../../Components/Helpers/Card";
import useEditModal from "../../Hooks/useEditModal";

const BoardPage = ({ params }) => {
  const editModal = useEditModal();

  return (
    <Box
      bg="blue.400"
      backgroundImage='url("https://source.unsplash.com/1000x800/?wallpaper")'
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <InnerHeader workspaceId={params.workspaceId} boardId={params.boardId} />
      <Box
        display="-webkit-box"
        h="calc(100vh - 7rem)"
        p="5"
        gap="8"
        w="100vw"
        overflow="auto"
      >
        <Box
          bg="whiteAlpha.600"
          borderRadius="lg"
          h="max-content"
          p="3"
          minW="240px"
          w="350px"
          maxW="90%"
          position="relative"
          className="touch"
          _hover={{
            "& button.menu": {
              opacity: 1,
            },
          }}
        >
          <Flex alignItems="center" gap="1">
            <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              Board Name
            </Text>
            <Tag borderRadius="full" colorScheme="red">
              3
            </Tag>
            <Menu isLazy lazyBehavior="unmount">
              <MenuButton
                as={IconButton}
                ml="auto"
                size="sm"
                icon={<IoEllipsisHorizontalOutline />}
                opacity="0"
                onClick={(e) => e.stopPropagation()}
                className="touch menu"
                bgColor="gray.200"
                _hover={{ bgColor: "gray.300" }}
                _active={{ bgColor: "gray.300" }}
              />
              <MenuList onClick={(e) => e.stopPropagation()}>
                <MenuItem
                  icon={<IoCreateOutline />}
                  onClick={() => {
                    editModal.setTitle("Column");
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
          </Flex>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <AddItem h="50" title="Add Card" borderRadius="md" />
        </Box>
        <AddItem h="50" title="Add Board" minW="240px" w="350" maxW="90%" />
        <AddItem h="50" title="Add Board" minW="240px" w="350" maxW="90%" />
        <AddItem h="50" title="Add Board" minW="240px" w="350" maxW="90%" />
      </Box>
    </Box>
  );
};

export default BoardPage;
