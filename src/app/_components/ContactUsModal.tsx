"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function ContactUsModal({ triggerText = "Book a Free Demo Class", location = "", program = "" }: { triggerText?: string, location?: string, program?: string }) {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="group rounded-[60px] h-[50px] px-6 text-sm font-semibold tracking-wide">
                    {triggerText}
                    <div className="ml-2 h-5 w-5 rounded-full bg-foreground group-hover:bg-secondary flex items-center justify-center transition-all duration-300 ease-out transform group-hover:translate-x-1">
                        <ChevronRight className="w-3 h-3 text-secondary group-hover:text-foreground" />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-5 sm:max-w-lg sm:p-8">
                <DialogTitle className="text-2xl">Contact Us</DialogTitle>
                <DialogDescription>
                    Please fill out the form below to get in touch with us.
                </DialogDescription>
                <div className="w-[88%] sm:w-full mx-auto mt-4">
                    <ContactForm isDialogForm defaultLocation={location} defaultProgram={program} onCancel={() => setContactModalOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
