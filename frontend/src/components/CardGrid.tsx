import { Grid } from "@chakra-ui/react";
import Card from "./card";


// Definujeme strukturu dat, kterou očekáváme pro každou kartu (TypeScript)
interface CardData {
  thumbnail: string;
  title: string;
  description: string;
  id: string;
}
// Definujeme strukturu vstupních props 
// Očekáváme pole dat o kartách
interface CardGridProps {
  data: CardData[];
}
// Vstupní data mapujeme na komponenty Card
const CardGrid: React.FC<CardGridProps> = ({ data }) => (
 
 // Grid z Chakra UI používáme pro automatické rozvržení karet
// Počet sloupců se mění podle šířky obrazovky
 <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)"]} gap={4}>
    {data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </Grid>
);

export default CardGrid;
