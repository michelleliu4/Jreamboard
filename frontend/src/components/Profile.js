import React, {useEffect} from 'react';
import { Input } from "@nextui-org/react";
import { useState } from 'react'
import { Card, Grid, Text, Link } from "@nextui-org/react";
import API from '../services/apiClient';
import UserCard from './UserCard';

export default function Profile() {

    const[search, setSearch] = useState('');

    const [profiles, setProfiles] = useState(null)
    const getFilteredItems = (query, items) => {
        if (!query) {
            return items;
        }
        return items.filter((username) => username.firstName.toLowerCase().includes(query?.toLowerCase()));
    };
    const [query, setQuery] = useState("");
    const filteredItems = getFilteredItems(query, profiles);
    useEffect(() => {
      async function fetchUsers(){
        const {data} = await API.fetchUsers()
        console.log(data)
        setProfiles(data)
      }
      fetchUsers()
    }, [])

    console.log('search: ', search);
  return (
    <div className='Search-bar-app'>
        <center>
        <label htmlFor="searchName">Search</label>
        <Input 
        type="text"
        id = "searchName"
        value={search} 
        onChange={e => setSearch(e.target.value)}></Input> </center>
        <Grid.Container gap={2} justify="center">
        {filteredItems?.map(profile => {
        return <Grid xs={4}><UserCard data={profile} /></Grid>
      })} 
    </Grid.Container>
    </div>
  )  
}