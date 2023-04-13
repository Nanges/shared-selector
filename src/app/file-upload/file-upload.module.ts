import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadDropCapabilityDirective } from './file-upload-drop-capability.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilenamePipe } from './filename.pipe';
import { MakeInteractiveDirective } from './make-interactive.directive';

@NgModule({
    declarations: [FileUploadComponent, FileUploadDropCapabilityDirective, MakeInteractiveDirective, FilenamePipe],
    imports: [CommonModule],
    exports: [FileUploadComponent, FileUploadDropCapabilityDirective, MakeInteractiveDirective, FilenamePipe],
})
export class FileUploadModule {}
