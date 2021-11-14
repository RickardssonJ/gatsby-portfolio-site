import styled from "styled-components"

//////////////////////// Navbar ////////////////////////
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
`

export const StyledNavLinksUl = styled.ul`
  text-decoration: none;

  > a {
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      color: #28f72f;
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
    color: #28f72f;
  }
`
export const StyledHomepageButton = styled.button`
  background: #d42990;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 0.7rem;
  margin-top: 1.5rem;
  font-weight: 500;
  cursor: pointer;
`

//////////////////////// Projects ////////////////////////

export const StyledProjectsPage = styled.div`
  text-align: center;

  h2 {
    color: #28f72f;
    font-size: 3rem;
    margin-top: 3rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }
`

export const StyledProjectCars = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin: 5rem 2rem;
  text-align: center;

  h3 {
    color: #28f72f;
    margin: 2rem auto 0px;
    font-weight: 500;
  }

  p {
    color: #ccc;
    margin-top: 0.3rem;
  }
`

//////////////////////// Project detail ////////////////////////
export const StyledDetailPage = styled.div`
  h2 {
    margin-bottom: 1rem;
    color: #28f72f;
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
    color: #28f72f;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  h2 {
    color: #28f72f;
    margin-bottom: 2rem;
    margin-top: 2.9rem;
    text-align: center;
  }

  span {
    color: #28f72f;
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

  .footerImagesDiv {
    display: flex;
  }

  .footerImages {
    width: 2rem;
    margin-right: 1rem;
  }
`
