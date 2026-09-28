import { PageShell } from "@/components/page-shell";
import { currentUser } from "@/lib/mock-data";

export default function MatchPage() {
  return (
    <PageShell
      eyebrow="匹配我"
      title="智能匹配"
      description="未来这里会根据 currentUser 做 mock 推荐逻辑，比如技能互补度、距离、时间匹配度与共同兴趣。"
    >
      <div className="space-y-4 text-sm leading-7 text-muted-foreground">
        <p>当前模拟用户：{currentUser.name}</p>
        <div className="rounded-3xl bg-secondary/70 p-5 text-secondary-foreground">
          推荐结果占位：3 张匹配卡片 + 匹配理由 + 一键发起交换。
        </div>
      </div>
    </PageShell>
  );
}
