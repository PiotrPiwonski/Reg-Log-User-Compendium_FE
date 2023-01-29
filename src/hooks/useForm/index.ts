import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

import { validate } from './validators';
import type { Validators } from './validators';

const setInitialErrors = <T extends Record<string, string>>(initialFormState: T) => {
  let initialErrors: Record<string, null> = {};

  for (const key of Object.keys(initialFormState)) {
    initialErrors[key] = null;
  }

  return initialErrors as Record<keyof T, null>;
};

const useForm = <T extends Record<string, string>>(initialFormState: T) => {
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<Record<keyof T, string | null>>(setInitialErrors(initialFormState));
  const [form, setForm] = useState<T>(initialFormState);

  const formValidators: Record<string, Validators> = {};
  const errorMessages: Record<string, string> = {};

  // Function that adds validators to the given form field and returns html tags
  const tag = (name: string, validators: Validators, errorMessage?: string) => {
    formValidators[name] = validators;
    if (errorMessage) {
      errorMessages[name] = errorMessage;
    }

    return {
      name: name,
      id: name,
    };
  };

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Validate field on the fly while user writes text
    if (formValidators[name]) {
      const defaultMessage = validate(value, formValidators[name]);

      if (defaultMessage) {
        setErrors((prev) => ({ ...prev, [name]: errorMessages?.[name] ?? defaultMessage }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  const submitForm = (userSubmit: FormEventHandler<HTMLFormElement>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let error = false;

    // Check for errors on the form
    for (const name of Object.keys(form)) {
      if (formValidators[name]) {
        const defaultMessage = validate(form[name], formValidators[name]);

        if (defaultMessage) {
          setErrors((prev) => ({ ...prev, [name]: errorMessages?.[name] ?? defaultMessage }));
          error = true;
        } else {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
          });
        }
      }
    }

    if (error) {
      setIsError(true);
    } else {
      setIsError(false);
      userSubmit(event);
    }
  };

  return { isError, errors, tag, updateValue, form, submitForm };
};

export default useForm;
