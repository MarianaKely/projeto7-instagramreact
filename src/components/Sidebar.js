import Userbar from "./Userbar";
import Suggestedprofiles from "./Suggestedprofiles";

export default function Sidebar({ pageconstruction }) {

    const { user, sugestionsbox } = pageconstruction;

  return (
    <div className="sidebar">
        <Userbar user={user} />
        <Suggestedprofiles sugestionsbox={sugestionsbox} />
    </div>
  );
}