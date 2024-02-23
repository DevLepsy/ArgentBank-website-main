import React from "react";
import Banner from "../../components/organisms/Banner/Banner";

//icone logo
import iconChat from "../../assets/icon/icon-chat.webp";
import iconMoney from "../../assets/icon/icon-money.webp";
import iconSecurity from "../../assets/icon/icon-security.webp";

//banner img
import bannerImg from "../../assets/img/bank-tree.webp";

const Home = () => {
  return (
    <>
      <Banner
        bannerImg={bannerImg}
        title1="no fees."
        title2="no minimum deposit."
        title3="High interest rates."
        texte1="Open a savings account with Argent Bank today!"
      />
    </>
  );
};

export default Home;
