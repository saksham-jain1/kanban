"use client";
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IoCopyOutline,
  IoCreateOutline,
  IoEllipsisHorizontalOutline,
  IoMoveOutline,
  IoShareSocialOutline,
  IoTrashOutline,
} from "react-icons/io5";
import useEditModal from "../../Hooks/useEditModal";
import useShareModal from "../../Hooks/useShareModal";

const BoardCard = ({ menu, data }) => {
  const [show, setShow] = useState(false);
  const route = useRouter();
  const editModal = useEditModal();
  const shareModal = useShareModal();
  return (
    <Flex
      background={data.bg}
      minW="200px"
      w="240px"
      maxW="100%"
      h="140px"
      borderRadius="lg"
      boxShadow="md"
      alignItems="end"
      cursor="pointer"
      pos="relative"
      _hover={{
        "& button": {
          opacity: 1,
        },
      }}
      onMouseLeave={() => setShow(false)}
      onClick={() => route.push("/board/" + data.id)}
    >
      {menu && (
        <Menu isOpen={show} isLazy lazyBehavior="unmount">
          <MenuButton
            as={IconButton}
            pos="absolute"
            top="2"
            right="2"
            size="sm"
            icon={<IoEllipsisHorizontalOutline />}
            opacity="0"
            onClick={(e) => {
              e.stopPropagation();
              setShow(true);
            }}
            className="touch"
            bgColor="whiteAlpha.400"
            _hover={{ bgColor: "whiteAlpha.500" }}
            _active={{ bgColor: "whiteAlpha.500" }}
          />
          <MenuList onClick={(e) => e.stopPropagation()}>
            <MenuItem
              icon={<IoCreateOutline />}
              onClick={() => {
                editModal.setTitle("Board");
                editModal.onOpen();
              }}
            >
              Edit
            </MenuItem>
            <MenuItem icon={<IoMoveOutline />}>Move to</MenuItem>
            <MenuItem icon={<IoCopyOutline />}>Create a copy</MenuItem>
            <MenuItem
              icon={<IoShareSocialOutline />}
              onClick={shareModal.onOpen}
            >
              Share
            </MenuItem>
            <MenuItem
              _hover={{ background: "red.200" }}
              icon={<IoTrashOutline />}
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      <Text
        textAlign="center"
        boxShadow="md"
        mb="5"
        fontSize="x-large"
        bg="blackAlpha.400"
        w="100%"
        color="white"
        fontWeight="500"
        overflow="hidden"
        noOfLines="2"
        p="1"
      >
        {data.name}
      </Text>
    </Flex>
  );
};

export default BoardCard;
