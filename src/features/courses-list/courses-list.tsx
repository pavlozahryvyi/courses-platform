import { Box, Container } from "@mui/material";
import type { FC } from "react";
import { videosMockData } from "../../mock/mock-data";
import { CourseCard } from "./course-card";

export const CoursesList: FC = () => {
  return (
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
  );
};
