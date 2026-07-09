"use client";

import { Control } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormControl } from "@/components/ui/form";

interface FormCheckboxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  className?: string;
}

export function FormCheckbox({ control, name, className }: FormCheckboxProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex items-center gap-3 ${className ?? ""}`}>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <p className="text-left font-normal text-xs leading-[21px] tracking-[0px] text-description">
            Agree that till group may collect, use and disclose my personal data
            and consent to receive marketing, Advertising, & Promotional
            Material from till
            <br />
            group in accordance with the full terms herein including the
            Mindsplash. View full terms Her
          </p>
        </FormItem>
      )}
    />
  );
}
