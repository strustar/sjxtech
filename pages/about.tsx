import ChatGptLink from '../components/Link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Website</h1>

      {/* ChatGPT 링크 컴포넌트 사용 */}
      <ChatGptLink />

      {/* 다른 콘텐츠 추가 */}
    </div>
  );
};

export default Home;
