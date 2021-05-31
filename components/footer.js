import Link from 'next/link'

const Footer = () => {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
      <div className="hidden sm:block flex justify-center w-full min-h-16 bg-gray text-coffee text-xs xl:text-sm pt-2">
        <div className="flex xl:w-11/12 mx-auto">
          <div style={{ fontFamily: "Roboto Condensed" }} className="flex sm:flex-row justify-between text-center leading-16 mx-auto">
            <div className="mx-8">Radca Prawny Łukasz Szczepaniak</div>
            <div className="mx-8 hidden xl:block">Kancelaria Radcy Prawnego</div>
            <div className="mx-8">05 - 500 Piaseczno, ul. Sienkiewicza 8</div>
            <div className="mx-8 tracking-wide">tel. 505 305 893</div>
            <div className="mx-8 tracking-wide">e-mail: LS@radcapiaseczno.pl</div>
            <div className="mx-8">© Wszelkie prawa zastrzeżone</div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex justify-center w-full min-h-16 py-1 bg-gray text-coffee text-xs xl:text-sm">
        <div className="w-11/12">
          <div style={{ fontFamily: "Roboto Condensed" }} className="flex flex-row sm:text-left">
            <div className="flex flex-col w-1/2 text-center">
              <div className="">Radca Prawny Łukasz Szczepaniak</div>
              <div className="">05-500 Piaseczno, ul.Sienkiewicza 8</div>
              <div className="">© Wszelkie prawa zastrzeżone</div>
            </div>
            <div className="flex flex-col w-1/2 text-center">
              <div className=" tracking-wide">tel. 505 305 893</div>
              <div className=" tracking-wide">e-mail: LS@radcapiaseczno.pl</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Footer