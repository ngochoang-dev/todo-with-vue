export type TodoType = {
  content: string;
  created_at: string;
  is_finished: boolean;
  title: string;
  deadline: string;
  _id: string;
};

export type DataCreateType = {
  title: string;
  content: string;
  deadline: string;
};
