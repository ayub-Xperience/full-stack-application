import { ClipboardCheck, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/Badge";
import { TaskCard } from "./TaskCard";

export const TaskList = ({
  tasks = [],
  isLaoding = false,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const getTaskStatus = () => {
    const AllTasksByStatus = {
      pending: tasks.filter((task) => task.status === "pending").length,
      inProgress: tasks.filter((task) => task.status === "in progress").length,
      completed: tasks.filter((task) => task.status === "completed").length,
    };
    const categorizedTasks = {
      all: tasks,
      pending : tasks.filter(task => task.status === "pending"),
      inProgress : tasks.filter(task => task.status === "in progress"),
      completed : tasks.filter(task => task.status === "completed")
    }
    const stats = {
      total: tasks.length,
      pending : AllTasksByStatus.pending,
      inProgress: AllTasksByStatus.inProgress,
      completed: AllTasksByStatus.completed
    }
    const total = tasks.length
    return { total, stats, categorizedTasks };
  };
  const [seachTerm, setSearchTerm] = useState("");

  const {stats, total, categorizedTasks} = getTaskStatus();

  const TaskGrid = ({ tasks, emptyMessage }) => {
    if (tasks.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="mx-auto max-w-md">
            <ClipboardCheck className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-sm text-foreground">No tasks found</h2>
            <p className="mt-2 text-sm text-foreground">{emptyMessage}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Total</p>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">{tasks.length}</p>
        </div>

        <div className="bg-card p-4 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Pending</p>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          </div>
          <p className="text-2xl font-bold">{stats.pending || 0}</p>
        </div>

        <div className="bg-card p-4 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">
              In Progress
            </p>
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          </div>
          <p className="text-2xl font-bold">{stats.inProgress || 0}</p>
        </div>

        <div className="bg-card p-4 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">
              Completed
            </p>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          <p className="text-2xl font-bold">{stats.completed}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type={"text"}
            placeholder="Search tasks..."
            value={seachTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={"pl-10"}
          />
        </div>
      </div>
      {/* tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className={"grid w-full grid-cols-4"}>
          <TabsTrigger value="all" className={"flex items-center gap-2"}>
            All
            <Badge variant="secondary">{tasks.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="pending" className={"flex items-center gap-2"}>
            Pending
            <Badge variant="secondary">{stats.pending}</Badge>
          </TabsTrigger>
          <TabsTrigger value="inProgress" className={"flex items-center gap-2"}>
            In Progress
            <Badge variant="secondary">{stats.inProgress}</Badge>
          </TabsTrigger>
          <TabsTrigger value="completed" className={"flex items-center gap-2"}>
            Completed
            <Badge variant="secondary">{stats.completed}</Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <TaskGrid tasks={categorizedTasks.all} />
        </TabsContent>
        <TabsContent value="pending">
          Pending Tasks
            <TaskGrid tasks={categorizedTasks.pending}
            emptyMessage={"No Pending Found"}
             />
          </TabsContent>
        <TabsContent value="inProgress">in progress Tasks
           <TaskGrid tasks={categorizedTasks.inProgress}
            emptyMessage={"No inProgress Found"}
             />
        </TabsContent>
        <TabsContent value="completed">Completed Tasks
           <TaskGrid tasks={categorizedTasks.completed}
            emptyMessage={"No Completed Found"}
             />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
