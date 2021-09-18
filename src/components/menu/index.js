import MenuList from "./MenuList";
import { Wrapper, Divider, Header, Main, Ellipce, Img } from "./styled";
import NamingSvg from "./img/Naming.svg";

function Menu() {

    return (
        <Wrapper>
            <Header>
                <Ellipce />
                <Img src={NamingSvg} height="17px" width="108px" />
            </Header>
            <Divider />
            <Main>
                <MenuList />
            </Main>
        </Wrapper>
    );
}

export default Menu;
