import { Fragment, type FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export const OrderedCourses: FC = () => {
  const orderedCourses = useSelector(
    (state: RootState) => state.courses.orderedVideos
  );

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        position: { md: "sticky" },
        top: { md: 24 },
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Ordered courses
      </Typography>

      <List dense disablePadding>
        {orderedCourses.map((course, idx) => (
          <Fragment key={course.id}>
            <ListItem
              disableGutters
              secondaryAction={
                <Typography variant="body2" fontWeight={600}>
                  {course.price}
                </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  {course.title
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={course.title}
                secondary={course.description}
              />
            </ListItem>
            {idx < orderedCourses.length - 1 && <Divider sx={{ my: 1 }} />}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};
