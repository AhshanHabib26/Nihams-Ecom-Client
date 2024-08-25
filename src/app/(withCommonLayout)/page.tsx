import BannerAds from "@/components/client/ads/BannerAds";
import BannerCard from "@/components/client/BannerCard";
import { BannerSlide } from "@/components/client/BannerSlide";
import BestSellersSection from "@/components/client/BestSellersSection";
import InfoCard from "@/components/client/InfoCard";
import ProductContainer from "@/components/client/ProductContainer";
import ProductTabContainer from "@/components/client/ProductTabContainer";

export default function Home() {
  return (
    <div className="mb-96">
      <BannerSlide />
      <BannerCard />
      <InfoCard />
      <ProductContainer />
      <ProductTabContainer />
      <BestSellersSection />
      <BannerAds />
    </div>
  );
}
