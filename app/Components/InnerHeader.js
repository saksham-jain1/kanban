import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  IoChevronDown,
  IoCopyOutline,
  IoCreateOutline,
  IoEllipsisVertical,
  IoSettings,
  IoShareSocialSharp,
} from "react-icons/io5";
import { MdOutlineWallpaper } from "react-icons/md";
import useEditModal from "../Hooks/useEditModal";
import useShareModal from "../Hooks/useShareModal";
import useBgModal from "../Hooks/useBgModal";

const InnerHeader = ({ boardId, workspaceId }) => {
  const editModal = useEditModal();
  const shareModal = useShareModal();
  const bgModal = useBgModal();
  workspaceId = "123";
  const data = {
    123: {
      name: "New",
      boards: { 1234: "Hello", 1233: "New" },
    },
    2: {
      name: "Hello",
      boards: {},
    },
    3: {
      name: "World",
      boards: {},
    },
    1: {
      name: "Bcac",
      boards: {},
    },
  };
  const list = () => {
    if (boardId) {
      return Object.keys(data[workspaceId].boards);
    } else {
      return Object.keys(data);
    }
  };
  return (
    <Flex w="100%" h="14" bg="blue.100" alignItems="center" px="5">
      <Menu isLazy lazyBehavior="unmount">
        <MenuButton as={Button} rightIcon={<IoChevronDown />}>
          <Flex alignItems="center" maxW="200px">
            <Avatar
              borderRadius="lg"
              mr="2"
              size="sm"
              name={
                boardId
                  ? data[workspaceId].boards[boardId]
                  : data[workspaceId].name
              }
            />
            <Text flex="1" overflow="hidden" textOverflow="ellipsis">
              {boardId
                ? data[workspaceId].boards[boardId]
                : data[workspaceId].name}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList>
          {list()?.map((item) => {
            let name, link;
            if (boardId && boardId != item) {
              name = data[workspaceId].boards[item];
            } else if (!boardId && workspaceId != item) {
              name = data[item].name;
            } else return;
            return (
              <MenuItem key={item}>
                <Avatar borderRadius="lg" mr="2" size="sm" name={name} />
                {name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <IconButton
        icon={<IoShareSocialSharp />}
        onClick={shareModal.onOpen}
        ml="auto"
        mr="2"
      />
      <Menu isLazy lazyBehavior="unmount">
        <MenuButton as={Button}>
          <IoEllipsisVertical />
        </MenuButton>
        <MenuList>
          {boardId && (
            <MenuItem icon={<MdOutlineWallpaper />} onClick={bgModal.onOpen}>
              Change Background
            </MenuItem>
          )}
          <MenuItem
            icon={<IoCreateOutline />}
            onClick={() => {
              editModal.setTitle(boardId ? "Board" : "Workspace");
              editModal.onOpen();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem icon={<IoCopyOutline />}>Create a copy</MenuItem>
          <MenuItem icon={<IoSettings />}>Settings</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default InnerHeader;
