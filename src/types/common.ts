export type FormikFieldProps<T> = T & { name: string };

export type NonUndefined<T> = T extends undefined ? never : T;
