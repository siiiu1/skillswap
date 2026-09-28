import type { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="container py-8 md:py-12">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className="text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      </div>
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>页面骨架已准备好</CardTitle>
          <CardDescription>这里先放占位内容，后续我们可以继续细化信息架构、卡片组件与交互流程。</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
}
