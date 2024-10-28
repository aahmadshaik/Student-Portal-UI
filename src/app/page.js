import Announcements from "./components/Announcements";
import QuickLinks from "./components/QuickLinks";
import Header from "./components/Header";
import ClassRecordings from "./components/ClassRecordings";
export default function Home() {
  return (
    <div>
      <Header />
      <Announcements />
      <QuickLinks />
      <ClassRecordings />
    </div>
  );
}
