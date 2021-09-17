import styled from "styled-components";

export const Wrapper = styled.div`
    height: 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 6%;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.color.primary};
`;

export const Main = styled.div`
    
`;

export const MainTitle = styled.div`
    font-size: 22px;
    font-weight: 600;
`;


export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Balance = styled.div`
    height: 46px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 37px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 8px;
    display: flex;
    align-items: center;
`;

export const BalanceTitle = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 14px;
    margin-right: 16px;
`;

export const BalanceValue = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

export const BalanceCurrency = styled.span`

`;

export const PeriodTitle = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: 14px;
    font-weight: 500;
    margin-right: 30px;
`;

export const Notifications = styled.div`
    margin-right: 32px;
    cursor: pointer;
`;

export const RingNotifyWrapper = styled.div`
    min-width: 29px;
    min-height: 32px;
`;

export const MailWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Mail = styled.span`
    font-weight: 600;
    margin-right: 10px;
    cursor: pointer;
    color: ${props => props.theme.color.mainText};
`;

export const UserPhotoWrapper = styled.div`
    margin-right: 16px;
    display: flex;
`;

export const UserPhotoIcon = styled.img`
    width: 32px;
    height:32px;
`;


export const Icon = styled.img`
`;

export const ArrowIcon = styled.img`
    ${({ up }) => up && "transform: rotate(180deg);"}
    width: 31px;
    height: 7px;
    cursor: pointer;
`;


