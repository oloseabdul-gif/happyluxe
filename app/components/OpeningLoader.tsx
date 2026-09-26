"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

export default function OpeningLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("happyluxe-loader-seen")) return;
      sessionStorage.setItem("happyluxe-loader-seen", "yes");
    } catch {
      // Continue showing the loader if session storage is unavailable.
    }

    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="hl-loader" aria-label="Loading HappyLuxe">
      <div className="hl-loader-content">
        <div className="hl-loader-mark">
          <BrandMark size={104} />
        </div>
        <div className="hl-loader-thread" />
        <div className="hl-loader-word">HAPPYLUXE</div>
        <div className="hl-loader-tagline">WHERE TRADITION MEETS TREND</div>
      </div>
    </div>
  );
}
