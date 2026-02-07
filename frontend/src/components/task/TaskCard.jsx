import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";

const STATUS_CONFIG = {
  pending: {
    variant: "secondary",
    label: "Pending",
    color: "text-yellow-600",
  },
  "in progress": {
    variant: "default",
    label: "in progress",
    color: "text-blue-600",
  },
  completed: {
    variant: "outline",
    label: "Completed",
    color: "text-gray-600",
  },
};

export const TaskCard = ({ task, onEdite, onDelete, isLoading = false }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <Card className={"w-full transition-shadow hover:shadow-md"}>
        <CardHeader className={'pb-3'}>
            <div className="flex items-start justify-between">
                <CardTitle className={'text-lg leading-tight'}>
                    {task.title}
                </CardTitle>
            </div>
        </CardHeader>
      </Card>
    </>
  );
};
