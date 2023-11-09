import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import { required, email, alpha_spaces, integer } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('email', email)
    defineRule('alpha_spaces', alpha_spaces)
    defineRule('integer', integer)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field is required`
        }

        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `This field is invalid`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
