import Head from 'next/head';

import Tasks from '@/Tasks';

import { TaskProvider } from '@/Tasks/contexts/TaskContext';

export default function Home() {
  return (
    <TaskProvider>
      <Tasks />
    </TaskProvider>
  )
}
