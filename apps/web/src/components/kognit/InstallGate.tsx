import { Share, Smartphone } from "lucide-react";

const isIOS =
  typeof navigator !== "undefined" &&
  /iPhone|iPad|iPod/.test(navigator.userAgent) &&
  !(window as any).MSStream;

interface Props {
  onPrompt?: () => Promise<boolean>;
}

export function InstallGate({ onPrompt }: Props) {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-primary shadow-glow flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-black text-3xl tracking-tight">k</span>
        </div>
        <h1 className="text-3xl font-black text-foreground mb-1">kognit</h1>
        <p className="text-muted-foreground text-sm">Coach de rendimiento mental</p>
      </div>

      <div className="bg-card rounded-3xl p-6 shadow-card w-full max-w-sm mb-4">
        <Smartphone className="mx-auto mb-3 text-primary" size={28} />
        <h2 className="font-bold text-lg mb-2">Instalá la app para continuar</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          kognit está diseñado para vivir en tu pantalla de inicio.
          Instalala para una experiencia completa y acceso rápido entre manos.
        </p>
      </div>

      {isIOS ? (
        <div className="bg-card rounded-3xl p-6 shadow-card w-full max-w-sm space-y-3 text-left">
          <p className="font-semibold text-sm text-center mb-4">Cómo instalar en iOS</p>
          <Step n={1}>
            Tocá el ícono <Share size={13} className="inline mx-0.5 -mt-0.5" />
            <strong> Compartir</strong> en la barra de Safari
          </Step>
          <Step n={2}>
            Elegí <strong>"Agregar a la pantalla de inicio"</strong>
          </Step>
          <Step n={3}>
            Confirmá tocando <strong>"Agregar"</strong>
          </Step>
        </div>
      ) : (
        <button
          onClick={() => onPrompt?.()}
          className="w-full max-w-sm bg-gradient-primary text-white font-bold py-4 rounded-2xl shadow-glow"
        >
          Instalar kognit
        </button>
      )}
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
        {n}
      </span>
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}
