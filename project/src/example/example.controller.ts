import { Controller, Get, Post } from '@nestjs/common';
import { SomeService } from '../some/some.service';

@Controller('example')
export class ExampleController {

    constructor(private someService: SomeService) {}

    @Get('return')
    exampleReturnGet() {
        return this.someService.exampleReturnError();
    }

    @Post('return')
    exampleReturnPost() {
        return this.someService.exampleReturnError();
    }
    
    @Get('throw')
    exampleThrowGet() {
        return this.someService.exampleThrowError();
    }

    @Post('throw')
    exampleThrowPost() {
        return this.someService.exampleThrowError();
    }

    @Get('call-through/return')
    exampleReturnGetCallThrough() {
        return this.someService.exampleCallThroughReturnError();
    }

    @Post('call-through/return')
    exampleReturnPostCallThrough() {
        return this.someService.exampleCallThroughReturnError();
    }
    
    @Get('call-through/throw')
    exampleThrowGetCallThrough() {
        return this.someService.exampleCallThroughThrowError();
    }

    @Post('call-through/throw')
    exampleThrowPostCallThrough() {
        return this.someService.exampleCallThroughThrowError();
    }

}
