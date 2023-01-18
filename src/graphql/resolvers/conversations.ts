import { graphQLContext } from "../../util/types";

const resolvers = {
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantsIds: Array<string> },
      context: graphQLContext
    ) => {
      console.log("createConversation ", args.participantsIds);
    },
  },
};

export default resolvers;
