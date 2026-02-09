import {
  FieldValues,
  FieldError,
  get,
  Path,
  RegisterOptions,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import Input from "@/components/ui/Input";

interface Props<T extends FieldValues> {
  name: Path<T>;
  config: {
    label: string;
    type?: string;
    placeholder?: string;
    rules?: RegisterOptions<T, Path<T>>;
  };
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  disabled?: boolean;
}

export function FormField<T extends FieldValues>({
  name,
  config,
  register,
  errors,
  disabled,
}: Props<T>) {
  const fieldError = get(errors, name) as FieldError | undefined;

  return (
    <Input
      label={config.label}
      id={String(name)}
      type={config.type}
      placeholder={config.placeholder}
      isRequired={!!config.rules?.required}
      register={register(name, config.rules)}
      error={fieldError}
      disabled={disabled}
    />
  );
}
