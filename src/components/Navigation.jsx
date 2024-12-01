import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Item } = Menu;

const Navigation = () => (
    <Menu mode="horizontal">
        <Item key="home">
            <Link to="/todo-list">Home</Link>
        </Item>
        <Item key="done-list">
            <Link to="/done-list">Done List</Link>
        </Item>
    </Menu>
);

export default Navigation;