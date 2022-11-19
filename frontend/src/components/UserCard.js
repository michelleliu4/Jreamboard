import { Card, Grid, Text, Link } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";

export default function UserCard({ data }) {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              username: {data.username}
            </Text>
          </Grid>
          <Grid xs={12}>
            {data.firstName} {data.LastName}
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Email: {data.email}
        </Text>
      </Card.Body>
    </Card>
  );
}
