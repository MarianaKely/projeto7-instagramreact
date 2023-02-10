import { useState } from "react";

export default function Userbar({ user }) {
  const [username, setUsername] = useState(user.username);
  const [photo, setPhoto] = useState(user.picture);
  function changeUsername() {
    const newUsername = prompt("Coloque aqui seu novo nome...");
    if (!newUsername) {
      alert("SEM IDENTIFICAÇÃO DE NOME!");
    } else setUsername(newUsername);
  }
  function changePhoto() {
    const newPhoto = prompt("Coloque aqui sua nova foto...");
    if (!newPhoto) {
      alert("SEM IDENTIFICAÇÃO DE LINK DE IMAGEM!");
    } else setPhoto(newPhoto);
  }
  return (
    <div className="personalprofile" data-test="user">
      <img onClick={changePhoto} data-test="profile-image" src={photo} />
      <div>
        <div>
          <span className="personalprofilename" data-test="name">
            {username}
          </span>
           <ion-icon onClick={changeUsername} name="pencil-outline" data-test="edit-name"></ion-icon> 
        </div>
      </div>
     </div> 
  );
}