export default function SearchPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md p-4">
      <h1 className="text-2xl font-bold">Search</h1>
      <p className="mt-2 text-slate-700">Use the home screen search field for product lookups and filtering.</p>
      <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold">Nearby stores</h2>
        <p className="mt-2 text-sm text-slate-600">
          Integrate Google Maps JS API or Mapbox GL here to show Tesco and Sainsbury’s locations based on user location.
        </p>
      </section>
    </main>
  );
}
