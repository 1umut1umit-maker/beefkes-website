import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "268dceaf-2b63-4d46-97b1-10656782aada", 
  token: "03ac9420285f798e36f1aac9e9406e1e058467f9"
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Sayfalar",
        path: ".",
        match: {
          include: "*.html",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Sayfa Başlığı",
            isTitle: true,
            required: true,
          }
        ],
      },
    ],
  },
});
