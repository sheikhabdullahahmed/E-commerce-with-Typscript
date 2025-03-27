import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../../assets/img1.jpeg";
import heroBcg2 from "../../assets/img2.jpeg";
import styled from "styled-components";


export interface HeroProps {
    title?: string;
    description?: string;
    image1?: string;
    image2?: string;
  }
  

const Hero: React.FC<HeroProps> = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          explore our <br /> furniture range
        </h1>
        <p>
          Furniture is one such part of our homes that cannot be missed out in
          any of the cases. It makes our home aesthetically valuable by giving
          us all the comfort and relaxation that we desire. Certainly, one
          cannot deny the fact that a home is not complete without the right set
          of furniture.
        </p>
        {/* <Link to="/products" className="btn hero-btn">
          shop now
        </Link> */}
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="hero-image" className="main-img" />
        <img src={heroBcg2} alt="hero-image-2" className="accent-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;


const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;