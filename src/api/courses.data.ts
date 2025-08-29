import type { CourseEntity } from "./courses.model";

const videos = [
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 100,
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 200,
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 300,
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 400,
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 500,
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 600,
  },
  {
    videoUrl: "1",
    preview: "1",
    price: 700,
  },
];

export const coursesMockData: Array<CourseEntity> = videos.map(
  (videoItem, idx) => ({
    ...videoItem,
    id: idx,
    title: `Title ${idx}`,
    description: `Description ${idx}`,
  })
);
