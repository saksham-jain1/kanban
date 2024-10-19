import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const MyModal = ({
  size = "xl",
  isOpen,
  onClose,
  title,
  body,
  action,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
  closeOnOverlayClick = true,
  closeBtn = true,
  isLoading = false,
  isDisabled = false,
}) => {
  return (
    <Modal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader textAlign="center">{title}</ModalHeader>}
        {closeBtn && <ModalCloseButton />}
        <ModalBody>{body}</ModalBody>
        <ModalFooter display="flex" gap="5">
          {secondaryActionLabel && (
            <Button
              flex="1"
              colorScheme="red"
              variant="outline"
              onClick={secondaryAction}
              isLoading={isLoading}
            >
              {secondaryActionLabel}
            </Button>
          )}
          {actionLabel && (
            <Button
              flex="1"
              colorScheme="blue"
              isLoading={isLoading}
              onClick={action}
              isDisabled={isDisabled}
            >
              {actionLabel}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
