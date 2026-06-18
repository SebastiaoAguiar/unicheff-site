export default function Stats() {
  return (

<section className="section">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "500+ Empresas",
            "99.9% Uptime",
            "10 Anos de Mercado",
            "Suporte Especializado",
          ].map((item) => (
            <div
              key={item}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section> )}