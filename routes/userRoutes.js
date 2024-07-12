const express = require('express');
const router = express.Router();
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const { ApolloServer, gql } = require('apollo-server-express');

// Initialize Apollo Server
const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start(); // Ensure the server is started before using it
    server.applyMiddleware({ app: router }); // Apply middleware to the router

    // POST /users/register
    router.post('/register', async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const { data, errors } = await server.executeOperation({
                query: gql`
                    mutation {
                        createUser(input: { name: "${name}", email: "${email}", password: "${password}" }) {
                            id
                            email
                            name
                            password
                        }
                    }
                `
            });
            if (errors) {
                return res.status(500).send({ message: errors });
            }
            res.status(201).send(data);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    });

    // GET /users (this should have unique path)
    router.get('/all', async (req, res) => {
        try {
            const { data, errors } = await server.executeOperation({
                query: gql`
                    query {
                        getAllUsers {
                            id
                            name
                            email
                            password
                        }
                    }
                `
            });
            if (errors) {
                return res.status(500).send({ message: errors });
            }
            res.status(200).send(data);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    });
};

startServer().catch(err => console.error('Failed to start server', err));

module.exports = router;
