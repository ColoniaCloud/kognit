import { LogOut, Zap } from "lucide-react";

interface Props {
  onSignOut: () => void;
}

export function DesktopNav({ onSignOut }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-[65vw] mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-black text-foreground tracking-tight text-sm">kognit</span>
        </div>

        <button
          onClick={onSignOut}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        >
          <LogOut size={15} />
        </button>
      </div>
    </header>
  );
}
