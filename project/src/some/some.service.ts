import { ImATeapotException, Injectable } from '@nestjs/common';
import { SomeOtherService } from '../some-other/some-other.service';

@Injectable()
export class SomeService {
    
    constructor(private someOtherService: SomeOtherService) {}

    exampleThrowError() {
        throw new ImATeapotException('thrown teapot exception!');
    }

    exampleReturnError() {
        return new ImATeapotException('returned teapot exception!');
    }

    exampleCallThroughThrowError() {
        return this.someOtherService.exampleThrowError()
    }

    exampleCallThroughReturnError() {
        return this.someOtherService.exampleReturnError()
    }

}
