const Subscribe = () => {
  return (
    <>
    <div className="border border-gray-200 rounded p-6 my-4 w-full bg-gray-50">
      <p className="text-gray-900 mb-6 text-lg md:text-xl">
         Quieres recibir noticias sobre progrmacion y tecnología actual y enterarte de lo nuevo?
      </p>
      <p className="text-gray-800 dark:text-gray-400 mb-10 text-base">
        Ingrese su dirección de correo electrónico y será agregado a mi boletín de correo electrónico, del cual puede optar por no participar en cualquier momento.
      </p>
      <iframe src="https://embeds.beehiiv.com/d88b53f3-683a-4940-a7c0-b93aec42eff5?slim=true" data-test-id="beehiiv-embed" height="52" frameBorder="0" scrolling="no" className="beehiiv"></iframe>
    </div>
    </>
  );
};

export default Subscribe;
