export const Badge = ({
  children,
  // reverse = false,
  team = true,
}: {
  children: string;
  reverse?: boolean;
  team?: boolean;
}) => (
  // <li
  //   className={`px-2.5 py-0.5 rounded-lg flex justify-center items-center text-sm cursor-pointer ${
  //     reverse ? 'bg-gray-100 text-gray-700' : 'bg-gray-700 text-gray-50'
  //   } ${team ? 'bg-gray-700 text-gray-50' : 'bg-gray-100 text-gray-700 '}`}
  // >
  <li
    className={`px-2.5 py-0.5 rounded-lg flex justify-center items-center text-sm cursor-pointer ${
      team ? 'bg-gray-700 text-gray-50' : 'bg-gray-100 text-gray-700 '
    }`}
  >
    {children}
  </li>
);
