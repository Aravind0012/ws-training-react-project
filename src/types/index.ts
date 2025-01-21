export interface Task {
    id: string;
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Pending' | 'Completed';
  }
  