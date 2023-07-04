export function Details({ hash }: { hash?: string }) {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
      {hash && (
        <div className="self-stretch relative leading-[24px]">
          <p className="m-0">You wanted to explore:</p>
          <p className="m-0 text-darkgray break-words break-all">{hash}</p>
        </div>
      )}
      <div className="self-stretch relative text-[26px] font-medium">Chose an option to continue</div>
    </div>
  );
}
