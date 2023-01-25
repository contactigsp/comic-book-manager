const listCharacters = [
  {
    titleCard: "Mister No",
    imgCard: require(`./img/chars/cards/mister.jpg`),
    descriptionCard:
      "Jerry Drake é um piloto americano que vive suas aventuras na Amazônia dos anos cinquenta. Apelidado de Mister No pela sua falta de afabilidade, lutou na Segunda Guerra Mundial e agora acompanha turistas nos céus da sua nova pátria.",
  },
  {
    titleCard: "Dampyr",
    imgCard: require(`./img/chars/cards/dampyr.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Dylan Dog",
    imgCard: require(`./img/chars/cards/dylan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Brad Barron",
    imgCard: require(`./img/chars/cards/brad.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Adam Wild",
    imgCard: require(`./img/chars/cards/adam.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Julia",
    imgCard: require(`./img/chars/cards/julia.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Legs Weaver",
    imgCard: require(`./img/chars/cards/legs.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Caravan",
    imgCard: require(`./img/chars/cards/caravan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Cassidy",
    imgCard: require(`./img/chars/cards/cassidy.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Commissario Ricciardi",
    imgCard: require(`./img/chars/cards/commissario.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Jass Dix",
    imgCard: require(`./img/chars/cards/dix.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Demian",
    imgCard: require(`./img/chars/cards/demian.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Magico Vento",
    imgCard: require(`./img/chars/cards/magico.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Dragonero",
    imgCard: require(`./img/chars/cards/dragonero.png`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Grey Storm",
    imgCard: require(`./img/chars/cards/greystorm.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Dessa",
    imgCard: require(`./img/chars/cards/dessa.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Lilith",
    imgCard: require(`./img/chars/cards/lilith.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Martin",
    imgCard: require(`./img/chars/cards/martin.png`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Lukas",
    imgCard: require(`./img/chars/cards/lukas.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Morgan Lost",
    imgCard: require(`./img/chars/cards/morgan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Nick Raider",
    imgCard: require(`./img/chars/cards/nick.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Napoleone",
    imgCard: require(`./img/chars/cards/napoleone.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Tex",
    imgCard: require(`./img/chars/cards/tex.png`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Jonathan Steele",
    imgCard: require(`./img/chars/cards/jonathan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Nathan Never",
    imgCard: require(`./img/chars/cards/nathan.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Saguaro",
    imgCard: require(`./img/chars/cards/saguaro.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Shanghai Devil",
    imgCard: require(`./img/chars/cards/shanghai.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Gea",
    imgCard: require(`./img/chars/cards/gea.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Zagor",
    imgCard: require(`./img/chars/cards/zagor.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Brendon",
    imgCard: require(`./img/chars/cards/brendon.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
  {
    titleCard: "Gregory Hunter",
    imgCard: require(`./img/chars/cards/gregory.jpg`),
    descriptionCard:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus excepturi facilis reiciendis nemo impedit reprehenderit sunt deleniti recusandae alias nulla possimus, quisquam earum? Obcaecati facilis nam quod qui aliquid?",
  },
];

export default listCharacters;
