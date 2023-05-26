//import PropTypes, { InferProps } from 'prop-types'
import { Card, CardBody, CardFooter, Image, Stack , Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'
interface cardattributes {
    thumbnail : string,
    title : string,
    description : string
}
const Upload = (props: cardattributes) => {
    return ( 
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={props.thumbnail}
                    alt={props.thumbnail}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>
                        {props.title}
                    </Heading>
                    <Text>
                        {props.description}
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