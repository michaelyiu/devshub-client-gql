
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { persistCache } from "apollo-cache-persist";

import { ISLOGGEDIN_QUERY } from "./components/gql/Queries"

const cache = new InMemoryCache();
persistCache({
	cache,
	storage: localStorage
})
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache,
	resolvers: {
		Mutation: {
			changeValue: (_, args, { cache }) => {
				const { isAuth } = cache.readQuery({ query: ISLOGGEDIN_QUERY })
				cache.writeData({
					data: { isAuth: !isAuth }
				})
				return null;
			}
		}
	},

	request: (operation) => {
		const token = localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token ? token : null
			}
		})
	},
});

//set default values
// client.cache.writeData({ data: { isAuth: false } })


export default client;