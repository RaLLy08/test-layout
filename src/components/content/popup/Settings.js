import React from "react";

import DeleteSvg from '../img/Delete.svg'
import EditSvg from '../img/Edit.svg'
import RebootSvg from '../img/Reboot.svg'
import TurnoffSvg from '../img/Turnoff.svg'

import {
    SettingsWraper,
    SettingsAction,
    Img,
    SettingsActionBox,
    SettingsIcon,
} from "./styled";

function Settings() {
    return (
        <SettingsWraper>
            <SettingsActionBox>
                <SettingsIcon>
                    <Img src={EditSvg} width="11px" height="11px" />
                </SettingsIcon>
                <SettingsAction>Редактировать</SettingsAction>
            </SettingsActionBox>
            <SettingsActionBox>
                <SettingsIcon>
                    <Img src={RebootSvg} width="12px" height="12px" />
                </SettingsIcon>
                <SettingsAction>Перезагрузить</SettingsAction>
            </SettingsActionBox>
            <SettingsActionBox>
                <SettingsIcon>
                    <Img src={TurnoffSvg} width="11px" height="13px" />
                </SettingsIcon>
                <SettingsAction>Отключить</SettingsAction>
            </SettingsActionBox>
            <SettingsActionBox>
                <SettingsIcon>
                    <Img src={DeleteSvg} width="12px" height="12px" />
                </SettingsIcon>
                <SettingsAction>Удалить</SettingsAction>
            </SettingsActionBox>
        </SettingsWraper>
    );
}

export default Settings;
