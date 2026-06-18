import { useState } from "react";
import Logo from "../../assets/images/Unicheff.png";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-12">

            {/* Marca */}
            <div>
              <img
                src={Logo}
                alt="UniCheff"
                className="h-12 w-auto mb-4"
              />

              <p className="text-slate-400 leading-relaxed">
                Soluções completas para restaurantes,
                pizzarias, hamburguerias e deliverys que
                desejam vender mais e automatizar processos.
              </p>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Navegação
              </h4>

              <div className="flex flex-col gap-3">
                <a
                  href="#inicio"
                  className="text-slate-400 hover:text-white transition"
                >
                  Início
                </a>

                <a
                  href="#clientes"
                  className="text-slate-400 hover:text-white transition"
                >
                  Clientes
                </a>

                <a
                  href="#contato"
                  className="text-slate-400 hover:text-white transition"
                >
                  Contato
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Contato
              </h4>

              <div className="flex flex-col gap-3 text-slate-400">
                <p>unicheffdelivery@gmail.com</p>
                <p>(63) 9912-9238</p>
                <p>Palmas - TO</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                Legal
              </h4>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-slate-400 hover:text-white transition text-left"
                >
                  Política de Privacidade
                </button>

                <a
                  href="https://app.menucheff.unitechsistemas.com.br/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  Plataforma
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © 2026 UniCheff. Todos os direitos reservados.
            </p>

            <p className="text-slate-500 text-sm">
              Desenvolvido por Unitech Sistemas
            </p>

          </div>
        </div>
      </footer>

      {/* MODAL PRIVACIDADE */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <div className="bg-white text-black max-w-3xl w-full mx-4 rounded-3xl p-8 relative">

            <button
              onClick={() => setShowPrivacy(false)}
              className="
                absolute top-4 right-6
                w-10 h-10
                rounded-full
                flex items-center justify-center
                text-slate-500
                text-xl
                transition-all duration-300
                hover:bg-slate-100
                hover:text-slate-900
                hover:rotate-90
              "
            >
              ✕
            </button>

            <div className="max-h-[70vh] overflow-y-auto pr-4">
              <h2 className="text-3xl font-bold mb-8">
                Política de Privacidade
              </h2>

              <div className="space-y-8 text-slate-700 leading-8">

                <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      1. Introdução
    </h2>

    <p>
      Esta Política de Privacidade descreve como a Menucheff coleta,
      utiliza, armazena e protege os dados pessoais de seus usuários
      durante a utilização de seus serviços e plataformas digitais.
      Ao utilizar nossos serviços, o usuário declara ter lido,
      compreendido e aceitado os termos desta Política de Privacidade.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      2. Coleta de Dados Pessoais
    </h2>

    <ul className="list-disc pl-6 space-y-2">
      <li>Cadastro na plataforma;</li>
      <li>Utilização dos serviços disponibilizados;</li>
      <li>Contato com nossa equipe;</li>
      <li>Navegação em nossos ambientes digitais.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      3. Finalidade do Tratamento dos Dados
    </h2>

    <ul className="list-disc pl-6 space-y-2">
      <li>Permitir acesso aos serviços;</li>
      <li>Entrar em contato com o usuário;</li>
      <li>Melhorar a experiência na plataforma;</li>
      <li>Desenvolver novas funcionalidades;</li>
      <li>Cumprir obrigações legais.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      4. Armazenamento de Dados
    </h2>

    <p>
      Os dados poderão ser armazenados em servidores localizados no
      Brasil ou em outros países onde a Menucheff ou seus parceiros
      possuam infraestrutura tecnológica.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      5. Compartilhamento de Dados
    </h2>

    <p>
      A Menucheff poderá compartilhar informações com parceiros,
      prestadores de serviços e autoridades competentes quando
      necessário para cumprimento de obrigações legais ou execução dos
      serviços contratados.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      6. Segurança das Informações
    </h2>

    <p>
      Adotamos medidas técnicas e organizacionais adequadas para
      proteger os dados pessoais contra acesso não autorizado,
      alteração, divulgação ou destruição indevida.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      7. Uso de Cookies
    </h2>

    <p>
      Utilizamos cookies para melhorar a navegação, personalizar a
      experiência do usuário e realizar análises de desempenho da
      plataforma.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      8. Direitos do Usuário
    </h2>

    <ul className="list-disc pl-6 space-y-2">
      <li>Acessar seus dados pessoais;</li>
      <li>Corrigir informações incorretas;</li>
      <li>Solicitar exclusão dos dados;</li>
      <li>Revogar consentimentos concedidos;</li>
      <li>Solicitar portabilidade dos dados.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">
      9. Contato
    </h2>

    <p>
      Para dúvidas, solicitações ou exercício de direitos relacionados
      aos seus dados pessoais, entre em contato pelo e-mail:
    </p>

    <a
      href="mailto:unicheffdelivery@gmail.com"
      className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
    >
      unicheffdelivery@gmail.com
    </a>
  </section>


        

              </div>
            </div>

          </div>

        </div>
      )}
    </>
  );
}