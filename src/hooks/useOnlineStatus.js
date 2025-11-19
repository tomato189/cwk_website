"use client";
import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [online, setOnline] = useState(null);
  const [loadingDots, setLoadingDots] = useState(".");
  const [serverStatus, setServerStatus] = useState("Loading");

  useEffect(() => {
    let active = true;

    const dotsInterval = setInterval(() => {
      setLoadingDots(prev => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    const fetchOnline = async () => {
      try {
        const res = await fetch("/api/online", { cache: "no-store" });
        if (!active) return;
        const json = await res.json();

        setOnline(json.online_player_count ?? json.online);
        setServerStatus("Working");
      } catch {
        setServerStatus("Offline");
        setOnline("N/A");
      }
    };

    fetchOnline();
    const interval = setInterval(fetchOnline, 15000);

    return () => {
      active = false;
      clearInterval(interval);
      clearInterval(dotsInterval);
    };
  }, []);

  const loadingText = `Loading${loadingDots}`;

  // ✅ هنا السحر 🔥 — تقدر تتحكم بالنص حسب مكان الاستخدام
  const formattedOnlineShort = online === null ? loadingDots : online; // للأيقونة
  const formattedOnlineFull =
    online === null ? loadingText : `${online} Online`; // للصفحات مثل Status

  return {
    online,
    loadingDots,
    loadingText,
    serverStatus,

    formattedOnlineShort,
    formattedOnlineFull
  };
}
