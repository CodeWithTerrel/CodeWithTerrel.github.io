import { useMemo, useState } from "react";
import Intro from "./components/Intro.jsx";
import SiteShell from "./components/SiteShell.jsx";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  const onIntroDone = useMemo(() => {
    return () => setIntroDone(true);
  }, []);

  return (
    <div className="min-h-screen font-inter">
      {!introDone ? <Intro onDone={onIntroDone} /> : <SiteShell />}
    </div>
  );
}