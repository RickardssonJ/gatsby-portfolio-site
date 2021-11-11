import styled from "styled-components"

//////////////////////// Navbar ////////////////////////
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem auto;
`

export const StyledNavLinksUl = styled.ul`
  text-decoration: none;

  > a {
    margin-right: 1rem;
    cursor: pointer;
    &:hover {
      color: #44f331;
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
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
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
    font-size: 3rem;
    margin-top: 6rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }
`

//////////////////////// Footer ////////////////////////

export const StyledFooter = styled.div`
  text-align: center;
  color: #bbb;
  margin: 3rem auto;
`
