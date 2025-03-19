import { User } from "@/components/formatting/drag-and-drop/userData";
import React from "react";

export default function SortableUser({ user }: { user: User }) {
    return (
        <div className="flex items-center w-full">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {user.initials}
            </div>
            <div className="ml-4 text-gray-700 font-medium">
                {user.name} - {user.id}
            </div>
        </div>
    );
}
