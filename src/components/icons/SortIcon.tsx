const SortIcon = () => (
  <svg
    fill="#000000"
    viewBox="0 0 24 24"
    id="sort-ascending"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 dark:fill-slate-200 fill-black"
  >
    <polyline
      id="secondary"
      points="10 15 6 19 2 15"
      className="fill-none dark:stroke-white stroke-black stroke-2"
    ></polyline>
    <line
      id="secondary-2"
      data-name="secondary"
      x1="6"
      y1="19"
      x2="6"
      y2="4"
      className="fill-none dark:stroke-white stroke-black stroke-2"
    ></line>
    <path
      id="primary"
      d="M20,16H15m5-5H13m7-5H10"
      className="fill-none stroke-sky-500 stroke-2"
    ></path>
  </svg>
);

export default SortIcon;
