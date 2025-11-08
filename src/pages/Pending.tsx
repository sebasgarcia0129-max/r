import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Clock } from "lucide-react";

export default function Pending() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <span className="text-lg font-semibold text-foreground">ManoComigos</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Tu cuenta está en
              <span className="text-primary block mt-1">estado pendiente</span>
            </h1>

            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Tu documento de identidad se encuentra en proceso de verificación. Este paso es importante para garantizar la seguridad de nuestra plataforma.
            </p>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-primary/20 rounded-xl p-6 mb-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">¿Qué sucede ahora?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estamos verificando tu documento de identidad. Una vez que la verificación esté completa, 
                    recibirás un <span className="font-semibold text-foreground">correo electrónico de confirmación</span> y 
                    podrás acceder a todas las funcionalidades de la plataforma.
                  </p>
                </div>
              </div>
            </div>

            {/* Time estimate */}
            <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>Este proceso suele tomar entre 24 y 48 horas</span>
            </div>

            {/* Button */}
            <div className="flex gap-3">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
              >
                Volver
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              ¿Tienes dudas?{" "}
              <a href="mailto:support@manocomigos.com" className="text-primary hover:underline font-semibold">
                Contacta con soporte
              </a>
            </p>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-50 rounded-2xl overflow-hidden shadow-xl aspect-square flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-16 h-16 text-primary animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-primary font-semibold text-xl mb-2">Verificación en proceso</p>
                <p className="text-foreground/70 text-base">Tu seguridad es nuestra prioridad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
