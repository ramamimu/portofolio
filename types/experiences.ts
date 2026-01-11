type Milestone = {
  id: string;
  duration: string;
  title: string;
};

export type Experience = {
  id: string;
  image: string;
  link?: string;
  company: string;
  milestones: Milestone[];
  technologies?: string[];
  Description: string;
};
