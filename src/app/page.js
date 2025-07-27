import React from "react";
import BannerOne from "@/components/heroes/BannerOne";
import CountDown from "@/components/common/CountDown";
import HighlightOne from "@/components/highlights/HighlightOne";
import Award from "@/components/awards/Award";
import ScrollSection from "@/components/common/ScrollSection";
import LineupOne from "@/components/lineups/LineupOne";
import ScheduleOne from "@/components/schedules/ScheduleOne";
import Separator from "@/components/common/Separator";
import Pricing from "@/components/pricing/Pricing";
import Faq from "@/components/faq/Faq";
import SponsorSlider from "@/components/sponsores/SponsorSlider";
import BlogOne from "@/components/blogs/BlogOne";
import Cta from "@/components/cta/Cta";
import SubscriptionOne from "@/components/subscriptions/SubscriptionOne";
import Gallery from "@/components/gallery/Gallery";
import TicketOne from "@/components/tickets/TcketOne";
import NavbarOne from "@/components/common/navbars/NavbarOne";
import FooterOne from "@/components/common/footers/FooterOne";
export const metadata = {
  title: "Eventiva next.js - Home1",
  description: "Eventiva next.js multipage webdite with next.js and bootstrap",
};
const Home1 = () => {
  return (
    <>
      <NavbarOne />
      <BannerOne />
      <Separator className={"mt-100 mt-lg-150 mt-xxl-180"} />

      <HighlightOne styleNum={0} />

      {/* <TicketOne styleNum={1} />
      <CountDown styleNum={0} />
      <ScrollSection />
      <LineupOne /> */}
      <Separator className={"mt-100 mt-lg-150 mt-xxl-180"} />
      {/* <ScheduleOne /> */}
      {/* <Pricing styleNum={0} styleNum2={0} /> */}
      {/* <SponsorSlider styleNum={0} /> */}
      {/* <Award /> */}
      <Faq styleNum={0} />
      <Gallery styleNum={0} />
      {/* <BlogOne /> */}
      <Cta styleNum={5} />
      {/* <SubscriptionOne styleNum={0} /> */}
      <FooterOne />
    </>
  );
};

export default Home1;
