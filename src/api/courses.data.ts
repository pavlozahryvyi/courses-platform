import type { CourseEntity } from "./courses.model";

const videos = [
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 100,
  },
  {
    videoUrl: "https://archive.org/download/slow-motion-templae/Video-435.mp4",
    preview: "https://archive.org/services/img/instagram-new-trend_202411",
    price: 200,
  },

  {
    videoUrl:
      "https://archive.org/download/slow-motion-templae/download%20%2810%29.mp4",
    preview: "https://archive.org/services/img/slow-motion-templae",
    price: 300,
  },

  {
    videoUrl:
      "https://archive.org/download/slow-motion-templae/download%20%2811%29.mp4",
    preview:
      "https://archive.org/services/img/download-2023-12-12-t-190026.970",
    price: 400,
  },

  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 500,
  },
  {
    videoUrl: "https://archive.org/download/slow-motion-templae/Video-435.mp4",
    preview: "https://archive.org/services/img/instagram-new-trend_202411",
    price: 600,
  },

  {
    videoUrl:
      "https://archive.org/download/slow-motion-templae/download%20%2810%29.mp4",
    preview: "https://archive.org/services/img/slow-motion-templae",
    price: 700,
  },

  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 100,
  },
  {
    videoUrl: "https://archive.org/download/slow-motion-templae/Video-435.mp4",
    preview: "https://archive.org/services/img/instagram-new-trend_202411",
    price: 200,
  },

  {
    videoUrl:
      "https://archive.org/download/slow-motion-templae/download%20%2810%29.mp4",
    preview: "https://archive.org/services/img/slow-motion-templae",
    price: 300,
  },

  {
    videoUrl:
      "https://archive.org/download/slow-motion-templae/download%20%2811%29.mp4",
    preview:
      "https://archive.org/services/img/download-2023-12-12-t-190026.970",
    price: 400,
  },

  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
    price: 500,
  },
  {
    videoUrl: "https://archive.org/download/slow-motion-templae/Video-435.mp4",
    preview: "https://archive.org/services/img/instagram-new-trend_202411",
    price: 600,
  },

  {
    videoUrl:
      "https://archive.org/download/slow-motion-templae/download%20%2810%29.mp4",
    preview: "https://archive.org/services/img/slow-motion-templae",
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
