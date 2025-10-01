export default function Mitra() {
  return (
    <div className="relative bg-gradient-to-b from-green-200 to-green-400 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-green-800">
          Dipercaya oleh jamaah & partner terbaik
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 
                        sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 
                        lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* Logo partner */}
          <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110 transition-transform" />
          <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110 transition-transform" />
          <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110 transition-transform" />
          <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110 transition-transform" />
          <img src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic" className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Fade ke footer hijau solid */}
      <div className="absolute left-0 bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-green-600 pointer-events-none" />
    </div>
  );
}
