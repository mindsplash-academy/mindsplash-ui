"use client";

import { FormCheckbox } from "@/components/FormCheckbox";
import { FormInput } from "@/components/FormInput";
import { SelectField } from "@/components/SelectField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  salutation: z.string().min(2, "Required"),
  parentFirstName: z.string().min(2, "Min 2 chars").max(50, "Max 50 chars"),
  parentLastName: z.string().min(2, "Min 2 chars").max(50, "Max 50 chars"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be 10 digits"),
  childFirstName: z.string().min(2, "Min 2 chars").max(50, "Max 50 chars"),
  childLastName: z.string().min(2, "Min 2 chars").max(50, "Max 50 chars"),
  level: z.string().min(1, "Required"),
  program: z.string().min(1, "Required"),
  location: z.string().min(1, "Required"),
  agreement: z.boolean().refine((val) => val === true, {
    message: "Required",
  }),
});

export default function SpeakUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salutation: "",
      parentFirstName: "",
      parentLastName: "",
      email: "",
      phone: "",
      childFirstName: "",
      childLastName: "",
      level: "",
      program: "",
      location: "",
      agreement: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      salutation: values.salutation,
      parentFirstName: values.parentFirstName,
      parentLastName: values.parentLastName,
      email: values.email,
      mobileNumber: values.phone,
      childFirstName: values.childFirstName,
      childLastName: values.childLastName,
      childLevel2024: values.level,
      childPreferredProgram: values.program,
      preferredLocation: values.location,
      consent: values.agreement,
    }

    // Fetch API here with the form values.
    try {
      const res = await fetch(
        "https://mindsplash-be-849133147929.us-central1.run.app/api/v1/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),  // or values
        }
      );

      const data = await res.json();

      if (!res.ok) {
        // Handle error response with message from API
        const errorMessage = data?.message || "Failed to submit form";
        toast.error("Error", {
          description: errorMessage,
        });
        form.reset();
        return;
      }

      // Show success message from API response
      const successMessage = data?.message || "Form submitted successfully!";
      if (data?.status === "success") {
        toast.success("Success", {
          description: successMessage,
        });
      } else {
        toast.success("Success", {
          description: successMessage,
        });
      }
      form.reset();
    } catch (error) {
      console.error("Error:", error);  
      toast.error("Error", {
        description: "Failed to submit the form. Please try again.",
      });
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SelectField
            control={form.control}
            name="salutation"
            label="Salutation"
            placeholder="Select salutation"
            options={salutationOptions}
          />
          <FormInput
            control={form.control}
            name="parentFirstName"
            label="Parent First Name"
            placeholder="Enter parent first name"
          />
          <FormInput
            control={form.control}
            name="parentLastName"
            label="Parent Last Name"
            placeholder="Enter parent last name"
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email ID"
            placeholder="Enter email ID"
          />
          <FormInput
            control={form.control}
            name="phone"
            label="Mobile Number"
            placeholder="Enter mobile number"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
          <FormInput
            control={form.control}
            name="childFirstName"
            label="Child First Name"
            placeholder="Enter child first name"
          />
          <FormInput
            control={form.control}
            name="childLastName"
            label="Child Last Name"
            placeholder="Enter child last name"
          />
          <FormInput
            control={form.control}
            name="level"
            label="Child Level in 2024"
            placeholder="Enter child level"
          />
          <SelectField
            control={form.control}
            name="program"
            label="Child Preferred Program"
            placeholder="Select program"
            options={programOptions}
          />
          <SelectField
            control={form.control}
            name="location"
            label="Preferred Location Of Child"
            placeholder="Select location"
            options={locationOptions}
          />
        </div>
        <FormCheckbox control={form.control} name="agreement" />
        <div className="flex justify-center">
          <Button type="submit" variant={"secondary"} className={`group`}>
            Book a Free Demo Class
            <div className="self-center group-hover:opacity-100 right-4 h-5 w-5 rounded-full bg-foreground group-hover:bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
              <ChevronRight className="text-secondary group-hover:text-foreground" />
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export const salutationOptions = [
  { value: "Mr", label: "Mr." },
  { value: "Mrs", label: "Mrs." },
  { value: "Miss", label: "Miss." },
  { value: "Ms", label: "Ms." },
];

export const programOptions = [
  { value: "Primary", label: "Primary" },
  { value: "IGCSE", label: "IGCSE" },
  { value: " IB_MYP", label: "IB MYP" },
  { value: "IB_DP", label: "IB DP" },
  { value: "Olympiads", label: "OLYMPIADS" },
  { value: "ExamPrep", label: "EXAM PREP" },
];

export const locationOptions = [
  { value: "Khajaguda", label: "Khajaguda" },
  { value: "Kokapet", label: "Kokapet" },
  { value: "Financial_District", label: "Financial District" },
];
