import { useEffect, useRef, useState } from "react";
import { ExternalLink, RotateCw } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Video, VideoDifficulty } from "@/content/schemas";

type Props = {
  videos: Video[];
  activeId: string | null;
  onChange: (id: string) => void;
  onClose: () => void;
};

const difficultyClass: Record<VideoDifficulty, string> = {
  Beginner:
    "bg-[color:var(--color-sage)]/20 text-[color:var(--color-ink)] border-[color:var(--color-sage)]/40",
  Intermediate:
    "bg-[color:var(--color-clay)]/20 text-[color:var(--color-ink)] border-[color:var(--color-clay)]/40",
  Advanced: "bg-[color:var(--color-ink)]/90 text-cream border-[color:var(--color-ink)]",
};

/* ---------- YouTube player API loader ---------- */
type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars?: Record<string, string | number>;
      host?: string;
      events?: {
        onError?: (e: { data: number }) => void;
        onReady?: () => void;
      };
    },
  ) => { destroy: () => void };
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
    __ytApiPromise?: Promise<YTNamespace>;
  }
}

function loadYouTubeApi(): Promise<YTNamespace> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (window.__ytApiPromise) return window.__ytApiPromise;

  window.__ytApiPromise = new Promise<YTNamespace>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      if (window.YT) resolve(window.YT);
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.head.appendChild(tag);
  });
  return window.__ytApiPromise;
}

/* ---------- Player with graceful fallback ---------- */
function VideoPlayer({ video }: { video: Video }) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setErrored(false);
    let destroyed = false;
    let player: { destroy: () => void } | null = null;

    loadYouTubeApi()
      .then((YT) => {
        if (destroyed || !hostRef.current) return;
        const mount = document.createElement("div");
        hostRef.current.innerHTML = "";
        hostRef.current.appendChild(mount);
        player = new YT.Player(mount, {
          videoId: video.youtubeId,
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
          events: {
            onError: () => setErrored(true),
          },
        });
      })
      .catch(() => setErrored(true));

    const host = hostRef.current;
    return () => {
      destroyed = true;
      try {
        player?.destroy();
      } catch {
        /* noop */
      }
      if (host) host.innerHTML = "";
    };
  }, [video.id, video.youtubeId]);

  if (errored) {
    return (
      <div className="relative w-full aspect-video bg-[color:var(--color-ink)] text-cream overflow-hidden">
        <img
          src={`https://i.ytimg.com/vi_webp/${video.youtubeId}/hqdefault.webp`}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div className="max-w-md">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-butter)]">
              Heads up
            </div>
            <p className="mt-2 font-display text-xl leading-snug">
              Video unavailable for embedded playback.
            </p>
            <p className="mt-2 text-sm text-cream/75 leading-relaxed">
              You can still watch it directly on YouTube, or pick another video from the sidebar.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-cream text-foreground px-4 py-2 text-sm font-semibold hover:bg-[color:var(--color-butter)] transition-colors"
              >
                Watch on YouTube
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setErrored(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/30 text-cream px-4 py-2 text-sm font-semibold hover:bg-cream/10 transition-colors"
              >
                <RotateCw className="h-3.5 w-3.5" />
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black">
      <div ref={hostRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

export function VideoModal({ videos, activeId, onChange, onClose }: Props) {
  const open = activeId !== null;
  const active = videos.find((v) => v.id === activeId) ?? null;
  const related = videos.filter((v) => v.id !== activeId);

  // Reset scroll of left column when video changes
  useEffect(() => {
    if (active) {
      document.getElementById("video-modal-scroll")?.scrollTo({ top: 0 });
    }
  }, [active]);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden gap-0 bg-card border-border rounded-[1.5rem]">
        <DialogTitle className="sr-only">{active ? active.title : "Video player"}</DialogTitle>

        {active && (
          <div className="grid lg:grid-cols-[2fr_1fr] max-h-[90vh]">
            <div id="video-modal-scroll" className="overflow-y-auto">
              <VideoPlayer video={active} />

              {/* Meta */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
                  <span className="rounded-full border border-border bg-cream px-2.5 py-1">
                    {active.kind}
                  </span>
                  <span className="text-clay">{active.year}</span>
                  <span className="text-foreground/40">·</span>
                  <span>{active.length}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl lg:text-3xl leading-snug text-foreground">
                  {active.title}
                </h2>

                {active.difficulty && (
                  <div className="mt-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${difficultyClass[active.difficulty]}`}
                    >
                      {active.difficulty}
                    </span>
                  </div>
                )}

                <p className="mt-4 text-foreground/80 leading-relaxed">{active.description}</p>

                {active.keyTakeaways.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-border bg-cream/60 p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                      Key Takeaways
                    </div>
                    <ul className="mt-3 space-y-2.5">
                      {active.keyTakeaways.map((t, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-foreground/85 leading-relaxed"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                          />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {active.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-foreground/70"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${active.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-clay transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {related.length > 0 && (
                    <button
                      type="button"
                      onClick={() => onChange(related[0].id)}
                      className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors"
                    >
                      Choose another video →
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Related */}
            <aside className="border-t lg:border-t-0 lg:border-l border-border bg-cream/40 overflow-y-auto max-h-[40vh] lg:max-h-none">
              <div className="p-5 lg:p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                  Related videos
                </div>
                <ul className="mt-4 space-y-3">
                  {related.map((v) => (
                    <li key={v.id}>
                      <button
                        type="button"
                        onClick={() => onChange(v.id)}
                        className="group w-full text-left rounded-xl border border-border bg-card overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-18px_rgba(0,0,0,0.25)] transition-all"
                      >
                        <div className="relative aspect-video bg-[color:var(--color-ink)]/90 overflow-hidden">
                          <img
                            src={`https://i.ytimg.com/vi_webp/${v.youtubeId}/hqdefault.webp`}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                          />
                          <span className="absolute bottom-1.5 right-1.5 rounded bg-foreground/85 text-background px-1.5 py-0.5 text-[9px] font-semibold">
                            {v.length}
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-clay">
                            {v.kind} · {v.year}
                          </div>
                          <div className="mt-1 font-display text-sm leading-snug text-foreground line-clamp-2">
                            {v.title}
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
