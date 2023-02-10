export default function Stories({ pageconstruction }) {
    const { storiesbox } = pageconstruction;
    return (
      <div className="storiesbar">
        {storiesbox.map((story) => (
          <Story key={story.picture} story={story} />
        ))}
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    );
  }
  
  function Story({ story }) {
    return (
      <div className="uniquestory">
        <div className="story">
          <img
            className="pinkborder"
            src="./assets/pinkborder.png"
          />
          <img className="storyimage" src={story.picture} />
        </div>
        <div className="storyname">{story.storyusername}</div>
      </div>
    );
  }