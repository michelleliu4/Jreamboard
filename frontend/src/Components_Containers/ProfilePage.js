import React from 'react'
import { useState } from 'react'

const getFilteredItems = (query, items) => {
    if (!query) {
        return items;
    }
    return items.filter((username) => username.name.includes(query));
};

export default function ProfilePage() {

    const [query, setQuery] = useState("");
    const users = [{name: 'Quang Nguyen'}, {name: 'Madeline Chew'}];
    const items = users;

    const filteredItems = getFilteredItems(query, users);

  return (
      <div>
        <label>Search</label>
        <input className="ProfileStyleType" type= "text" onChange={e => setQuery(e.target.value)}/>
        <ul>{filteredItems.map((value) => (
            <h1 key={value.name}>{value.name}</h1>
        ))}</ul>
      </div>
  )
}
