import whatsappIcon from "../../assets/images/zap.png";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-3">

      {/* Balão */}
      <div
        className="
          hidden md:block
          bg-white
          text-slate-700
          px-5 py-3
          rounded-full
          shadow-xl
          animate-float
        "
      >
        Posso te ajudar?
      </div>

      {/* Botão */}
      <a
        href="https://wa.me/556391000057"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          bg-[#25D366]
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        {/* Anel pulsando */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            animate-ping
            opacity-30
          "
        />

        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-9 h-9 relative z-10"
        />
      </a>
    </div>
  );
}