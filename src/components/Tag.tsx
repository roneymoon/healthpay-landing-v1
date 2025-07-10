import { HTMLAttributes } from "react";
import {twMerge} from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>){
    const { className, children, ...otherProps} = props;
    return (
        <div className={twMerge("inline-flex border border-[#3c8fe8] gap-2 text-[#3c8fe8] rounded-full px-3 py-1 uppercase items-center", className)} {...otherProps}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
