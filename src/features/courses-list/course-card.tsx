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
import { useDispatch, useSelector } from "react-redux";
import { useHandlePurchaseMutation } from "../../api/courses.api";
import type { RootState } from "../../store";

type CourseCardProps = {
  preview: string;
  title: string;
  description: string;
  videoUrl: string;
  price: number;
  id: number;
};

export const CourseCard: FC<CourseCardProps> = (props) => {
  const { description, preview, title, videoUrl, price, id } = props;

  const orderedCourses = useSelector(
    (state: RootState) => state.courses.orderedVideos
  );

  const dispatch = useDispatch();

  const [handlePurchase] = useHandlePurchaseMutation();

  const isCurrentCourseOrdered = !!orderedCourses.find(
    (course) => course.id === id
  );

  const handleCardClick = (videoUrl: string) => {
    dispatch(setActiveVideo(videoUrl));
  };

  const handleOrderClick = () => {
    handlePurchase(id);
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: "300px",
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
          <Button
            size="small"
            color="primary"
            onClick={handleOrderClick}
            disabled={isCurrentCourseOrdered}
          >
            Купити
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
