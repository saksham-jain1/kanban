"use client";
import {
  Flex,
  IconButton,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IoCopyOutline,
  IoCreateOutline,
  IoEllipsisHorizontalOutline,
  IoShareSocialOutline,
  IoTrashOutline,
} from "react-icons/io5";
import useEditModal from "../../Hooks/useEditModal";
import useShareModal from "../../Hooks/useShareModal";

const WorkspaceCard = ({ title, menu, id }) => {
  const [show, setShow] = useState(false);
  const route = useRouter();
  const editModal = useEditModal();
  const shareModal = useShareModal();

  return (
    <Flex
      h="80px"
      p="3"
      boxShadow="lg"
      border="2px solid #CBD5E0"
      cursor="pointer"
      alignItems="center"
      borderRadius="lg"
      gap={5}
      pos="relative"
      _hover={{
        "& button": {
          opacity: 1,
        },
        bg: "blue.50",
      }}
      onMouseLeave={() => setShow(false)}
      onClick={() => route.push("/workspace/" + id)}
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
          />
          <MenuList onClick={(e) => e.stopPropagation()}>
            <MenuItem
              icon={<IoCreateOutline />}
              onClick={() => {
                editModal.setTitle("Workspace");
                editModal.onOpen();
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              icon={<IoShareSocialOutline />}
              onClick={shareModal.onOpen}
            >
              Share
            </MenuItem>
            <MenuItem icon={<IoCopyOutline />}>Create a copy</MenuItem>
            <MenuItem icon={<IoTrashOutline />}>Delete</MenuItem>
          </MenuList>
        </Menu>
      )}

      <Avatar size="lg" borderRadius="lg" name={title} />
      <Text fontSize="xl">{title}</Text>
    </Flex>
  );
};

export default WorkspaceCard;
