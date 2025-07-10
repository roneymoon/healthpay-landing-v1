import { ButtonHTMLAttributes} from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-[#3c8fe8] text-neutral-950 border-[#3c8fe8]",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-12"
        }
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm"; 
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...rest } = props;
    return (
        <button className={classes({ variant, className, size })} {...rest}/>
    );
}
