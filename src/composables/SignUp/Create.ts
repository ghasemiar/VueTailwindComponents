import { useUserValidator } from "./FormValidator";
import { computed } from "vue";
export const useCreateUser = () => {
  const { schemaCreate } = useUserValidator();
  const getSchema = computed(() => {
    return schemaCreate;
  });
  const submit = (body) => {
    console.log(body);
  };
  return { submit, schema: getSchema };
};
