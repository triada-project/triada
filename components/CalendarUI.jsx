import Calendar from "react-calendar";
import { useState, useEffect } from "react";

export default function CalendarUI() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Calendar />
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
    </div>
  );
}
