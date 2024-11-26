export const Badge = ({ children, reverse = false }: { children: string; reverse?: boolean }) => (
  <li
    className={`px-2.5 py-0.5 rounded-lg flex justify-center items-center text-sm ${
      reverse ? 'bg-white text-gray-700' : 'bg-gray-700 text-gray-50'
    }`}
  >
    {children}
  </li>
);
