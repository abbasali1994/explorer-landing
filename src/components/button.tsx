export function Button({ label, onClick, src }: { label: string; onClick: ()=>void; src: string }) {
  return (
    <div
      className="cursor-pointer hover:bg-gray-500 self-stretch rounded-xl bg-gray-600 flex flex-col p-6 items-center justify-center gap-[24px]"
      onClick={onClick}>
      <img className="w-9 h-9 object-cover" alt="" src={src} />
      <div className="relative uppercase font-semibold">{label}</div>
    </div>
  );
}
