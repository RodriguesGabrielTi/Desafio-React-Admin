import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';
import { TodoList, TodoEdit, TodoCreate } from './todos';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import TodoIcon from '@material-ui/icons/DoneOutline';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        <Resource name="todos" list={TodoList} edit={TodoEdit} create={TodoCreate} icon={TodoIcon} />
    </Admin>
);

export default App;
