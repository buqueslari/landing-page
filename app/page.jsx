import Footer1 from "@/components/footers/Footer1";
import BannerCollection from "@/components/homes/home-1/BannerCollection";
import BannerCountdown from "@/components/homes/home-1/BannerCountdown";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/home-1/Hero";
import Products1 from "@/components/common/Products3";
import Products2 from "@/components/homes/fashion-modernRetreat/Products2";
import Products from "@/components/homes/decor/Products";
import Header2 from "@/components/headers/Header2";
import Collections from "@/components/homes/home-1/Collections";

export const metadata = {
  title: "Rafaella Flores - Flores Online, 70% Off + Entrega em 1h + Frete Grátis",
  description: "A Rafaella Flores é uma floricultura especializada em buquês personalizados e arranjos florais para todas as ocasiões. Encante-se com a beleza das nossas flores!",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#FFFFFF",
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    locale: "pt-BR",
    title: "Rafaella Flores - Flores Online, 70% Off + Entrega em 1h + Frete Grátis",
    siteName: "Rafaella Flores",
    type: "website",
    description: "A Rafaella Flores é uma floricultura especializada em buquês personalizados e arranjos florais para todas as ocasiões. Encante-se com a beleza das nossas flores!",
    url: "https://www.floresrafaella.shop/",
    images: [
      {
        url: "/images/logo/logo.png",
      },
    ],
  },
  alternates: {
    canonical: "https://www.floresrafaella.shop/",
  },
  keywords: ["Rafaella Flores", "Rafaella Buquês", "Floricultura", "Flores", "Buquês", "Arranjos florais", "São Paulo", "SP", "Presentes", "Casamentos", "Eventos", "Decoração", "Flores frescas", "Rosas", "Orquídeas", "Entrega de flores"],
  authors: [{ name: "Rafaella Flores", url: "https://www.floresrafaella.shop/" }],
};
export default function Home() {
  return (
    <>
      <Header2 />
      <Hero />
      <Collections />
      <Products1 />
      <BannerCountdown />
      <Products />
      <BannerCollection />
      <Products2 />
      <Features />
      <Footer1 />
    </>
  );
}
