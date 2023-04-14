import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadDropCapabilityDirective } from './file-upload-drop-capability.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilenamePipe } from './filename.pipe';

@NgModule({
    declarations: [FileUploadComponent, FileUploadDropCapabilityDirective, FilenamePipe],
    imports: [CommonModule],
    exports: [FileUploadComponent, FileUploadDropCapabilityDirective, FilenamePipe],
})
export class FileUploadModule {}
