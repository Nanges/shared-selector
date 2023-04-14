import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { idGenerator } from '../../utils/id-generator';

const idGen = idGenerator('act-file-upload');

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
    /**
     * Add multiple attribute on inner file input
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple
     */
    @Input()
    multiple: boolean = false;

    /**
     * Add accept attribute on inner file input
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    @Input()
    accept?: string;

    /**
     * Emit files on changes
     */
    @Output()
    readonly filesSelected = new EventEmitter<File[]>();

    readonly id: string;

    constructor() {
        this.id = idGen();
    }

    @HostListener('change', ['$event.target.files'])
    inputFileChange(files: FileList) {
        this.filesSelected.emit(Array.from(files));
    }
}
