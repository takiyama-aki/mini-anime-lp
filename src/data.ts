export type Step = { no: number; label: string };
export type Plan = {
  priceUsd: number;
  title: string; // 例: "10% (1年目/企画相談まで)"
  cadence: string; // 例: "年1回のリモート制作打ち合わせ"
  years: number; // 想定年数
  steps: Step[]; // 工程
};

export type BusinessPoint = {
  title: string;
  description: string;
};

export type ProcessDetail = {
  title: string;
  description: string;
  requestRange: string;
  image: string;
};

export type ScheduleItem = {
  phase: string;
  duration: string;
  detail: string;
};

export const YT_SAMPLES = [
  "https://www.youtube.com/embed/xju71Xoh4IM",
  "https://www.youtube.com/embed/fK_OFnlj1Uc",
  "https://www.youtube.com/embed/--4hsu3ATP8",
  "https://www.youtube.com/embed/rSjN1B3GSAM",
];

export const PLANS: Plan[] = [
  {
    priceUsd: 1000,
    title: "10%（1年目/企画相談まで）",
    cadence: "年1回のリモート制作打ち合わせ",
    years: 10,
    steps: [
      { no: 1, label: "企画相談" },
      { no: 2, label: "イメージボードラフ" },
      { no: 3, label: "イメージボード完成" },
      { no: 4, label: "キャラクターデザイン" },
      { no: 5, label: "背景美術" },
      { no: 6, label: "レイアウト・原画" },
      { no: 7, label: "作監修正" },
      { no: 8, label: "動画・動画検査" },
      { no: 9, label: "仕上げ・色彩設計" },
      { no: 10, label: "撮影・完成" },
    ],
  },
  {
    priceUsd: 2000,
    title: "20%（1年目/イメージボードラフまで）",
    cadence: "年2回のリモート制作打ち合わせ",
    years: 5,
    steps: [
      { no: 1, label: "企画相談" },
      { no: 2, label: "イメージボードラフ" },
      { no: 3, label: "イメージボード完成" },
      { no: 4, label: "キャラクターデザイン" },
      { no: 5, label: "背景美術" },
      { no: 6, label: "レイアウト・原画" },
      { no: 7, label: "作監修正" },
      { no: 8, label: "動画・動画検査" },
      { no: 9, label: "仕上げ・色彩設計" },
      { no: 10, label: "撮影・完成" },
    ],
  },
  {
    priceUsd: 5000,
    title: "50%（1年目/背景美術まで）",
    cadence: "年5回のリモート制作打ち合わせ",
    years: 2,
    steps: [
      { no: 1, label: "企画相談" },
      { no: 2, label: "イメージボードラフ" },
      { no: 3, label: "イメージボード完成" },
      { no: 4, label: "キャラクターデザイン" },
      { no: 5, label: "背景美術" },
      { no: 6, label: "レイアウト・原画" },
      { no: 7, label: "作監修正" },
      { no: 8, label: "動画・動画検査" },
      { no: 9, label: "仕上げ・色彩設計" },
      { no: 10, label: "撮影・完成" },
    ],
  },
  {
    priceUsd: 10000,
    title: "完成まで（1年）",
    cadence: "年10回のリモート制作打ち合わせ",
    years: 1,
    steps: [
      { no: 1, label: "企画相談" },
      { no: 2, label: "イメージボードラフ" },
      { no: 3, label: "イメージボード完成" },
      { no: 4, label: "キャラクターデザイン" },
      { no: 5, label: "背景美術" },
      { no: 6, label: "レイアウト・原画" },
      { no: 7, label: "作監修正" },
      { no: 8, label: "動画・動画検査" },
      { no: 9, label: "仕上げ・色彩設計" },
      { no: 10, label: "撮影・完成" },
    ],
  },
];

export const BUSINESS_POINTS: BusinessPoint[] = [
  {
    title: "背景とミッション",
    description:
      "クリエイティブ業界で活躍する新人アニメーターの雇用と育成を目的に、少人数制での作品づくりを通じて実践の場を提供します。",
  },
  {
    title: "制作できるもの",
    description:
      "SNS 向けの縦長ショートアニメから、事業紹介やブランドムービーまで、1〜2 分のフル尺を意識したミニアニメを中心に制作可能です。",
  },
  {
    title: "育成と伴走",
    description:
      "現役の背景美術監督と演出家がメンターとなり、リモート勉強会やフィードバックセッションを通じて新人が自走できる体制を整えています。",
  },
];

export const PROCESS_DETAILS: ProcessDetail[] = [
  {
    title: "企画・コンセプト",
    description:
      "ヒアリングをもとにブランド課題を整理し、動画のゴール・トーン&マナー・尺を明確にします。必要に応じてシナリオライターも参画。",
    requestRange:
      "世界観キーワード、使用シーン、伝えたいメッセージなどをテキストや参考資料でリクエスト可能です。",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ビジュアル設計",
    description:
      "イメージボードとキャラクターデザインを複数案提示し、色彩・質感・アニメーションテイストを確定します。",
    requestRange:
      "色指定、服装やアイテム、背景に登場させたいモチーフなど細部のリクエストに対応できます。",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "アニメーション制作",
    description:
      "レイアウトから原画・動画・仕上げ・撮影まで一気通貫で担当し、要所で監督がクオリティチェックを行います。",
    requestRange:
      "動かしたいカットの優先順位や、差し替えたいセリフ・BGM のタイミング指定を共有いただけます。",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    phase: "ご相談〜要件定義",
    duration: "約2週間",
    detail: "オンライン面談2回＋メッセージでの追加ヒアリングで目的とKPIを固めます。",
  },
  {
    phase: "プリプロダクション",
    duration: "4〜6週間",
    detail: "企画書・絵コンテ・デザイン案を並走で作成し、最大2回まで大幅修正が可能です。",
  },
  {
    phase: "アニメーション制作",
    duration: "6〜8週間",
    detail: "レイアウト〜仕上げまでを週次で共有。カット単位の微調整は中間確認の際に受付。",
  },
  {
    phase: "納品・導入サポート",
    duration: "約1週間",
    detail: "用途に合わせたフォーマットで書き出し、運用用のサムネイルやショート版もオプションで提供します。",
  },
];
