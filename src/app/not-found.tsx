import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-seal rounded font-serif text-lg text-seal rotate-2 mb-8">
        迷
      </div>
      <h1 className="font-serif text-xl text-text tracking-wider">
        页面未找到
      </h1>
      <p className="mt-3 text-sm text-text-muted">
        你访问的页面似乎已经走失了
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm text-text-muted border border-border px-5 py-2 transition-all hover:border-bamboo hover:text-bamboo-dark"
      >
        <span className="text-bamboo-light">—</span> 回到首页
      </Link>
    </div>
  );
}
