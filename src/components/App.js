import Headerbar from "./Headerbar";
import Pageorganization from "./Pageorganization";

export default function App({ pageconstruction }) {
    return (
      <div className="container">
        <Headerbar />
        <Pageorganization pageconstruction={pageconstruction} />
      </div>
    );
  }