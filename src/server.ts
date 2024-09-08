import "reflect-metadata"
import path from 'node:path'
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { AppointmentsResolver } from "./resolvers/Appointments-resolver"


async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            AppointmentsResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schemas', 'schema.gql')
    })
    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`HTTP server runing on ${url}`)
}

bootstrap()