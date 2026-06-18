import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-600 rounded-full blur-[200px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate("/")}
          className="
            flex items-center gap-2
            px-5 py-3
            rounded-xl
            bg-white/5
            border border-white/10
            text-white
            hover:bg-white/10
            transition-all
          "
        >
          <ArrowLeft size={18} />
          Voltar para Home
        </button>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div
          className="
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-[32px]
            p-10
            shadow-[0_0_50px_rgba(37,99,235,0.15)]
          "
        >
          <h1
            className="
              text-5xl
              font-black
              text-white
              mb-4
            "
          >
            Política de Privacidade
          </h1>

          <p className="text-slate-400 mb-12 text-lg">
            Última atualização: Junho de 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                1. Introdução
              </h2>

              <p className="text-slate-300 leading-8">
               Esta Política de Privacidade descreve como a Menucheff coleta,
      utiliza, armazena e protege os dados pessoais de seus usuários
      durante a utilização de seus serviços e plataformas digitais.
      Ao utilizar nossos serviços, o usuário declara ter lido,
      compreendido e aceitado os termos desta Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
               2. Coleta de Dados Pessoais
              </h2>

              <ul className="text-slate-300 space-y-3 pl-6 list-disc">
                <li>Cadastro na plataforma;</li>
      <li>Utilização dos serviços disponibilizados;</li>
      <li>Contato com nossa equipe;</li>
      <li>Navegação em nossos ambientes digitais.</li>

              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
               3. Finalidade do Tratamento dos Dados
              </h2>

              <ul className="text-slate-300 space-y-3 pl-6 list-disc">
               <li>Permitir acesso aos serviços;</li>
      <li>Entrar em contato com o usuário;</li>
      <li>Melhorar a experiência na plataforma;</li>
      <li>Desenvolver novas funcionalidades;</li>
      <li>Cumprir obrigações legais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
               4. Armazenamento de Dados
              </h2>

<p className="text-slate-400 mb-12 text-lg">
      Os dados poderão ser armazenados em servidores localizados no
      Brasil ou em outros países onde a Menucheff ou seus parceiros
      possuam infraestrutura tecnológica.
    </p>

    <h2 className="text-2xl font-bold text-blue-400 mb-4">
              5. Compartilhamento de Dados
              </h2>

<p className="text-slate-400 mb-12 text-lg">
   A Menucheff poderá compartilhar informações com parceiros,
      prestadores de serviços e autoridades competentes quando
      necessário para cumprimento de obrigações legais ou execução dos
      serviços contratados.
    </p>

     <h2 className="text-2xl font-bold text-blue-400 mb-4">
              6. Segurança das Informações
              </h2>

<p className="text-slate-400 mb-12 text-lg">
   Adotamos medidas técnicas e organizacionais adequadas para
      proteger os dados pessoais contra acesso não autorizado,
      alteração, divulgação ou destruição indevida.
    </p>

     <h2 className="text-2xl font-bold text-blue-400 mb-4">
              7. Uso de Cookies
              </h2>

<p className="text-slate-400 mb-12 text-lg">
  Utilizamos cookies para melhorar a navegação, personalizar a
      experiência do usuário e realizar análises de desempenho da
      plataforma.
    </p>

    <h2 className="text-2xl font-bold text-blue-400 mb-4">
              7. Uso de Cookies
              </h2>

<p className="text-slate-400 mb-12 text-lg">
  Utilizamos cookies para melhorar a navegação, personalizar a
      experiência do usuário e realizar análises de desempenho da
      plataforma.
    </p>

<h2 className="text-2xl font-bold text-blue-400 mb-4">
              8. Direitos do Usuário
              </h2>

<ul className="text-slate-400 mb-12 text-lg">
      <li>Acessar seus dados pessoais;</li>
      <li>Corrigir informações incorretas;</li>
      <li>Solicitar exclusão dos dados;</li>
      <li>Revogar consentimentos concedidos;</li>
      <li>Solicitar portabilidade dos dados.</li>
    </ul>

 <h2 className="text-2xl font-bold text-blue-400 mb-4">
      9. Contato
    </h2>

    <p className="text-slate-400 mb-12 text-lg">
      Para dúvidas, solicitações ou exercício de direitos relacionados
      aos seus dados pessoais, entre em contato pelo e-mail:
    </p>



              <a
                href="mailto:unicheffdelivery@gmail.com"
                className="
                  text-blue-400
                  hover:text-blue-300
                  transition
                  font-medium
                "
              >
                unicheffdelivery@gmail.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}