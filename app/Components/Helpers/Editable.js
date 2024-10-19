import {
  Avatar,
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useEditableControls,
} from "@chakra-ui/react";
import { useState } from "react";

const CustomEditable = ({
  title,
  description,
  onSubmit,
  type,
  editable,
  avatar,
  size = "md",
}) => {
  const [value, setValue] = useState(description);

  const EditableControls = () => {
    const { isEditing, getCancelButtonProps, getSubmitButtonProps } =
      useEditableControls();

    return isEditing ? (
      <Flex gap="3" my="2" justifyContent="end">
        <Button {...getSubmitButtonProps()} colorScheme="blue">
          Save
        </Button>
        <Button {...getCancelButtonProps()} colorScheme="red">
          Cancel
        </Button>
      </Flex>
    ) : null;
  };

  if (editable)
    return (
      <Box mt="2" mb="3">
        <Heading display="flex" gap="2" alignItems="center" size={size}>
          {title}:
        </Heading>
        <Editable
          value={value}
          onChange={(val) => setValue(val)}
          isPreviewFocusable
          onSubmit={onSubmit}
        >
          <EditablePreview
            cursor="pointer"
            w={type === "date" ? "auto" : "100%"}
          />
          {type ? (
            <EditableInput
              as={Input}
              type={type}
              w={type === "date" ? "auto" : "100%"}
            />
          ) : (
            <EditableInput as={Textarea} />
          )}
          <EditableControls />
        </Editable>
      </Box>
    );
  else
    return (
      <Box mt="2" mb="3">
        <Heading size={size} display="flex" alignItems="center" gap="2">
          {title}:
        </Heading>
        <Flex alignItems="center" gap="1" mt="1">
          {avatar && <Avatar size="xs" src={avatar} name={avatar} />}
          <Text>{description}</Text>
        </Flex>
      </Box>
    );
};

export default CustomEditable;
