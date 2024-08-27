import React from 'react'
import { Container, Box, Text, Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react"
import Signup from './Signup'
import Login from './Login'
function Homepage() {
    
    return (
        <Container maxW='xl' centerContent>
            <Box
                display='flex'
                justifyContent='center'
                p={3}
                bg='white'
                w='100%'
                m='40px 0 15px 0'
                borderRadius='lg'
                borderWidth='1px'
            >
                <Text fontSize='4xl'>
                    Let's Talk
                </Text>
            </Box>
            <Box
                bg='white'
                borderRadius='lg'
                borderWidth='1px'
                width='100%'
                p={4}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList mb='5px'>
                        <Tab w="50%">Login</Tab>
                        <Tab w="50%">Signup</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
