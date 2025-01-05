// pages/newYear.tsx
import { NextPage } from 'next';
import Image from 'next/image';
import { useRef } from 'react';


const NewYearPage: NextPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="user-bg1">
      {/* 콘텐츠를 중앙 정렬하고 여백 추가 */}
      <div className="flex justify-center items-center min-h-screen p-4">
        {/* 실제 저장될 콘텐츠 */}
        <main ref={contentRef} className="w-[800px]">
          <div className="bg-[#001B3D] border-2 border-[#FFD700] rounded-3xl p-2">
            <div className="border-2 border-green-500/50 rounded-2xl p-6">
              {/* 제목 섹션 */}
              <div className="text-center mb-12 flex justify-center items-center gap-20">
                {/* 왼쪽 이미지 */}
                <Image
                  src="/images/2025_1.png"
                  alt="신년 불꽃놀이"
                  width={150}
                  height={150}
                  unoptimized
                />

                {/* 제목 */}
                <div>
                  <h1 className="text-[#FFD700] font-bold text-5xl mb-3">
                    2025
                  </h1>
                  <span className="bg-yellow-700/50 font-bold text-green-500/90 px-6 py-2 rounded-full inline-block text-2xl">
                    乙巳年
                  </span>
                </div>

                {/* 오른쪽 이미지 */}
                <Image
                  src="/images/2025_2.webp"
                  alt="AI 건설 혁신"
                  width={150}
                  height={150}
                  unoptimized
                />
              </div>

              {/* 본문 섹션 */}
              <div className="text-white leading-8 text-lg font-nanumGothic">
                <p className="mb-4 font-bold tracking-wider">
                  존경하는 대한토목학회 대전세종충남지회 회원 여러분
                </p>

                <p className="mb-4 font-bold tracking-wider">
                  다사다난했던 2024년을 마무리하며, 새해를 맞아 회원 여러분 가정에 건강과 행복이 가득하시기를 진심으로 기원합니다.
                </p>

                <p className="mb-4 font-bold tracking-wider">
                  지난 한 해, 우리 지회는 괄목할 만한 성장을 이루었습니다. 상반기 성공적인 학술심포지엄 개최와 더불어 회원 수가 크게 증가하며 더욱 견고한 조직으로 발돋움했습니다. 특히, 정기적인 기술 교류를 통해 회원 간의 소통과 유대가 더욱 강화된 것은 매우 뜻깊은 성과입니다.
                </p>

                <p className="mb-4 font-bold tracking-wider">
                  2025년 을사년(乙巳年)을 맞아, 우리 지회는 <span className="text-orange-500">건설 산업의 디지털 전환을 선도</span>하고자 합니다. <span className="text-orange-500">"AI 기반 스마트 건설 혁신"</span>을 핵심 전략으로, BIM-AI 통합 플랫폼과 디지털 트윈 기술 등을 도입하여 건설 현장의 생산성과 안전성을 크게 향상시키고, 산·학·연 협력 강화를 통해 회원 여러분의 전문성 향상을 도모하겠습니다.
                </p>

                <p className="font-bold tracking-wider">존경하는 회원 여러분</p>

                <p className="mb-4 font-bold tracking-wider">
                  새해에도 우리 지회는 지역 건설 산업 발전을 선도하며, 회원 여러분의 성장을 위한 굳건한 동반자가 되겠습니다. 이러한 목표를 이루기 위해서는 회원 여러분의 관심과 적극적인 참여가 큰 힘이 됩니다. 함께 노력하여 더 큰 결실을 맺을 수 있기를 기대합니다.
                </p>

                <p className="mb-4 font-bold tracking-wider">
                  새해 회원 여러분 가정에 건강과 행복이 가득하시고, 소망하시는 모든 일이 이루어지기를 진심으로 기원합니다.
                </p>

                <div className="mt-12 text-right font-bold text-xl leading-8 tracking-wider">
                  대한토목학회 대전세종충남지회 지회장
                  <br />
                  손 병 직 拜上                
                </div>

                <div className="text-center mt-8 mb-0 flex justify-center items-center">
                  <Image
                    src="/images/지회 로고.png"
                    alt="지회 로고"
                    width={450}
                    height={10}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewYearPage;