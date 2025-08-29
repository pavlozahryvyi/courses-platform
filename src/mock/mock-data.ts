const videos = [
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
  },
  {
    videoUrl:
      "https://dn720706.ca.archive.org/0/items/ical-capcut/10.%207184749829166337282.mp4",
    preview: "https://archive.org/services/img/ical-capcut",
  },
];

export const videosMockData = videos.map((videoItem, idx) => ({
  ...videoItem,
  id: idx,
  title: `Title ${idx}`,
  description: `Description ${idx}`,
}));
