import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Header = styled.div`
  width: 100%;
  height: 50%;

  background: var(--blue);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;

    margin-bottom: 1.25rem;
  }

  p {
    max-width: 31rem;
    font-size: 1.12rem;
    line-height: 1.53rem;

    text-align: center;

    color: #fff;
  }
`
