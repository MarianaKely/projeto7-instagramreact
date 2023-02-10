// layout organization area - outset //

import ReactDOM from "react-dom";
import App from "./components/App.js";

const root = document.querySelector(".root");

const pageconstruction = {
    storiesbox: [
    { picture: "./assets/shrek.jpg", username: "Shrek" },
    { picture: "./assets/barbie.jpg", username: "barbiegirl" },
    { picture: "./assets/elsa.jpg", username: "IceQueen" },
    { picture: "./assets/boo.jpg", username: "boo" },
    { picture: "./assets/bibble.jpg", username: "LittleBibble" },
    { picture: "./assets/dunkey.jpg", username: "Dunkeyyy" },
    { picture: "./assets/pb.jpg", username: "Pz&Btz" },
    { picture: "./assets/anna.jpg", username: "AnnaArendelle" },
    { picture: "./assets/mw.jpg", username: "mikewakowski" },
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
  ],
  user: {
    username: "mommyT",
    subusername: "mommyT",
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

ReactDOM.render(<App pageconstruction={pageconstruction} />, root);

// layout organization area - end //