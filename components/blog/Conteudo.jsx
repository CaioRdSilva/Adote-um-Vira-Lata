import Image from "next/image";

const Conteudo = () => (
  <>
    <div className="w-full py-2 mx-auto text-lg sm:md:8/12 lg:xl:2xl:w-6/12 sm:mx-5 md:lg:xl:2xl:mx-auto font-regular">
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
        molestias rem minus sequi minima amet rerum tempore fugiat sapiente,
        odio necessitatibus ex delectus veniam. Blanditiis perferendis iste quos
        earum corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta nemo voluptates exercitationem temporibus incidunt ea aliquid
        dicta explicabo corporis dignissimos? Sequi, veritatis assumenda! Iusto
        natus amet ea cum aliquid soluta. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.{" "}
        <span className="font-bold text-green-900">Temporibus</span>{" "}
        necessitatibus nisi reiciendis quaerat ipsa laudantium ipsam! Nulla
        voluptatum est obcaecati velit ad nesciunt, at deserunt ea? Quis magnam
        assumenda deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolor sapiente exercitationem architecto consequuntur nemo
        asperiores est in minus ducimus necessitatibus aut animi, ex pariatur,
        numquam sed veniam, dicta vero ipsa.
      </p>

      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
        molestias rem minus sequi minima amet rerum tempore fugiat sapiente,
        odio necessitatibus ex delectus veniam. Blanditiis perferendis iste quos
        earum corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta nemo voluptates exercitationem temporibus incidunt ea aliquid
        dicta explicabo corporis dignissimos? Sequi, veritatis assumenda! Iusto
        natus amet ea cum aliquid soluta. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.{" "}
        <span className="font-bold text-green-900">Temporibus</span>{" "}
        necessitatibus nisi reiciendis quaerat ipsa laudantium ipsam! Nulla
        voluptatum est obcaecati velit ad nesciunt, at deserunt ea? Quis magnam
        assumenda deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolor sapiente exercitationem architecto consequuntur nemo
        asperiores est in minus ducimus necessitatibus aut animi, ex pariatur,
        numquam sed veniam, dicta vero ipsa.
      </p>
      <div className="w-2/3 mx-auto my-2">
        <Image
          className="object-cover object-center w-full mx-auto"
          width={400}
          height={400}
          src="/test/teste-1.png"
          alt="text-1"
        />
      </div>

      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
        molestias rem minus sequi minima amet rerum tempore fugiat sapiente,
        odio necessitatibus ex delectus veniam. Blanditiis perferendis iste quos
        earum corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta nemo voluptates exercitationem temporibus incidunt ea aliquid
        dicta explicabo corporis dignissimos? Sequi, veritatis assumenda! Iusto
        natus amet ea cum aliquid soluta. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.{" "}
        <span className="font-bold text-green-900">Temporibus</span>{" "}
        necessitatibus nisi reiciendis quaerat ipsa laudantium ipsam! Nulla
        voluptatum est obcaecati velit ad nesciunt, at deserunt ea? Quis magnam
        assumenda deleniti.
      </p>
    </div>
  </>
);

export default Conteudo;
