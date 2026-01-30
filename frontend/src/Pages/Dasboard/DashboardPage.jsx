import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome";
import { TaskForm } from "@/components/task/TaskForm";
import React, { useState } from "react";

export const DashboardPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const HandleFormClose = () => {
    setShowCreateForm(null)
    setEditingTask(null)
  }
  return (
    <div className="min-h-screen bg-background">
      {/* header  */}
      <DashboardHeader />
      {/* main contant */}
      <main>
        {/* welcome section  */}
        <DashboardWelcome
        setEditingTask={showCreateForm}
         />
        {/* tasks section */}
      </main>
        <TaskForm
        open={showCreateForm || !!editingTask}
        onOpenChange={HandleFormClose}
         />
      {/* task dialog form */}
    </div>
  );
};
