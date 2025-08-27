import { cn } from "@/lib/utils";
import { FaSuitcase, FaChevronRight, FaHome, FaUser } from "react-icons/fa";
import Link from "next/link";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <section className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex justify-center gap-2 md:justify-start mb-10">
        <div className="flex flex-col items-center font-medium text-primary">
          <FaHome className="size-12 text-primary" />
          <span className="text-2xl leading-[1]">
            rent
            <b>safe</b>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Welcome to rentsafe</h1>
        <p className="text-content text-md text-balance">
          Select your role to get started
        </p>
      </div>
      <div className="grid gap-6">
        <Link
          href={"/register/broker"}
          className="w-full text-primary font-semibold text-md shadow-md bg-white hover:bg-white/90 h-15 !px-6 justify-between rounded-2xl border p-4 flex items-center"
        >
          <div className="flex items-center justify-center gap-5">
            <FaSuitcase className="size-6" />
            I&apos;m an Agent/Broker
          </div>
          <FaChevronRight className="size-4 text-content" />
        </Link>
        <Link
          href={"/register/landlord"}
          className="w-full text-primary font-semibold text-md shadow-md bg-white hover:bg-white/90 h-15 !px-6 justify-between rounded-2xl border p-4 flex items-center"
        >
          <div className="flex items-center justify-center gap-5">
            <FaHome className="size-6" />
            I&apos;m a Property Owner
          </div>
          <FaChevronRight className="size-4 text-content" />
        </Link>
        <Link
          href={"/register/tenant"}
          className="w-full text-primary font-semibold text-md shadow-md bg-white hover:bg-white/90 h-15 !px-6 justify-between rounded-2xl border p-4 flex items-center"
        >
          <div className="flex items-center justify-center gap-5">
            <FaUser className="size-6" />
            I&apos;m a Renter/Tenant
          </div>
          <FaChevronRight className="size-4 text-content" />
        </Link>
      </div>
      <div className="text-center text-md text-content mt-10">
        Already have an account?{" "}
        <Link href="login" className=" text-primary font-bold">
          Sign In
        </Link>
      </div>
    </section>
  );
}
