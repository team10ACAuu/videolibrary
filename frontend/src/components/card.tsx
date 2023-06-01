//import PropTypes, { InferProps } from 'prop-types'
import { Card, CardBody, CardFooter, Image, Stack , Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'
interface cardAttributes {
    thumbnail : string,
    title : string,
    description : string,
    videoId: string
}
const Upload: React.FC<cardAttributes> = ({ thumbnail, title, description, videoId}) => {
    return ( 
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={thumbnail}
                    alt={thumbnail}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>
                        {title}
                    </Heading>
                    <Text>
                        {description}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='1'>
                    <Button variant='solid' colorScheme='red'     
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://127.0.0.1:5173/video?videoId='+videoId;
                    }}>
                        Paly now
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </> 
    );
}
 
export default Upload;