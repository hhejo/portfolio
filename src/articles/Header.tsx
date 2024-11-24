export default function Header() {
  return (
    <header className="h-16 flex justify-between items-center px-8">
      <a href="/" className="text-lg font-bold text-gray-900">
        HHEJO'S PORTFOLIO
      </a>
      <nav className="flex gap-6 text-gray-700">
        <a href="#">ABOUT ME</a>
        <a href="#">SKILLS</a>
        <a href="#">PROJECTS</a>
        <a href="#">CAREER</a>
      </nav>
    </header>
  );
}
