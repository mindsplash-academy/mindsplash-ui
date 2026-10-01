"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Control, FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

interface SelectFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues> | UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  description?: React.ReactNode;
}

export function SelectField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
  description,
}: SelectFieldProps<TFieldValues>) {
  return (
    <FormField
      control={"control" in control ? control.control : control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
