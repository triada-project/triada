export default function RequestColor({ colorFill }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1.875C5.52 1.875 1.875 5.52 1.875 10S5.52 18.125 10 18.125 18.125 14.48 18.125 10 14.48 1.875 10 1.875Zm-1.875 5A1.88 1.88 0 0 1 10 5a1.88 1.88 0 0 1 1.875 1.875v2.5A1.88 1.88 0 0 1 10 11.25a1.88 1.88 0 0 1-1.875-1.875v-2.5Zm5.625 2.821c0 .913-.427 1.782-1.203 2.448a4.051 4.051 0 0 1-1.922.913v.693h.625a.624.624 0 1 1 0 1.25h-2.5a.625.625 0 1 1 0-1.25h.625v-.693a4.051 4.051 0 0 1-1.922-.913c-.776-.666-1.203-1.535-1.203-2.448v-.934a.625.625 0 0 1 1.25 0v.934c0 1.002 1.094 2.167 2.5 2.167 1.156 0 2.5-.946 2.5-2.167v-.934a.625.625 0 1 1 1.25 0v.934Z"
        fill={`${colorFill === "requerimientos" ? "#29FEFD" : "#ffffff "}`}
      />
    </svg>
  );
}
