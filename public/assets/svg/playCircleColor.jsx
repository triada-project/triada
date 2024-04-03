export default function PlayCircleColor({ colorFill }) {
  return (
    <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m10.65 16.326 4.875-3.125a.705.705 0 0 0 .35-.625.705.705 0 0 0-.35-.625L10.65 8.826a.688.688 0 0 0-.763-.037.705.705 0 0 0-.387.662v6.25c0 .3.13.521.387.663.259.141.513.129.763-.038Zm1.35 6.25a9.738 9.738 0 0 1-3.9-.787 10.099 10.099 0 0 1-3.175-2.138 10.1 10.1 0 0 1-2.137-3.175 9.738 9.738 0 0 1-.788-3.9c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137a9.738 9.738 0 0 1 3.9-.788c1.383 0 2.683.263 3.9.788A10.098 10.098 0 0 1 19.075 5.5c.9.9 1.613 1.959 2.137 3.175a9.737 9.737 0 0 1 .788 3.9 9.738 9.738 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.138a9.738 9.738 0 0 1-3.9.787Z"
        fill={`${colorFill === "eventos" ? "#29FEFD" : "#ffffff "}`}
      />
    </svg>
  );
}