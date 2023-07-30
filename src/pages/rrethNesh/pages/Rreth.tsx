import React from "react";
import { BsTelephone as TelIcon } from "react-icons/bs";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Rreth = () => {
  return (
    <>
      <h1>
        Rreth Nesh{" "}
        <span>
          <AiOutlineInfoCircle />
        </span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, illum
        enim ratione ad ipsam natus quae, dolore dignissimos hic, molestias
        quasi dolores assumenda ullam dolorum corporis? Corporis optio, nisi
        laboriosam nulla in sequi ipsum voluptatibus asperiores dolorum cumque
        unde soluta qui nobis accusamus impedit ratione reprehenderit tenetur
        odio totam blanditiis rerum iste! Vitae iure iusto ipsum in incidunt
        architecto eaque tenetur dolorem reprehenderit enim, animi officia
        blanditiis optio nobis cumque suscipit quam praesentium voluptate
        dignissimos quae, nesciunt ad temporibus molestias iste. Nemo ad qui
        culpa illo non rerum reiciendis voluptatibus modi itaque obcaecati rem
        quae earum, provident esse iste corrupti neque natus ratione fugiat
        consequatur accusantium id, molestiae numquam. Autem doloribus error,
        ipsa ad at earum exercitationem odit. Recusandae, fugiat.
      </p>
      <h2>Kontakto</h2>
      <div aria-label="Phone Group">
        <TelIcon />
        <h3>+355 68 839 3968</h3>
      </div>
      <div aria-label="Email Group">
        <EmailIcon />
        <h3>email@info.com</h3>
      </div>
    </>
  );
};

export default Rreth;
