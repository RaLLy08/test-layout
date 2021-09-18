import React from "react";
import Popup from "reactjs-popup";
import BalanceAlert from "./BalanceAlert";

import { ShowMoreWraper, SettingsAction } from "./styled";

function ShowMore() {
    return (
        <ShowMoreWraper>
            <Popup
                trigger={(open) => (
                    <SettingsAction>Уровнять платежи каналов</SettingsAction>
                )}
            >
                <BalanceAlert />
            </Popup>
            <SettingsAction>Перезагрузить все</SettingsAction>
            <SettingsAction>Отключить все</SettingsAction>
            <SettingsAction>Удалить все</SettingsAction>
        </ShowMoreWraper>
    );
}

export default ShowMore;
