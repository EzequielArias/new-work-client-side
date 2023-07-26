import styled from 'styled-components';

export const Loader = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
  }

  &::before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #f0c 0%, #80f 100%);
  }

  &::after {
    width: 85%;
    height: 85%;
    background-color: #0f3942;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
