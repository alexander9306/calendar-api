import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { EventsModule } from "./events/events.module";

const isDevelopment = () => process.env.NODE_ENV === "development";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: isDevelopment() ? ".env.development" : ".env.production",
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: join(process.cwd(), "database/data.sqlite3"),
      autoLoadEntities: true,
      synchronize: isDevelopment(),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      debug: false,
      playground: isDevelopment(),
    }),
    EventsModule,
  ],
})
export class AppModule {}
