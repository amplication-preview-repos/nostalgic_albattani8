export type BlogPost = {
  author: string | null;
  category: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedDate: Date | null;
  tags: string | null;
  title: string | null;
  updatedAt: Date;
};
