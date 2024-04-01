import MusicGenre from "./MusicGenre";

export default function GradientBar() {
  return (
    <section className="bg-[#081540]">
      <div className="w-screen sm:bg-[url('/assets/svg/gradientBar.svg')]">
        <div className=" w-screen bg-[#9E1056] sm:bg-inherit h-10 flex flex-row justify-evenly items-center sm:h-40  md:bg-[#9E1056] lg:h-[107px] lg:flex-r">
          <MusicGenre genre="Rock" />
          <MusicGenre genre="Banda" />
          <MusicGenre genre="Norteño" />
          <MusicGenre genre="Jazz" />
          <MusicGenre genre="Cumbia" />
          <MusicGenre genre="Clasica" />
          <MusicGenre genre="Soul" />
        </div>
      </div>
    </section>
  );
}
