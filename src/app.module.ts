import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: join(process.cwd(), "database/data.sqlite3"),
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === "development",
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      debug: false,
      playground: process.env.NODE_ENV === "development",
    }),
    EventsModule,
  ],
})
export class AppModule {}
