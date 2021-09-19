import MenuList from "./MenuList";
import { Wrapper, Divider, Header, Main, Img, LargeLogoWrapper, SmallLogoWrapper } from "./styled";
import NamingSvg from "./img/Naming.svg";

import LogoLargeSvg from "./img/LogoLarge.svg";
import LogoSmallSvg from "./img/LogoSmall.svg";

function Menu() {

    return (
        <Wrapper>
            <Header>
                <LargeLogoWrapper>
                    <Img src={LogoLargeSvg} height="50px" width="50px" />
                    <Img src={NamingSvg} height="17px" width="108px" />
                </LargeLogoWrapper>

                <SmallLogoWrapper>
                    <Img src={LogoSmallSvg} height="32px" width="32px" />
                </SmallLogoWrapper>
            </Header>
            <Divider />
            <Main>
                <MenuList />
            </Main>
        </Wrapper>
    );
}

export default Menu;
