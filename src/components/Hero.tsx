import ArrowIcon from "./ui/ArrowIcon";
import ThreeTorusKnot from "./ui/ThreeTorusKnot";
import Popup from "./ui/Popup/Popup";

export default function Hero() {
  return (
    <section className="p-4 h-[calc(100dvh-72px)] max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
      <div className="flex flex-col justify-end md:justify-center h-full">
        <div className="flex items-center text-red mb-4">
          <p className="text-xs tracking-widest">01</p>
          <span className="h-[1px] w-[70px] bg-red mx-2"></span>
          <p className="text-xs tracking-widest">WITAMY</p>
        </div>
        <h1 className="mb-4 font-extrabold text-lg md:text-4xl md:max-w-[20ch] uppercase tracking-wider">
          Tworzymy Strony, Które Wyróżniają Twój Biznes.
        </h1>
        <p className="mb-4 hidden md:block font-extrabold text-sm md:text-xl max-w-[50ch] uppercase tracking-wider">
          Rozwijaj się z nami! Nasze nowoczesne i{" "}
          <Popup
            content={
              <p>
                Nasza strona idealnie dopasowuje się do ekranu telefonu, tabletu
                czy komputera. Łatwa w obsłudze i zawsze świetnie wyglądająca,
                niezależnie od urządzenia!
              </p>
            }
            childClassName="underline"
          >
            <span>responsywne</span>
          </Popup>{" "}
          strony internetowe są kluczem do sukcesu małych i średnich firm.
          Dołącz do grona zadowolonych klientów i zaistniej w świecie online już
          dziś!
        </p>
        <button className="group border-red border-[1px] text-red hover:text-white p-6 w-full md:w-1/2 relative overflow-hidden tracking-widest">
          <span className="absolute left-[-100%] w-full -z-10 top-0 bg-red text-white h-full flex items-center justify-end transition-all duration-300 ease-in-out group-hover:left-0 text-3xl">
            <ArrowIcon
              size={25}
              color="#c7c7c7"
              className="mr-2"
              strokeWidth={8}
            />
          </span>
          Zobacz więcej
        </button>
      </div>

      <ThreeTorusKnot />
    </section>
  );
}
