export default function BreadCrumbs({ options }) {
  return (
    <ul className="flex">
      {options.map((item, index) => (
        <li
          key={index}
          className={`text-lg ${item.link ? "" : "text-black/50"}`}
        >
          {item.title}
          {options.length - 1 === index ? (
            ""
          ) : (
            <i className="icon-left-open text-sm"></i>
          )}
        </li>
      ))}
    </ul>
  );
}
