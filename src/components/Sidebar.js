import Userbar from "./Userbar";
import Suggestedprofiles from "./Suggestedprofiles";

export default function Sidebar({ pageconstruction }) {
  const { userprofile, sugestionbox } = pageconstruction;
  return (
    <div className="sidebar">
      <Userbar userprofile={userprofile} />
      <Suggestedprofiles sugestionbox={sugestionbox} />
    </div>
  );
}