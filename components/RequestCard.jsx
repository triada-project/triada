import Image from "next/image";
import { useState } from "react"; // Importa useState
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RequestCard({ text, onDelete, onUpdate, page }) {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando el texto
  const [editedText, setEditedText] = useState(text); // Estado para almacenar el texto editado

  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(text);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(editedText); // Actualiza el texto utilizando la función onUpdate
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Puedes revertir los cambios si es necesario
  };

  return (
    <div
      className={
        page === "requerimientos"
          ? ` rounded-xl w-full h-auto border border-[#EAEAEA] px-4 py-4 shadow-lg mt-4 hover:-translate-y-1 hover:scale-105 duration-300 `
          : "rounded-xl w-full h-auto border border-[#EAEAEA] px-4 py-4 shadow-lg mt-4"
      }
    >
      <section className=" flex items-center justify-between">
        {isEditing ? (
          <input
            type="text"
            autoFocus={true}
            maxLength={100}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className={`${lato.className} w-[80%]`}
          />
        ) : (
          <span className={`${lato.className} max-w-[90%]`}>{text}</span>
        )}
        <div className=" flex flex-col items-center gap-2 lg:flex-row">
          {isEditing ? (
            <>
              <button
                className={`${lato.className} text-sm hover:border-b-1 hover:border-zinc-950`}
                onClick={handleSave}
              >
                Guardar
              </button>
              <button
                className={`${lato.className} text-sm hover:border-b-1 hover:border-zinc-950`}
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </>
          ) : (
            <button onClick={handleEdit}>
              <Image
                src={"/assets/svg/edit.svg"}
                alt="close"
                width={20}
                height={20}
              />
            </button>
          )}
          <button onClick={onDelete}>
            <Image
              src={"/assets/svg/close-card.svg"}
              alt="close"
              width={20}
              height={20}
            />
          </button>
        </div>
      </section>
    </div>
  );
}
