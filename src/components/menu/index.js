import MenuList from "./MenuList";
import { Wrapper, Divider, Header, Main, Ellipce, Icon } from "./styled";
import Naming from "./img/Naming.svg";

function Menu() {

    return (
        <Wrapper>
            <Header>
                <Ellipce />
                <Icon src={Naming} height='17px' width='108px'/>
            </Header>
            <Divider />
            <Main>
                <MenuList />
            </Main>
        </Wrapper>
    );
}

export default Menu;
