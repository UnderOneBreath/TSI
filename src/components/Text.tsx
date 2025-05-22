type TypeSize = "small" | "medium" | "large"

interface TextProps{
    children?:string;
    size: TypeSize;
    color?:string;
}

const Text = (props:TextProps) => {
    const {children, size="medium", color="black"} = props;
    const sizes = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg font-bold"
    };
    return (
        <p className={`${sizes[size]} text-${color}`}>{children}</p>
    );
}
 
export default Text;