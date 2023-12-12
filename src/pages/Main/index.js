import React from 'react'
import Navi from '../../components/Navi';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Row from '../../components/Row';
import styled from 'styled-components';
import requests from '../../api/request';

function Mainpage() {
  return (
    <Container>
      <Navi/>
      <Banner/>
      <Category/>
      <Row title="Top" id="TR" fetchUrl={requests.topRated}/>
      <Row title="Trend" id="TN" fetchUrl={requests.trend}/>
      <Row title="nowPlaying" id="CM" fetchUrl={requests.nowPlaying}/>
      <Row title="popularMovies" id="SCM" fetchUrl={requests.popularMovies}/>
      <Row title="comedyMovies" id="CCM" fetchUrl={requests.comedyMovies}/>
      <Row title="Top" id="CMD" fetchUrl={requests.topRated}/>
    </Container>
  )
}

export default Mainpage
const Container = styled.main`
  position:relative;
  min-height : calc(100vh -250px);
  overflow-x:hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background : url("/images/home-background.png") center center no-repeat fixed;
    content: "";
    position : absolute;
    inset : 0px;
    opacity : 1;
    z-index:-1;
  }
`;
