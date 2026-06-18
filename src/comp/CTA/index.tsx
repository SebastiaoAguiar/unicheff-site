import { ChevronRight } from "lucide-react";

import Logo from "../../assets/images/Unicheff.png";
export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6" id="contato">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-slate-900
            via-slate-950
            to-blue-950/30
            backdrop-blur-2xl
            p-12
            md:p-20
            text-center
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[600px]
              h-[300px]
              bg-blue-500/20
              blur-[120px]
              rounded-full
              pointer-events-none
            "
          />

          {/* Badge */}
         <div
  className="
    inline-flex
    items-center
    gap-3
    px-5
    py-3
    rounded-full
    border
    border-blue-500/20
    bg-blue-500/10
    mb-8
    relative
    z-10
  "
>
  <img
    src={Logo}
    alt="UniCheff"
    className="h-8 w-auto object-contain"
  />
</div>
          <h2
            className="
              relative
              z-10
              text-5xl
              md:text-7xl
              font-bold
              text-white
              leading-tight
              mb-6
            "
          >
            Pronto para levar seu
            <span 
              className="
                block
                bg-gradient-to-r
                from-blue-400
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              negócio ao próximo nível?
            </span>
          </h2>

          <p
            className="
              relative
              z-10
              text-slate-400
              text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              mb-12
            "
          >
            Automatize vendas, delivery, comandas, estoque,
            relatórios e gestão completa com o ecossistema UniCheff.
          </p>

          <div
            className="
              relative
              z-10
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-4
            "
          >
            <a
              href="https://api.whatsapp.com/send?phone=5563991000057&text=Ol%C3%A1%2C+desejo+testar+o+sistema+UniCheff"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-blue-600
                hover:bg-blue-500
                px-10
                py-5
                rounded-2xl
                font-semibold
                text-white
                inline-flex
                items-center
                gap-3
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
              "
            >
              Solicitar Demonstração

              <ChevronRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

           
          </div>
        </div>
      </div>
    </section>
  );
}