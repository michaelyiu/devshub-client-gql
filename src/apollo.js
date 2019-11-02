
import ApolloClient, { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	request: async operation => {
		const token = window.localStorage.getItem('token');
		operation.setContext({
			headers: {
				Authorization: token ? token : ''
			}
		})
	},
});

export default client;