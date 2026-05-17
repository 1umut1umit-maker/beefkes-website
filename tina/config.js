import { defineConfig } from "tina-cloud";

export default defineConfig({
  branch: "main",
  clientId: "268dceaf-2b63-4d46-97b1-10656782aada", 
token: "cee279ef2ee8249f9fc0b5041b52b4c204a909e1",
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Ana Sayfa (Slider)",
        path: "./",
        match: {
          include: "index",
        },
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Tarayıcı Sekme Başlığı" },
          // Slide 1
          { type: "string", name: "slide1_sub", label: "Slide 1 Üst Küçük Yazı" },
          { type: "string", name: "slide1_title", label: "Slide 1 Büyük Başlık", ui: { component: "textarea" } },
          { type: "image", name: "slide1_img", label: "Slide 1 Arka Plan Fotoğrafı" },
          // Slide 2
          { type: "string", name: "slide2_sub", label: "Slide 2 Üst Küçük Yazı" },
          { type: "string", name: "slide2_title", label: "Slide 2 Büyük Başlık", ui: { component: "textarea" } },
          { type: "image", name: "slide2_img", label: "Slide 2 Arka Plan Fotoğrafı" },
          // Slide 3
          { type: "string", name: "slide3_sub", label: "Slide 3 Üst Küçük Yazı" },
          { type: "string", name: "slide3_title", label: "Slide 3 Büyük Başlık", ui: { component: "textarea" } },
          { type: "image", name: "slide3_img", label: "Slide 3 Arka Plan Fotoğrafı" },
        ],
      },
      {
        name: "taste",
        label: "Taste Sayfası",
        path: "./",
        match: {
          include: "taste",
        },
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Tarayıcı Sekme Başlığı" },
          { type: "string", name: "heading", label: "Sayfa Başlığı" },
          { type: "string", name: "description", label: "Açıklama Metni", ui: { component: "textarea" } },
          { type: "image", name: "img1", label: "Sol Fotoğraf (Kaliteli Et)" },
          { type: "image", name: "img2", label: "Sağ Fotoğraf (Sunum)" },
        ],
      },
      {
        name: "crafted",
        label: "Crafted Sayfası",
        path: "./",
        match: {
          include: "crafted",
        },
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Tarayıcı Sekme Başlığı" },
          { type: "string", name: "main_heading", label: "Ana Başlık" },
          { type: "string", name: "card1_title", label: "1. Kart Başlığı" },
          { type: "string", name: "card1_desc", label: "1. Kart Açıklaması", ui: { component: "textarea" } },
          { type: "string", name: "card2_title", label: "2. Kart Başlığı" },
          { type: "string", name: "card2_desc", label: "2. Kart Açıklaması", ui: { component: "textarea" } },
          { type: "string", name: "card3_title", label: "3. Kart Başlığı" },
          { type: "string", name: "card3_desc", label: "3. Kart Açıklaması", ui: { component: "textarea" } },
        ],
      },
      {
        name: "horeca",
        label: "Horeca Sayfası",
        path: "./",
        match: {
          include: "horeca",
        },
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Tarayıcı Sekme Başlığı" },
          { type: "image", name: "horeca_img", label: "Horeca Görseli" },
          { type: "string", name: "heading", label: "Horeca Başlığı" },
          { type: "string", name: "description", label: "Horeca Detay Metni", ui: { component: "textarea" } },
        ],
      },
      {
        name: "experience",
        label: "Experience Sayfası",
        path: "./",
        match: {
          include: "experience",
        },
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Tarayıcı Sekme Başlığı" },
          { type: "string", name: "heading", label: "Ana Başlık" },
          { type: "string", name: "description", label: "Kısa Açıklama" },
          { type: "image", name: "reel1", label: "1. Dikey Görsel (#ChefCollaboration)" },
          { type: "image", name: "reel2", label: "2. Dikey Görsel (#ThePerfectPlatter)" },
          { type: "image", name: "reel3", label: "3. Dikey Görsel (#HorecaEvents)" },
          { type: "image", name: "reel4", label: "4. Dikey Görsel (#BeefkesWorld)" },
        ],
      },
      {
        name: "contact",
        label: "Contact Sayfası",
        path: "./",
        match: {
          include: "contact",
        },
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Tarayıcı Sekme Başlığı" },
          { type: "string", name: "heading", label: "Başlık" },
          { type: "string", name: "description", label: "Açıklama" },
          { type: "string", name: "email", label: "E-posta Adresi" },
        ],
      },
    ],
  },
});
