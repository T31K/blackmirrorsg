import Image from "next/image";
import React from "react";

import EventDate from "@/components/common/EventDate";
import BannerSponsor from "@/components/common/BannerSponsor";

import hero_img_8 from "@/assets/images/hero-8-image.webp";
import musicfest_2 from "@/assets/images/global/musicfest-2.png";

const BannerOne = () => {
  return (
    <section className="hero-section hero-8 position-relative">
      <div className="hero-wrapper mx-auto position-relative parallax">
        <div className="hero-8-image">
          <Image
            src={hero_img_8}
            width={806}
            height={988}
            priority={true}
            className="img-fluid"
            alt="img"
          />
        </div>
        {/* <!-- hero-8-image --> */}

        <div className="container">
          <div className="hero-8-inner">
            <p
              className="text-white custom-canterbury mb-3 mb-xxl-20 ml-5"
              style={{ fontSize: "50px" }}
            >
              Black Mirror
            </p>
            <h1 className="soundscapes fs-120 fw-extra-bold mb-0 custom-canterbury">
              Featuring <br />
              DJ Joeru
            </h1>
            {/* <BannerSponsor parentClass={"mb-40 mb-lg-0 hero-brand-images"} /> */}
          </div>
          {/* <!-- hero-inner-text --> */}
        </div>
        {/* <!-- container --> */}

        <EventDate styleNum={0} />
        {/* <!-- event-info --> */}
      </div>
    </section>
  );
};

export default BannerOne;
