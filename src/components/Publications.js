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
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(publication.likes);
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
            setLiked((prevState) => {
              if (!prevState) {
                setLikes((touch) => touch + 1);
                prevState = !prevState;
              }
              return prevState;
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
            <span className={liked ? "red" : null}>
              <ion-icon
                onClick={() =>
                    setLiked((prevState) => {
                    if (prevState) {
                        setLikes((prev) => prev - 1);
                    } else {
                        setLikes((prev) => prev + 1);
                    }
                    return !prevState;
                  })
                }
                name={liked ? "heart" : "heart-outline"}
                data-test="like-post"
              ></ion-icon>
            </span>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="likesboxthree">
          <ion-icon
            onClick={() => setSaved((prevState) => !prevState)}
            name={saved ? "bookmark" : "bookmark-outline"}
            data-test="save-post"
          ></ion-icon>
        </div>
        </div>
        </div>
        <div className="likesconfig">
          <img src={publication.userwholikedpicture} />
          Curtido por&nbsp;<strong>{publication.userwholikedname}</strong>&nbsp;e&nbsp;
          <strong>
            outras{" "}
            <span data-test="likes-number">
              {likes.toLocaleString().replace(",", ".")}
            </span>{" "}
            pessoas
          </strong>
        </div>
      </div>
    </div>
  );
}