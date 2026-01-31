import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const TaskForm = ({ open = true, onOpenChange }) => {
  const [formValues, setFormValue] = useState({
    title: "",
    describtion: "",
    status: "pending",
    dueDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"sm:max-w-[500px"}>
        <DialogHeader>
          <DialogTitle className={"text-lg font-semibold"}>
            Create New Task
          </DialogTitle>
          <DialogDescription className={"text-sm text-muted-foreground"}>
            Fill in the details below to create a new task
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
              placeholder="Enter task title"
              required
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
