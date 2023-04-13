import { Directive, HostBinding, HostListener } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Directive({
    selector: 'app-file-upload',
    host: {
        '[draggable]': 'true',
    },
})
export class FileUploadDropCapabilityDirective {
    private _dragover: boolean = false;

    @HostBinding('class.drag-over')
    get dragover() {
        return this._dragover;
    }

    constructor(private fileUploadCmpnt: FileUploadComponent) {}

    @HostListener('dragover', ['$event'])
    onDragover(e: DragEvent) {
        e.preventDefault();
        this._dragover = true;
    }

    @HostListener('dragleave')
    onDragLeave() {
        this._dragover = false;
    }

    @HostListener('drop', ['$event'])
    onDrop(e: DragEvent) {
        e.preventDefault();
        this._dragover = false;

        if (e.dataTransfer?.files) {
            this.fileUploadCmpnt.filesSelected.emit(Array.from(e.dataTransfer.files));
        }
    }
}
