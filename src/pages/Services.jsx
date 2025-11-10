import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import TaskForm from "../components/tasks/TaskForm";
import TaskFilters from "../components/tasks/TaskFilters";
import TaskItem from "../components/tasks/TaskItem";

export default function TasksPage() {
    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [filters, setFilters] = useState({ status: "all", priority: "all", category: "all" });

    const queryClient = useQueryClient();

    const { data: tasks, isLoading, error } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => base44.entities.Task.list(),
        initialData: [],
    });

    const createTaskMutation = useMutation({
        mutationFn: (taskData) => base44.entities.Task.create(taskData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setShowForm(false);
            setEditingTask(null);
        },
    });

    const updateTaskMutation = useMutation({
        mutationFn: ({ id, taskData }) => base44.entities.Task.update(id, taskData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setShowForm(false);
            setEditingTask(null);
        },
    });

    const handleSubmit = async (taskData) => {
        if (editingTask) {
            updateTaskMutation.mutate({ id: editingTask.id, taskData });
        } else {
            createTaskMutation.mutate(taskData);
        }
    };

    const handleStatusChange = async (task, newStatus) => {
        updateTaskMutation.mutate({
            id: task.id,
            taskData: { ...task, status: newStatus }
        });
    };

    const handleEdit = (task) => {
        setEditingTask(task);
        setShowForm(true);
    };

    const filteredTasks = tasks.filter(task => {
        const statusMatch = filters.status === "all" || task.status === filters.status;
        const priorityMatch = filters.priority === "all" || task.priority === filters.priority;
        const categoryMatch = filters.category === "all" || task.category === filters.category;
        return statusMatch && priorityMatch && categoryMatch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
                    <Button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-indigo-600 hover:bg-indigo-700"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Add New Task
                    </Button>
                </div>

                <AnimatePresence>
                    {showForm && (
                        <TaskForm
                            task={editingTask}
                            onSubmit={handleSubmit}
                            onCancel={() => {
                                setShowForm(false);
                                setEditingTask(null);
                            }}
                        />
                    )}
                </AnimatePresence>

                <TaskFilters onFilterChange={setFilters} />

                <div className="grid gap-4">
                    <AnimatePresence>
                        {filteredTasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onStatusChange={handleStatusChange}
                                onEdit={handleEdit}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}