import * as S from "./styled";

function ListItem({ inactive }) {
    return (
        <S.Wrapper inactive={inactive}>
            <S.Content>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
                <S.ContentBox></S.ContentBox>
            </S.Content>
        </S.Wrapper>
    );
}

export default ListItem;
