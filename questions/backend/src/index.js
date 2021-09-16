require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Database - altere o link do servidor para usar outro
const dbUri = `mongodb+srv://fernando:nunes@cluster0.xrmxt.mongodb.net/teste?retryWrites=true&w=majority`;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(dbUri, dbOptions)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Databased failed: ", error));
// GraphQL
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((error) => console.log("Server failed: ", error));