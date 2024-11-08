import { useState } from "react";
import { ReactReader } from "react-reader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const App = () => {
  const [location, setLocation] = useState<string | number>(0);
  const [url, setUrl] = useState(
    "https://react-reader.metabits.no/files/alice.epub",
  );
  return (
    <div>
      <div className="flex flex-row w-full items-center gap-1.5">
        <p>{url}</p>
        <Label htmlFor="book">Book</Label>
        <Input
          className="max-w-md"
          id="picture"
          type="file"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div style={{ height: "100vh" }}>
        <ReactReader
          url="https://react-reader.metabits.no/files/alice.epub"
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
          epubOptions={{
            allowPopups: true, // Adds `allow-popups` to sandbox-attribute
            allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
          }}
        />
      </div>
    </div>
  );
};

export default App;
