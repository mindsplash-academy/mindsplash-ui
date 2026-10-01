"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils"; // Shadcn utility for merging classes

interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues> | UseFormReturn<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
  className,
}: FormInputProps<TFieldValues>) {
  return (
    <FormField
      control={"control" in control ? control.control : control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className={cn(className)}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
