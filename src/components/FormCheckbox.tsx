"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormControl } from "@/components/ui/form";

interface FormCheckboxProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  className?: string;
}

export function FormCheckbox<TFieldValues extends FieldValues>({ control, name, className }: FormCheckboxProps<TFieldValues>) {
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
