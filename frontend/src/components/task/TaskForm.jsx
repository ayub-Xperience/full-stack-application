import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'

export const TaskForm = ({open= true, onOpenChange}) => {
  return (
   <Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent className={'sm:max-w-[500px'}>
            <DialogHeader>
                <DialogTitle className={'text-lg font-semibold'}>Create New Task</DialogTitle>
                <DialogDescription className={'text-sm text-muted-foreground'} >
                    Fill in the details below to create a new task
                </DialogDescription>
            </DialogHeader>
  </DialogContent>
   </Dialog>
  )
}
