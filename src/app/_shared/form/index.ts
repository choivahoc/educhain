import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../models/user.model';

export class FormShared {

    static FormLogin(fb: FormBuilder, model: ILogin = null): FormGroup {
        return fb.group({
            username: [model?.username || '', [Validators.required]],
            password: [model?.password || '', [Validators.required]],
            role: [model?.role || '', [Validators.required]],
        });
    }
}
