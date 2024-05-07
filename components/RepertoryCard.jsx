import closeCard from "../public/assets/svg/close-card.svg";
import noteMusic from "../public/assets/svg/note-music.svg";
import star from "../public/assets/svg/star.svg";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { useState, useEffect } from "react"; // Importa useState

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RepertoryCard({
  song,
  author,
  page,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);
  const [editedAuthor, setEditedAuthor] = useState(author);

  useEffect(() => {
    setEditedSong(song);
    setEditedAuthor(author);
  }, [song, author]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleAuthorChange = (event) => {
    setEditedAuthor(event.target.value);
  };

  const handleSongChange = (event) => {
    setEditedSong(event.target.value);
  };

  const handleSave = () => {
    // Verificar si se realizaron cambios en la canción o el autor
    if (editedSong !== song || editedAuthor !== author) {
      // Llamar a la función onEdit con los valores actualizados
      onEdit({ title: editedSong, artist: editedAuthor });
    }
    setIsEditing(false); // Cerrar el modo de edición después de guardar
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Puedes revertir los cambios si es necesario
  };

  return (
    <div
      className={
        page === "repertory"
          ? " rounded-xl w-56 h-36 border border-[#EAEAEA] px-4 py-4 shadow-lg hover:-translate-y-1 hover:scale-110 duration-300 "
          : "rounded-xl w-56 h-36 border border-[#EAEAEA] px-4 py-4 shadow-lg"
      }
    >
      <section className=" flex flex-col gap-3">
        <div className=" flex justify-between items-center">
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
            <>
              <button onClick={handleEditToggle} className=" place-self-start">
                <Image
                  src={"/assets/svg/edit.svg"}
                  alt="edit"
                  width={20}
                  height={20}
                />
              </button>
              <button onClick={onDelete} className=" place-self-end">
                <Image src={closeCard} alt="close" width={20} height={20} />
              </button>
            </>
          )}
        </div>
        {/* <div className=" flex justify-between">
          <button className=" place-self-start">
            <Image
              src={"/assets/svg/edit.svg"}
              alt="edit"
              width={20}
              height={20}
            />
          </button>
          <button onClick={onDelete} className=" place-self-end">
            <Image src={closeCard} alt="close" width={20} height={20} />
          </button>
        </div> */}
        <div className=" flex gap-1 items-center">
          {isEditing ? (
            <>
              <Image src={noteMusic} alt="note" width={20} height={20} />
              <input
                type="text"
                autoFocus={true}
                maxLength={100}
                value={editedSong}
                onChange={handleSongChange}
                className={`${lato.className} w-[80%]`}
              />
            </>
          ) : (
            <>
              <Image src={noteMusic} alt="note" width={20} height={20} />
              <span
                className={`${lato.className} w-[160px] text-base truncate ...`}
              >
                {song}
              </span>
            </>
          )}
        </div>

        <div className=" flex gap-1 items-center">
          {isEditing ? (
            <>
              <Image src={star} alt="note" width={20} height={20} />
              <input
                className={`${lato.className} w-[80%]`}
                value={editedAuthor}
                onChange={handleAuthorChange}
                label="Nombre del artista original"
              />
            </>
          ) : (
            <>
              <Image src={star} alt="note" width={20} height={20} />
              <span
                className={`${lato.className} w-[160px] text-base truncate ...`}
              >
                {author}
              </span>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
