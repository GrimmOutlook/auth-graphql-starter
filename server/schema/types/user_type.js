const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: {
      type: GraphQLString,
    }
    // no password field b/c do not want to expose that to other users
  }
});

module.exports = UserType;
