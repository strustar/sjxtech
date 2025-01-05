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

    designs: [
      {
        title: '보(Beam) 설계 자동화',
        description: '• RC vs. FRP Concrete (설계 비교) •• 웹 기반 시각화',
        url: 'https://beam-frp.streamlit.app/',
        imageUrl: '/images/beam.png',
      },
      {
        title: '기둥(Column) 설계 자동화',
        description: '• RC vs. FRP Concrete (설계 비교) •• 웹 기반 시각화',
        url: 'https://column.streamlit.app/',
        imageUrl: '/images/column.png',
      },
      {
        title: '시스템 동바리(비계) 설계 자동화',
        description: '• 시스템 동바리(비계) 설계 검토 보고서 •• 3D 구조해석까지 30페이지 pdf 보고서 자동 생성',
        url: 'https://support.streamlit.app/',
        imageUrl: '/images/support.png',
      },
    ],

    bids: [
      {
        title: '입찰 정보 검색',
        description: '• 나라장터(조달청) 등 입찰정보 검색 •• 검색 정보 엑셀 저장 및 모든 자료 일괄 다운로드 기능 제공',
        url: 'https://bidinfo.streamlit.app/',
        imageUrl: '/images/bidSearch.png',
      },
      {
        title: '입찰 공고문 분석',
        description: '• 입찰 공고문 자동 분석, 특이 사항 분석 등 •• 당사 정보와 매칭 후 추천 입찰 정보 제공 가능',
        url: 'https://kolontech.streamlit.app/',
        imageUrl: '/images/bidFile.png',
      },
      {
        title: '낙찰 금액 예측',
        description: '• 낙찰 금액 예측, 낙찰 확률 10% 이상 상승 예측 가능 •• 과학적, 기술적, 통계적 분석 및 AI 예측',
        url: 'https://bidtech.streamlit.app/',
        imageUrl: '/images/bidPrice.png',
      },
    ],

    etc: [
      {
        title: 'pdf 검색 (키워드 기반)',
        description: '• 키워드 기반 pdf 내용 검색 •• 키워드 포함된 모든 문장 추출, 원본 데이터에 하이라이트 표시',
        url: 'https://pdftech.streamlit.app/',
        imageUrl: '/images/pdf.png',
      },
      {
        title: '터널 최적 단면 자동화',
        description: '• 터널 최적 단면 CAD 도면 자동 생성 •• 다양한 조건 입력 후 최적 단면 자동 생성',
        url: 'https://tunneltech.streamlit.app/',
        imageUrl: '/images/tunnel.png',
      },
      {
        title: '손글씨 인식 자동화',
        description: '• 터널 최적 단면 도면 자동 생성 •• 다양한 조건 입력 후 최적 단면 자동 생성',
        url: 'https://cadtech.streamlit.app/',
        imageUrl: '/images/hand.png',
      },
    ],

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
