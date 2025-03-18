export interface IMyCourse {
  id: number;
  title: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
  progress: {
    total: number;
    current: number;
  };
  tags: string[];
  desc: string;
}
