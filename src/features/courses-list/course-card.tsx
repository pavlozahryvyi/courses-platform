import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import { setActiveVideo } from "../../store/active-video.slice";
import { useDispatch } from "react-redux";

type CourseCardProps = {
  preview: string;
  title: string;
  description: string;
  videoUrl: string;
  price: number;
};

export const CourseCard: FC<CourseCardProps> = (props) => {
  const { description, preview, title, videoUrl, price } = props;

  const dispatch = useDispatch();

  const handleCardClick = (videoUrl: string) => {
    // console.log(videoUrl);

    dispatch(setActiveVideo(videoUrl));
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
      }}
    >
      <CardActionArea onClick={() => handleCardClick(videoUrl)}>
        <CardMedia
          component="img"
          height="140"
          image={preview}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ mr: 10 }}>
            {price}
          </Typography>
          <Button size="small" color="primary">
            Купити
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
