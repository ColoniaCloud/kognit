import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Layers, Activity, Calendar, User } from "lucide-react";

type Key = "home" | "cards" | "track" | "calendar" | "profile";

const items = [
  { key: "home",     icon: Home,     label: "Inicio"   },
  { key: "cards",    icon: Layers,   label: "Cartas"   },
  { key: "calendar", icon: Calendar, label: "Diario"   },
  { key: "track",    icon: Activity, label: "Registro" },
  { key: "profile",  icon: User,     label: "Perfil"   },
] as const;

interface Props { active: Key; onChange?: (k: Key) => void; }

export const BottomNav = ({ active, onChange }: Props) => {
  const [tooltip, setTooltip] = useState<Key | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const fromClickRef = useRef(false);

  const handleMouseEnter = (key: Key) => {
    clearTimeout(timerRef.current);
    setTooltip(key);
  };

  const handleMouseLeave = () => {
    if (!fromClickRef.current) setTooltip(null);
  };

  const handleSelect = (key: Key) => {
    onChange?.(key);
    fromClickRef.current = true;
    setTooltip(key);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      fromClickRef.current = false;
      setTooltip(null);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 pointer-events-none px-5">
      <div className="relative pointer-events-auto w-full max-w-[400px]">

        {/* Tooltip label */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              key={tooltip}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute -top-10 inset-x-0 flex justify-center pointer-events-none"
            >
              <span className="px-3 py-1.5 rounded-xl bg-background/95 backdrop-blur-xl border border-border/50 text-[12px] font-semibold shadow-card whitespace-nowrap">
                {items.find(i => i.key === tooltip)?.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bar */}
        <div className="
          h-[60px] px-2 flex items-center justify-around
          rounded-[1.75rem]
          bg-background/90 backdrop-blur-xl
          border border-border/40
          shadow-[0_8px_32px_-4px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.04)]
          dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)]
        ">
          {items.map(({ key, icon: Icon, label }) => {
            const isActive = key === active;
            return (
              <button
                key={key}
                onClick={() => handleSelect(key as Key)}
                onMouseEnter={() => handleMouseEnter(key as Key)}
                onMouseLeave={handleMouseLeave}
                className="relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-2xl bg-gradient-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  size={17}
                  strokeWidth={2.2}
                  className={`relative z-10 transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}
                />
                <span className={`relative z-10 text-[9px] font-bold mt-0.5 transition-colors ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
