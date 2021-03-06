import styled, { css } from "styled-components";

const WrapperStyles = css`
    height: 57px;
    max-width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 18px;
    display: flex;
    align-items: center;
`;

export const ItemWrapper = styled.div`
    ${WrapperStyles}
    background-color: ${(props) =>
        props.inactive
            ? props.theme.color.inactive
            : props.theme.color.primary};
`;

export const AddWrapper = styled.div`
    ${WrapperStyles}
    border: solid 1px;
    border-color: ${(props) => props.theme.color.primary};
`;

export const Content = styled.div`
    display: flex;
`;

export const UserInfo = styled.div`
    width: 199px;
    display: flex;
    @media only screen and (max-width: 991px) {
        width: 108px;
    }
`;

export const Img = styled.img``;

export const StatusWrapper = styled.div`
    width: 110px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const StatusIcon = styled.div`
    display: flex;
    margin-right: 10px;
`;

export const StatusTitle = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.color.secondary};
`;

export const DialogsWrapper = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    width: 156px;
    padding: 0 16px 0 16px;
`;

export const DialogsTitle = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.color.secondary};
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
    align-self: center;
    color: ${(props) => props.theme.color.active};
    justify-content: space-between;
    width: 256px;
    padding: 0 15px 0 15px;
    font-size: 14px;
    @media only screen and (max-width: 991px) {
        width: 210px;
    }
`;

export const PaymentTitle = styled.div`
    font-size: 14px;
`;

export const LinkTitle = styled.span`
    color: ${(props) => props.theme.color.active};
    cursor: pointer;
    text-decoration: underline;
`;

export const PaymentValue = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 14px;
    font-weight: 600;
`;

const SeparatorStyles = css`
    width: 1px;
    background-color: #ffffff;
    height: 19px;
    display: flex;
    align-self: center;
`;

export const ItemSeparator = styled.div`
    ${SeparatorStyles};
    background-color: #ffffff;
`;

export const AddItemSeparator = styled.div`
    ${SeparatorStyles};
    background-color: ${(props) => props.theme.color.primary};
`;

export const Actions = styled.div`
    margin-left: auto;
`;

export const SettingsButton = styled.div`
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    :hover {
        animation: rotate 0.5s cubic-bezier(0, 0.41, 0.61, 1);
    }

    display: flex;
    cursor: pointer;
`;

export const EmptyLine = styled.div`
    background-color: ${(props) => props.theme.color.primary};
    height: 7px;
    border-radius: 55px;
    width: 100%;
`;

export const AddTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.color.mainText};
`;

export const SmallScreen = styled.div`
    display: none;
    @media only screen and (max-width: 991px) {
        display: block;
    }
`;

export const LargeScreen = styled.div`
    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const Plug = styled.div`
    display: flex;
    justify-content: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-right: ${(props) => props.right};
    margin-left: ${(props) => props.left};
`;

export const Plus = styled.div`
    border: 1px solid white;
    background-color: ${(props) =>
        props.active ? props.theme.color.active : props.theme.color.secondary};
    font-size: 16px;
    height: 30px;
    width: 30px;
    border-radius: 999px;
    position: relative;

    &:after,
    &:before {
        content: "";
        display: block;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:before {
        height: 12px;
        width: 2px;
        border-radius: 50px;
    }

    &:after {
        height: 2px;
        width: 12px;
        border-radius: 50px;
    }
    ${(props) =>
        props.active &&
        `
        :hover {
            transform: scale(1.1);
        }
        :active {
            transform: scale(1);
        }
        `};
`;

export const AddItemDisabledTitle = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 12px;
    width: 312px;
    white-space: nowrap;
`;

export const Title = styled.div`
    width: 176px;
    display: flex;
    @media only screen and (max-width: 991px) {
        min-width: 158px;
    }
    margin-left: 8.8px;
`;

export const ContentBox = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 991px) {
        min-width: 500px;
    } ;
`;
