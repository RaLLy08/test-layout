import styled from "styled-components";

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #9292a6;
    opacity: 10%;
`;

export const Wrapper = styled.div`
    min-width: 290px;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
`;

export const Header = styled.div`
    height: 95px;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export const Ellipce = styled.div`
    background-color: #7b82ff;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
`;

export const Main = styled.div`
    height: 100%;
    padding: 30px 39px 0px 20px;
`;

export const List = styled.div`
    height: 100%;
    width: 100%;
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

export const Img = styled.img`
`;
