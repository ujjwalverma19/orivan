import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeaturedJourneys } from "@/components/landing/FeaturedJourneys";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { SectionConnector } from "@/components/landing/SectionConnector";
import { LazySection } from "@/components/LazySection";
import heroScene from "@/assets/hero-scene.webp";

const ExploreCollections = lazy(() =>
  import("@/components/landing/ExploreCollections").then((m) => ({
    default: m.ExploreCollections,
  })),
);
const CommunityStories = lazy(() =>
  import("@/components/landing/CommunityStories").then((m) => ({ default: m.CommunityStories })),
);
const Categories = lazy(() =>
  import("@/components/landing/Categories").then((m) => ({ default: m.Categories })),
);
const HowItWorks = lazy(() =>
  import("@/components/landing/HowItWorks").then((m) => ({ default: m.HowItWorks })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:title", content: "Orivan — Discover the paths behind greatness" },
      { property: "og:description", content: "A library of lives. Every journey, end to end." },
      { property: "og:url", content: "https://orivan.online/" },
      { property: "og:image", content: "https://orivan.online/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://orivan.online/og-image.jpg" },
      { name: "twitter:title", content: "Orivan — Discover the paths behind greatness" },
      { name: "twitter:description", content: "A library of lives. Every journey, end to end." },
    ],
    links: [
      { rel: "canonical", href: "https://orivan.online/" },
      { rel: "preload", as: "image", href: heroScene, fetchPriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />
        <Hero />
        <SectionConnector variant="right" marker="compass" />
        <FeaturedJourneys />
        <LazySection minHeight={720}>
          <SectionConnector variant="left" marker="star" />
          <Suspense fallback={null}>
            <ExploreCollections />
          </Suspense>
        </LazySection>
        <LazySection minHeight={620}>
          <SectionConnector variant="center" marker="pin" />
          <Suspense fallback={null}>
            <CommunityStories />
          </Suspense>
        </LazySection>
        <LazySection minHeight={640}>
          <SectionConnector variant="right" marker="dot" />
          <Suspense fallback={null}>
            <Categories />
          </Suspense>
        </LazySection>
        <LazySection minHeight={620}>
          <SectionConnector variant="left" marker="compass" />
          <Suspense fallback={null}>
            <HowItWorks />
          </Suspense>
        </LazySection>
        <SectionConnector variant="right" marker="star" />
        <ClosingCta />
        <Footer />
      </div>
    </main>
  );
}
