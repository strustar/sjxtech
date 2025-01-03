// utils/data.ts
export const getContentData = () => {
  return {
    
  sliderSettings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      className: 'center',
    },
  
  images: [
    {
      src: '/images/support.png',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
    {
      src: '/images/beam.png',
      title: '보(Beam) 설계 자동화',
      url: 'https://beam-frp.streamlit.app',
      description: '보 설계 비교 : RC vs. FRP Concrete',
    },
    {
      src: '/images/column.png',
      title: '기둥(Column) 설계 자동화',
      url: 'https://column.streamlit.app',
      description: '기둥 설계 비교 : RC vs. FRP Concrete',
    },
  ],

  videos: [
    {
      src: '/images/support.webm',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
    {
      src: '/images/beam.webm',
      title: '보(Beam) 설계 자동화',
      url: 'https://beam-frp.streamlit.app',
      description: '보 설계 비교 : RC vs. FRP Concrete',
    },
    {
      src: '/images/column.webm',
      title: '기둥(Column) 설계 자동화',
      url: 'https://column.streamlit.app',
      description: '기둥 설계 비교 : RC vs. FRP Concrete',
    },
  ],

  sections: [
    {
      title: 'AI 기반 업무 자동화',
      messages: [
        'AI로 설계의 한계를 넘어, 새로운 가능성을 열다.',
        '인공지능이 자동화하는 미래, 지금 만나보세요.',
        'AI 기반 자동 설계 솔루션으로 생산성과 혁신을 극대화하세요.',
      ],
    },
    {
      title: 'AI 기반 설계 최적화',
      messages: [
        'AI 기반 최적화 기술로 효율성의 새로운 기준을 제시합니다.',
        '데이터 기반 지능형 최적화, 최고의 결과를 약속합니다.',
        'AI가 찾아내는 최적의 솔루션, 당신의 비즈니스를 혁신합니다.',
      ],
    },
    {
      title: 'AI 기반 업무 혁신',
      messages: [
        'AI와 함께, 업무의 미래를 혁신하세요.',
        '인공지능으로 업무 효율을 극대화하고, 새로운 가치를 창출합니다.',
        'AI 기반 업무 혁신으로 당신의 시간을 더 가치 있게 만들어 드립니다.',
      ],
    },
    {
      title: '파이썬 코딩 (RAG)',
      messages: [
        '파이썬과 AI의 만남, 무한한 가능성을 코드로 구현하다.',
        'AI의 고질적인 문제인 헐루시네이션, 파이썬 RAG로 그 해답을 찾다.',
        '파이썬 기반 AI 솔루션 개발, 미래를 향한 코딩 여정을 함께합니다.',
      ],
    },
  ],
};
}
