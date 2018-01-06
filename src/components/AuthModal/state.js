// @flow
type State = {|
  authModal: {|
    __typename: string,
    visible: boolean,
  |},
|};

export const defaults: State = {
  authModal: {
    __typename: 'AuthModal',
    visible: false,
  },
};

export const resolvers = {
  Query: {
    visible: (parent: *, args: *, { cache }: *, info: *) => {
      console.log('cache =======', cache);
      console.log('parent ====', parent);
      return {};
    },
  },
};
