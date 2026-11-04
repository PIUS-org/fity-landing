"use client";
import { useEffect, useRef, useState } from "react";

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent<string>("fity:toast", { detail: message }));
}

export default function Toast() {
  const [msg, setMsg] = useState("");
  const [on, setOn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const onToast = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      setOn(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setOn(false), 2400);
    };
    window.addEventListener("fity:toast", onToast);
    return () => window.removeEventListener("fity:toast", onToast);
  }, []);
  return (
    <div className={`toast${on ? " is-on" : ""}`} role="status" aria-live="polite">
      {msg}
    </div>
  );
}
