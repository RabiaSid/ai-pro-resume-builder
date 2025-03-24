interface Cards {
  id: number;
  components: {
    id: number;
    name: string;
    height?: string;
    width?: string;
    // locked?: boolean | string
  }[];
}

export const cardsData: Cards[] = [
  {
    id: 0,
    components: [
      {
        id: 100,
        name: "Summary"
      },
      {
        id: 200,
        name: "Experience",
        height: "h-[90px]"
      },
      {
        id: 300,
        name: "Education",
        height: "h-[90px]"
      },
      {
        id: 400,
        name: "Language"
      },
    ]
  },
  {
    id: 1,
    components: [
      {
        id: 100,
        name: "Skills"
      },
      {
        id: 200,
        name: "Key Achievements"
      },
      {
        id: 300,
        name: "Certificate"
      },
      {
        id: 400,
        name: "Projects"
      },
      {
        id: 500,
        name: "Interest"
      },
    ]
  },
]


