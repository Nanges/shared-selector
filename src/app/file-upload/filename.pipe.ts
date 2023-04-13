import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filename',
})
export class FilenamePipe implements PipeTransform {
    transform(file: File): string {
        return file.name;
    }
}
