import styled from "styled-components";


export const Wrapper = styled.div`
    height: 57px;
    width: 100%;
    background-color: ${(props) =>
        props.inactive
            ? props.theme.color.inactive
            : props.theme.color.primary};
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
`;

export const Content = styled.div`
 
`;

export const ContentBox = styled.div`
    
`;
