import { useState } from "react";
import styled from "styled-components";
import CarouselImage from "./carouselImage";

const CarouselHolder = styled.div`
  background-color: #171a29;
  width: 100%;
  padding: 20px;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  height: 270px;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  transform: ${({ index }) => `translateX(${-index * 310}px)`};
  transition: transform 0.5s ease-in-out;
  position: relative;
`;

const CarouselButton = styled.div`
  button {
    border: none;
    background: #fff;
    border-radius: 34px;
    outline: none;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 120px;
    cursor: pointer;
  }
  .left {
    left: 120px;
  }
  .right {
    right: 90px;
  }
`;

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80",
    name: "Pancakes for breakfast",
    id: 1,
  },
  {
    src:
      "https://images.unsplash.com/photo-1479796099910-b137a80acde4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1004&q=80",
    name: "Romantic dinner for one",
    id: 2,
  },
  {
    src:
      "https://images.unsplash.com/photo-1467453678174-768ec283a940?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1928&q=80",
    name: "Healthy Trendy Brunch",
    id: 3,
  },
  {
    src:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    name: "Meal with salmon and zucchini",
    id: 4,
  },
  {
    src:
      "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    name: "Summer Spread",
    id: 5,
  },
  {
    src:
      "https://images.unsplash.com/photo-1520251016291-bf6ad368164c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    name: "Gnocchi in the making",
    id: 6,
  },
  {
    src:
      "https://images.unsplash.com/photo-1508298715132-0238ee286469?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    name: "Gnocchi Pasta - Primal Future Cricket Powder/Flour",
    id: 7,
  },
];

function Carousel() {
  const [idx, setIdx] = useState(0);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const handlePrevClick = () => {
    setDisableRight(false);
    setIdx((prev) => prev - 1);
    if (idx <= 1) {
      setDisableLeft(true);
    }
  };
  const handleRightClick = () => {
    setDisableLeft(false);
    setIdx((prev) => prev + 1);
    if (idx > images.length - 5) {
      setDisableRight(true);
    }
  };

  return (
    <CarouselHolder>
      <div style={{ overflow: "hidden", width: "1200px", margin: "0 auto" }}>
        <CarouselContainer index={idx}>
          {images.map((image) => (
            <CarouselImage image={image} key={image.id} />
          ))}
        </CarouselContainer>
        <CarouselButton>
          {!disableLeft && (
            <button className="left" onClick={handlePrevClick}>
              prev
            </button>
          )}
          {!disableRight && (
            <button className="right" onClick={handleRightClick}>
              next
            </button>
          )}
        </CarouselButton>
      </div>
    </CarouselHolder>
  );
}

export default Carousel;
