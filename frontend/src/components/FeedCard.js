import { Card, Grid, Text, Link } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";

export default function FeedCard({ post }) {
    console.log(post?.file)
    const blob = new Blob([getByteArray(post?.file.size)], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    console.log(url)
    const path = `http://127.0.0.1:8887/${post?.file.filename}`
    function getByteArray(data) {
      return new Uint8Array(data);
    }
  return (
    <Card css={{ p: "$6", minWidth: "400px" }}>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Title: {post.title}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>Author: AUTHOR</Text>
          </Grid>
          <Grid xs={12}>
            TAGS: <Badge>Sports</Badge> <Badge>Chess</Badge>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Content: {post.content}
        </Text>
        <audio
         id='audio'
         controls
         src={post ? path : null}
         >
        </audio>
      </Card.Body>
    </Card>
  );
}
