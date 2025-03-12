"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollTop({ hasPaddingBottom = false }) {
  const [isButtonVisible] = useState(true);

  const handleScrollToTop = () => {
    const telefone = "5511980817075";
    let mensagem = "Oi, gostaria de ver seu catálogo";

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
  };

  return (
    <button id="scroll-top" className={`scroll-top-button ${hasPaddingBottom ? "type-1" : ""} ${isButtonVisible ? "show" : ""}`} onClick={handleScrollToTop}>
      <FaWhatsapp size={25} />
    </button>
  );
}
