import styled, {createGlobalStyle} from 'styled-components/macro';

export const LockBody = createGlobalStyle`
    body {
      overflow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
   body {
     overflow: visible;
   }
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #011937;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -175px;
    margin-left: -95px;
    width: 200px;
    height: 200px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -22px;
  z-index: 100;
`;



