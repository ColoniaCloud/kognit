import { Home, Layers, Activity, Calendar, User, LogOut, Zap } from "lucide-react";

type Tab = "home" | "cards" | "calendar" | "track" | "profile";

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
  onSignOut: () => void;
}

const items = [
  { key: "home",     icon: Home,     label: "Inicio"   },
  { key: "cards",    icon: Layers,   label: "Cartas"   },
  { key: "calendar", icon: Calendar, label: "Diario"   },
  { key: "track",    icon: Activity, label: "Registro" },
] as const;

export function DesktopNav({ active, onChange, onSignOut }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-[65vw] mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-black text-foreground tracking-tight text-sm">kognit</span>
        </div>

        <nav className="flex items-center gap-1">
          {items.map(({ key, icon: Icon, label }) => {
            const isActive = key === active;
            return (
              <button
                key={key}
                onClick={() => onChange(key as Tab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Icon size={14} strokeWidth={2.2} />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onChange("profile")}
            className={`p-2 rounded-xl transition-all ${
              active === "profile"
                ? "bg-gradient-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <User size={15} />
          </button>
          <button
            onClick={onSignOut}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
