import * as yup from 'yup';

import { ItemFormValues } from 'types';

export const validationSchema = yup.object().shape({
  name: yup.string().required(),
  count: yup.number().required(),
  category: yup.string().optional(),
});

export const initialValues: ItemFormValues = { name: '', count: 1 };
