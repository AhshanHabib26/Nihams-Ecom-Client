import BannerCard from "@/components/client/BannerCard";
import { BannerSlide } from "@/components/client/BannerSlide";
import InfoCard from "@/components/client/InfoCard";

export default function Home() {
  return (
    <div className="mb-96">
      <BannerSlide />
      <BannerCard />
      <InfoCard />
    </div>
  );
}
