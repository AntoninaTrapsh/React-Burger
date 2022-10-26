import React from "react";
import { Tab, Logo, ProfileIcon, ListIcon, BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                <BurgerIcon type="secondary" /> Конструктор
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                <ListIcon type="secondary" /> Лента заказов
            </Tab>
            <Logo />
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                <ProfileIcon type="secondary" /> Личный кабинет
            </Tab>
        </div>
    )
}

export default AppHeader;
