import styled from "styled-components";


export const Wrapper = styled.div`
    padding: 34px 29px 30px 23px;
    background-color: white;
    width: 290px;
    height: 280px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgb(146, 146, 166, 0.4);
    position: fixed;
    right: 41px;
    top: 115px;
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

export const Header = styled.div`
    margin-bottom: 14px;
`;

export const HeaderTitle = styled.div`
    font-size: 16px;
`;

export const HeaderName = styled.span`
    font-weight: 600;
    color: ${(props) => props.theme.color.mainText};
`;

export const HeaderIconWrapper = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const HeaderBottom = styled.div``;

export const Body = styled.div`
    padding-top: 4px;
    padding-bottom: 4px;
`;

export const Footer = styled.div`
    margin-top: 10px;
`;

export const Img = styled.img`
`;

export const TextSecondary = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 14px;
`;

export const Actions = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.color.mainText};
`;

export const Action = styled.ul`
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    padding: 0;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;

export const Link = styled.span`
    text-decoration: underline;
    color: ${(props) => props.theme.color.active};
    cursor: pointer;
`;
