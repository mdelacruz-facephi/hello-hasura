# Hasura Action

Action definition:
```gql
type Mutation {
  updateNotification (
    todo: UpdateNotificationInput!
  ): UpdateNotificationOutput
}
```

New types definition:
```gql
input UpdateNotificationInput {
  id : uuid!
  text : String!
  done : Boolean!
}

type UpdateNotificationOutput {
  success : Boolean!
}
```

# Sample mutation

Mutation:
```gql
mutation UpdateNotificationMutation($id: uuid!, $text: String!, $done: Boolean!) {
  updateNotification(todo: {id: $id, text: $text, done: $done}) {
    success
  }
}
```

Variables:
```json
{
  "id": "14f11df6-28dc-46d6-8478-770b943fd7a5",
  "text": "sample",
  "done": true
}
```