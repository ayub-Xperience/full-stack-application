import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome";
import { TaskForm } from "@/components/task/TaskForm";
import { useState } from "react";

export const DashboardPage = () => {
  const [showCreateFoarm, setShowCreateFoarm] = useState(false)
  const [edtingTask, setEditingTask] = useState(null)

  const handleFormClose = () => {
    setShowCreateFoarm(false)
    setEditingTask(null)
  }

  const handleCreateTaskClick = () => {
    setShowCreateFoarm(true)
  }
  return (
    <div className="min-h-screen bg-background">
      {/* header  */}
      <DashboardHeader />
      {/* main contant */}
      <main>
        {/* welcome section  */}
        <DashboardWelcome
        showCreateFoarm={showCreateFoarm}
        onCreateTask={handleCreateTaskClick}
        />
        {/* tasks section */}
      </main>
      <TaskForm
      open={showCreateFoarm || !!edtingTask}
      onOpenChange={handleFormClose}
       />
      {/* task dialog form */}
    </div>
  );
};
