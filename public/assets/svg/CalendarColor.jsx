export default function CalendarColor({ colorFill }) {
  return (
    <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 20.576c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 18.576v-14c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 2 2.576h1v-1c0-.283.096-.52.288-.712A.968.968 0 0 1 4 .576c.283 0 .52.096.713.288.191.191.287.429.287.712v1h8v-1c0-.283.096-.52.287-.712A.968.968 0 0 1 14 .576c.283 0 .52.096.713.288.191.191.287.429.287.712v1h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v4.675c0 .284-.096.521-.288.713a.968.968 0 0 1-.712.287.968.968 0 0 1-.712-.287A.967.967 0 0 1 16 9.25v-.675H2v10h5.8c.283 0 .52.096.712.288.192.191.288.429.288.712 0 .284-.096.521-.288.713a.968.968 0 0 1-.712.287H2Zm13 1c-1.383 0-2.563-.487-3.537-1.462-.975-.975-1.463-2.155-1.463-3.538s.488-2.562 1.463-3.537c.975-.975 2.154-1.463 3.537-1.463s2.563.488 3.538 1.463c.974.975 1.462 2.154 1.462 3.537s-.488 2.563-1.462 3.538c-.976.975-2.155 1.462-3.538 1.462Zm.5-5.2v-2.3a.48.48 0 0 0-.15-.35.48.48 0 0 0-.7 0 .48.48 0 0 0-.15.35v2.275c0 .134.025.263.075.388.05.125.125.237.225.337l1.525 1.525a.48.48 0 0 0 .7 0 .48.48 0 0 0 0-.7L15.5 16.376Z"
        fill={`${colorFill === "disponibilidad" ? "#29FEFD" : "#ffffff "}`}
      />
    </svg>
  );
}