
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";

import { ISLOGGEDIN_QUERY } from "./components/gql/Queries"

// const cache = new InMemoryCache();
const token = localStorage.getItem('token')
// persistCache({
// 	cache,
// 	storage: localStorage
// })
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	// cache,
	resolvers: {
		Mutation: {
			changeValue: (_, args, { cache }) => {
				const { isAuth } = token ? cache.readQuery({ query: ISLOGGEDIN_QUERY }) : false;
				// cache.writeData({
				// 	data: { isAuth: !isAuth }
				// })
				return null;
			}
		}
	},

	request: async (operation) => {
		operation.setContext({
			headers: {
				authorization: token ? token : ''
			}
		})
	},
});

//set default values
// client.cache.writeData({ data: { isAuth: token ? true : false } })


export default client;