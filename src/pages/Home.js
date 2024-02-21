import React, { Component } from 'react';
import {
  Box,
  Center,
  VStack,
  Heading,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize state with two flags for two different modals
    this.state = {
      isGetStartedModalOpen: false,
      isLearnMoreModalOpen: false,
    };
  }

  // Methods to handle opening and closing the Get Started modal
  openGetStartedModal = () => this.setState({ isGetStartedModalOpen: true });
  closeGetStartedModal = () => this.setState({ isGetStartedModalOpen: false });

  // Methods to handle opening and closing the Learn More modal
  openLearnMoreModal = () => this.setState({ isLearnMoreModalOpen: true });
  closeLearnMoreModal = () => this.setState({ isLearnMoreModalOpen: false });

  render() {
    const { isGetStartedModalOpen, isLearnMoreModalOpen } = this.state;
    return (
      <Center w="100vw" h="100vh" bg="white">
        <Box w="60vw" h="70vh" bg="white" display="flex" padding={10} color="black" justifyContent="center">
          <VStack>
            <VStack spacing={0}>
              <Heading fontSize="7xl" letterSpacing="tighter" lineHeight="shorter" textAlign="center">
                Elevate your practice
              </Heading>
              <Heading fontSize="7xl" letterSpacing="tighter" lineHeight="shorter" textAlign="center" mt={-3}>
                Empower your decisions
              </Heading>
            </VStack>
            <Heading fontWeight="normal" color="gray.600" fontSize="2xl" as="h2" mb={4}>
              Transform mental health care with precision and empathy.
            </Heading>
            <HStack spacing={10}>
              <Button colorScheme="blue" size="lg" variant="outline" onClick={this.openGetStartedModal}>
                Get Started
              </Button>

              <Button colorScheme="blue" size="lg" onClick={this.openLearnMoreModal}>
                Learn More
                <ArrowForwardIcon />
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Get Started Modal */}
        <Modal isOpen={isGetStartedModalOpen} onClose={this.closeGetStartedModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Demographic Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <VStack spacing={4}>
        <p>Thank you for your interest! Let's explore how you can elevate and empower your practice.</p>
        {/* Ensure HStack fits within ModalBody by controlling its size or the VStack it's contained in */}
        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Input
                placeholder="First Name"
                size="lg"
            />
            <Input
                placeholder="Last Name"
                size="lg"
            />
        </HStack>

        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Input
                placeholder="First Name"
                size="lg"
            />
            <Input
                placeholder="Last Name"
                size="lg"
            />
        </HStack>

        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Input
                placeholder="First Name"
                size="lg"
            />
            <Input
                placeholder="Last Name"
                size="lg"
            />
        </HStack>

        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Input
                placeholder="First Name"
                size="lg"
            />
            <Input
                placeholder="Last Name"
                size="lg"
            />
        </HStack>
      </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={this.closeGetStartedModal}>
                Close
              </Button>
              <Button variant="ghost">Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Learn More Modal */}
        <Modal isOpen={isLearnMoreModalOpen} onClose={this.closeLearnMoreModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Learn More</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Discover more about how our approach can transform mental health care through technology and innovation.</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={this.closeLearnMoreModal}>
                Close
              </Button>
              <Button variant="ghost">Explore Features</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    );
  }
}
