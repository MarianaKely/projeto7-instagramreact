import Headerbar from "./Headerbar";
import Mobileheaderbar from "./Mobileheaderbar";
import Pageorganization from "./Pageorganization";
import Mobilefooterbar from "./Mobilefooterbar";


export default function App({ pageconstruction }) {
    return (
      <div className="container">
        <Headerbar />
        <Mobileheaderbar />
        <Pageorganization pageconstruction={pageconstruction} />
        <Mobilefooterbar/>
      </div>
    );
  }