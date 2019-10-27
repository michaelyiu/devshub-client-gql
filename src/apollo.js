
import ApolloClient, { InMemoryCache } from "apollo-boost";


const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
	resolvers: {
		Mutation: {
			changeValue: (_, args, { cache }) => {
				cache.writeData({
					data: { isAuth: true }
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
client.cache.writeData({ data: { isAuth: false } })


export default client;