

  import ifood from "../../assets/images/ifood.png";
  
  import stone from "../../assets/images/stone.png";
  import tef from "../../assets/images/tef.png";
  import pagarme from "../../assets/images/pagar.me.png";
  import pix from "../../assets/images/pix.png";

  const integrations = [ifood, stone, tef, pagarme, pix];

  export default function Integrations() {
    return (
      <section id="integracoes" className="relative py-32 overflow-hidden">
        {/* Fundo Balatro */}
        <div className="absolute inset-0">
          
          
        </div>

        {/* Overlay para escurecer */}
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-5">
              Integrações
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Conectado com as melhores plataformas
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Integrações prontas para pagamentos, delivery, gestão financeira e
              automação do seu negócio.
            </p>
          </div>
<div
  className="
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-6
    max-w-6xl
    mx-auto
  "
>
          
            {integrations.map((logo, index) => (
              <div
                key={index}
                className="
          group
          h-32
          rounded-3xl

          border border-white/10
          bg-white  
          backdrop-blur

          flex items-center justify-center

          transition-all duration-500

              hover:scale-105
            hover:border-blue-500/30
           hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]
        "
              >
                <img
                  src={logo}
                  alt=""
                  className="
            max-w-[140px]
            max-h-[60px]
            object-contain

            opacity-80
            transition-all
            duration-500

            group-hover:opacity-100
            group-hover:scale-110
          "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
