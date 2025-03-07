import { Toaster } from "react-hot-toast";
import FeaturesSection from "../ui/pages/home/FeaturesSection";
import FreeLimitedTimeSection from "../ui/pages/home/FreeLimitedTimeSection";
import HeroHomeSection from "../ui/pages/home/HeroHomeSection";

export default function Home() {
    return (
        <div>
            <HeroHomeSection />
            <FreeLimitedTimeSection />
            <FeaturesSection />
            <Toaster />
        </div>
    )
}
