import * as React from 'react';
import { UserModel } from '../../models/User';

interface FriendProps {
  friend: UserModel;
}
export default class Friend extends React.Component<FriendProps, {}> {
  render () {
    return (
      <p>Friend: {JSON.stringify(this.props.friend)}</p>
    );
  }
}