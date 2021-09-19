import React from "react";
import styled from "styled-components";
import * as S from "./styled";
 
    const Plug = styled.div`
        display: flex;
        justify-content: center;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        margin-right: ${(props) => props.right};
        margin-left: ${(props) => props.left};
    `;

    const Plus = styled.div`
        border: 1px solid white;
        background-color: ${(props) =>
            props.active
                ? props.theme.color.active
                : props.theme.color.secondary};
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

    const AddItemDisabledTitle = styled.div`
        color: ${(props) => props.theme.color.secondary};
        font-size: 12px;
        width: 312px;
    `;

    export const Title = styled.div`
        width: 176px;
        display: flex;
        @media only screen and (max-width: 991px) {
            min-width: 158px;
        };
        margin-left: 8.8px;
    `;

    export const ContentBox = styled.div`
        display: flex;
        align-items: center;
        @media only screen and (max-width: 991px) {
            min-width: 500px;
        } ;
    `;

function AddItem({
    active
}) {

    return (
        <S.AddWrapper>
            <Title>
                <Plug right="12px">
                    <Plus active={active} />
                </Plug>
                <S.AddTitle>Cоздать канал</S.AddTitle>
            </Title>

            <ContentBox>
                {active ? (
                    <>
                        <Plug width="8px" heigth="8px" left="14px" right="10px">
                            <S.EmptyLine />
                        </Plug>
                        <Plug width="66px" right="25px">
                            <S.EmptyLine />
                        </Plug>
                        <S.AddItemSeparator />

                        <Plug width="156px" left="16px" right="17px">
                            <S.EmptyLine />
                        </Plug>
                    </>
                ) : (
                    <AddItemDisabledTitle>
                        Перед созданием канала{" "}
                        <S.LinkTitle>оплатите подписку</S.LinkTitle>
                    </AddItemDisabledTitle>
                )}

                <S.AddItemSeparator />

                <Plug width="127px" left="19px" right="27px">
                    <S.EmptyLine />
                </Plug>

                <Plug width="105px">
                    <S.EmptyLine />
                </Plug>

                <Plug width="18px" left="13px">
                    <S.EmptyLine />
                </Plug>
            </ContentBox>
        </S.AddWrapper>
    );
}

export default AddItem;
//  <AddItemDisabledWrapper>
//      <Plug left="7px" right="14px">
//          <Plus active={active} />
//      </Plug>
//      <Plug right="32px">
//          <S.AddTitle>Cоздать канал</S.AddTitle>
//      </Plug>
//      <AddItemDisabledTitle>
//          Перед созданием канала <S.LinkTitle>оплатите подписку</S.LinkTitle>
//      </AddItemDisabledTitle>
//  </AddItemDisabledWrapper>;