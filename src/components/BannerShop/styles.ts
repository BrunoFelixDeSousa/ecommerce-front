import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 19rem;
  position: relative;

  @media (max-width: 768px) {
    height: 9rem;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;
  filter: blur(2px);

  /* @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  } */
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

export const Page = styled.span`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

export const ContentPage = styled.span`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
`;

export const ContentPageHome = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const ContentPages = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
`;