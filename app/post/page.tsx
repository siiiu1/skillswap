import { PageShell } from "@/components/page-shell";

export default function PostPage() {
  return (
    <PageShell
      eyebrow="发布"
      title="发布你的技能互换"
      description="这里之后会放发布表单、技能标签、时间地点偏好与预览模块。当前先完成页面入口骨架。"
    >
      <div className="rounded-3xl border border-dashed border-border bg-background p-6 text-sm leading-7 text-muted-foreground">
        发布表单占位：标题、我能提供、我想交换、可约时间、地点方式、个人介绍。
      </div>
    </PageShell>
  );
}
