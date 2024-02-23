import React from "react";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";

const Banner = ({ bannerImg, title1, title2, title3, texte1 }) => {
  return (
    <div className="relative h-[300px] w-full md:h-[400px]">
      <img
        src={bannerImg}
        alt="banner"
        className="h-full w-full object-cover"
      />
      <section className="absolute left-[50%] top-8 box-content flex w-[200px] translate-x-[-50%] items-center justify-center bg-white p-8 md:left-auto md:right-[75px] md:top-[75px] md:w-[300px] md:translate-x-0">
        <div>
          <Title>{title1}</Title>
          <Title>{title2}</Title>
          <Title>{title3}</Title>
          <Text>{texte1}</Text>
        </div>
      </section>
    </div>
  );
};

export default Banner;
