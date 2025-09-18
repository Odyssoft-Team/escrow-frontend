import Header from "@/components/Header";
import MenuMobile from "@/components/MenuMobile";

export default function SystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen bg-[#F7F8FA] pt-0">
      <Header />
      {children}
      <MenuMobile />
    </div>
  );
}
