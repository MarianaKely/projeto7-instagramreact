// layout organization area - outset //

import ReactDOM from "react-dom";
import App from "./components/App.js";


const pageconstruction = {
    storiesbox: [
    { picture: "./assets/shrek.jpg", storyusername: "Shrek" },
    { picture: "./assets/barbie.jpg", storyusername: "barbiegirl" },
    { picture: "./assets/woody.jpg", storyusername: "wOOdy" },
    { picture: "./assets/elsa.jpg", storyusername: "IceQueen" },
    { picture: "./assets/boo.jpg", storyusername: "boo" },
    { picture: "./assets/bibble.jpg", storyusername: "LittleBibble" },
    { picture: "./assets/jessie.jpg", storyusername: "JS" },
    { picture: "./assets/dunkey.jpg", storyusername: "Dunkeyyy" },
    { picture: "./assets/pb.jpg", storyusername: "Pz&Btz" },
    { picture: "./assets/dino.jpg", storyusername: "dinosour" },
    { picture: "./assets/anna.jpg", storyusername: "AnnaArendelle" },
    { picture: "./assets/mw.jpg", storyusername: "mikewakowski" },
    { picture: "./assets/buzz.jpg", storyusername: "BZZZZZ" },
    { picture: "./assets/fiona.jpg", storyusername: "MrsShrek" },
  ],
  publicationsbox: [
    {
      userprofilepicture: "./assets/TSONE.jpg",
      userprofilename: "Taylor Swift",
      postprofilepicture: "./assets/TSTWO.jpg",
      likes: 7101523,
      userwholikedpicture: "./assets/mommyT.jpg",
      userwholikedname: "mommyT",
    },
    {
      userprofilepicture: "./assets/luketwo.jpeg",
      userprofilename: "LukeSkywalker",
      postprofilepicture: "./assets/luke.jpeg",
      likes: 659,
      userwholikedpicture: "./assets/Dobby.jpeg",
      userwholikedname: "DoBbYbOy",
    },
    {
      userprofilepicture: "./assets/milly.jpeg",
      userprofilename: "PrincessMilly",
      postprofilepicture: "./assets/millytwo.jpeg",
      likes: 101523,
      userwholikedpicture: "./assets/spmFOUR.jpeg",
      userwholikedname: "SPIDERMAN",
    },
    {
      userprofilepicture: "./assets/TSONE.jpg",
      userprofilename: "Taylor Swift",
      postprofilepicture: "./assets/taypost.jpg",
      likes: 130000000,
      userwholikedpicture: "./assets/mommyT.jpg",
      userwholikedname: "alissonh",
    },
    {
      userprofilepicture: "./assets/TSONE.jpg",
      userprofilename: "Taylor Swift",
      postprofilepicture: "./assets/taypost2.jpg",
      likes: 4236215870,
      userwholikedpicture: "./assets/mommyT.jpg",
      userwholikedname: "tsfanclub",
    },
  ],
  user: {
    username: "mommyT",
    picture: "./assets/mommyT.jpg",
  },
  sugestionsbox: [
    { picture: "./assets/spmONE.jpeg", username: "The Amazing" },
    { picture: "./assets/spmTWO.jpeg", username: "NotPeterParker" },
    { picture: "./assets/spmTHREE.jpeg", username: "MaybeSpiderBoy" },
    { picture: "./assets/spmFOUR.jpeg", username: "SPIDER MAN" },
    { picture: "./assets/tsfanclub.jpg", username: "TSfanclub" },
  ],
};

const root = document.querySelector(".root");

ReactDOM.render(<App pageconstruction={pageconstruction} />, root);

// layout organization area - end //