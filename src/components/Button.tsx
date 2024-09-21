const Button = (props: { text: string }) => {
  return (
    <div className="bg-custom-gradient hover:bg-custom-gradient2 px-6 py-3 rounded-3xl font-semibold text-center select-none cursor-pointer">
      {props.text}
    </div>
  );
};

export default Button;
