import {
  LayoutDashboard,
  Truck,
  ClipboardList,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    titulo: "Administração Completa",
    descricao:
      "Controle financeiro, vendas, estoque, relatórios e gestão operacional em um único sistema.",
    icon: LayoutDashboard,
  },
  {
    titulo: "Delivery Integrado",
    descricao:
      "Receba pedidos diretamente pelo sistema com total controle da operação.",
    icon: Truck,
  },
  {
    titulo: "Comandas Digitais",
    descricao:
      "Gerencie mesas, comandas e pedidos em tempo real sem complicações.",
    icon: ClipboardList,
  },
  {
    titulo: "Venda no Balcão",
    descricao:
      "Atendimento rápido e eficiente para operações de alto volume.",
    icon: ShoppingCart,
  },
];

export default function Features() {
  return (
    <section
      id="funcionalidades"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-5">
            Funcionalidades
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tudo que seu negócio precisa
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Uma plataforma completa para restaurantes, bares,
            lanchonetes, pizzarias, mercados e operações de delivery.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.titulo}
                className="
                  group
                  p-10
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/30
                  hover:bg-white/[0.06]
                  hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.titulo}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}