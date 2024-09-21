const GradientText = (props: {text: string}) => {
  return (
    <span className="bg-clip-text text-transparent bg-text-gradient">
      {props.text}
    </span>
  )
}

export default GradientText