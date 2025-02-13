// Basic types that can be directly converted to FormData
type FormDataPrimitive = string | number | boolean | null | undefined | File | Blob | Date;

type FormDataArray = FormDataConvertible[];

// Type to handle nested objects
type FormDataObject = { [key: string]: FormDataConvertible };

// Union of all possible types that can be converted to FormData
type FormDataConvertible = FormDataPrimitive | FormDataArray | FormDataObject;

// Helper type to make any type compatible with FormData used in the Inertia JS `useForm()` function
export type FormDataCompatible<T> = T extends FormDataConvertible
    ? T
    : T extends object
      ? {
            [K in keyof T]: T[K] extends (infer U)[] ? FormDataCompatible<U>[] : FormDataCompatible<T[K]>;
        }
      : FormDataConvertible;
