import Userbar from "./Userbar";

export default function Sidebar({ pageconstruction }) {

    const { user } = pageconstruction;

  return (
    <div className="sidebar">
        <Userbar user={user} />
    </div>
  );
}