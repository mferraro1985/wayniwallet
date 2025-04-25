import BalanceBox from "@/components/home/BalanceBox";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BalanceBox fullname="Juan Perez" avatar="https://randomuser.me/api/portraits/women/96.jpg" balance={10000}/>
    </div>
  );
}