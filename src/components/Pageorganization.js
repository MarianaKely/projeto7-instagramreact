import Stories from "./Stories";
import Publications from "./Publications";


export default function Pageorganization({ pageconstruction }) {
  return (
    <div className="themiddlepart">
      <div className="centralpartcontent">
        <Stories pageconstruction={pageconstruction} />
        <Publications pageconstruction={pageconstruction} />
      </div>
      
    </div>
  );
} 