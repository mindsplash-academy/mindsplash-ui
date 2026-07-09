"use client";

import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import ContactForm from "./ContactForm";

export default function ContactUsModal() {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    useEffect(() => {
        setContactModalOpen(true);
    }, []);
    return (
        <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
            <DialogContent className="min-w-[360px] p-8">
                <DialogTitle className="text-2xl">Contact Us</DialogTitle>
                <DialogDescription>
                    Please fill out the form below to get in touch with us.
                </DialogDescription>
                <div className="w-[88%] sm:w-full mx-auto mt-4">
                    <ContactForm isDialogForm onCancel={() => setContactModalOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    )
}