import styled from "styled-components";


export const Wrapper = styled.div`
    height: 57px;
    max-width: 100%;
    background-color: ${(props) =>
        props.inactive
            ? props.theme.color.inactive
            : props.theme.color.primary};
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 12px;
    padding-right: 18px;
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
`;

export const ContentBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Img = styled.img``;

export const UserLogo = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
`;

export const UserWrapper = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 96px;
    padding-left: 4px;
    padding-right: 4px;
`;

export const UserTitle = styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.color.mainText};
`;

export const Followers = styled.div`
   width: 42px;
   text-align: center;
   font-size: 10px;
   font-weight: 600;
   color: ${props => props.theme.color.secondary}
`;

export const StatusWrapper = styled.div`
    min-width: 114px;
    box-sizing: border-box;
    padding-left: 5px;
    display: flex;
    align-items: center;
`;

export const StatusIcon = styled.div`
    display: flex;
    margin-right: 12px;
`;

export const StatusTitle = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.color.secondary};
`;

export const DialogsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    width: 157px;
    padding: 0 13px 0 13px;
`;

export const DialogsTitle = styled.div`
    font-size: 12px;
    color: ${props => props.theme.color.secondary}
`;

export const DialogsValue = styled.div`
    line-height: 2px;
    color: ${(props) => props.theme.color.secondary};
`;

export const FirstDialogsValue = styled.span`
    font-size: 13px;
    font-weight: 600;

    color: ${(props) => props.theme.color.active};
`;

export const SecondDialogsValue = styled.span`
    font-size: 10px;
    font-weight: 600;
`;

export const PaymentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 262px;
    padding: 0 15px 0 15px;
`;

export const PaymentTitle = styled.div`
    color: ${(props) => props.theme.color.active};
    font-size: 14px;
`;

export const PaymentLinkTitle = styled.div`
    color: ${(props) => props.theme.color.active};
    font-size: 14px;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;

export const PaymentValue = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 14px;
    font-weight: 600;
`;

export const Separator = styled.div`
    width: 1px;
    background-color: #FFFFFF;
    height: 19px;
    display: flex;
    align-self: center;
`;

export const Actions = styled.div`
    margin-left: auto;
`;

export const SettingsButton = styled.div`
    @keyframes rotate {
        100% {
            transform: rotate(180deg);
        }
    }

    :hover {
        animation: rotate 0.5s;
    }

    display: flex;
    cursor: pointer;
`;

