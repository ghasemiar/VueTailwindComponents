import { Form, FormActions } from 'vee-validate';
import { ref, unref } from 'vue';
import { PropType } from 'vue';
export const formProps = {
  schema: {
    type: Object as PropType<InstanceType<typeof Form.schema>>,
    required: true,
  },
  submitting: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  onDataFetched: {
    type: Function,
  },
  isUpdate: {
    type: Boolean,
  },
  id: {
    type: String || Number,
  },
};
export const formEmits = ['submit'];
export const useFormLogic = <DTO>(
  {
    onDataFetched,
    keepValues = false,
  }: { onDataFetched: any; keepValues?: boolean },
  { emit }: any
) => {
  const formRef = ref<any>();
  const values = ref<DTO>();
  if (typeof unref(onDataFetched) === 'function') {
    unref(onDataFetched)((data: DTO) => {
      if (unref(formRef) && data != undefined) {
        unref(formRef).setValues(data);
        if (keepValues) {
          values.value = data;
        }
      }
    });
  }
  let beforeSubmit: (data) => Promise<Record<string, any>>;
  const onSubmit = async (...args: [DTO, FormActions<any>]) => {
    let data = args[0];
    if (beforeSubmit != undefined) {
      const append = await beforeSubmit(data);
      data = { ...data, ...append };
    }
    emit('submit', data, args[1]);
  };
  return {
    onSubmit,
    formRef,
    beforeSubmit: (fn: typeof beforeSubmit) => {
      beforeSubmit = fn;
    },
    values,
  };
};
