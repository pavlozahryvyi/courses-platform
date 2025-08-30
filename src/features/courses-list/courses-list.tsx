import { Box, Container, Toolbar } from "@mui/material";
import { type FC } from "react";
import { coursesMockData } from "../../api/courses.data";
import { CourseCard } from "./course-card";
import { Header } from "./app-bar";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { DialogModal } from "../video-modal/video-modal";
import { OrderedCourses } from "./ordered-courses";

export const CoursesList: FC = () => {
  const videoUrl = useSelector(
    (state: RootState) => state.activeVideo.videoUrl
  );

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Toolbar />
        <Container
          sx={{
            py: 6,
            flex: 1,
            display: "flex",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
              gap: 2,
              gridAutoRows: 300,
              alignItems: "stretch",
              p: 1,
            }}
          >
            {coursesMockData.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </Box>

          <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 20%" } }}>
            <OrderedCourses />
          </Box>
        </Container>
      </Box>
      {videoUrl && <DialogModal videoUrl={videoUrl} />}
    </>
  );
};
