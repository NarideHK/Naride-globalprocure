export default function GlobalNetwork() {
  const regions = ["中國20個城市", "日本", "台灣", "韓國", "德國", "法國", "瑞士", "印度"];

  return (
    <section id="network" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">全球據點</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {regions.map((r, i) => (
            <span key={i} className="bg-white px-4 py-2 rounded-lg shadow">
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
