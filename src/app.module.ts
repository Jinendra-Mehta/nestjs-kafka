import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { ProducerService } from './producer/producer.service';
import { ConsumerService } from './consumer/consumer.service';
import { TestConsumer } from './test-consumer';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService, ProducerService, ConsumerService, TestConsumer],
})
export class AppModule {}
