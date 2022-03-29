export const characters = {
  scissors: {
    id: 1,
    strength: "paper",
    weakness: "rock",
    img: "/assets/images/scissors.png",
    name: "scissors",
    lore: "",
    stats: {},
    type: "metal",
    bg: "",
    gradient:
      "linear-gradient(90deg, rgb(122, 153, 225) 0%, rgb(216 218 226) 100%)",
  },
  rock: {
    id: 2,
    strength: "scissors",
    weakness: "paper",
    img: "/assets/images/rock.png",
    name: "rock",
    lore: "",
    stats: {},
    type: "rock",
    bg: "",
    gradient:
      "linear-gradient(90deg, rgb(114 195 208) 0%, rgb(130 128 122) 100%)",
  },
  paper: {
    id: 3,
    strength: "rock",
    weakness: "scissors",
    img: "/assets/images/paper.png",
    name: "paper",
    lore: "",
    stats: {},
    type: "paper",
    bg: "",
    gradient:
      "linear-gradient(90deg, rgb(114 64 45) 0%, rgb(196 175 140) 100%)",
  },
};
