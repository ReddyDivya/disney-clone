import React from 'react';
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" /></Background>
      <ImageTitle>
        <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD8BBA864E290FBC03A244A488FFC8DC8365FBF2F95A122B1D57BF3772D717FD/scale?width=1440&aspectRatio=1.78" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          controls
        </Controls>
      </ContentMeta>
    </Container>
  )
}

const Container = styled.div`
    position:relative;
    min-height:calc(100vh-250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  
  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width:874px;

`;

const Controls = styled.div`
  align-items:center;
  display:flex;
  flex-flow:row nowrap;
  margin:24px 0px;
  min-height:56px;
`;


export default Detail;