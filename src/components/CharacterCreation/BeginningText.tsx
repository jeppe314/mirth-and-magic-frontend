type Props = {};

export default function BeginningText({}: Props) {
  return (
    <div className="flex flex-grow flex-col items-center tracking-wide text-gray-300 p-4">
      <h3 className="text-3xl italic">A lone wanderer...</h3>
      <section className="flex flex-grow flex-col justify-center items-center gap-12  text-gray-400 italic text-center">
        <p>Through the dense forests of the North, a figure treaded.</p>
        <p>
          Days blurred as the wanderer's boots crunched over leaves and snow. The wind whispered of ancient spirits, but
          the traveler pressed on.
        </p>
        <p>
          As the sun set, a city's silhouette appeared between peaks, its spires promising shelter and a fresh start...
        </p>
      </section>
    </div>
  );
}
