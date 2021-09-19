import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: 6%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 991px) {
        margin-left: 3.2%;
    }
`;

export const ContentWraper = styled.div`
    width: 843px;
    margin-top: 30px;
    @media only screen and (max-width: 991px) {
        width: 720px;
    }
`;

export const Img = styled.img``;

export const User = styled.div`
    display: flex;
    align-items: center;
    width: inherit;
`;

export const UserLogo = styled.div`
    margin-left: 10px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const UserWrapper = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    height: 20px;
    max-width: 96px;
    white-space: nowrap;
`;

export const UserTitle = styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.color.mainText};
`;

export const Followers = styled.div`
    width: 48px;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const LogoImg = styled.img`
    @media only screen and (max-width: 991px) {
        width: 42px;
        height: 42px;
    }
`;

export const TitleImg = styled.img`
    @media only screen and (max-width: 991px) {
        width: 84px;
        height: 38px;
    }
`;
