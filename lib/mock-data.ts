export const currentUser = {
  id: "u_001",
  name: "林桃桃",
  city: "上海",
  bio: "想用 UI 设计和英语口语，交换烘焙、摄影与一切有趣的新技能。",
  avatar: "LT",
  teachSkills: ["UI 设计", "英语口语"],
  learnSkills: ["手机摄影", "法式甜点"]
};

export const navItems = [
  { href: "/explore", label: "发现" },
  { href: "/match", label: "匹配我" },
  { href: "/post", label: "发布" },
  { href: "/profile", label: "我的主页" }
] as const;
