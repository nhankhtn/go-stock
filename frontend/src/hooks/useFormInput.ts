import { useState } from "react";

export default function useFormInput(initValue: string) {
  const [value, setValue] = useState<string>(initValue);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
}
