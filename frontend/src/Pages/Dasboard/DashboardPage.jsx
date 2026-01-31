import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome";
import { TaskForm } from "@/components/task/TaskForm";
import { useState } from "react";

export const DashboardPage = () => {
  const [showCreateFoarm, setShowCreateFoarm] = useState(false)
  const [edtingTask, setEditingTask] = useState(null)
  return (
    <div className="min-h-screen bg-background">
      {/* header  */}
      <DashboardHeader />
      {/* main contant */}
      <main>
        {/* welcome section  */}
        <DashboardWelcome />
        {/* tasks section */}
      </main>
      <TaskForm />
      {/* task dialog form */}
    </div>
  );
};
