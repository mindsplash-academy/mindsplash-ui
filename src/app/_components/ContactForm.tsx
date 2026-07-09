"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/FormInput";
import { ChevronRight } from "lucide-react";
import { SelectField } from "@/components/SelectField";
import { locationOptions } from "../contact/_components/SpeakUsForm";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(2, "Min 2 chars").max(50, "Max 50 chars"),
  lastName: z.string().min(2, "Min 2 chars").max(50, "Max 50 chars"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be 10 digits"),
  location: z.string().min(1, "Required"),
});

export default function ContactForm({ isDialogForm = false, onCancel = () => { } }: { isDialogForm?: boolean, onCancel?: () => void }) {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      salutation: "Mr",
      parentFirstName: values.firstName,
      parentLastName: values.lastName,
      email: values.email,
      mobileNumber: values.phone,
      childFirstName: "Child First Name",
      childLastName: "Child Last Name",
      childLevel2024: "Grade 6",
      childPreferredProgram: "Primary",
      preferredLocation: values.location,
      consent: true,
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
        toast.error(errorMessage);
        form.reset(defaultValues);
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
      form.reset(defaultValues);
    } catch (error) {
      console.error("Error:", error);  
      toast.error("Error", {
        description: "Failed to submit the form. Please try again.",
      });
      form.reset(defaultValues);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 pb-8 md:pb-0"
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isDialogForm ? 'xl:grid-cols-2' : 'xl:grid-cols-3'}`}>
          <FormInput
            control={form.control}
            name="firstName"
            label="First Name"
            placeholder="Enter first name"
          />
          <FormInput
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Enter last name"
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="Enter email ID"
          />
          <FormInput
            control={form.control}
            name="phone"
            label="Mobile Number"
            placeholder="Enter mobile number"
          />
          <div className="col-span-1 md:col-span-2">
            <SelectField
              control={form.control}
              name="location"
              label="Preferred Location"
              placeholder="Select location"
              options={locationOptions}
            />
          </div>
        </div>
        {isDialogForm ?
          (
            <div className="flex justify-end gap-2 flex-wrap">
              <Button onClick={onCancel} className="rounded-[60px] h-[50px]">Cancel</Button>
              <Button type="submit" variant={"secondary"} className={`group`}>
                Book a Free Demo Class
                <div className="self-center group-hover:opacity-100 right-4 h-5 w-5 rounded-full bg-foreground group-hover:bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-secondary group-hover:text-foreground" />
                </div>
              </Button>
            </div>
          ) : (
            <div className="flex justify-center md:justify-end">
              <Button type="submit" variant={"secondary"} className={`group`}>
                Book a Free Demo Class
                <div className="self-center group-hover:opacity-100 right-4 h-5 w-5 rounded-full bg-foreground group-hover:bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                  <ChevronRight className="text-secondary group-hover:text-foreground" />
                </div>
              </Button>
            </div>
          )}
      </form>
    </Form>
  );
}
