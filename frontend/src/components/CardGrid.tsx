import { Grid } from "@chakra-ui/react";
import Card from "./card";

interface CardData {
  thumbnail: string;
  title: string;
  description: string;
  id: string;
}

interface CardGridProps {
  data: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => (
  <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)"]} gap={4}>
    {data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </Grid>
);

export default CardGrid;
