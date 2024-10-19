"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  Text,
} from "@chakra-ui/react";
import MyModal from "./MyModal";
import CustomEditable from "../Helpers/Editable";
import AddItem from "../Helpers/AddItem";
import { TfiText } from "react-icons/tfi";
import {
  IoAdd,
  IoCalendar,
  IoClose,
  IoCreate,
  IoDocumentAttach,
  IoDocumentText,
  IoPerson,
  IoPricetag,
} from "react-icons/io5";

const CardInfoModal = ({ isOpen, onClose }) => {
  const body = (
    <Flex flexWrap="wrap">
      <Box mt="5" flex="1" w={{ sm: "100%", md: "100%" }} mr="4">
        <CustomEditable
          title={
            <>
              <TfiText />
              Title
            </>
          }
          description="Hello World 1"
          editable
        />
        <CustomEditable
          title={
            <>
              <IoDocumentText />
              Description
            </>
          }
          description="This is my first card."
          editable
        />
        <Heading size="md" display="flex" alignItems="center" gap="2" my="3">
          <IoPricetag />
          Tags
        </Heading>
        <Flex gap="2" flexWrap="wrap" mb="5">
          <Tag variant="solid" gap="1" borderRadius="full" colorScheme="red">
            Hello
            <IoClose cursor="pointer" />
          </Tag>
          <Tag variant="solid" gap="1" borderRadius="full" colorScheme="teal">
            New <IoClose cursor="pointer" />
          </Tag>
          <Tag variant="solid" gap="1" borderRadius="full" colorScheme="green">
            World <IoClose cursor="pointer" />
          </Tag>
          <Tag cursor="pointer">
            <IoAdd /> Add Tag
          </Tag>
        </Flex>
        <Heading size="md" display="flex" alignItems="center" gap="2" my="3">
          <IoDocumentAttach />
          Attach files
        </Heading>
        <Flex w="100%" overflowX="auto" gap="4" pb="3">
          <AddItem h="90" minW="150" title="Add file" type="file" />
        </Flex>
        <Heading size="md" display="flex" alignItems="center" gap="2" my="3">
          <IoDocumentAttach />
          Subtask
        </Heading>
        <AddItem title="Create a subtask" h="40" />
        // todo add subTasks // todo add customFields
      </Box>
      <Box
        borderLeft={{ sm: "", md: "1px solid black" }}
        borderTop={{ sm: "1px solid black", md: "none" }}
        width={{ sm: "100%", md: "35%" }}
        pl={{ md: "4" }}
        mt="5"
        pt="4"
      >
        // todo add status thing
        <CustomEditable
          title={
            <>
              <IoPerson />
              Created by
            </>
          }
          avatar="Saksham Jain"
          description="Saksham Jain"
          size="sm"
        />
        <CustomEditable
          title={
            <>
              <IoCalendar />
              Created at
            </>
          }
          description="2024-04-05"
          type="date"
          size="sm"
        />
        <Heading size="sm" display="flex" alignItems="center" gap="2">
          <IoPerson />
          Assigned to:
        </Heading>
        // todo create assignedTo thing
        <CustomEditable
          title={
            <>
              <IoCalendar />
              Due Date
            </>
          }
          description="2024-04-25"
          type="date"
          size="sm"
          editable
        />
        <CustomEditable
          title={
            <>
              <IoCalendar />
              Last updated at
            </>
          }
          description="2024-04-05"
          type="date"
        />
      </Box>
      <Box w="100%">
        <Heading display="flex" alignItems="center" gap="2" my="3">
          <IoCreate />
          Comments:
        </Heading>
        <InputGroup>
          <Input />
          <InputRightElement as={Button} px="8" colorScheme="blue">
            Post
          </InputRightElement>
        </InputGroup>
        // todo add comments display // todo add mention thing
      </Box>
    </Flex>
  );
  return <MyModal size="3xl" isOpen={isOpen} onClose={onClose} body={body} />;
};

export default CardInfoModal;
