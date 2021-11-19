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
      color: #57e95c;
      transform: scale(1.1);
    }
  }
`

//////////////////////// Homepage ////////////////////////
export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    color: #57e95c;
  }
`
export const StyledImageWrapper = styled.div`
  max-width: 29rem;
`

export const StyledHomepageButton = styled.button`
  background: #d42990;
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

  h2 {
    color: #57e95c;
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
    color: #57e95c;
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
  h2 {
    margin-bottom: 1rem;
    color: #57e95c;
    font-size: 2rem;
  }

  .title {
    margin-bottom: 2rem;
  }
`

//////////////////////// About ////////////////////////

export const StyledAboutPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 3rem;

  h1 {
    color: #57e95c;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  h2 {
    color: #57e95c;
    margin-bottom: 2rem;
    margin-top: 2.9rem;
    text-align: center;
  }

  span {
    color: #57e95c;
  }
  ul {
    list-style: none;
    margin-left: 40%;
    font-size: 1.5rem;
  }
`

//////////////////////// Footer ////////////////////////

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #bbb;
  margin: 2rem auto;
  height: 100%;
  bottom: 0;

  .footerImagesDiv {
    display: flex;
  }

  .footerImages {
    width: 2rem;
    margin-right: 1rem;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`
