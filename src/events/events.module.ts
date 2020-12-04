import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsResolver } from "./events.resolver";
import { Event } from "./entities/event.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventsResolver, EventsService],
})
export class EventsModule {}