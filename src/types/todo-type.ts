type Todo = {
  id: number;
  title: string;
  description?: string;
  due: Date;
  createdAt: Date;
  completed: boolean;
};

export default Todo;
