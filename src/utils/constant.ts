import require from '@/utils/require';

export interface Exhibition {
  name: string;
  desc: string;
  desc_en: string;
  status: number;
  icon: string;
  icon_active: string;
  formula: string;
  formula_active: string;
  formula_default: string;
  color: string;
  background: string;
  background_active: string;
  background_default: string;
}

// 第一项和最后一项是重复的，用于循环滚动
export const exhibitionList: Exhibition[] = [
  {
    name: '十年',
    desc: '我们对世界的热爱与探索，带领我们继续求解无限的未来。',
    desc_en: 'Our love and exploration of the world leads us to continue to solve the infinite future.',
    status: 0,
    icon: require('image/logo_7.svg'),
    icon_active: require('image/logo_7_1.svg'),
    formula: require('image/formula_7.svg'),
    formula_active: require('image/formula_7_1.svg'),
    formula_default: require('image/formula_7_2.svg'),
    color: '#EF5B5B',
    background: 'linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)',
    background_active: "linear-gradient(0deg, #EC9F8F, #EC9F8F), linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)",
    background_default: "#F3E7E7"
  },
  {
    name: '探渊',
    desc: '挖掘设计的深层价值，以科技引路在设计的海域不断向深处探索。',
    desc_en: 'Mining the deep value of design and exploring further into the realm of design with technology as the guide.',
    status: 1,
    icon: require('image/logo_1.svg'),
    icon_active: require('image/logo_1_1.svg'),
    formula: require('image/formula_1.svg'),
    formula_active: require('image/formula_1_1.svg'),
    formula_default: require('image/formula_1_2.svg'),
    color: '#8F57A0',
    background: 'linear-gradient(180deg, #E6E0E0 0%, #FFFFFF 100%)',
    background_active: "#AF98B4",
    background_default: "#E6E0E0"
  },
  {
    name: '拓界',
    desc: '拓宽界限，让设计的温暖触及每个角落。',
    desc_en: 'Expanding boundaries and wide-spreading the warmth of design.',
    status: 1,
    icon: require('image/logo_2.svg'),
    icon_active: require('image/logo_2_1.svg'),
    formula: require('image/formula_2.svg'),
    formula_active: require('image/formula_2_1.svg'),
    formula_default: require('image/formula_2_2.svg'),
    color: '#93C984',
    background: 'linear-gradient(180deg, #E3E6DF 0%, #FFFFFF 100%), #E3E6DF',
    background_active: "linear-gradient(0deg, #99C39F, #99C39F), linear-gradient(180deg, #E3E6DF 0%, #FFFFFF 100%), #E3E6DF",
    background_default: "#E3E6DF"
  },
  {
    name: '视趣',
    desc: '设计的视觉盛宴， 如诗如画，跃然眼前。',
    desc_en: 'Serving a feast for the eyes, exhaling a picturesque design.',
    status: 1,
    icon: require('image/logo_3.svg'),
    icon_active: require('image/logo_3_1.svg'),
    formula: require('image/formula_3.svg'),
    formula_active: require('image/formula_3_1.svg'),
    formula_default: require('image/formula_3_2.svg'),
    color: '#F7874A',
    background: 'linear-gradient(180deg, rgba(244, 233, 215, 0) 0%, #FFFFFF 100%), #F4E9D7',
    background_active: "linear-gradient(0deg, #E09E68, #E09E68), linear-gradient(180deg, rgba(244, 233, 215, 0) 0%, #FFFFFF 100%), #F4E9D7",
    background_default: "#F4E9D7"
  },
  {
    name: '融彻',
    desc: '涓涓细流，在每一处设计细节中融入深沉的情感。',
    desc_en: 'Merging exuberant emotion into every fraction of design.',
    status: 1,
    icon: require('image/logo_4.svg'),
    icon_active: require('image/logo_4_1.svg'),
    formula: require('image/formula_4.svg'),
    formula_active: require('image/formula_4_1.svg'),
    formula_default: require('image/formula_4_2.svg'),
    color: '#F05883',
    background: 'linear-gradient(180deg, #F5E7ED 0%, #FFFFFF 100%), #F5E7ED',
    background_active: "linear-gradient(0deg, #DE81AB, #DE81AB), linear-gradient(180deg, #F5E7ED 0%, #FFFFFF 100%), #F5E7ED",
    background_default: "#F5E7ED"
  },
  {
    name: '意绪',
    desc: '设计师心海的思绪，引领观者进入设计师的思维世界。',
    desc_en: 'Welcome to our mind palace.',
    status: 1,
    icon: require('image/logo_5.svg'),
    icon_active: require('image/logo_5_1.svg'),
    formula: require('image/formula_5.svg'),
    formula_active: require('image/formula_5_1.svg'),
    formula_default: require('image/formula_5_2.svg'),
    color: '#FCC143',
    background: 'linear-gradient(180deg, #F7F3E7 0%, #FFFFFF 100%)',
    background_active: "linear-gradient(0deg, #D8B994, #D8B994), linear-gradient(180deg, #F7F3E7 0%, #FFFFFF 100%)",
    background_default: "#F7F3E7"
  },
  {
    name: '抟塑',
    desc: '设计对物质世界的精妙雕琢，将无形的创意孕育成有形的果实。',
    desc_en: 'Shaping materials, nurturing ideas, harvesting designs.',
    status: 1,
    icon: require('image/logo_6.svg'),
    icon_active: require('image/logo_6_1.svg'),
    formula: require('image/formula_6.svg'),
    formula_active: require('image/formula_6_1.svg'),
    formula_default: require('image/formula_6_2.svg'),
    color: '#4F90CA',
    background: 'linear-gradient(180deg, #DFEDED 0%, #FFFFFF 100%)',
    background_active: "linear-gradient(0deg, #89B0C9, #89B0C9), linear-gradient(180deg, #DFEDED 0%, #FFFFFF 100%)",
    background_default: "#DFEDED"
  },
  {
    name: '十年',
    desc: '我们对世界的热爱与探索，带领我们继续求解无限的未来。',
    desc_en: 'Our love and exploration of the world leads us to continue to solve the infinite future.',
    status: 1,
    icon: require('image/logo_7.svg'),
    icon_active: require('image/logo_7_1.svg'),
    formula: require('image/formula_7.svg'),
    formula_active: require('image/formula_7_1.svg'),
    formula_default: require('image/formula_7_2.svg'),
    color: '#EF5B5B',
    background: 'linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)',
    background_active: "linear-gradient(0deg, #EC9F8F, #EC9F8F), linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)",
    background_default: "#F3E7E7"
  },
  {
    name: '探渊',
    desc: '挖掘设计的深层价值，以科技引路在设计的海域不断向深处探索。',
    desc_en: 'Mining the deep value of design and exploring further into the realm of design with technology as the guide.',
    status: 0,
    icon: require('image/logo_1.svg'),
    icon_active: require('image/logo_1_1.svg'),
    formula: require('image/formula_1.svg'),
    formula_active: require('image/formula_1_1.svg'),
    formula_default: require('image/formula_1_2.svg'),
    color: '#8F57A0',
    background: 'linear-gradient(180deg, #E6E0E0 0%, #FFFFFF 100%)',
    background_active: "#AF98B4",
    background_default: "#E6E0E0"
  }
];