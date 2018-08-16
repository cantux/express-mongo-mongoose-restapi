import { UserModel } from '../../models/User';

export default (state: UserModel[] = [], action: any) => {
  switch (action) {
    case '': {
      return state;
    }
    default: {
      return state;
    }
  }
};