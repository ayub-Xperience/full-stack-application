import { ClipboardCheck, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input'

export const TaskList = ({tasks = [], isLaoding = false, onEdite, onDelete, onStatusChange}) => {

    const getTaskStatus = () => {
        const total = tasks.total
        const pending = tasks.filter(task => task.status === 'pending').length
        const inProgress = tasks.filter(task => task.status === 'in progress').length
        const completed = tasks.filter(task => task.status === 'completed').length
        return {total, pending, inProgress, completed}
    }
    const [seachTerm, setSearchTerm] = useState("")

    const stats = getTaskStatus()


  return (
    <div className='space-y-6'>
        {/* stats Overview */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            
            <div className='bg-card p-4 rounded-lg border shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-muted-foreground'>Total</p>
                        <ClipboardCheck className='h-4 w-4 text-muted-foreground' />
                    </div>
                    <p className='text-2xl font-bold'>{tasks.length}</p>
            </div>

             <div className='bg-card p-4 rounded-lg border shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-muted-foreground'>Pending</p>
                     <div className='h-2 w-2 rounded-full bg-yellow-500'></div>
                    </div>
                    <p className='text-2xl font-bold'>{stats.pending || 0}</p>
            </div>

             <div className='bg-card p-4 rounded-lg border shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-muted-foreground'>In Progress</p>
                     <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                    </div>
                    <p className='text-2xl font-bold'>{stats.inProgress || 0}</p>
            </div>

            <div className='bg-card p-4 rounded-lg border shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-medium text-muted-foreground'>Completed</p>
                     <div className='h-2 w-2 rounded-full bg-green-500'></div>
                    </div>
                    <p className='text-2xl font-bold'>{stats.completed}</p>
            </div>

        </div>
        <div className='flex items-center gap-4'>
                <div className='relative flex-1 max-w-md'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                    <Input
                    type={'text'}
                    placeholder="Search tasks..." 
                    value={seachTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={'pl-10'}
                     />
                </div>
        </div>
    </div>
  )
}
