import { Flex, Input, Kbd, Spinner, Stack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { useState } from "react"

const Home = () => {
    const [value, setValue] = useState(0)
    //setValue(0);
    return ( 
        <div>
            <Alert status='success'>
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>
            <Stack spacing={3}>
                <Alert status='info' variant='subtle'>
                    <AlertIcon />
                    Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='success' variant='solid'>
                    <AlertIcon />
                    Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='error' variant='left-accent'>
                    <AlertIcon />
                    Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='warning' variant='top-accent'>
                    <AlertIcon />
                    Data uploaded to the server. Fire on!
                </Alert>
            </Stack>
            <span>
                <Kbd>shift</Kbd> + <Kbd>H</Kbd>
            </span>
            <Flex>
            <Tabs>
            <TabList>
                <Tab>{value}</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div>
                        <Input placeholder='test123!' type='number'/>
                    </div>
                </TabPanel>
                <TabPanel>
                <Spinner />
                </TabPanel>
                <TabPanel>
                    <span>
                        <Kbd>shift</Kbd> then <Kbd>H</Kbd>
                    </span>
                </TabPanel>
            </TabPanels>
            </Tabs>
            </Flex>
        </div>
    );
}
 
export default Home;