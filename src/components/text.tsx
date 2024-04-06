const Text = (props: { title: string, icon: string, sale: string }) => {
  return (
    <span className="relative inline-block  rounded-md border bg-white shadow-sm pl-4 align-middle hover:border-solid hover:border-2 hover:border-sky-500">
      <span style={{ right: "-5px", top: "-15px" }} className="absolute z-30 rounded-lg text-white bg-[#ef4444]">{props.sale}</span>
      <i className={props.icon}></i>
      <button className="inline-block border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
        {props.title}
      </button>
    </span>
  );
};

export default Text;