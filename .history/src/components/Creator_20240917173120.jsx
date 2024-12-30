import { Minus, MoveRight } from "lucide-react";

const creators = [
  {
    image: "/src/assets/images/home-creator-1.jpg",
    name: "John Doe",
    value: "3.767ETH",
  },
  {
    image: "/src/assets/images/home-creator-2.jpg",
    name: "Anika Reham",
    value: "5.252ETH",
  },
  {
    image: "/src/assets/images/home-creator-3.jpg",
    name: "David ALEX",
    value: "2.867ETH",
  },
  {
    image: "/assets/images/home-creator-4.jpg",
    name: "Yasmin Dutt",
    value: "3.842ETH",
  },
  {
    image: "/assets/images/home-creator-5.jpg",
    name: "Lorem Smith",
    value: "3.767ETH",
  },
  {
    image: "/assets/images/home-creator-6.jpg",
    name: "Larry James",
    value: "3.767ETH",
  },
];

export const Creator = () => {
  return (
    <div className="Featured  bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5 ">
      <div className="feature text-[#009fed] flex flex-row gap-2 items-center">
        <Minus size={30} strokeWidth={4} />
        <p className="text-start"> TOP ARTIST</p>
      </div>
      <div className="live flex flex-row justify-between ">
        <p className="text-white text-[30px] font-medium">Featured Creator</p>
        <div className="view flex flex-col">
          <a
            className="text-[#009fed] flex justify-center items-center gap-2"
            href="#"
          >
            VIEW ALL
            <MoveRight size={20} strokeWidth={2} />
          </a>
        </div>
        <div className="create-people flex flex-col md:flex-row">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="people flex flex-row justify-center items-center md:[40%]"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              quod nesciunt distinctio dicta exercitationem sequi perferendis
              rem error libero quos possimus minus, nisi dignissimos non ducimus
              rerum voluptates eos magni tempora nostrum voluptate fugiat
              delectus. Quasi dicta accusantium odio assumenda iusto fugiat unde
              corrupti nam pariatur aliquam, quia nostrum aliquid est nesciunt.
              Pariatur necessitatibus nesciunt sint recusandae ipsa veniam,
              rerum, quae excepturi, architecto aperiam libero nihil! Sapiente
              commodi quod, delectus harum distinctio error voluptas libero unde
              saepe quaerat vero dolores ratione, laborum totam, quas mollitia
              quo cum. Odit quae accusantium necessitatibus voluptatem
              laudantium quidem earum ad natus, cum excepturi qui, dolorem
              nostrum. Numquam, perferendis totam! Vitae odio voluptatibus saepe
              aut repellat ipsum sint labore consectetur possimus laudantium
              necessitatibus libero sequi, delectus dolorum, ratione assumenda
              quas odit illum, maiores quos deleniti repudiandae natus ullam
              pariatur! Excepturi, consequatur vel. Voluptatum, ipsam omnis.
              Sequi totam corrupti cum doloremque consequatur repellendus atque
              fugit saepe, fugiat harum minus inventore numquam labore aliquam
              facere molestias ab optio nihil necessitatibus rerum, ad maxime
              culpa ducimus et. Ipsum, dolore. Reprehenderit deserunt
              consequuntur commodi rerum, non nesciunt! Sit aliquam autem non
              laborum quis dolor debitis minus! Commodi accusantium fugiat
              atque, aliquid illum error vel quod mollitia corporis, libero ad?
              Neque quod commodi soluta placeat ullam. Aliquam minima repellat
              repellendus, ut harum natus assumenda accusantium maxime fugiat
              doloribus! Quae quos, voluptatem aut sed perspiciatis alias,
              magnam hic error debitis atque tenetur odit sequi numquam, autem
              fuga nam repellat. Doloribus sapiente maxime excepturi? Voluptatem
              veniam asperiores alias quo, consectetur cupiditate distinctio
              commodi quas nam molestiae? Distinctio nam neque doloribus vitae
              fugit eveniet, ex explicabo rem similique earum vero iusto modi
              veritatis tenetur officia esse sapiente quasi corrupti voluptates
              voluptas dolore? Fugit exercitationem, et itaque quod minus
              tenetur. Consequuntur corrupti voluptates reiciendis labore esse
              molestiae tempore. Voluptatem repellendus dolores non saepe harum?
              {index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
