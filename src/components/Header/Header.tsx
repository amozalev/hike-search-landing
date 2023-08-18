import * as S from './HeaderStyles';
import * as T from '../Text/TextStyles';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from '../Menu/Menu';
import Container from '../Container/Container';
import { LogoIcon } from '../Icons/LogoIcon';
import HikeSearchForm from '../HikeSearchForm/HikeSearchForm';
import { Button } from '../Button/Button';

const Header = () => {
    return (
        <S.StyledHeader>
            <Container paddingTop={20}>
                <div className="menu-wrapper">
                    <LogoIcon />
                    <Menu />
                    <BurgerMenu />
                </div>
                <div className="title">
                    <T.Title1 color="#fdfdfd">
                        Насладись прогулкой в горах с командой единомышленников
                    </T.Title1>
                </div>
                <HikeSearchForm className="hike-search-form" />
                <div className="hike-search-btn">
                    <Button title="Найти программу" color="#1A3E3E" large />
                </div>
            </Container>
        </S.StyledHeader>
    );
};

export default Header;
