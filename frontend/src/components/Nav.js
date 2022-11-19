import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react"
import { styled } from "@nextui-org/react"

export default function Nav() {
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            Jream Board
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="/recordaudio">Record Audio</Navbar.Link>
          <Navbar.Link href="/feed">Feed</Navbar.Link>
          <Navbar.Link href="/Profile">Profile</Navbar.Link>
          <Navbar.Link href="/Login">Login</Navbar.Link>
          <Navbar.Link href="/MeetUp">Meet Up</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}



const Layout = ({ children }) => (
    <Box
      css={{
        maxW: "100%"
      }}
    >
      {children}
      <Content />
    </Box>
  );
 const Content = () => (
    <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
      <Text h2></Text>
      <Text size="$lg">
       
      </Text>
      <Spacer y={1} />
      <Text size="$lg">
       
      </Text>
      <Spacer y={1} />
      <Text size="$lg">
      
      </Text>
      <Spacer y={1} />
      <Text size="$lg">
      
      </Text>
      <Spacer y={1} />
      <Text size="$lg">
      
      </Text>
      <Text size="$lg">
     
      </Text>
      <Spacer y={1} />
      <Text size="$lg">
        
      </Text>
      <Spacer y={1} />
    </Box>
  );

export const Box = styled("div", {
    boxSizing: "border-box",
  });