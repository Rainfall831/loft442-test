export type GalleryItemCategory = "Weddings" | "Private Events" | "Birthdays" | "Kids Parties" | "Baby Shower";

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: GalleryItemCategory;
};

export const galleryItems: GalleryItem[] = [
  // Weddings
  {
    id: 1,
    src: "/images/wedding1.webp",
    alt: "Wedding reception overview with soft lighting",
    category: "Weddings",
  },
  {
    id: 2,
    src: "/images/wedding2.webp",
    alt: "Wedding ceremony setup with floral details",
    category: "Weddings",
  },
  {
    id: 3,
    src: "/images/wedding3.webp",
    alt: "Wedding tablescape with candles and greenery",
    category: "Weddings",
  },
  {
    id: 4,
    src: "/images/wedding4.webp",
    alt: "Wedding dance floor with uplighting",
    category: "Weddings",
  },
  {
    id: 5,
    src: "/images/wedding5.webp",
    alt: "Wedding celebration at Loft 442",
    category: "Weddings",
  },
  {
    id: 6,
    src: "/images/wedding6.webp",
    alt: "Wedding venue setup at Loft 442",
    category: "Weddings",
  },
  {
    id: 7,
    src: "/images/wedding7.webp",
    alt: "Wedding reception decor at Loft 442",
    category: "Weddings",
  },
  {
    id: 8,
    src: "/images/wedding8.webp",
    alt: "Wedding event at Loft 442",
    category: "Weddings",
  },
  {
    id: 9,
    src: "/images/wedding9.webp",
    alt: "Wedding gathering at Loft 442",
    category: "Weddings",
  },
  // Private Events
  {
    id: 10,
    src: "/images/private-event1.webp",
    alt: "Private event at Loft 442",
    category: "Private Events",
  },
  {
    id: 11,
    src: "/images/private-event2.webp",
    alt: "Corporate gathering at Loft 442",
    category: "Private Events",
  },
  {
    id: 12,
    src: "/images/private-event3.webp",
    alt: "Private celebration at Loft 442",
    category: "Private Events",
  },
  {
    id: 13,
    src: "/images/private-event4.webp",
    alt: "Special event at Loft 442",
    category: "Private Events",
  },
  // Birthdays
  {
    id: 14,
    src: "/images/birthday1.webp",
    alt: "Birthday party at Loft 442",
    category: "Birthdays",
  },
  {
    id: 15,
    src: "/images/birthday2.webp",
    alt: "Birthday celebration setup",
    category: "Birthdays",
  },
  {
    id: 16,
    src: "/images/birthday3.webp",
    alt: "Birthday party decor at Loft 442",
    category: "Birthdays",
  },
  {
    id: 17,
    src: "/images/birthday4.webp",
    alt: "Birthday event at Loft 442",
    category: "Birthdays",
  },
  {
    id: 18,
    src: "/images/birthday5.webp",
    alt: "Birthday gathering at Loft 442",
    category: "Birthdays",
  },
  {
    id: 33,
    src: "/images/birthday6.webp",
    alt: "Birthday party celebration at Loft 442",
    category: "Birthdays",
  },
  {
    id: 34,
    src: "/images/birthday7.webp",
    alt: "Birthday event setup at Loft 442",
    category: "Birthdays",
  },
  {
    id: 35,
    src: "/images/birthday8.webp",
    alt: "Birthday party venue at Loft 442",
    category: "Birthdays",
  },
  {
    id: 36,
    src: "/images/birthday9.webp",
    alt: "Birthday celebration decor at Loft 442",
    category: "Birthdays",
  },
  {
    id: 37,
    src: "/images/birthday10.webp",
    alt: "Birthday party atmosphere at Loft 442",
    category: "Birthdays",
  },
  {
    id: 38,
    src: "/images/birthday11.webp",
    alt: "Birthday event gathering at Loft 442",
    category: "Birthdays",
  },
  {
    id: 39,
    src: "/images/birthday12.webp",
    alt: "Birthday party setup at Loft 442",
    category: "Birthdays",
  },
  // Baby Shower
  {
    id: 19,
    src: "/images/babyshower1.webp",
    alt: "Baby shower at Loft 442",
    category: "Baby Shower",
  },
  {
    id: 20,
    src: "/images/babyshower2.webp",
    alt: "Baby shower celebration",
    category: "Baby Shower",
  },
  {
    id: 21,
    src: "/images/babyshower3.webp",
    alt: "Baby shower decor at Loft 442",
    category: "Baby Shower",
  },
  {
    id: 22,
    src: "/images/babyshower4.webp",
    alt: "Baby shower setup",
    category: "Baby Shower",
  },
  {
    id: 23,
    src: "/images/babyshower5.webp",
    alt: "Baby shower event at Loft 442",
    category: "Baby Shower",
  },
  {
    id: 24,
    src: "/images/babyshower6.webp",
    alt: "Baby shower gathering",
    category: "Baby Shower",
  },
  {
    id: 25,
    src: "/images/babyshower7.webp",
    alt: "Baby shower party at Loft 442",
    category: "Baby Shower",
  },
  {
    id: 26,
    src: "/images/babyshower8.webp",
    alt: "Baby shower celebration at Loft 442",
    category: "Baby Shower",
  },
  {
    id: 27,
    src: "/images/babyshower9.webp",
    alt: "Baby shower venue setup",
    category: "Baby Shower",
  },
  {
    id: 28,
    src: "/images/babyshower10.webp",
    alt: "Baby shower decor details",
    category: "Baby Shower",
  },
  {
    id: 29,
    src: "/images/babyshower11.webp",
    alt: "Baby shower event setup",
    category: "Baby Shower",
  },
  {
    id: 30,
    src: "/images/babyshower12.webp",
    alt: "Baby shower party setup",
    category: "Baby Shower",
  },
  {
    id: 31,
    src: "/images/babyshower13.webp",
    alt: "Baby shower celebration setup",
    category: "Baby Shower",
  },
  {
    id: 32,
    src: "/images/babyshower14.webp",
    alt: "Baby shower at Loft 442 venue",
    category: "Baby Shower",
  },
];
