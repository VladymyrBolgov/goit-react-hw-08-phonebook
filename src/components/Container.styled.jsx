import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px 25px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  ul,
  ol {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
  }

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;