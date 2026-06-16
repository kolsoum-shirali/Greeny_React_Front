export default function DescriptionDialog({ desc, isOpen, onClose }) {
  if (!isOpen) return null; // اگر باز نباشد، چیزی رندر نمی‌شود

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-lg w-full">
        <p className="text-justify">{desc}</p>
        <div className="flex justify-end">
          <button 
          onClick={onClose} 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          بستن
        </button>
        </div>
      </div>
    </div>
  );
}
