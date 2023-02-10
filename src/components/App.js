import Headerbar from "./Headerbar";
import Mobileheaderbar from "./Mobileheaderbar";
import Pageorganization from "./Pageorganization";


export default function App({ pageconstruction }) {
    return (
      <div className="container">
        <Headerbar />
        <Mobileheaderbar />
        <Pageorganization pageconstruction={pageconstruction} />
      </div>
    );
  }