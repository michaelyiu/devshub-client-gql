
import ApolloClient, { InMemoryCache } from "apollo-boost";


const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
	request: (operation) => {
		const token = localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token ? token : null
			}
		})
	},
	// credentials: "include"
});

export default client;