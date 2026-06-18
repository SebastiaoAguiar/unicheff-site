import { useEffect, useState } from "react";
import LocationsModal from "../LocationsModal";
import { useNavigate } from "react-router-dom";

import Unicheff from "../../assets/images/Unicheff.png";

export default function Navbar() {
  const [showLocations, setShowLocations] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
        <div
          className={`
            flex items-center justify-between
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            mt-3
            ${scrolled
              ? `
                w-[92%] max-w-5xl
                px-6 py-3
                bg-slate-950/70
                backdrop-blur-xl
                rounded-full
                scale-[0.98]
                shadow-[0_0_30px_rgba(59,130,246,0.12)]
              `
              : `
                w-full max-w-7xl
                px-6 py-5
                bg-transparent
                scale-100
              `
            }
          `}
        >
          {/* LOGO */}
          <a href="#inicio">
            <img
              src={Unicheff}
              alt="UniCheff"
              className={`
                w-auto transition-all duration-500 cursor-pointer
                hover:scale-105
                ${scrolled ? "h-10" : "h-12"}
              `}
            />
          </a>

          {/* BOTÕES */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowLocations(true)}
              className="
                px-5 py-2 rounded-xl
                border border-white/15
                text-white
                hover:bg-white/10
                transition
              "
            >
              Onde Estamos
            </button>

            <button
              onClick={() => navigate("/privacy")}
              className="
                px-5 py-2 rounded-xl
                bg-white text-black font-semibold
                transition
                hover:bg-white/10 hover:text-white
              "
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </header>

      <LocationsModal
        open={showLocations}
        onClose={() => setShowLocations(false)}
      />
    </>
  );
}