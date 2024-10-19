"use client";
import { useState } from "react";
import useEditModal from "../../Hooks/useEditModal";
import MyModal from "./MyModal";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const EditModal = () => {
  const { isOpen, onClose, title, list, type, data, setData, to } =
    useEditModal();
  const [isLoading, setIsLoading] = useState(false);

  const handelSave = () => {};

  const body = (
    <>
      {type != "move" && (
        <FormControl mb="4" isInvalid={!data?.name}>
          <FormLabel>{to} Name:</FormLabel>
          <Input
            placeholder={`Enter ${to} name`}
            value={data.name || ""}
            autoFocus
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          {!data.name && <FormErrorMessage>Name is required.</FormErrorMessage>}
        </FormControl>
      )}
      <FormControl>
        <FormLabel>Move To:</FormLabel>
        <Select value={data.id}>
          {list.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </Select>
      </FormControl>
    </>
  );
  return (
    <MyModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      body={body}
      action={handelSave}
      actionLabel="Save"
      secondaryAction={onClose}
      secondaryActionLabel="Cancel"
      isLoading={isLoading}
      isDisabled={!data.name && type !== "move"}
    />
  );
};

export default EditModal;
