import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Je recommande.” “Une très belle collaboration, dans le respect et la confiance. Une vraie force de propositions, un suivi personnalisé et une grande disponibilité pour chacun de nos projets de marketing digital. Merci pour cette qualité de service qui est une réelle valeur ajoutée pour notre entreprise.”",
    },
    {
      img: profilePic2,
      review:
        "Je recommande.” “Une très belle collaboration, dans le respect et la confiance. Une vraie force de propositions, un suivi personnalisé et une grande disponibilité pour chacun de nos projets de marketing digital. Merci pour cette qualité de service qui est une réelle valeur ajoutée pour notre entreprise.”",
    },
    {
      img: profilePic3,
      review:
        "Je recommande.” “Une très belle collaboration, dans le respect et la confiance. Une vraie force de propositions, un suivi personnalisé et une grande disponibilité pour chacun de nos projets de marketing digital. Merci pour cette qualité de service qui est une réelle valeur ajoutée pour notre entreprise.”",
    },
    {
      img: profilePic4,
      review:
        "Je recommande.” “Une très belle collaboration, dans le respect et la confiance. Une vraie force de propositions, un suivi personnalisé et une grande disponibilité pour chacun de nos projets de marketing digital. Merci pour cette qualité de service qui est une réelle valeur ajoutée pour notre entreprise.”",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Les clients reçoivent toujours </span>
        <span>Travail exceptionnel </span>
        <span>de moi...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
