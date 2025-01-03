// pages/index.tsx
import { NextPage } from 'next'
import Head from 'next/head'

const NewYearPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>2025 신년사</title>
        <link 
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen bg-[#002B5C] flex justify-center items-center p-2">
      {/* <main className="min-h-screen bg-green-700/20 flex justify-center items-center p-8"> */}
        <div className="border-2 border-[#FFD700] rounded-3xl p-2 max-w-[800px] w-full">
          <div className="border border-white/20 rounded-2xl p-6">
            <div className="text-center mb-16">
              <h1 className="text-[#FFD700] font-bold text-5xl mb-3">
                2025
              </h1>
              <span className="bg-yellow-500/70 font-bold text-green-500/90 px-6 py-2 rounded-full inline-block text-2xl">
                乙巳年
              </span>
            </div>

            <div className="text-white leading-8 text-lg font-nanumGothic">
            <p className="text-xl mb-4 font-bold">
              존경하는 대한토목학회 대전세종충남지회 회원 여러분
            </p>
            <p className="mb-4 font-bold">
              다사다난했던 2024년을 마무리하며, 새해를 맞아 회원 여러분 가정에 건강과 행복이 가득하시기를 진심으로 기원합니다.
            </p>
            <p className="mb-4 font-bold">
              지난 한 해, 우리 지회는 괄목할 만한 성장을 이루었습니다. 성공적인 상반기 학술심포지엄 개최와 더불어 회원 수가 크게 증가하며 더욱 견고한 조직으로 발돋움했습니다. 특히, 정기적인 기술 교류를 통해 회원 간의 소통과 유대가 더욱 강화된 것은 매우 뜻깊은 성과입니다.
            </p>
            <p className="mb-4 font-bold">
              2025년 을사년(乙巳年)을 맞아, 우리 지회는 건설 산업의 디지털 전환을 선도하고자 합니다. 이를 위해 "AI 기반 스마트 건설 혁신"을 핵심 전략으로 추진하겠습니다. BIM-AI 통합 플랫폼, 실시간 현장 안전 관리, 디지털 트윈 기술을 도입하여 건설 현장의 생산성과 안전성을 획기적으로 향상시키고, 산·학·연 협력 강화와 맞춤형 교육 프로그램 확대를 통해 회원 여러분의 전문성 향상을 강화하겠습니다.
            </p>
            <p className="font-bold">
              존경하는 회원 여러분
            </p>
            <p className="mb-4 font-bold">            
              새해에도 우리 지회는 지역 건설 산업 발전을 선도하며, 회원 여러분의 성장을 위한 든든한 디딤돌이 되겠습니다. 이러한 노력이 결실을 맺기 위해서는 회원 여러분의 적극적인 참여와 지지가 필요합니다.
            </p>
            <p className="mb-4 font-bold">
              회원 여러분 가정에 건강과 행복이 가득하시고, 소망하시는 모든 일이 이루어지기를 진심으로 기원합니다.
            </p>
              
              <div className="mt-12 text-right font-bold text-xl leading-8">
                대한토목학회 대전세종충남지회 지회장<br/>
                손 병 직 拜上
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewYearPage