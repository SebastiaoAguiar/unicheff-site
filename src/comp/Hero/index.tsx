import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroCardStack from "../HeroCardStack";

// @ts-ignore: No declaration file for LineWaves
import { LineWaves } from "../../resources/LineWaves";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* FUNDO LINE WAVES */}
      <div className="absolute inset-0"  id="inicio">
        <LineWaves
          speed={0.1}
          innerLineCount={30}
          outerLineCount={40}
          warpIntensity={1.2}
          rotation={-45}
          edgeFadeWidth={0.2}
          colorCycleSpeed={0.3}
          brightness={0.6}
          color1="#060024"
          color2="#01153e"
          color3="#070037"
          enableMouseInteraction={true}
          mouseInfluence={1.5}
        />
      </div>

      {/* Overlay para escurecer e melhorar leitura */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Gestão completa para o seu 
            <div className="typing-wrapper gradient-text block"
            >
              <TypeAnimation
                sequence={[
                  "restaurante",
                  2000,
                  "bar",
                  2000,
                  "mercado",
                  2000,
                  "varejo",
                  2000,
                  "comércio",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={false}
              />

              <span className="typing-cursor">|</span>
            </div>
          </h1>

          <p className="text-slate-300 text-xl mb-10 max-w-xl">
            O Unicheff oferece uma administração completa para o seu negócio,
            com recursos para vendas pelo balcão, venda por comanda e delivery.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
  href="https://api.whatsapp.com/send?phone=5563991000057&text=Ola%2C%20desejo%20testar%20o%20sistema"
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative
    overflow-hidden

    px-8 py-4
    rounded-xl

    bg-blue-600
    text-white
    font-semibold

    shadow-[0_0_25px_rgba(37,99,235,0.45)]

    transition-all
    duration-500

    hover:scale-105
    hover:shadow-[0_0_45px_rgba(37,99,235,0.8)]

    before:absolute
    before:inset-0
    before:bg-gradient-to-r
    before:from-transparent
    before:via-white/20
    before:to-transparent

    before:-translate-x-[200%]
    hover:before:translate-x-[200%]
    before:transition-transform
    before:duration-1000

    inline-flex
    items-center
    justify-center
  "
>
  <span className="relative z-10">
    Testar Agora
  </span>
</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <HeroCardStack />
        </motion.div>
      </div>
    </section>
  );
}
