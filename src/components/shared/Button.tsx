const Button = (props: { text: string }) => {
  return (
    <div className="bg-custom-gradient font-universo text-[14px] flex align-middle text-black hover:bg-custom-gradient2 px-6 py-3 rounded-3xl text-center select-none cursor-pointer">
      <span className="my-auto">{props.text}</span>
    </div>
  );
};

export default Button;
