import styled from "styled-components";

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #9292a6;
    opacity: 10%;
`;

export const Wrapper = styled.div`
    min-width: 290px;
    background-color: ${(props) => props.theme.color.primary};
    @media only screen and (max-width: 1280px) {
        min-width: 62px;
        max-width: 62px;
    }
    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

export const Header = styled.div`
    height: 95px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
`;

export const LargeLogoWrapper = styled.div`
    @media only screen and (max-width: 1280px) {
        display: none;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 178px;
    padding-left: 5px;
`;

export const SmallLogoWrapper = styled.div`
    @media only screen and (max-width: 1280px) {
        display: block;
    }
    display: none;
`;

export const Main = styled.div`
    padding: 30px 10px 0px 10px;
`;

export const List = styled.div`
    @media only screen and (max-width: 1280px) {
        padding: 0;
    }
    padding-right: 29px;
    padding-left: 10px;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 40px;
    width: 100%;
    ${({ active }) =>
        active &&
        `
            background: #dde0ff;
            border-radius: 8px;
        `};
`;

export const ListTitle = styled.div`
    @media only screen and (max-width: 1280px) {
        display: none;
    }
    font-size: 14px;
    color: ${(props) => props.theme.color.mainText};
    ${({ thick }) =>
        thick &&
        `
            font-weight: 600;
        `};
`;

export const ListIconWrapper = styled.div`
    width: 42px;
    text-align: center;
`;

export const Img = styled.img``;
