import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const PersonShareCard = () => {
  return (
    <Flex alignItems="center" gap="3">
      <Avatar size="sm" />
      <Box flex="1">
        <Text my="0" color="black">Saksham Jain</Text>
        <Text mt="-5px" fontWeight="300" fontSize="sm">
          sj20011002@gmail.com
        </Text>
      </Box>
      <Menu>
        <MenuButton rightIcon={<IoChevronDown />} as={Button}>
          Owner
        </MenuButton>
        <MenuList>
          <MenuItem>Viewer</MenuItem>
          <MenuItem>Commenter</MenuItem>
          <MenuItem>Editor</MenuItem>
          <MenuDivider />
          <MenuItem>Transfer ownership</MenuItem>
          <MenuItem>Remove access</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PersonShareCard;
