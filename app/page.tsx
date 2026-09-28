import Link from "next/link";
import { ArrowRight, Compass, Sparkles, SquarePen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/mock-data";

const quickCards = [
  {
    title: "去发现技能广场",
    description: "看看大家正在提供什么技能，也找找你想学的新方向。",
    href: "/explore",
    icon: Compass
  },
  {
    title: "试试智能匹配",
    description: "根据 currentUser 模拟个性化推荐，先搭骨架后续再丰富逻辑。",
    href: "/match",
    icon: Sparkles
  },
  {
    title: "发布技能需求",
    description: "先用占位表单页面承接发布入口，下一步再补交互细节。",
    href: "/post",
    icon: SquarePen
  }
];

export default function HomePage() {
  return (
    <section className="container py-8 md:py-12">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden border-none bg-gradient-to-br from-[#FFF2EB] via-white to-[#FFE1D6]">
          <CardContent className="p-6 md:p-10">
            <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-primary">
              SkillSwap 技能互换 · 前端骨架版
            </div>
            <div className="mt-6 max-w-2xl space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
                用你的擅长，换到别人会的有趣技能。
              </h1>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                当前版本使用纯前端 mock 数据搭建，已完成首页与核心路由骨架、响应式导航，以及暖橙色圆角卡片视觉基调。
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/explore">
                <Button size="lg">开始逛逛</Button>
              </Link>
              <Link href="/profile">
                <Button variant="secondary" size="lg">查看我的主页</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90">
          <CardContent className="p-6 md:p-8">
            <p className="text-sm font-semibold text-primary">当前模拟用户</p>
            <h2 className="mt-3 text-2xl font-bold">{currentUser.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{currentUser.city} · {currentUser.bio}</p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="mb-2 text-sm font-semibold">我能教</p>
                <div className="flex flex-wrap gap-2">
                  {currentUser.teachSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold">我想学</p>
                <div className="flex flex-wrap gap-2">
                  {currentUser.learnSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {quickCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.href} href={card.href}>
              <Card className="h-full bg-white/85 transition-transform hover:-translate-y-1">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{card.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    进入页面 <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
