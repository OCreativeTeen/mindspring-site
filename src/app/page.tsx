export default function Home() {
  const services = [
    "个体心理咨询",
    "伴侣与关系咨询",
    "焦虑与压力管理",
    "职场心理支持",
    "原生家庭与自我成长",
  ];

  const faq = [
    {
      q: "第一次咨询会聊什么？",
      a: "初谈会先明确你目前最困扰的问题、希望达成的目标，并介绍咨询边界与工作方式，让你清楚接下来会如何推进。",
    },
    {
      q: "心理咨询真的有效吗？",
      a: "咨询不是“被说服”，而是通过稳定关系与结构化工作，帮助你理解模式、调整行为与情绪反应。效果通常来自持续合作。",
    },
    {
      q: "一般需要做几次？",
      a: "短程可从 6-12 次开始评估；若议题更深（长期关系模式、创伤等），通常需要更长期工作。",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
        <div className="container-shell flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--accent)]/20" />
            <div>
              <p className="text-sm font-semibold">MindStoryRoom</p>
              <p className="text-xs text-[var(--muted)]">心理咨询工作室</p>
            </div>
          </div>
          <a
            href="#booking"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
          >
            开始预约
          </a>
        </div>
      </header>

      <main>
        <section className="container-shell py-20 md:py-28">
          <p className="mb-4 text-sm font-medium text-[var(--accent)]">心理咨询</p>
          <h1 className="max-w-3xl text-3xl leading-tight font-bold md:text-5xl">
            让焦虑慢下来，让生活重新有秩序。
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
            面向高压工作者、关系困扰、情绪反复的人群，提供有结构、有边界、尊重隐私的心理咨询。
          </p>
          <div className="mt-8">
            <a
              href="#booking"
              className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white"
            >
              预约一次初谈（15分钟）
            </a>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold">咨询方式</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                线上/线下均可。每次 50 分钟，建议每周 1 次；状态稳定后可调整为每两周 1 次。
              </p>
            </article>
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold">工作取向</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                以 CBT、ACT、精神分析取向与整合式工作为主，根据你的问题与阶段灵活匹配方法。
              </p>
            </article>
            <article className="section-card p-6">
              <h2 className="text-lg font-semibold">保密原则</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                未经你书面同意，不向第三方披露咨询内容。仅在法律规定的高风险情形下，依流程进行必要告知。
              </p>
            </article>
          </div>
        </section>

        <section className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">你可以在这里获得什么</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              如果你正在被长期压力、关系冲突、反复焦虑或自我否定困住，我们会一起把问题拆解成可执行的步骤，逐步恢复稳定感与掌控感。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="container-shell pb-16">
          <h2 className="text-2xl font-semibold">服务</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="section-card p-6">
              <h3 className="font-medium">个体咨询</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                聚焦情绪困扰、压力、创伤经历、自我价值与人生选择。
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">伴侣咨询</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                处理冲突循环、沟通失衡、信任危机与关系边界议题。
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">焦虑与职场压力</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                面向高压工作者，改善失眠、过度警觉、反复担忧与精力耗竭。
              </p>
            </article>
            <article className="section-card p-6">
              <h3 className="font-medium">原生家庭与长期模式</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                理解早期关系如何影响现在，重建更稳定的自我关系与人际边界。
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">关于我</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">资质与受训背景</h3>
                <p className="mt-2 text-sm leading-7">
                  国家认可心理咨询相关资质，持续接受 CBT / ACT / 精神分析方向系统受训与个案督导。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">咨询取向</h3>
                <p className="mt-2 text-sm leading-7">
                  以整合式工作为核心：先稳定情绪与生活功能，再深入关系模式与核心信念。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">价值观</h3>
                <p className="mt-2 text-sm leading-7">
                  尊重、边界、非评判。你不是“有问题的人”，你是在承受困难并努力寻找方法的人。
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--muted)]">工作方式</h3>
                <p className="mt-2 text-sm leading-7">
                  目标导向 + 过程觉察。每个阶段都会明确目标、评估变化，并讨论下一步计划。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">预约与费用</h2>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-[var(--muted)]">
              <li>填写预约信息（姓名可用昵称、联系方式、简要困扰）。</li>
              <li>进行 15 分钟初谈，确认是否匹配与你的目标。</li>
              <li>确定正式咨询时间、频率与阶段目标。</li>
            </ol>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs text-[var(--muted)]">单次时长</p>
                <p className="mt-1 font-medium">50 分钟</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs text-[var(--muted)]">参考费用</p>
                <p className="mt-1 font-medium">¥500 / 次（示例）</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs text-[var(--muted)]">咨询形式</p>
                <p className="mt-1 font-medium">线上 / 线下</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              取消政策：如需改期或取消，请至少提前 24 小时通知；24 小时内取消将收取一次咨询费用。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@mindstoryroom.com"
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
              >
                开始预约
              </a>
              <a
                href="tel:+86-000-0000-0000"
                className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium"
              >
                电话咨询
              </a>
            </div>
          </div>
        </section>

        <section id="privacy" className="container-shell pb-16">
          <div className="section-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold">隐私与保密</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
              <li>你提供的个人信息仅用于预约、咨询与必要服务沟通。</li>
              <li>咨询记录采用最小化收集原则，严格限制访问权限。</li>
              <li>未经你明确同意，不向家属、单位或第三方披露咨询内容。</li>
              <li>
                仅在法律规定的紧急风险情形（如明确的自/他伤风险）下，依法律与伦理流程进行必要处置与告知。
              </li>
            </ul>
          </div>
        </section>

        <section id="faq" className="container-shell pb-24">
          <h2 className="text-2xl font-semibold">常见问题 FAQ</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="section-card p-6">
                <h3 className="font-medium">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-8">
        <div className="container-shell flex flex-col gap-2 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MindStoryRoom 心理咨询工作室</p>
          <p>域名：mindstoryroom.com（BlueHost）</p>
        </div>
      </footer>
    </div>
  );
}
