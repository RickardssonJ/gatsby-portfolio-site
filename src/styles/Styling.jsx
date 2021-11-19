import styled from "styled-components"

//////////////////////// Navbar ////////////////////////
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;

  h1 {
    -webkit-text-shadow: 2px 2px #000000;
    text-shadow: 2px 2px #000000;
  }
`

export const StyledNavLinksUl = styled.ul`
  text-decoration: none;

  > a {
    margin-right: 1rem;
    font-size: 1.2rem;
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
  grid-template-columns: 1fr 1fr 0.1rem;
  grid-gap: 3.5rem;
  align-items: center;

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
  //background: #e55b19;
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
  grid-template-columns: 1fr 0rem;
  align-items: center;

  h2 {
    color: #ef6128;
    font-size: 3rem;
    margin-top: 2rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }
`

export const StyledProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 2rem;
  text-align: center;

  h3 {
    color: #ef6128;
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
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 15vh;

  h1 {
    color: #ef6128;
    margin-bottom: 2rem;
    //margin-top: 2rem;
  }

  h2 {
    color: #ef6128;
    margin-bottom: 2rem;
    //margin-top: 2.9rem;
    text-align: center;
  }

  span {
    color: #ef6128;
  }
  ul {
    list-style: none;
    margin-left: 40%;
    font-size: 1.5rem;
  }
`

//////////////////////// Side panel ////////////////////////

export const StyledSidePanel = styled.div`
  display: flex;
  float: right;
  align-items: center;

  .footerImagesDiv {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
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
