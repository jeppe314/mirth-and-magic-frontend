type Props = {};

export default function LoreText({ children, heading }: any) {
  return (
    <div className="flex flex-col items-center text-center gap-4 tracking-wide text-gray-300 p-4">
      {heading && <h3 className="text-3xl italic">{heading}</h3>}
      <section className="flex w-full h-full flex-col justify-center items-center gap-2 text-gray-400 italic text-center">
        {children}
      </section>
    </div>
  );
}
