import React from "react";
import styled from "styled-components";
import * as S from "./styled";
 


function AddItem({
    active
}) {

    return (
        <S.AddWrapper>
            <S.Title>
                <S.Plug right="12px">
                    <S.Plus active={active} />
                </S.Plug>
                <S.AddTitle>Cоздать канал</S.AddTitle>
            </S.Title>

            <S.ContentBox>
                {active ? (
                    <>
                        <S.Plug width="8px" heigth="8px" left="14px" right="10px">
                            <S.EmptyLine />
                        </S.Plug>
                        <S.Plug width="66px" right="25px">
                            <S.EmptyLine />
                        </S.Plug>
                        <S.AddItemSeparator />

                        <S.Plug width="156px" left="16px" right="17px">
                            <S.EmptyLine />
                        </S.Plug>
                    </>
                ) : (
                    <S.AddItemDisabledTitle>
                        Перед созданием канала{" "}
                        <S.LinkTitle>оплатите подписку</S.LinkTitle>
                    </S.AddItemDisabledTitle>
                )}

                <S.AddItemSeparator />

                <S.Plug width="127px" left="19px" right="27px">
                    <S.EmptyLine />
                </S.Plug>

                <S.Plug width="105px">
                    <S.EmptyLine />
                </S.Plug>

                <S.Plug width="18px" left="13px">
                    <S.EmptyLine />
                </S.Plug>
            </S.ContentBox>
        </S.AddWrapper>
    );
}

export default AddItem;
