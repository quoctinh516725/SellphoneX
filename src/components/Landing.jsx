import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ========================================================
   Utilities: Reveal + LazyImage (IntersectionObserver + Motion)
   ======================================================== */
function Reveal({
  children,
  y = 20,
  delay = 0.3,
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
    rootMargin,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ y, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

function LazyImage({
  src,
  alt,
  className = "",
  height = 240,
  radius = "rounded-2xl",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 320px 0px",
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden ${radius}`}
      style={{ minHeight: height }}
    >
      {/* Nếu inView nhưng ảnh chưa load → hiển thị placeholder */}
      {inView && !imageLoaded && (
        <div
          className={`w-full ${radius} animate-pulse  bg-gray-200`}
          style={{ height }}
        />
      )}

      {/* Nếu inView → luôn render thẻ <img>, nhưng ẩn nó nếu chưa load */}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          style={{ height }}
          className={`
            w-full object-cover ${radius} ${className}
            transition-opacity duration-500
            ${imageLoaded ? "opacity-100" : "opacity-0 absolute"}
          `}
        />
      )}
    </div>
  );
}

/* ========================================================
   Content Data (you can replace with your real content)
   ======================================================== */
const nav = [
  { label: "Tính năng", href: "#features" },
  { label: "Bộ sưu tập", href: "#gallery" },
  { label: "Giá", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    title: "Tải nhanh, mượt",
    desc: "Lazy-loading, IntersectionObserver và code-splitting giúp TTFB & LCP tối ưu.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2L3 13h6v7l6-9H9l3-9z" />
      </svg>
    ),
  },
  {
    title: "Hiệu ứng tinh tế",
    desc: "Reveal-on-scroll bằng Framer Motion: trượt lên, fade, stagger đẹp mắt.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Responsive",
    desc: "Thiết kế grid linh hoạt, chạy đẹp trên mobile, tablet, desktop.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M3 5h18v6H3V5m0 8h11v6H3v-6m13 0h5v6h-5v-6z"
        />
      </svg>
    ),
  },
  {
    title: "SEO & UX",
    desc: "Tôn trọng prefers-reduced-motion, tránh layout shift với placeholder skeleton.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M12 20l-6-6 1.41-1.41L11 16.17l7.59-7.59L20 10l-8 10z"
        />
      </svg>
    ),
  },
];

const gallery = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/land${i + 1}/960/640`,
  alt: `Ảnh demo ${i + 1}`,
}));

const testimonials = [
  {
    name: "Minh An",
    quote:
      "Trang landing chạy cực mượt, animation vừa đủ, cảm giác rất chuyên nghiệp.",
    avatar: "https://i.pravatar.cc/100?img=12",
    role: "Founder, Lumi Studio",
  },
  {
    name: "Thu Tâm",
    quote: "Tích hợp lazy-load giúp trang nặng ảnh mà vẫn load nhanh trên 4G.",
    avatar: "https://i.pravatar.cc/100?img=5",
    role: "Product Designer",
  },
  {
    name: "Quốc Trí",
    quote:
      "Code sạch, dễ tái sử dụng. Triển khai production không mất thời gian.",
    avatar: "https://i.pravatar.cc/100?img=22",
    role: "Frontend Engineer",
  },
];

const pricing = [
  {
    plan: "Starter",
    price: "0",
    period: "/tháng",
    perks: ["1 dự án", "Băng thông 5GB", "Email hỗ trợ"],
  },
  {
    plan: "Pro",
    price: "9",
    period: "/tháng",
    perks: ["10 dự án", "Băng thông 50GB", "Hỗ trợ ưu tiên"],
    popular: true,
  },
  {
    plan: "Business",
    price: "29",
    period: "/tháng",
    perks: ["Không giới hạn", "Băng thông 500GB", "SLA 99.9%"],
  },
];

const faqs = [
  {
    q: "Animation có ảnh hưởng hiệu năng không?",
    a: "Chúng tôi chỉ animate khi phần tử vào viewport và tôn trọng prefers-reduced-motion. Ảnh và media dùng lazy-load, placeholder skeleton để tránh layout shift.",
  },
  {
    q: "Có hỗ trợ Next.js/SSR?",
    a: "Hoạt động tốt trên client. Với SSR, chỉ mount các phần dùng window trong useEffect hoặc dynamic import (ssr:false).",
  },
  {
    q: "Có thể thay nội dung/brand?",
    a: "Mọi section đều là component và dữ liệu tách riêng (mảng). Bạn đổi text, ảnh, hoặc thứ tự dễ dàng.",
  },
];

/* ========================================================
   Small Components
   ======================================================== */
const SectionTitle = ({ eyebrow, title, sub, center }) => (
  <div className={center ? "text-center" : "text-left"}>
    {eyebrow && (
      <p className="text-sm tracking-widest uppercase text-indigo-600 font-semibold">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
      {title}
    </h2>
    {sub && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{sub}</p>}
  </div>
);

const FeatureCard = ({ item, i }) => (
  <Reveal delay={(i % 6) * 0.04}>
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 h-full">
      <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
        {item.icon}
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.desc}</p>
    </div>
  </Reveal>
);

const TestimonialCard = ({ t, i }) => (
  <Reveal delay={(i % 6) * 0.04}>
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-gray-900">{t.name}</p>
          <p className="text-gray-500 text-sm">{t.role}</p>
        </div>
      </div>
      <p className="text-gray-700 mt-4">“{t.quote}”</p>
    </div>
  </Reveal>
);

const PriceCard = ({ p, i }) => (
  <Reveal delay={(i % 6) * 0.04}>
    <div
      className={`rounded-2xl border ${
        p.popular ? "border-indigo-500 shadow-md" : "border-gray-200"
      } bg-white p-6 flex flex-col`}
    >
      <div className="flex items-baseline gap-2">
        <h3 className="text-xl font-semibold">{p.plan}</h3>
        {p.popular && (
          <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
            Phổ biến
          </span>
        )}
      </div>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold">${p.price}</span>
        <span className="text-gray-500">{p.period}</span>
      </div>
      <ul className="mt-4 space-y-2 text-gray-700">
        {p.perks.map((perk, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500">
              <path
                fill="currentColor"
                d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z"
              />
            </svg>
            <span>{perk}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 w-full rounded-xl py-3 font-semibold ${
          p.popular
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        Chọn gói
      </button>
    </div>
  </Reveal>
);

/* ========================================================
   Main Landing Page
   ======================================================== */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <style>{`
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">
            Brand<span className="text-indigo-600">X</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="hidden sm:inline-block rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black"
          >
            Bắt đầu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(79,70,229,0.08),transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm">
                Hiệu năng & Thẩm mỹ
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-3">
                Landing Page hiện đại với{" "}
                <span className="text-indigo-600">Reveal on Scroll</span>
              </h1>
              <p className="text-gray-600 mt-4 max-w-xl">
                Áp dụng IntersectionObserver + Framer Motion: chỉ hiển thị khi
                vào viewport, ảnh lazy-load, hiệu ứng tinh tế giúp giữ trải
                nghiệm nhanh và mượt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#features"
                  className="rounded-xl bg-indigo-600 text-white px-5 py-3 font-semibold hover:bg-indigo-700"
                >
                  Khám phá tính năng
                </a>
                <a
                  href="#gallery"
                  className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold border border-gray-200 hover:bg-gray-100"
                >
                  Xem demo ảnh
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />{" "}
                  LCP tối ưu
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500" />{" "}
                  UX mượt
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src="https://picsum.photos/seed/hero1/960/640"
                alt="Hero 1"
                height={220}
              />
              <LazyImage
                src="https://picsum.photos/seed/hero2/960/640"
                alt="Hero 2"
                height={220}
              />
              <LazyImage
                src="https://picsum.photos/seed/hero3/960/640"
                alt="Hero 3"
                height={220}
              />
              <LazyImage
                src="https://picsum.photos/seed/hero4/960/640"
                alt="Hero 4"
                height={220}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Tính năng"
            title="Được tối ưu cho sản phẩm thực"
            sub="Bộ công cụ animation gọn nhẹ, dễ tái sử dụng; ảnh và nội dung chỉ tải khi cần, giúp cải thiện Core Web Vitals."
            center
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} item={f} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Bộ sưu tập"
            title="Hình ảnh lazy-load"
            sub="Mỗi ảnh chỉ được render khi người dùng sắp thấy — giảm băng thông và tăng tốc thời gian hiển thị."
            center
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.04}>
                <LazyImage src={g.src} alt={g.alt} height={220} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Khách hàng nói gì"
            title="Phản hồi tích cực từ người dùng"
            sub="Animation hợp lý + hiệu năng ổn định tạo cảm giác tin tưởng và chuyên nghiệp."
            center
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Bảng giá"
            title="Chọn gói phù hợp"
            sub="Bắt đầu miễn phí, nâng cấp khi cần tính năng chuyên sâu và hỗ trợ ưu tiên."
            center
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <PriceCard key={p.plan} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="Câu hỏi thường gặp" center />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <Reveal key={i}>
                <details className="bg-white rounded-2xl p-6 border border-gray-200">
                  <summary className="cursor-pointer select-none font-semibold text-gray-900">
                    {f.q}
                  </summary>
                  <p className="text-gray-600 mt-3">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white rounded-3xl p-10">
              <h3 className="text-3xl font-bold">Sẵn sàng tăng chuyển đổi?</h3>
              <p className="mt-2 text-indigo-100">
                Dùng landing page tối ưu hiệu năng & animation tinh tế để gây ấn
                tượng ngay lần đầu.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href="#pricing"
                  className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:bg-gray-100"
                >
                  Xem bảng giá
                </a>
                <a
                  href="#features"
                  className="rounded-xl bg-black/20 text-white px-5 py-3 font-semibold hover:bg-black/30"
                >
                  Tính năng
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} BrandX. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Tính năng
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-gray-900">
              Bộ sưu tập
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Giá
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
