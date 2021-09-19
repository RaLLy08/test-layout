import React from "react";
import styled from "styled-components";
import * as S from "./styled";
 

function AddItem({
    active
}) {
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

    const AddItemDisabledWrapper = styled.div`
        width: 497px;
        display: flex;
        align-items: center;
    `;

    const AddItemDisabledTitle = styled.div`
       color: ${props => props.theme.color.secondary};
       font-size: 12px;
    `;

    return (
        <S.AddWrapper>
            <S.Content>
                {active ? (
                    <>
                        <S.UserInfo>
                            <Plug left="7px" right="14px">
                                <Plus active={active} />
                            </Plug>
                            <S.AddTitle> Cоздать канал</S.AddTitle>
                        </S.UserInfo>
                        <S.StatusWrapper>
                            <Plug width="8px" heigth="8px" right="10px">
                                <S.EmptyLine />
                            </Plug>
                            <Plug width="66px">
                                <S.EmptyLine />
                            </Plug>
                        </S.StatusWrapper>
                        <S.AddItemSeparator />

                        <S.DialogsWrapper>
                            <S.EmptyLine />
                        </S.DialogsWrapper>
                    </>
                ) : (
                    <AddItemDisabledWrapper>
                        <Plug left="7px" right="14px">
                            <Plus active={active} />
                        </Plug>
                        <Plug right="32px">
                            <S.AddTitle>Cоздать канал</S.AddTitle>
                        </Plug>
                        <AddItemDisabledTitle>
                            Перед созданием канала{" "}
                            <S.LinkTitle>оплатите подписку</S.LinkTitle>
                        </AddItemDisabledTitle>
                    </AddItemDisabledWrapper>
                )}
                <S.AddItemSeparator />

                <S.PaymentWrapper>
                    <Plug width="129px" right="27px">
                        <S.EmptyLine />
                    </Plug>
                    <Plug width="107px">
                        <S.EmptyLine />
                    </Plug>
                </S.PaymentWrapper>
            </S.Content>
            <S.Actions>
                <Plug width="18px" left="auto">
                    <S.EmptyLine />
                </Plug>
            </S.Actions>
        </S.AddWrapper>
    );
}

export default AddItem;
