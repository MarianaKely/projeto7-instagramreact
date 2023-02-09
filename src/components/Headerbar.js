export default function Headerbar() {
    return (
      <div className="headerbar">
        <div className="headerbartop">
          <div className="logo">
            <ion-icon className="logoicon" name="logo-instagram"></ion-icon>
            <img className="logoimage" src="./assets/logo.png" />
          </div>
          <input className="forresearch" placeholder="Pesquisar" />
          <div className="iconbox">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
      </div>
    );
  }