import { useState } from "react";

export default function pageconstruction({ pageconstruction }) {
  const { publicationsbox } = pageconstruction;
  return (
    <div className="postsbox">
      {publicationsbox.map((publication) => (
        <Post key={publication.userprofilepicture} publication={publication} />
      ))}
    </div>
  );
}    

function Post ({ publication }) {
  const [shelvedfile, setShelvedfile] = useState(false);
  const [tallyoflikes, setTallyoflikes] = useState(false);
  const [numberrendering, setNumberrendering] = useState(publication.likes);
  return (
    <div className="post" data-test="post">
      <div className="postoutset">
        <div className="theuser">
          <img src={publication.userprofilepicture} />
          {publication.userprofilename}
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div className="theimage">
        <img
          data-test="post-image"
          onClick={() => {
            setTallyoflikes((bonusfunctioncontroller) => {
              if (!bonusfunctioncontroller) {
                setNumberrendering((touch) => touch + 1);
                bonusfunctioncontroller = !bonusfunctioncontroller;
              }
              return bonusfunctioncontroller;
            });
          }}
          className="postprofile"
          src={publication.postprofilepicture}
        />
      </div>
      <div className="likesbox">
        <div className="biglikesbox">
        <div className="likesboxtwo">
          <div>
            <span className={tallyoflikes ? "red" : null}>
              <ion-icon data-test="like-post"
                onClick={() =>
                    setTallyoflikes((bonusfunctioncontroller) => {
                    if (bonusfunctioncontroller) {
                      setNumberrendering((prev) => prev - 1);
                    } else {
                        setNumberrendering((prev) => prev + 1);
                    }
                    return !bonusfunctioncontroller;
                  })
                }
                name={tallyoflikes ? "heart" : "heart-outline"}
              ></ion-icon>
            </span>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="likesboxthree">
          <ion-icon  data-test="save-post"
            onClick={() => setShelvedfile((bonusfunctioncontroller) => !bonusfunctioncontroller)}
            name={shelvedfile ? "bookmark" : "bookmark-outline"}
          ></ion-icon>
        </div>
        </div>
        </div>
        <div className="likesconfig" data-test="likes-number">
          <img src={publication.userwholikedpicture} />
          Curtido por&nbsp;<strong>{publication.userwholikedname}</strong>&nbsp;e&nbsp;
          <strong>
            outras{" "}
            <span>
              {numberrendering.toLocaleString().replace(",", ".")}
            </span>{" "}
            pessoas
          </strong>
        </div>
      </div>
    </div>
  );
}