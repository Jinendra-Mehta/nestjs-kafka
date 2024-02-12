import { Injectable } from '@nestjs/common';
import { ProducerService } from './producer/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'Hello Humans',
        },
      ],
    });
    return 'Hello World!';
  }
}
