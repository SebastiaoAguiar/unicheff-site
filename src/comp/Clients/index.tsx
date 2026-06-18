import { useEffect, useState } from "react";
// @ts-ignore: ignore missing declaration file for ColorBends
import {ColorBends} from "../../resources/ColorBends";

type Cliente = {
  nome: string;
  logo: string;
  link: string;
};

export default function Clients() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const res = await fetch(
          "https://appdelivery.menucheff.com/api-appdelivery/Empresa/listarAleatorio.php"
        );

        const data = await res.json();

        const formatado = (Array.isArray(data) ? data : [])
          .map((item: any): Cliente | null => {
            const logo =
              item.Logomarca &&
              (item.Logomarca.startsWith("http")
                ? item.Logomarca
                : `https://appdelivery.menucheff.com/${item.Logomarca}`);

            if (
              !logo ||
              logo === "null" ||
              logo === "undefined" ||
              logo.trim() === ""
            ) {
              return null;
            }

            return {
              nome: item.NomeFantasia || "Cliente sem nome",
              logo,
              link: "#",
            };
          })
          .filter((item): item is Cliente => item !== null);

        setClientes(formatado);
      } catch (err) {
        console.error("Erro ao buscar clientes:", err);
        setClientes([]);
      }
    };

    fetchClientes();
  }, []);

  const clientesLoop = [...clientes, ...clientes];

  return (
    <section
      id="clientes"
      className="relative overflow-hidden"
    >
      {/* Background ColorBends */}
      <div className="absolute inset-0">
        <ColorBends
          colors={["#040024", "#000530", "#040047"]}
          rotation={75}
          speed={0.6}
          scale={3}
          frequency={1}
          warpStrength={1.2}
          mouseInfluence={0.6}
          parallax={0.3}
          noise={0.05}
          iterations={2} 
          intensity={1.9}
          bandWidth={5}
          transparent={false}
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Fade lateral */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-10 mt-5">
            Empresas que confiam na Unitech
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Conheça nossos clientes
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Restaurantes, hamburguerias, pizzarias, bares e negócios de todo o
            Brasil utilizando nossas soluções diariamente.
          </p>
        </div>

        <div className="relative overflow-hidden py-6 ">
          <div className="flex gap-8 animate-marquee w-max items-center">
            {clientesLoop.map((cliente, index) => (
              <a
                key={index}
                href={cliente.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                
                group
                  mb-10
                  min-w-[240px]
                  h-[220px]
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-5
                  px-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:scale-[1.03]
                  hover:bg-white/[0.08]
                  hover:border-blue-500/40
                  hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                "
              >
                <img
                  src={cliente.logo}
                  alt={cliente.nome}
                  onError={(e) => {
                    e.currentTarget.closest("a")?.remove();
                  }}
                  className="
                    max-w-[180px]
                    max-h-[90px]
                    object-contain
                    grayscale
                    brightness-110
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    text-sm
                    font-medium
                    text-slate-400
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  {cliente.nome}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}