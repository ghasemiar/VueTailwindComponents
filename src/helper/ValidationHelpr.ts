import { unref } from "vue";
export const validationHelper = (attributeLabels) => {
  const getType = (attribute) => {
    if (unref(attributeLabels)[attribute]?.type) {
      return unref(attributeLabels)[attribute].type;
    }
    return "text";
  };
  const getName = (attribute) => {
    if (unref(attributeLabels)[attribute]?.name) {
      return unref(attributeLabels)[attribute].name;
    }
    return "name";
  };
  const getPlaceholder = (attribute) => {
    if (unref(attributeLabels)[attribute]?.placeholder) {
      return unref(attributeLabels)[attribute].placeholder;
    }
    return "";
  };
  const getInputProps = (inputProp) => {
    return {
      type: getType(inputProp),
      name: getName(inputProp),
      placeholder: getPlaceholder(inputProp),
    };
  };
  return { getInputProps };
};
