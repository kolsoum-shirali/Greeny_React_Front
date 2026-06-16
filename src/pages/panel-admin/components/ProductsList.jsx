import { useState, useEffect } from "react";
import AddProductDialog from "./AddProductDialog";
export default function ProductsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div>
      <button
        onClick={() => openDialog()}
        className="bg-green-600 text-white px-6 py-1.5 rounded text-sm hover:bg-white hover:text-green-800 border-2 border-green-600 transition-all font-medium whitespace-nowrap"
      >
        افزودن محصول
      </button>
      <AddProductDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
