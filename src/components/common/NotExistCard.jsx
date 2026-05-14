export default function NotExistCard({caption,bgColor}) {
  return (
    <div className="flex justify-center items-center">
      <p className={`p-3 w-full rounded-sm text-center text-lg ${bgColor}`}>
       {caption}
      </p>
    </div>
  );
}