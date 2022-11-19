import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import API from "../services/apiClient";
import FeedCard from "./FeedCard";
import { Grid, Card, Text } from "@nextui-org/react";

export default function Feed() {
  return (
    <>
    <br></br>
    <br></br>
    <Content />
    </>
  );
}

function Content(){
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    async function fetchPosts(){
      const {data} = await API.fetchPosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])
  
  return (
    <div className='Login-app'>
      <div className='flex justify-center items-center'>
      <Grid.Container gap={4} justify="center">
      {posts?.map((post, index) => {
        return <Grid key={index} xs={4}><FeedCard key={post.id} post={post} /></Grid>
      })} 
      </Grid.Container>
      </div>
    </div>
  )
}