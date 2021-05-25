import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { SomeService } from './some/some.service';
import { SomeOtherService } from './some-other/some-other.service';

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
  providers: [AppService, SomeService, SomeOtherService],
})
export class AppModule {}
