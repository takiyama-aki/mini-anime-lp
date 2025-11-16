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
    title: "事業1",
    description:
      "説明",
  },
  {
    title: "事業2",
    description:
      "説明",
  },
  {
    title: "事業3",
    description:
      "説明",
  },
];

export const PROCESS_DETAILS: ProcessDetail[] = [
  {
    title: "工程",
    description:
      "説明",
    requestRange:
      "リクエストできる範囲",
    image:
      "https://images.unsplash.com/vector-1738590593450-647695dbf9d0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "工程",
    description:
      "説明",
    requestRange:
      "リクエストできる範囲",
    image:
      "https://images.unsplash.com/vector-1738590593450-647695dbf9d0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "工程",
    description:
      "説明",
    requestRange:
      "リクエストできる範囲",
    image:
      "https://images.unsplash.com/vector-1738590593450-647695dbf9d0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    phase: "フェーズ1",
    duration: "約⚪︎週間",
    detail: "説明",
  },
  {
    phase: "フェーズ2",
    duration: "約⚪︎週間",
    detail: "説明",
  },
  {
    phase: "フェーズ3",
    duration: "約⚪︎週間",
    detail: "説明",
  },
  {
    phase: "フェーズ4",
    duration: "約⚪︎週間",
    detail: "説明",
  },
];
