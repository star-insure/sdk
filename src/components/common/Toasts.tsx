import React from 'react';
import type { Toast } from "../../types";
import { useToast } from "../../lib/toast";
import ToastItem from "./ToastItem";

export default function Toasts() {
    const { toasts } = useToast();

    return (
        <div className="fixed bottom-4 right-4 z-[120] flex flex-col gap-6">
            {toasts.map((toast: Toast) => (
                <ToastItem {...toast} key={toast._id} />
            ))}
        </div>
    );
}
