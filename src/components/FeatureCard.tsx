import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
    title: string;             // ✅ fixed: primitive type
    description: string;       // ✅ fixed: primitive type
    children?: React.ReactNode;
    className?: string;        // ✅ fixed: primitive type
}) {
    const { title, description, children, className } = props;

    return (
        <div className={twMerge("bg-neutral-900 border border-white/15 p-6 rounded-3xl", className)}>
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
        </div>
    );
}
