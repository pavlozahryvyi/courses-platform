import { Box, Container } from "@mui/material";
import type { FC } from "react";
import { videosMockData } from "../../mock/mock-data";
import { CourseCard } from "./course-card";
import { Header } from "./app-bar";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { DialogModal } from "../video-modal/video-modal";

export const CoursesList: FC = () => {
  const videoUrl = useSelector(
    (state: RootState) => state.activeVideo.videoUrl
  );

  return (
    <>
      <Header />
      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            gap: 2,
          }}
        >
          {videosMockData.map(({ id, ...videoProps }) => (
            <CourseCard key={id} {...videoProps} />
          ))}
        </Box>
      </Container>
      {videoUrl && <DialogModal videoUrl={videoUrl} />}
    </>
  );
};
