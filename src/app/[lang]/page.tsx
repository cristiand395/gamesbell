import { getDictionary } from "./dictionaries";
import SearchInput from "@/components/SearchInput";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);
  const games = dict.games
  console.log(games)
  return (
    <>
      <SearchInput />
      <h1>Idioma actual: {lang}</h1>
      <h2>{dict.menu.signup}</h2>
      <section className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {games.map((item: any, index: any) => (
          // <Link key={index} href="#">
          <Card shadow="sm" isPressable key={index}>

            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>

          // </Link>
        ))}
      </section>
    </>
  );
}
