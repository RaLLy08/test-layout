import styled from "styled-components";

export const Wrapper = styled.div`
    height: 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 24px;
    margin-left: max(calc(100px - (1920px - 100vw)), 40px);
    @media only screen and (max-width: 991px) {
        height: 77px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.color.primary};
`;

export const Main = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MainTitle = styled.div`
    font-size: 22px;
    white-space: nowrap;
    font-weight: 600;
    margin-right: 30px;
    @media only screen and (max-width: 991px) {
        font-size: 16px;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 702px;
`;

export const Balance = styled.div`
    height: 46px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
    @media only screen and (max-width: 991px) {
        font-size: 12px;
        height: 34px;
    }
`;

export const BalanceTitle = styled.div`
    color: ${(props) => props.theme.color.secondary};
    margin-right: 20px;
`;

export const BalanceValue = styled.div`
    font-weight: 600;
`;

export const BalanceCurrency = styled.span``;

export const PeriodTitle = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    margin-right: 30px;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`;

export const Notifications = styled.div`
    cursor: pointer;
    width: 98px;
    display: flex;
    justify-content: center;
`;

export const MailWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Mail = styled.span`
    font-weight: 600;
    cursor: pointer;
    color: ${(props) => props.theme.color.mainText};
    font-size: 16px;
    white-space: nowrap;
    @media only screen and (max-width: 991px) {
        font-size: 14px;
    }
`;

export const MailAction = styled.div``;

export const UserPhotoWrapper = styled.div`
    margin-right: 16px;
`;

export const Img = styled.img``;

export const ArrowImgWraper = styled.div`
    ${({ up }) => up && "transform: rotate(180deg) translateY(-4px);"}
`;

export const BurgerMenu = styled.div`
    display: none;
    margin-right: 38px;
    cursor: pointer;
    @media only screen and (max-width: 991px) {
        display: flex;
    }
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
