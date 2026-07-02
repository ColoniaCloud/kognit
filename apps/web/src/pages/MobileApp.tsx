import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePWA } from "@/hooks/use-pwa";
import { HomeScreen } from "./kognit/Home";
import { TiltScreen } from "./kognit/Tilt";
import { CardsScreen } from "./kognit/Cards";
import { TrackingScreen } from "./kognit/Tracking";
import { CalendarScreen } from "./kognit/Calendar";
import { ProfileScreen } from "./kognit/Profile";
import { BottomNav } from "@/components/kognit/BottomNav";
import { DesktopNav } from "@/components/kognit/DesktopNav";
import { InstallGate } from "@/components/kognit/InstallGate";

type Tab = "home" | "cards" | "calendar" | "track" | "profile";
type View = Tab | "tilt";

interface Profile {
  display_name: string;
  focus_level: number;
  emotional_control: number;
  total_resets: number;
  streak_days: number;
  xp: number;
}

export default function MobileApp() {
  const { user, loading, signOut } = useAuth();
  const [view, setView] = useState<View>("home");
  const [profile, setProfile] = useState<Profile | null>(null);
  const isMobile = useIsMobile();
  const { isStandalone, promptInstall } = usePWA();

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("*").eq("id", user.id).maybeSingle()
      .then(({ data }) => data && setProfile(data as any));
  }, [user]);

  if (loading) return <div className="min-h-screen bg-gradient-hero" />;
  if (!user) return <Navigate to="/auth" replace />;

  const goTilt = async () => {
    setView("tilt");
    if (profile) {
      const next = { ...profile, total_resets: profile.total_resets + 1 };
      setProfile(next);
      await supabase.from("profiles").update({ total_resets: next.total_resets }).eq("id", user.id);
    }
  };

  const screen = (() => {
    switch (view) {
      case "tilt":
        return <TiltScreen onExit={() => setView("home")} />;
      case "cards":
        return <CardsScreen onBack={() => setView("home")} />;
      case "calendar":
        return <CalendarScreen />;
      case "track":
        return <TrackingScreen />;
      case "profile":
        return (
          <ProfileScreen
            name={profile?.display_name ?? "Jugador"}
            email={user.email ?? ""}
            focusLevel={profile?.focus_level ?? 60}
            emotionalControl={profile?.emotional_control ?? 60}
            totalResets={profile?.total_resets ?? 0}
            streakDays={profile?.streak_days ?? 0}
            xp={profile?.xp ?? 0}
            onSignOut={signOut}
          />
        );
      default:
        return (
          <HomeScreen
            name={profile?.display_name ?? "Jugador"}
            onTilt={goTilt}
            onCards={() => setView("cards")}
            onTrack={() => setView("track")}
          />
        );
    }
  })();

  // Desktop: proper web layout with top nav
  if (!isMobile) {
    return (
      <div className="min-h-screen bg-background">
        <DesktopNav
          active={view === "tilt" ? "home" : (view as Tab)}
          onChange={(tab) => setView(tab)}
          onSignOut={signOut}
        />
        <main className="max-w-[65vw] mx-auto py-6 px-4">
          {screen}
        </main>
      </div>
    );
  }

  // Mobile browser (not installed as PWA): require installation
  if (!isStandalone) {
    return <InstallGate onPrompt={promptInstall} />;
  }

  // Mobile PWA (standalone): full-screen native experience
  return (
    <div className="relative min-h-screen">
      {screen}
      {view !== "tilt" && (
        <BottomNav active={view as Tab} onChange={(k) => setView(k)} />
      )}
    </div>
  );
}
