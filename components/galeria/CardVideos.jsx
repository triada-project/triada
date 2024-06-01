import dataMusician from "../../objects/musicianObject.json";
import YouTube from "react-youtube";

const videoUrl = dataMusician.users.multimedia.videos;
//console.log(videoUrl);

export default function CardPics() {
  return (
    <div className="grid grid-cols-1 mt-5 gap-2  rounded-lg ">
      {videoUrl.map((url) => (
        <div
          key={url.index}
          className="rounded shadow hover:outline outline-[#EF107D] object-fit cursor-pointer"
        >
          <YouTube src={url} alt={`Picture ${url}`} />
          <div className="">
            <label
              htmlFor=""
              className="bg-[#37474F] w-[40px] h-[40px] rounded-lg flex flex-col justify-center hover:bg-[#EE0075] text-white py-2 px-4 rounded cursor-pointer items-center"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 15.75C4.8375 15.75 4.48438 15.6031 4.19063 15.3094C3.89688 15.0156 3.75 14.6625 3.75 14.25V4.5C3.5375 4.5 3.35938 4.42813 3.21563 4.28438C3.07188 4.14063 3 3.9625 3 3.75C3 3.5375 3.07188 3.35938 3.21563 3.21563C3.35938 3.07188 3.5375 3 3.75 3H6.75C6.75 2.7875 6.82188 2.60938 6.96563 2.46563C7.10938 2.32188 7.2875 2.25 7.5 2.25H10.5C10.7125 2.25 10.8906 2.32188 11.0344 2.46563C11.1781 2.60938 11.25 2.7875 11.25 3H14.25C14.4625 3 14.6406 3.07188 14.7844 3.21563C14.9281 3.35938 15 3.5375 15 3.75C15 3.9625 14.9281 4.14063 14.7844 4.28438C14.6406 4.42813 14.4625 4.5 14.25 4.5V14.25C14.25 14.6625 14.1031 15.0156 13.8094 15.3094C13.5156 15.6031 13.1625 15.75 12.75 15.75H5.25ZM7.5 12.75C7.7125 12.75 7.89063 12.6781 8.03438 12.5344C8.17813 12.3906 8.25 12.2125 8.25 12V6.75C8.25 6.5375 8.17813 6.35938 8.03438 6.21563C7.89063 6.07188 7.7125 6 7.5 6C7.2875 6 7.10938 6.07188 6.96563 6.21563C6.82188 6.35938 6.75 6.5375 6.75 6.75V12C6.75 12.2125 6.82188 12.3906 6.96563 12.5344C7.10938 12.6781 7.2875 12.75 7.5 12.75ZM10.5 12.75C10.7125 12.75 10.8906 12.6781 11.0344 12.5344C11.1781 12.3906 11.25 12.2125 11.25 12V6.75C11.25 6.5375 11.1781 6.35938 11.0344 6.21563C10.8906 6.07188 10.7125 6 10.5 6C10.2875 6 10.1094 6.07188 9.96563 6.21563C9.82188 6.35938 9.75 6.5375 9.75 6.75V12C9.75 12.2125 9.82188 12.3906 9.96563 12.5344C10.1094 12.6781 10.2875 12.75 10.5 12.75Z"
                  fill="white"
                />
              </svg>
            </label>

            <button className="rounded-bl-lg rounded-tr-lg p-1" />
          </div>
        </div>
      ))}
    </div>
  );
}
