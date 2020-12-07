import styled from "styled-components";

const ImageContainer = styled.div`
  margin-right: 50px;
  img {
    width: 260px;
    height: 260px;
  }
`;

function CarouselImage({ image }) {
  return (
    <ImageContainer>
      <img src={image.src} alt={image.name} />
    </ImageContainer>
  );
}

export default CarouselImage;
