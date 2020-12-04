import { Test, TestingModule } from "@nestjs/testing";
import { EventsResolver } from "./events.resolver";
import { EventsService } from "./events.service";

describe("EventsResolver", () => {
  let resolver: EventsResolver;

  const mockEventsService: Partial<EventsService> = {
    async create(event) {
      const date = new Date("2020-11-10T16:15:41.030Z");
      return {
        id: "1",
        name: event.name,
        description: event.description,
        date: event.date,
        createdAt: date,
        updatedAt: date,
      };
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsResolver,
        { provide: EventsService, useValue: mockEventsService },
      ],
    }).compile();

    resolver = module.get<EventsResolver>(EventsResolver);
  });

  it("Should be defined after initialized", () => {
    expect(resolver).toBeDefined();
  });

  it("Should return the created date with the name that is passed", async () => {
    const result = await resolver.createEvent({
      name: "Night Club",
      description: "Meeting Francisco at the night club.",
      date: new Date(""),
    });
    expect(result.name).toBe("Night Club");
  });
});
