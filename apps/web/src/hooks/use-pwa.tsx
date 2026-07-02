import { useCallback, useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type NavigatorStandalone = Navigator & { standalone?: boolean };

function checkStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as NavigatorStandalone).standalone === true
  );
}

export function usePWA() {
  const [isStandalone, setIsStandalone] = useState(checkStandalone);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(display-mode: standalone)");
    const onMqChange = () =>
      setIsStandalone(mq.matches || (navigator as NavigatorStandalone).standalone === true);
    mq.addEventListener("change", onMqChange);

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    return () => {
      mq.removeEventListener("change", onMqChange);
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
    };
  }, []);

  const promptInstall = useCallback(async (): Promise<boolean> => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    return outcome === "accepted";
  }, [deferredPrompt]);

  return { isStandalone, deferredPrompt, promptInstall };
}
