"use client";

import { useState, useEffect } from "react";
import { X, MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix ícone padrão do Leaflet no Next.js / Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Ícone azul customizado
const blueIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Ícone vermelho para cidade selecionada
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const cidades = [
  { nome: "Palmas - TO", lat: -10.1689, lng: -48.3317 },
  { nome: "Araguaína - TO", lat: -7.1919, lng: -48.2044 },
  { nome: "Porto Nacional - TO", lat: -10.7081, lng: -48.4169 },
  { nome: "Gurupi - TO", lat: -11.7297, lng: -49.0647 },
  { nome: "Paraíso do Tocantins - TO", lat: -10.1708, lng: -48.8844 },
  { nome: "Imperatriz - MA", lat: -5.5261, lng: -47.4917 },
  { nome: "Estreito - MA", lat: -6.5586, lng: -47.4444 },
  { nome: "São Luís - MA", lat: -2.5307, lng: -44.3068 },
  { nome: "Balsas - MA", lat: -7.5322, lng: -46.0356 },
  { nome: "Carolina - MA", lat: -7.3361, lng: -47.4675 },
  { nome: "Açailândia - MA", lat: -4.9486, lng: -47.5006 },
  { nome: "Grajaú - MA", lat: -5.8197, lng: -46.1394 },
  { nome: "Capanema - PA", lat: -1.1953, lng: -47.1797 },
  { nome: "Parauapebas - PA", lat: -6.0686, lng: -49.9019 },
  { nome: "Itaituba - PA", lat: -4.2758, lng: -55.9839 },
  { nome: "Marabá - PA", lat: -5.3686, lng: -49.1178 },
  { nome: "Dom Eliseu - PA", lat: -4.2853, lng: -47.5669 },
  { nome: "Goiânia - GO", lat: -16.6869, lng: -49.2648 },
  { nome: "Rio Verde - GO", lat: -17.7983, lng: -50.9258 },
  { nome: "Alta Floresta - MT", lat: -9.8753, lng: -56.0861 },
  { nome: "Colniza - MT", lat: -9.4203, lng: -59.1014 },
  { nome: "Itabuna - BA", lat: -14.7858, lng: -39.2804 },
  { nome: "Aracaju - SE", lat: -10.9472, lng: -37.0731 },
  { nome: "Recife - PE", lat: -8.0539, lng: -34.8811 },
  { nome: "Jaraguá do Sul - SC", lat: -26.4853, lng: -49.0694 },
];

// Componente que voa até a cidade selecionada no mapa
function FlyToCity({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 11, { duration: 1.2 });
  }, [lat, lng, map]);
  return null;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LocationsModal({ open, onClose }: Props) {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(cidades[0]);
  const [mapReady, setMapReady] = useState(false);

  // Garante que o Leaflet só renderiza no cliente (evita erro SSR)
  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="
          w-full max-w-6xl h-[90vh] md:h-[700px]
          bg-white rounded-3xl overflow-hidden shadow-2xl
          grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-[320px_1fr]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Painel lateral */}
        <div className="flex flex-col bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 min-h-0">
          {/* Header fixo */}
          <div className="flex items-center justify-between p-6 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Onde Estamos</h2>
              <p className="text-sm text-slate-500 mt-1">
                + de {(cidades.length)-5} cidades atendidas
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-200 transition"
              aria-label="Fechar"
            >
              <X className="text-slate-700" size={20} />
            </button>
          </div>

          {/* Lista com scroll */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-1">
            {cidades.map((cidade) => (
              <button
                key={cidade.nome}
                onClick={() => setCidadeSelecionada(cidade)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3
                  rounded-xl border transition-all duration-200 text-left
                  ${
                    cidadeSelecionada.nome === cidade.nome
                      ? "bg-blue-50 border-blue-500 shadow-sm"
                      : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm"
                  }
                `}
              >
                <MapPin
                  size={16}
                  className={
                    cidadeSelecionada.nome === cidade.nome
                      ? "text-blue-600"
                      : "text-slate-400"
                  }
                />
                <span
                  className={`text-sm font-medium ${
                    cidadeSelecionada.nome === cidade.nome
                      ? "text-blue-700"
                      : "text-slate-700"
                  }`}
                >
                  {cidade.nome}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mapa Leaflet */}
        <div className="relative h-full min-h-[300px]">
          {mapReady && (
            <MapContainer
              center={[-10.5, -51.0]}
              zoom={4}
              style={{ width: "100%", height: "100%" }}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Voa para a cidade selecionada */}
              <FlyToCity
                lat={cidadeSelecionada.lat}
                lng={cidadeSelecionada.lng}
              />

              {/* Pins de todas as cidades */}
              {cidades.map((cidade) => (
                <Marker
                  key={cidade.nome}
                  position={[cidade.lat, cidade.lng]}
                  icon={
                    cidadeSelecionada.nome === cidade.nome ? redIcon : blueIcon
                  }
                  eventHandlers={{
                    click: () => setCidadeSelecionada(cidade),
                  }}
                >
                  <Popup>
                    <span className="font-medium text-slate-800">
                      {cidade.nome}
                    </span>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}

          {/* Badge da cidade selecionada */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000]">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg rounded-full px-4 py-2 flex items-center gap-2">
              <MapPin size={14} className="text-red-500" />
              <span className="text-sm font-medium text-slate-800">
                {cidadeSelecionada.nome}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}