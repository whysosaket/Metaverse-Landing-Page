import Button from "./Button"

const Navbar = () => {
  return (
    <div className="w-full flex justify-between align-middle">
        <div className="my-auto flex">
            <h1 className="text-2xl mr-12">MetaWorld</h1>
            <div className="flex gap-6 my-auto">
                <span>How it works</span>
                <span>Product</span>
                <span>About</span>
                <span>Blog</span>
            </div>
        </div>
        <div className="flex my-auto">
            <button className="px-6 py-3 font-semibold">Sign In</button>
            <Button text="Sign Up" />
        </div>
    </div>
  )
}

export default Navbar