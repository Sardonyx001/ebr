import { useState } from "react";
import { ReactReader } from "react-reader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const App = () => {
  const [location, setLocation] = useState<string | number>(0);
  const [url, setUrl] = useState("");

  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
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
