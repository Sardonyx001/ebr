import { useState } from "react";
import { ReactReader } from "react-reader";
import { Button } from "@/components/ui/button";

const App = () => {
  const [location, setLocation] = useState<string | number>(0);
  return (
    <div>
      <Button>Click me!</Button>
      <div style={{ height: "100vh" }}>
        <ReactReader
          url="https://react-reader.metabits.no/files/alice.epub"
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        />
      </div>
    </div>
  );
};

export default App;
