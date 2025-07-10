
import Button from "@/components/Button";


export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                {/* <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} />
                </div> */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 text-neutral-950 font-semibold rounded-full bg-gradient-to-r from-[#0079d0] to-[#8bdbf6]">
                        ✨ 98% accuracy & compliance
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl  font-medium text-center mt-6">
                    Claims Simplified. Revenue{" "}
                    <span className="bg-gradient-to-r from-[#0079d0] to-[#8bdbf6] bg-clip-text text-transparent">
                        Accelerated
                    </span>
                    .
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Effortlessly handle medical claims with HealthPay,
                    streamline insurance workflows to maximize revenue.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 relative max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Enter Your Mail"
                        className="bg-transparent py-4 px-4 outline-none md:flex-1"
                    />
                    <Button
                        variant="primary"
                        className="whitespace-nowrap absolute right-2 bottom-3"
                        type="submit"
                        size="sm"
                    >
                        Book a Call
                    </Button>
                </form>
            </div>
        </section>
    );
}
