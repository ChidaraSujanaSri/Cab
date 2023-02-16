import {PipeTransform,Pipe} from '@angular/core'
import { Cab } from './cab';

@Pipe({
    name:'mypipe'
})
export class Pipe1 implements PipeTransform{

    transform(value: any) {

        let about:string = value+'';
        let formattedAbout:string = '';

        formattedAbout = about.slice(0,9)+'....';

        console.log('pipe method' + formattedAbout);
        return formattedAbout;



    }

}
