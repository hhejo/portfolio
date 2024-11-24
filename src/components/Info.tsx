export const Info = ({ title, content }: { title: string; content: string }) => (
  <div className="flex flex-col justify-center items-center w-48 gap-1">
    <h3 className="text-sm font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 text-xl">{content}</p>
  </div>
);
