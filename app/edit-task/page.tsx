"use client";

import { Suspense } from "react";
import Header from "../components/Header";
import TaskForm from "./TaskForm";

export default function EditTask() {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <Header />
      <Suspense fallback={<div />}>
        <TaskForm />
      </Suspense>
    </div>
  );
}