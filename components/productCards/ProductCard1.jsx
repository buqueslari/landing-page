"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../common/Countdown";
import { useContextElement } from "@/context/Context";
import { FaWhatsapp } from "react-icons/fa";
export default function ProductCard1({ product, gridClass = "" }) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const { setQuickAddItem, addToWishlist, isAddedtoWishlist, addToCompareItem, isAddedtoCompareItem, setQuickViewItem, addProductToCart, isAddedToCartProducts } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.images[0]);
  }, [product]);

  function redirecionarParaWhatsApp() {
    const telefone = "5511965799517";
    let mensagem = "Olá, gostaria desses produtos:\n\n";
    let total = 0;

    const subtotal = product.price;
    total += subtotal;
    mensagem += `1x - *${product.title}*\n`;
    mensagem += `*Preço:* R$${product.price.toFixed(2)}\n`;
    mensagem += `*Subtotal:* R$${subtotal.toFixed(2)}\n\n`;

    mensagem += `*Frete:* R$0,00\n`;

    mensagem += `*Total:*\n\n💰 R$${total.toFixed(2)}\n\nObrigado!`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
  }

  return (
    <div className={`card-product wow fadeInUp ${gridClass} ${product.isOnSale ? "on-sale" : ""} ${product.sizes ? "card-product-size" : ""}`}>
      <div className="card-product-wrapper">
        <Link href={`/product/${product.id}`} className="product-img">
          <Image className="lazyload img-product" src={currentImage} alt={product.title} width={600} height={800} />

          <Image className="lazyload img-hover" src={product.images[0] ?? product.images[1]} alt={product.title} width={600} height={800} />
        </Link>
        {product.shipping && (
          <div className="marquee-product bg-main">
            <div className="marquee-wrapper">
              <div className="initial-child-container">
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
              </div>
            </div>
            <div className="marquee-wrapper d-none d-md-block">
              <div className="initial-child-container">
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">RECEBA HOJE GRÁTIS</p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
              </div>
            </div>
          </div>
        )}
        {product.isOnSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">-{product.salePercentage}</span>
          </div>
        )}
        {product.sizes && (
          <div className="variant-wrap size-list">
            <ul className="variant-box">
              {product.sizes.map((size) => (
                <li key={size} className="size-item">
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.countdown && (
          <div className="variant-wrap countdown-wrap">
            <div className="variant-box">
              <div className="js-countdown" data-timer={product.countdown} data-labels="D :,H :,M :,S">
                <CountdownTimer />
              </div>
            </div>
          </div>
        )}
        {product.oldPrice ? (
          <div className="on-sale-wrap">
            <span className="on-sale-item">-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</span>
          </div>
        ) : (
          ""
        )}
        <div className="list-product-btn">
          <a onClick={() => addToWishlist(product.id)} className="box-icon wishlist btn-icon-action">
            <span className="icon icon-heart" />
            <span className="tooltip">{isAddedtoWishlist(product.id) ? "Already Wishlished" : "Wishlist"}</span>
          </a>
          <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" onClick={() => addToCompareItem(product.id)} className="box-icon compare btn-icon-action">
            <span className="icon icon-gitDiff" />
            <span className="tooltip">{isAddedtoCompareItem(product.id) ? "Already compared" : "Compare"}</span>
          </a>
          {/* <a href="#quickView" onClick={() => setQuickViewItem(product)} data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
            <span className="icon icon-eye" />
            <span className="tooltip">Quick View</span>
          </a> */}
        </div>
        <div className="list-btn-main">
          <a className="btn-main-product" style={{ display: "flex", alignItems: "center", background: "green", color: "white" }} onClick={() => redirecionarParaWhatsApp()}>
            <FaWhatsapp size={25} className="me-2" />
            COMPRAR
          </a>
        </div>
      </div>
      <div className="card-product-info">
        <Link href={`/product/${product.id}`} className="title link">
          {product.title}
        </Link>
        <span className="price">
          {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>} R${product.price?.toFixed(2)}
        </span>
        {product.colors && (
          <ul className="list-color-product">
            {product.colors.map((color, index) => (
              <li key={index} className={`list-color-item color-swatch ${currentImage == color.images[0] ? "active" : ""} ${color.bgColor == "bg-white" ? "line" : ""}`} onMouseOver={() => setCurrentImage(color.images[0])}>
                <span className={`swatch-value ${color.bgColor}`} />
                <Image className="lazyload" src={color.images[0]} alt="color variant" width={600} height={800} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
