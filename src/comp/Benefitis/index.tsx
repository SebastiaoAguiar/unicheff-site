import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MenuCheffImg from "../../assets/images/MenuCheffImg.png";
import UnicheffImg from "../../assets/images/UnicheffImg.png";
import UniCardapioImg from "../../assets/images/UniCardapioImg.png";
import UniTablet from "../../assets/images/UniTabletImg.png";
import UniHotel from "../../assets/images/UniHotelImg.png";
import UniGestor from "../../assets/images/UniGestorImg.jpeg";
import UniChat from "../../assets/images/UniChatImg.png";
import KdsParaCozinha from "../../assets/images/KdsParaCozinha.png";

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
  position?: string;
}

// ─── Dados ────────────────────────────────────────────────────────────────────
const MODULES: Module[] = [
  // Operacional
  {
    id: "unicheff",
    title: "Unicheff",
    description:
      "Para gerenciar bares, restaurantes, panificadoras, lanchonetes e demais estabelecimentos de segmento gastronômico, o Unicheff é a solução que faz a diferença. Administração completa com recursos para vendas pelo balcão, comanda e delivery.",
    image: UnicheffImg,
    category: "Operacional",
    badge: "Mais usado",
    position: "center 28%",
  },
  {
    id: "menucheff",
    title: "MenuCheff",
    description:
      "O MenuCheff é uma ferramenta web para a realização de pedidos em bares e restaurantes. Oferece todos os serviços e infraestrutura necessárias para o início e fim do atendimento.",
    image: MenuCheffImg,
    category: "Operacional",
    position: "center 25%",
  },
  {
    id: "UniCardapio",
    title: "UniCardapio",
    description:
      "O MenuCheff Cardápio é um app para a realização de pedidos em bares e restaurantes. O aplicativo oferece todos os serviços e infraestrutura necessárias para o início e fim do atendimento. O app pode ser utilizado sem a necessidade de instalação do aplicativo, basta que seja escaneado o QR Code do estabelecimento conveniado.",
    image: UniCardapioImg,
    category: "Operacional",
  },
  {
    id: "UniTablet",
    title: "UniTablet",
    description:
      "Aplicativo para gestão e lançamentos de comanda, possui integração com o sistema do UniCheff, o que possibilita uma ótima experiência ao usuário.",
    image: UniTablet,
    category: "Operacional",
    position: "center 0%",
  },

  {
    id: "UniHotel",
    title: "UniHotel",
    description:
   "Para gerenciar hoteis e pousadas e demais estabelecimentos de segmento hotelaria, o UniHotel é a solução que faz a diferença. O UniHotel oferece uma administração completa para o seu negócio, com recursos para vendas, controle de produção.",
    image: UniHotel,
    category: "Operacional",
    position: "center 100%",
  },


  // Gestão
  {
    id: "UniGestor",
    title: "UniGestor",
    description:
    "O UniGestor é um app para a realização de gestão de negócios e informações. O aplicativo oferece todos os serviços e infraestrutura necessárias para o monitoramento de informações. Disponível na loja de aplicativos de seu smartphone",
  image:  UniGestor,
    category: "Gestão",
  },
  {
    id: "UniChat",
    title: "UniChat",
    description:
   "O UniChat é uma aplicação web para gerenciamento de atendimentos com integração ao WhatsApp e multi usuarios para atendimento com apenas um numero de telefone",
   image: UniChat,
    category: "Gestão",
  },
    {
    id: "KdsParaCozinha",
    title: "Kds para cozinha",
    description:
   "O UniChat é uma aplicação web para gerenciamento de atendimentos com integração ao WhatsApp e multi usuarios para atendimento com apenas um numero de telefone",
   image: KdsParaCozinha,
    category: "Gestão",
  },
  
  // Fiscal & Clientes
  {
    id: "fiscal",
    title: "Fiscal",
    description:
      "Emissão e gerenciamento de NF-e, NFC-e, MDF-e e CT-e. SPED, SEFAZ, inutilização e certificado digital — tudo integrado e em conformidade com a legislação vigente.",
    image: "/modules/fiscal.png",
    category: "Fiscal & Clientes",
  },
  {
    id: "clientes",
    title: "Clientes",
    description:
      "Cadastro completo com histórico de compras, limite de crédito, programa de fidelidade e segmentação. Conheça quem mais compra e aumente o ticket médio.",
    image: "/modules/clientes.png",
    category: "Fiscal & Clientes",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description:
      "Visão executiva em tempo real: faturamento, ticket médio, produtos mais vendidos e metas do dia. Acesse do celular de qualquer lugar e tome decisões com dados.",
    image: "/modules/dashboard.png",
    category: "Fiscal & Clientes",
    badge: "Novo",
  },
 
];

// Agrupa módulos por categoria mantendo a ordem de inserção
const CATEGORIES = Array.from(
  MODULES.reduce((map, mod) => {
    if (!map.has(mod.category)) map.set(mod.category, []);
    map.get(mod.category)!.push(mod);
    return map;
  }, new Map<string, Module[]>()),
);

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Benefits() {
  const [activeId, setActiveId] = useState<string>(MODULES[0].id);
  const active = MODULES.find((m) => m.id === activeId) ?? MODULES[0];

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      id="modulos"
      className="relative bg-slate-950 overflow-hidden"
      aria-label="Módulos do Sistema Unicheff"
    >
      {/* ── Background ambiental ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── Cabeçalho ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-blue-400 font-medium uppercase tracking-widest text-sm mb-4"
        >
          Módulos Integrados
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Tudo que você precisa,{" "}
          <span className="text-blue-400">em um só sistema</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
            Módulos integrados para controlar vendas, estoque, financeiro,
          delivery e toda a operação.
        </motion.p>
      </div>

      {/* ── Layout principal: sticky + scroll ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex gap-6 lg:gap-10 items-start">
          {/* ── PAINEL ESQUERDO — sticky ───────────────────────────────── */}
          <div className="hidden lg:flex flex-col gap-6 sticky top-8 w-[60%] flex-shrink-0">
            {/* Device frame com screenshot */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                {/* Glow atrás da imagem */}
                <div className="absolute -inset-4 bg-blue-500/15 blur-3xl rounded-3xl pointer-events-none" />

                {/* Frame estilo browser */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-2xl shadow-black/40">
                  {/* Barra do browser */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/40 backdrop-blur-sm">
                    <span className="w-3 h-3 rounded-full bg-slate-600" />
                    <span className="w-3 h-3 rounded-full bg-slate-600" />
                    <span className="w-3 h-3 rounded-full bg-slate-600" />
                    <div className="flex-1 mx-4 h-6 rounded-md bg-slate-700/60 flex items-center px-3">
                      <span className="text-slate-500 text-xs font-mono truncate">
                        app.unicheff.com.br/{active.id}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                    <img
                      src={active.image}
                      alt={`Tela do módulo ${active.title}`}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: active.position ?? "center center",
                      }}
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Info do módulo ativo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + "_info"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="pl-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                    {active.category}
                  </span>
                  {active.badge && (
                    <span className="text-xs font-medium text-blue-300 bg-blue-500/15 border border-blue-500/25 px-2 py-0.5 rounded-full">
                      {active.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {active.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Indicador de progresso */}
            <div className="flex gap-1.5" aria-hidden="true">
              {MODULES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveId(m.id)}
                  className={`h-0.5 rounded-full transition-all duration-500 ${
                    m.id === activeId
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Ir para ${m.title}`}
                />
              ))}
            </div>
          </div>

          {/* ── PAINEL DIREITO — scroll ────────────────────────────────── */}
          <div
            className="flex-1 overflow-y-auto lg:max-h-[calc(100vh-8rem)] scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Preview mobile */}
            <div className="lg:hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId + "_mobile"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900"
                >
                  <img
                    src={active.image}
                    alt={`Tela do módulo ${active.title}`}
                    className="w-full object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Grupos por categoria */}
            {CATEGORIES.map(([category, mods]) => (
              <div key={category} className="mb-10">
                {/* Label da categoria */}
                <div className="flex items-center gap-3 mb-4 px-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                {/* Itens do grupo */}
                <div className="flex flex-col gap-1">
                  {mods.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => setActiveId(mod.id)}
                      onMouseEnter={() => setActiveId(mod.id)}
                      className={`group relative flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200 w-full ${
                        activeId === mod.id
                          ? "bg-blue-500/8 border border-blue-500/25"
                          : "border border-transparent hover:bg-slate-800/50 hover:border-slate-700/50"
                      }`}
                    >
                      {/* Barra lateral ativa */}
                      <div
                        className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-r-full transition-all duration-300 ${
                          activeId === mod.id
                            ? "bg-blue-500 opacity-100"
                            : "bg-transparent opacity-0"
                        }`}
                      />

                      {/* Número */}
                      <span
                        className={`text-xs font-mono font-semibold mt-0.5 min-w-[20px] transition-colors duration-200 ${
                          activeId === mod.id
                            ? "text-blue-400"
                            : "text-slate-600 group-hover:text-slate-500"
                        }`}
                      >
                        {String(MODULES.indexOf(mod) + 1).padStart(2, "0")}
                      </span>

                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`font-semibold text-sm transition-colors duration-200 ${
                              activeId === mod.id
                                ? "text-white"
                                : "text-slate-300 group-hover:text-white"
                            }`}
                          >
                            {mod.title}
                          </span>
                          {mod.badge && (
                            <span className="text-[10px] font-semibold text-blue-300 bg-blue-500/15 border border-blue-500/20 px-1.5 py-0.5 rounded-full leading-none">
                              {mod.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-200 ${
                            activeId === mod.id
                              ? "text-slate-300"
                              : "text-slate-500 group-hover:text-slate-400"
                          }`}
                        >
                          {mod.description}
                        </p>
                      </div>

                      {/* Seta */}
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-all duration-200 ${
                          activeId === mod.id
                            ? "text-blue-400 translate-x-0 opacity-100"
                            : "text-slate-600 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-slate-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Spacer para o último item chegar ao topo na intersecção */}
            <div className="h-64 lg:h-[50vh]" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ── CTA inferior ────────────────────────────────────────────────── */}
      <div className="text-center pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-col sm:flex-row items-center gap-4"
        ></motion.div>
      </div>
    </section>
  );
}
