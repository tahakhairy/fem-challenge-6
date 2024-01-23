import {
  Field as VeeField,
  Form as VeeForm,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  numeric,
  min,
  between,
  alpha_spaces as alphaSpaces,
  max,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeField", VeeField);
    app.component("VeeForm", VeeForm);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("numeric", numeric);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("between", between);
    defineRule("alpha_spaces", alphaSpaces);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: "Can't be blank",
          numeric: "Wrong format, numbers only",
          alpha_spaces: "Wrong format, characters only",
          max: "invalid number",
          min: "invalid number",
          between: "invalid number",
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `${ctx.field} is invalid`;

        return message;
      },
    });
  },
};
