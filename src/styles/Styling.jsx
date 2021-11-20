import styled from "styled-components"
import backgroundImage from "../Images/orange.jpg"

//////////////////////// Navbar ////////////////////////
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  padding: 1.5rem;

  h1 {
    -webkit-text-shadow: 2px 2px #000000;
    text-shadow: 2px 2px #000000;
  }
`

export const StyledNavLinksUl = styled.ul`
  text-decoration: none;

  > a {
    margin-right: 2.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    -webkit-text-shadow: 2px 2px #000000;
    text-shadow: 2px 2px #000000;

    &:hover {
      color: #ef6128;
      transform: scale(1.1);
    }
  }
`

//////////////////////// Homepage ////////////////////////
export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 5rem;
  grid-gap: 3.5rem;
  align-items: center;
  padding: 0rem 2rem;

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  p {
    color: #ef6128;
  }
`
export const StyledImageWrapper = styled.div`
  max-width: 29rem;
`

export const StyledHomepageButton = styled.button`
  background: rgb(242, 0, 0);
  background: linear-gradient(
    45deg,
    rgba(242, 0, 0, 1) 0%,
    rgba(249, 117, 55, 1) 100%
  );
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 0.7rem;
  margin-top: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;

  -webkit-box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
  box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);

  &:hover {
    transform: scale(1.1);
  }
`

//////////////////////// Projects ////////////////////////

export const StyledProjectsPage = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 5rem;
  align-items: center;

  .sidePanelWrapper {
    padding: 0 2rem;
  }
`

export const StyledProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin: 3rem 2rem;
  text-align: center;

  h3 {
    color: #ef6128;
    font-size: 2rem;
    margin: 2rem auto 0px;
    font-weight: 500;
  }

  p {
    color: #ccc;
    margin-top: 0.3rem;
  }
  //#ffffff10
  .styledCard {
    background-color: #ffffff10;
    backdrop-filter: blur(12px);
    --webkit-backdrop-filter: blur(12px);
    border-radius: 15px;
    height: 25rem;
    padding: 1rem;
    transition: transform 0.2s;
    -webkit-box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);

    &:hover {
      transform: scale(1.1);
    }
  }
`

//////////////////////// Project detail ////////////////////////
export const StyledDetailPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem;
  align-items: center;
  padding: 0 2rem 2rem 2rem;

  .blurredDiv {
    background-color: #ffffff10;
    backdrop-filter: blur(12px);
    --webkit-backdrop-filter: blur(12px);
    border-radius: 15px;
    padding: 1rem 1rem 3rem 2rem;
    -webkit-box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    font-weight: 500;
    overflow: auto;
  }

  .imgWrapper {
    padding: 1rem 2rem 3rem 2rem;
  }

  h2 {
    margin-bottom: 1rem;
    color: #ef6128;
    font-size: 2rem;
  }

  h3 {
    margin-bottom: 0.6rem;
  }
`

//////////////////////// About ////////////////////////

export const StyledAboutPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.1rem;
  grid-gap: 5rem;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 5rem;
  padding: 0rem 2rem;

  .aboutMeText {
    background-color: #ffffff10;
    backdrop-filter: blur(12px);
    --webkit-backdrop-filter: blur(12px);
    border-radius: 15px;
    height: 20rem;
    padding: 1rem 1rem 3rem 2rem;
    -webkit-box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    font-weight: 500;
    overflow: auto;

    h1 {
      color: #ef6128;
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  .aboutMeKnowledge {
    background-color: #ffffff10;
    backdrop-filter: blur(12px);
    --webkit-backdrop-filter: blur(12px);
    border-radius: 15px;
    height: 20rem;
    padding: 1rem 1rem 3rem 2rem;
    -webkit-box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    box-shadow: 4px 1px 17px 0px rgba(0, 0, 0, 0.62);
    overflow: auto;

    h2 {
      color: #ef6128;
      margin-bottom: 2rem;
      text-align: center;
    }

    span {
      color: #f8f8f8;
    }
    ul {
      list-style: none;
      margin-left: 40%;
      align-items: center;
      font-size: 1.5rem;
    }
  }
`

//////////////////////// Side panel ////////////////////////

export const StyledSidePanel = styled.div`

  .footerImagesDiv {
    float: right;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    align-items: center;
  }

  .footerImages {
    width: 2rem;
    margin-bottom: 3.5rem;

    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`

//////////////////////// Wrapper ////////////////////////

export const StyledWrapper = styled.div`
  background-image: url(${backgroundImage});

  border-radius: 15px;
  max-width: 1400px;
  min-height: 700px;
  margin: 3rem auto;
`
