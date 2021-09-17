import Menu from '../../components/menu'
import Header from '../../components/header';
import {
    Wrapper,
    WrapperContent,
} from "./styled";
import Content from '../../components/content';


function Main() {
    return (
        <Wrapper>
            <Menu />
            <WrapperContent>
                <Header/>
               <Content/>
            </WrapperContent>
        </Wrapper>
    );
}

export default Main;
