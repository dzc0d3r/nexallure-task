const artists = [
  {
    name: "Léa Jacquot",
    image: "artists/lea.svg",
  },
  {
    name: "Julien",
    image: "artists/julien.svg",
  },
]

const collections = [
  {
    id: 1,
    trending: true,
    name: "Night Sky",
    artist: artists[0],

    min_price: 0.12,
    max_price: 0.18,
    image: "collections/night-sky.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac mauris ac odio iaculis lacinia vitae vitae nunc. Vestibulum aliquam augue in augue pharetra volutpat. Sed convallis nisi sodales urna congue, non volutpat elit fringilla. Cras ornare consectetur ante, ac imperdiet ipsum molestie sit amet. Cras eu dapibus urna. Ut nec massa nunc. Aenean efficitur erat at erat consequat, sit amet iaculis nisi eleifend. Cras ornare sed magna vitae cursus. Mauris magna mi, suscipit malesuada blandit nec, bibendum sit amet arcu. Integer tincidunt nisi nec elit aliquam",
    nfts: [
      {
        name: "with the starts",
        artist: artists[0],
        image: "nfts/with_the_stars.svg",
        price: 0.12,
        trending: true,
      },
      {
        name: "with the starts",
        artist: artists[0],
        image: "nfts/with_the_stars.svg",
        price: 0.12,
        trending: false,
      },
    ],
  },
  {
    id: 2,
    trending: false,
    name: "Future",
    artist: {
      name: "Julien",
      image: "artists/julien.svg",
    },

    min_price: 0.12,
    max_price: 0.18,
    image: "collections/future.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac mauris ac odio iaculis lacinia vitae vitae nunc. Vestibulum aliquam augue in augue pharetra volutpat. Sed convallis nisi sodales urna congue, non volutpat elit fringilla. Cras ornare consectetur ante, ac imperdiet ipsum molestie sit amet. Cras eu dapibus urna. Ut nec massa nunc. Aenean efficitur erat at erat consequat, sit amet iaculis nisi eleifend. Cras ornare sed magna vitae cursus. Mauris magna mi, suscipit malesuada blandit nec, bibendum sit amet arcu. Integer tincidunt nisi nec elit aliquam",
    nfts: [
      {
        name: "",
        artist: "",
        image: "",
        price: "",
        trending: false,
      },
    ],
  },
  {
    id: 3,
    trending: false,
    name: "Mother Nature",
    artist: {
      name: "Maria",
      image: "artists/maria.svg",
    },

    min_price: 0.12,
    max_price: 0.18,
    image: "collections/mother-nature.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac mauris ac odio iaculis lacinia vitae vitae nunc. Vestibulum aliquam augue in augue pharetra volutpat. Sed convallis nisi sodales urna congue, non volutpat elit fringilla. Cras ornare consectetur ante, ac imperdiet ipsum molestie sit amet. Cras eu dapibus urna. Ut nec massa nunc. Aenean efficitur erat at erat consequat, sit amet iaculis nisi eleifend. Cras ornare sed magna vitae cursus. Mauris magna mi, suscipit malesuada blandit nec, bibendum sit amet arcu. Integer tincidunt nisi nec elit aliquam",
    nfts: [
      {
        name: "",
        artist: "",
        image: "",
        price: "",
        trending: false,
      },
    ],
  },
]

export { collections }
