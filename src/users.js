import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Edit, EditButton, SimpleList, Datagrid, TextField, EmailField, SimpleForm, Create } from 'react-admin';
import { Filter, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<UserFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.phone}
                    tertiaryText={record => record.id}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

const UserName = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = props => (
    <Edit name={<UserName />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);
