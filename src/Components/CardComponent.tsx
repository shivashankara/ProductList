import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ productinfo }) {
 
  const { title, price,image, rating } = productinfo;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price}
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {rating.rate} - {rating.count} ratings
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
