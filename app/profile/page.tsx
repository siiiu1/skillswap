import { PageShell } from "@/components/page-shell";
import { currentUser } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="我的主页"
      title={`${currentUser.name} 的主页`}
      description="这里之后会放个人资料、技能标签、我的发布、收藏与互换记录。当前先完成路由结构。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-secondary/70 p-5 text-sm text-secondary-foreground">个人资料卡占位</div>
        <div className="rounded-3xl bg-accent/80 p-5 text-sm text-accent-foreground">我的发布列表占位</div>
      </div>
    </PageShell>
  );
}
