import { GiBrain } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";
import { GoClockFill } from "react-icons/go";
import { GiCheckedShield } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";

export default function AssistanCard() {
  return (
    <div className="w-full rounded-xl border border-primary/50 flex items-center gap-2 p-4 py-6 shadow-sm shadow-primary">
      <div className="w-[40%] flex items-center justify-center">
        <span className="size-18 flex items-center justify-center rounded-full bg-primary shadow-md shadow-primary">
          <GiBrain className="size-12 text-white" />
        </span>
      </div>
      <div className="flex flex-col gap-2  w-[60%]">
        <div className="flex flex-col gap-1">
          <h3 className="text-primary font-bold text-2xl leading-[1]">
            Escrow Genie
          </h3>
          <span className="bg-primary/10 rounded-full text-xs px-2 py-1 text-primary w-fit leading-[1]">
            AI-Powered Assitant
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-content text-sm">
            Ask me anything about your properties, contracts, or escrow
            accounts. I&apos;m here 24/7 to help!
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col items-center justify-center gap-1 text-[#0F6DEB]">
              <span className="size-8 flex items-center justify-center rounded-md border border-[#0F6DEB]/50 bg-[#0F6DEB]/10">
                <LuBrain />
              </span>
              <span className="text-[10px] text-center font-medium leading-[1.2]">
                Smart <br /> AI
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 text-[#34C955]">
              <span className="size-8 flex items-center justify-center rounded-md border border-[#34C955]/50 bg-[#34C955]/10">
                <GoClockFill />
              </span>
              <span className="text-[10px] text-center font-medium leading-[1.2]">
                24/7 <br /> Online
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 text-[#AF52E0]">
              <span className="size-8 flex items-center justify-center rounded-md border border-[#AF52E0]/50 bg-[#AF52E0]/10">
                <GiCheckedShield />
              </span>
              <span className="text-[10px] text-center font-medium leading-[1.2]">
                Secure <br /> & Safe
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 text-[#FA9301]">
              <span className="size-8 flex items-center justify-center rounded-md border border-[#FA9301]/50 bg-[#FA9301]/10">
                <AiFillThunderbolt />
              </span>
              <span className="text-[10px] text-center font-medium leading-[1.2]">
                Fast <br /> Reply
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
