export default function OptionalInputs(props) {
  return (
    <>
      <div className="pt-[19px] px-[16px]">
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            label="Tipo de evento"
            type="text"
            className="bg-inherit block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white  sm:text-sm sm:leading-6"
            placeholder={props.placeholder}
          />

          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <select className="h-full rounded-md  bg-transparent  pe-2  text-[#29FEFD] sm:text-sm">
              <option className="bg-[#081540]">{props.option1}</option>
              <option className="bg-[#081540]">{props.option2}</option>
              <option className="bg-[#081540]">{props.option3}</option>
              <option className="bg-[#081540]">{props.option4}</option>
              <option className="bg-[#081540]">{props.option5}</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
