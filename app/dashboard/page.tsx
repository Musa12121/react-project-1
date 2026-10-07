import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <main
      className="bg-main-bg h-screen grid grid-cols-[15fr_85fr] grid-rows-[15fr_85fr]"
    >
      <Sidebar />
      <Topbar />
      <Dashboard />
    </main>
  );
}
