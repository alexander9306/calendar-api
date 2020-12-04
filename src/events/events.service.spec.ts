import { Test, TestingModule } from "@nestjs/testing";
import { EventsService } from "./events.service";

describe("EventsService", () => {
  let service: EventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: EventsService, useValue: {} }],
    }).compile();

    service = module.get<EventsService>(EventsService);
  });

  it("Should be defined after initialized.", () => {
    expect(service).toBeDefined();
  });
});
