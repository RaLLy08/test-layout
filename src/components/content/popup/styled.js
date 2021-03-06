import styled, { css } from "styled-components";

const Popap = css`
    border-radius: 8px;
    @keyframes anvil {
        0% {
            transform: scale(1) translateY(0px);
            opacity: 0;
        }
        1% {
            transform: scale(0.96) translateY(10px);
            opacity: 0;
        }
        100% {
            transform: scale(1) translateY(0px);
            opacity: 1;
        }
    }
    -webkit-animation: anvil 0.05s cubic-bezier(0.3, 0.1, 0.36, 0.4) forwards;
`;

export const ShowMoreWraper = styled.div`
    ${Popap}
    display: flex;
    padding: 14px 34px 15px 20px;
    background-color: white;
    box-shadow: 0 0 15px rgb(146, 146, 166, 0.2);
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
    width: 155px;
    position: absolute;
    left: -15px;
    @media only screen and (max-width: 991px) {
        left: -190px;
    }
`;

export const SettingsAction = styled.div`
    font-size: 12px;
    cursor: pointer;
    font-weight: 500;
    :hover {
        text-decoration: underline;
    };
 
`;

export const AlertWraper = styled.div`
    ${Popap}
    width: 430px;
    height: 50px;
    background-color: ${(props) => props.theme.color.inactive};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 100px;
    left: calc(100% - 920px);
    @media only screen and (max-width: 991px) {
        left: calc(100% - 780px);
    }
`;

export const AlertTitle = styled.div`
    color: ${(props) => props.theme.color.mainText};
`;

export const AlertText = styled.span`
    font-size: 12px;
`;

export const AlertSum = styled.span`
    font-size: 12px;
    font-weight: 600;
`;

export const AlertAction = styled.div`
    margin-left: 16px;
`;


export const ArrowLeftUpImg = styled.img`
    position: absolute;
    transform: translate(242px, -10px);
`;

export const CloseButton = styled.div`
    cursor: pointer;
    height: 10px;
    width: 10px;
    display: flex;
`;

export const Img = styled.img`
`;

export const SettingsWraper = styled.div`
    ${Popap}
    display: flex;
    padding: 14px 20px 15px 13px;
    background-color: white;
    box-shadow: 0 0 15px rgb(146, 146, 166, 0.2);
    flex-direction: column;
    justify-content: space-between;
    height: 86px;
    width: 132px;
    position: absolute;
    left: -15px;
    @media only screen and (max-width: 991px) {
        left: -155px;
    }
`;

export const SettingsActionBox = styled.div`
   display: flex;
  
`;

export const SettingsIcon = styled.div`
    display: flex;
    width: 20px;
    height: 100%;
    align-items: center;
`;



