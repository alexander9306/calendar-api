import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Event } from "./entities/event.entity";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  create(createEventInput: CreateEventInput) {
    const event = this.eventsRepository.create(createEventInput);
    return this.eventsRepository.save(event);
  }

  findAll() {
    return this.eventsRepository.find({
      order: { updatedAt: "ASC" },
    });
  }

  findOne(id: string) {
    return this.eventsRepository.findOneOrFail(id);
  }

  async update(updateEventInput: UpdateEventInput) {
    await this.eventsRepository.save(updateEventInput);
    return this.eventsRepository.findOne(updateEventInput.id);
  }

  async remove(id: string) {
    const event = await this.eventsRepository.findOneOrFail(id);
    await this.eventsRepository.delete(id);
    return event;
  }
}
