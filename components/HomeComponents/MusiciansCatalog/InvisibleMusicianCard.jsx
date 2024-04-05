export default function InvisibleMusicianCard(props) {
  return (
    <div className="hidden bg-[#312971] sm:flex sm:flex-col sm:w-[200px] md:w-[324px] pb-2 rounded-lg  ">
      <div id="imgContainer" className=" h-[120px]  ">
        <img
          src="/assets/images/_CardMedia_.png"
          alt=""
          className="md:w-[324px]"
        />
      </div>
      <h2 className="text-white ps-3 pt-2 md:pt-24">{props.musician}</h2>
      <h2 className="text-white ps-3 pt-2">{props.locality}</h2>
      <div className="flex  ps-3 pt-3 gap-2 ">
        <a
          href=""
          className="bg-[#081540] text-[#00E8E7] rounded-2xl w-fit px-2"
        >
          {props.chip1}
        </a>
        <a
          href=""
          className="bg-[#081540] text-[#00E8E7] rounded-2xl w-fit px-2"
        >
          {props.chip2}
        </a>
      </div>
      <div
        id="pinkButton"
        className="pt-[16px] pb-[16px] flex  sm:w-[200px] sm:ps-2 md:ps-3 md:w-96   "
      >
        <button className="rounded-lg bg-[#EE0075] w-[168px] sm:w-[180px] md:w-[300px] md:pt-1   h-10 flex flex-row  justify-center gap-[18px] text-white">
          <h2 className="sm:px-2 ">INFORMACIÓN</h2>
        </button>
      </div>
    </div>
  );
}
