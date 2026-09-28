import { PageShell } from "@/components/page-shell";

export default function ExplorePage() {
  return (
    <PageShell
      eyebrow="发现"
      title="技能广场"
      description="这里将展示大家发布的技能卡片、筛选标签与推荐分区。当前先放占位区块，确保路由和导航可用。"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {["热门互换", "附近新帖", "本周精选"].map((item) => (
          <div key={item} className="rounded-3xl bg-secondary/70 p-5 text-sm text-secondary-foreground">
            {item} 占位卡片
          </div>
        ))}
      </div>
    </PageShell>
  );
}
