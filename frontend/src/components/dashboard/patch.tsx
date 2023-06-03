//import { useState } from 'react';

import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer,
    Input,
    Button,
} from '@chakra-ui/react'



interface PatchFormProps {
    id: string,
    initData: {title: string, link: string, description: string, thumbnail: string}
}

const PatchForm: React.FC<PatchFormProps> = ({ id, initData }) => {
    //const [title, setTitle] = useState(initData.title);
    //const [description, setDescription] = useState(videosData[0].description);
    //const [link, setLink] = useState(videosData[0].link);
    //const [thumbnail, setThumbnail] = useState(videosData[0].thumbnail);
    console.log(initData)
    const patchVideo = async () => {
        try {
          const response = await fetch('http://localhost:5173/api/'+id, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: id ,
            title: 'title', 
            link: 'link', 
            description: 'description', 
            thumbnail: 'thumbnail', 
            }),
          });
          const data = await response.json();
          console.log(data);
    
        } catch (error) {
          console.error("Error:", error);
        }
    };
    //console.log(initData.title);
    return ( 
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Vlastnosti</Th>
                        <Th>Hodnoty</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>
                            Titulek
                        </Td>
                        <Td>
                            <Input defaultValue={initData.title} size='md' />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Popis</Td>
                        <Td>
                            <Input defaultValue='medium size' size='md' />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Odkaz</Td>
                        <Td>
                            <Input defaultValue='medium size' size='md' />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Odkaz na obrázek</Td>
                        <Td>
                            <Input defaultValue='medium size' size='md' />
                        </Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Th>
                        <Button onClick={patchVideo} colorScheme='pink' variant='solid'>
                            Nahrát změny
                        </Button>
                        </Th>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </> 
    );
}
 
export default PatchForm;