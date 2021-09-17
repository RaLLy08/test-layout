import styled from "styled-components";


export const Wrapper = styled.div`
    height: 115px;
    border: solid;
    box-sizing: border-box;
    border-color: ${(props) => props.theme.color.primary};
    border-radius: 8px;
    display: flex;
    width: 100%;
    align-items: center;
`;

export const InstImg = styled.img`
    width: 56px;
    height: 56px;
`;

export const InstTitleImg = styled.img`
    width: 111px;
    height: 56px;
`;

export const CardTitle = styled.div`
    min-width: 180px;
    margin-left: 18px;
    display: flex;
    align-self: center;
    justify-content: space-between;
`;

export const ChannelsValues = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: end;
`;

export const ChannelsValuesFirst = styled.span`
    color: ${(props) => props.theme.color.active};
`;

export const ChannelsValuesSecond = styled.span`
    color: ${(props) => props.theme.color.mainText};
`;

export const Title = styled.div`
    color: ${(props) =>
        props.active ? props.theme.color.active : props.theme.color.secondary};
    font-size: 14px;
    text-align: end;
`;

export const Value = styled.div`
    color: ${(props) =>
        props.active ? props.theme.color.danger : props.theme.color.mainText};
    font-size: 16px;
    font-weight: 600;
    text-align: end;
`;

export const Separator = styled.div`
    width: 1px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${(props) => props.theme.color.primary};
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    height: 46px;
    width: 100%;
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

export const ChannelsTitle = styled.div`
    display: flex;
    justify-content: end;
`;

export const CardActions = styled.div`
    display: flex;
    margin-right: 25px;
    min-width: 52px;
    justify-content: end;
`;

export const SettingsButton = styled.div`
    display: flex;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    cursor: pointer;
`;


export const SettingsIcon = styled.img`
    align-self: center;
    width: 26px;
    height: 5px;
`;

export const ContentRight = styled.div`
    display: flex;
    width: 54%;
`;

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 46%;
`;

