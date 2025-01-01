import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed w-[300px] h-screen bg-[#22272e] overflow-y-auto pt-14">
      <div className="p-6 space-y-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-amber-400 p-2 rounded-lg">
              <span>🚀</span>
            </div>
            <span className="font-semibold">Get started</span>
          </div>
          <div className="space-y-2 ml-4">
            <Link
              href="/installation"
              className="block text-gray-300 hover:text-white"
            >
              Installation
            </Link>
            <Link
              href="/fundamentals"
              className="block text-gray-300 hover:text-white"
            >
              Fundamentals
            </Link>
            <Link
              href="/first-steps"
              className="block text-gray-300 hover:text-white"
            >
              First steps
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
