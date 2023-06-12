export interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  readonly userId: number;
}
