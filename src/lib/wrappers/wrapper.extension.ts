import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzFormlyCommonProps } from "@segalino-front/ngx-nz-formly";

export const wrapperExtension = (
  field: FormlyFieldConfig<NzFormlyCommonProps>,
) => {
  if (
    !field.props ||
    (field.wrappers && field.wrappers.indexOf("addon-wrapper") !== -1)
  ) {
    return;
  }

  if (field.props.addonBefore || field.props.addonAfter) {
    field.wrappers = [...(field.wrappers || []), "addon-wrapper"];
  }
};
