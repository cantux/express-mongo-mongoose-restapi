import * as React from 'react';

import { UserModel } from '../../models/User';

import Friend from './Friend';

interface FriendListProps {
  friends: UserModel[];
}

export default class FriendList extends React.Component<FriendListProps, {}> {
  render () {
    const friendList = this.props.friends.map((friend, index) => (<Friend key={index} friend={friend}/>));
    return (
      <div>
        {
          friendList.length > 0 ?
            (
              <div>
                Friends:
                {friendList}
              </div>
            ) : <div>Friends Yok</div>

        }
      </div>
    );
  }
}