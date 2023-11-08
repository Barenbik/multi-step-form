import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage as VeeError } from 'vee-validate'
import { required, email, alpha_spaces, integer } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', VeeError)

    defineRule('required', required)
    defineRule('email', email)
    defineRule('alpha_spaces', alpha_spaces)
    defineRule('integer', integer)
  }
}
