import { ImATeapotException, Injectable } from '@nestjs/common';

@Injectable()
export class SomeOtherService {
    
    exampleThrowError() {
        throw new ImATeapotException('thrown teapot exception!');
    }

    exampleReturnError() {
        return new ImATeapotException('returned teapot exception!');
    }

}
