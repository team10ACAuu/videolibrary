import { Card, CardBody, CardFooter, Image, Stack , Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'
const Upload = () => {
    return ( 
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_1x.png?itok=MqGeWTLm'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>NodeJS tutorial</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='1'>
                    <Button variant='solid' colorScheme='red'>
                        Paly now
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </> 
    );
}
 
export default Upload;