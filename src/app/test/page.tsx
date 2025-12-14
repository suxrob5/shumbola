"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`
        fixed top-0 left-0 w-full z-50 
        bg-white shadow 
        transition-all duration-300 
        ${isScroll ? "h-14" : "h-24"} 
        flex items-center
      `}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1
            className={`font-bold transition-all duration-300 ${
              isScroll ? "text-lg" : "text-2xl"
            }`}
          >
            Logo
          </h1>

          <nav
            className={`flex gap-6 transition-all duration-300 ${
              isScroll ? "text-sm" : "text-base"
            }`}
          >
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </header>
      .
      <div className="h-[800px] w-full">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>{" "}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus fugit pariatur et. Voluptatibus libero, reiciendis odit,
          nihil quibusdam, eos iure facere omnis aut debitis voluptas ipsa illo
          nulla laboriosam. Ut, asperiores? Blanditiis numquam maiores ea qui
          aspernatur illum provident sed in iusto beatae quo incidunt sunt
          soluta animi ducimus, repellat quas debitis iure quaerat hic minus ab
          aut molestiae saepe? Animi ipsa, iure incidunt rerum quas similique
          possimus repudiandae culpa mollitia modi laudantium, quibusdam facere
          commodi voluptatum fugiat minus quaerat earum distinctio rem ipsam
          dignissimos eum exercitationem. Corporis, earum iusto enim consectetur
          maxime dolorum blanditiis et natus saepe qui.
        </h1>
      </div>
    </div>
  );
}
