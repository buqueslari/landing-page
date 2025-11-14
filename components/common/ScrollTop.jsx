"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollTop({ hasPaddingBottom = false }) {
  const [isButtonVisible] = useState(true);

  const handleScrollToTop = () => {
    const telefone = "5547988922714";
    let mensagem = "Olá! Estou interessado(a) nos produtos da sua loja. Poderia me dar mais informações? Obrigado!";

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
  };

  return (
   <button id="scroll-top" style={{ background: "green", width: "80px", height: "80px" }} className={` scroll-top-button ${hasPaddingBottom ? "type-1" : ""} ${isButtonVisible ? "show" : ""}`} onClick={handleScrollToTop}>
      <FaWhatsapp size={50} />
    </button>
  );
}
