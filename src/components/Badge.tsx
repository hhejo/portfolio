export const Badge = ({ children }: { children: string }) => (
  <li className="px-2.5 py-0.5 rounded-lg flex justify-center items-center text-sm bg-gray-800 text-gray-100">
    {children}
  </li>
);