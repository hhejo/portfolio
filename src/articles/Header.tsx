export default function Header() {
  return (
    <header className="h-16 flex justify-between items-center px-8">
      <div className="text-lg font-bold text-gray-900">Hhejo's Portfolio</div>
      <nav className="flex gap-6 text-gray-700">
        <a href="#">About Me</a>
        <a href="#">Skills</a>
        <a href="#">Archiving</a>
        <a href="#">Projects</a>
        <a href="#">Career</a>
      </nav>
    </header>
  );
}
