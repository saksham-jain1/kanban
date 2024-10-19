"use client";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  Button,
  Avatar,
} from "@chakra-ui/react";
import {
  IoChevronForwardSharp,
  IoGridOutline,
  IoImageOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoMenuSharp,
  IoPersonAddSharp,
  IoReceiptOutline,
  IoSettings,
} from "react-icons/io5";
import React from "react";
import Link from "next/link";
import DrawerItem from "./Helpers/DrawerItem";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      h={14}
      boxShadow="dark-lg"
      p="5"
      justifyContent="space-between"
      alignItems="center"
      bg="blue.600"
    >
      <Text fontWeight="600" fontSize="xl" color="white">
        <Link href="/">Kanban Bord</Link>
      </Text>
      <IconButton icon={<IoMenuSharp size={24} />} onClick={onOpen} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton top="6" />
          <DrawerHeader
            px="4"
            alignItems="center"
            gap="2"
            borderBottom="1px solid gray"
            display="flex"
          >
            <Avatar />
            <Box>
              <Text fontSize="xl" fontWeight="700" color="blue.600">
                Hello Saksham
              </Text>
              <Link href="/account">
                <Text
                  fontSize="xs"
                  _hover={{ textDecor: "underline", color: "red.300" }}
                  display="flex"
                  alignItems="center"
                  mt="-1"
                >
                  My Account
                  <IoChevronForwardSharp />
                </Text>
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody px="0" display="flex" flexDir="column">
            {
              <>
                <DrawerItem
                  type="link"
                  href="/subscriptions"
                  icon={IoReceiptOutline}
                  title="Subscriptions"
                  onClick={() => onClose()}
                />
                <DrawerItem
                  type="link"
                  href="/dashboard"
                  icon={IoGridOutline}
                  title="Dashboard"
                  onClick={() => onClose()}
                />
                <DrawerItem
                  type="link"
                  href="/settings"
                  icon={IoSettings}
                  title="Settings"
                  onClick={() => onClose()}
                />
                <DrawerItem
                  type="button"
                  icon={IoLogOutOutline}
                  title="Logout"
                  colorScheme="red"
                  onClick={() => onClose()}
                />
              </>
            }
            {
              <>
                <DrawerItem
                  type="button"
                  icon={IoLogInOutline}
                  title="Login"
                  colorScheme="blue"
                  variant="outline"
                  onClick={() => onClose()}
                />
                <DrawerItem
                  type="button"
                  icon={IoPersonAddSharp}
                  title="Create an Account"
                  colorScheme="blue"
                  onClick={() => onClose()}
                />
              </>
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
