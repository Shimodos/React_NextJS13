interface Info {
  desc: string;
  isActive: boolean;
}

interface Tag {
  name: string;
  value: string;
}

interface Reply {
  userId: number;
  id: number;
  title: string;
  info: Info;
  tags: Tag[];
}
