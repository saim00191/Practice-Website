import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentPostsPage from "@/components/RecentPost";
import FeatureWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RecentPostsPage />
      <FeatureWork />
      <Footer/>
    </div>
  );
}
