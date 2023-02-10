import { useState } from "react";

export default function Userbar({ user }) {
  const [subusername, setSubusername] = useState(user.subusername);
  const [photo, setPhoto] = useState(user.picture);
  function changeSubusername() {
    const newUsername = prompt("Digite o novo nome...");
    if (!newUsername) {
      alert("Nome vazio!");
    } else setSubusername(newUsername);
  }
  function changePhoto() {
    const newPhoto = prompt("Digite o novo link...");
    if (!newPhoto) {
      alert("Link vazio!");
    } else setPhoto(newPhoto);
  }
  return (
    <div className="personalprofile" data-test="user">
      <img onClick={changePhoto} data-test="profile-image" src={photo} />
      <div>
          <span className="personalprofilename" data-test="name">{user.username}</span>
          <span> 
            <ion-icon onClick={changeSubusername} name="pencil-outline" data-test="edit-name"></ion-icon>
          </span>
        </div>
      </div>
  );
}