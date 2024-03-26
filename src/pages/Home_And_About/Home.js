import React, { Component } from 'react';

import { Welcome } from './Welcome';
import { OurPurpose } from './OurPurpose';
import { WhatMakesUsDifferent } from './WhatMakesUsDifferent';
import {HowItWorks} from './HowItWorks';

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
        <vstack>
            <Welcome />
            <OurPurpose />
            <WhatMakesUsDifferent />
            <HowItWorks />
        </vstack>

    );
  }
}