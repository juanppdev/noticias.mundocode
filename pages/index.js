import Image from "next/image";
import Subscribe from '../components/subscribe'

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Bienvenidos a Noticias Mundocode Newsletter
      </h2>
      
      <Subscribe/>
     
    </div>
  );
}
