import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardWelcome } from "@/components/Dashboard/DashboardWelcome";
import { TaskForm } from "@/components/task/TaskForm";
import { TaskList } from "@/components/task/TaskList";
import api from "@/lib/api/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";

export const DashboardPage = () => {
  const [showCreateFoarm, setShowCreateFoarm] = useState(false);
  const [edtingTask, setEditingTask] = useState(null);

  const handleFormClose = () => {
    setShowCreateFoarm(false);
    setEditingTask(null);
  };

  const handleCreateTaskClick = () => {
    setShowCreateFoarm(true);
  };



  const taskQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await api.get("/allTask/");
      return response.data;
    },
    retry: 1,
  });

  const handleEditeTask = (task) => {
    setEditingTask(task)
    setShowCreateFoarm(true)
  }
    const handleDeleteTask = async (taskId) => {
      // todo Mutation to delete task
    }

    const handleStatusChange = async (taskId, statusData) => {

    }


  if (taskQuery.isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
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
        <div>
          <TaskList
          tasks={taskQuery.data || []}
          isLoading={taskQuery.isLoading}
          onEdit={handleEditeTask}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
           />
        </div>
      </main>
      <TaskForm
        open={showCreateFoarm || !!edtingTask}
        onOpenChange={handleFormClose}
      />
      {/* task dialog form */}
    </div>
  );
};
