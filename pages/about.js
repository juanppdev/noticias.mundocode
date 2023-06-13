import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">Que es Noticias MundoCode?</h2>

          <p>Mi objetivo es mantenerte al tanto de las últimas novedades y tendencias en el mundo de la programación y la tecnología.</p>
          <br/>
          <p>En cada edición de la newsletter, cubriremos una amplia gama de temas relacionados con la programación y la tecnología, como lenguajes de programación populares, frameworks, herramientas, avances en inteligencia artificial, desarrollo web, aplicaciones móviles, seguridad cibernética, análisis de datos y mucho más.</p>
          <br/>
          <p>Puedes esperar recibir información sobre los últimos lanzamientos de software, actualizaciones de frameworks y bibliotecas, reseñas de productos y servicios relevantes, consejos y trucos para mejorar tus habilidades de programación, entrevistas con expertos de la industria y análisis de las últimas tendencias tecnológicas.</p>
          <br/>
          <p>También destacaremos eventos y conferencias importantes en el campo de la programación y la tecnología, proporcionaremos enlaces a recursos útiles, tutoriales y cursos en línea para ayudarte a expandir tus conocimientos y mantenerte al día con las tecnologías emergentes.</p>
          <br/>
          <p>La newsletter se enviará regularmente, ya sea semanalmente o mensualmente, dependiendo de la frecuencia que elijas. ¡Espero que disfrutes de los contenidos y encuentres información valiosa que te inspire en tu viaje como programador y entusiasta de la tecnología!</p>
        </section>
      </div>

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
