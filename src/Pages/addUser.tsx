import { Children, useId, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCalendar } from "react-aria";
import z from "zod";

export default function AddUser({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [name, setName] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [exp, setExp] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const id = useId();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AllInfos>();

  function handleSetExp(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (value >= 0) {
      setExp(value);
    } else {
      alert("Veuillez entrer un nombre positif!");
    }
  }

  return (
    <form className="mx-4 flex flex-col items-start justify-center gap-2 rounded-md bg-white p-4 font-ubunto shadow-lg md:shadow-none">
      <div className="my-2">
        <h1 className="text-3xl font-[400] text-primary md:text-4xl">
          Information Générale
        </h1>
        <p className="text-500 mt-2 max-w-[30ch] font-normal text-cooldgray md:max-w-none">
          Veuillez remplir les champs suivants pour ajouter un nouveau Profile.
        </p>
      </div>

      <Label id={id + "Name"}>
        <span className=" text-btnNext">Nom:</span>
        <input
          className="w-full rounded-md border-[1px] border-gray-600 px-2 py-3"
          id={id + "Name"}
          name="Name"
          value={name}
          placeholder="Doe"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </Label>

      <Label id={id + "FirstName"}>
        <span className=" text-btnNext">Prénom:</span>
        <input
          className="w-full rounded-md border-[1px] border-gray-600 px-2 py-3"
          id={id + "FirstName"}
          name="FirstName"
          value={firstname}
          placeholder="John"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Label>

      <Label id={id + "email"}>
        <span className=" text-btnNext">Email:</span>
        <input
          className="w-full rounded-md border-[1px] border-gray-600 px-2 py-3"
          id={id + "email"}
          name="Email"
          value={email}
          placeholder="example@example.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>

      <Label id={id + "exp"}>
        <span className=" text-btnNext">Expérience Proffessionel:</span>
        <input
          className="w-full rounded-md border-[1px] border-gray-600 px-2 py-3"
          id={id + "exp"}
          name="Proffessional Experience"
          value={exp}
          type="number"
          onChange={(e) => handleSetExp(e)}
          placeholder="En années"
        />
      </Label>
    </form>
  );
}

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      className="flex w-full flex-col items-start justify-center text-base font-[500] text-black"
      htmlFor={id}
    >
      {children}
    </label>
  );
}

const generalSchema = z.object({
  name: z.string(),
  age: z.number(),
  dateNaissance: z.date(),
  experience: z.number(),
});

const formationScheam = z.object({
  libelle: z.string(),
  date_debut: z.date(),
  date_fin: z.date(),
});

const certSchema = z.object({
  libelle: z.string(),
  date_obtenue: z.date(),
  date_expiration: z.date(),
  credly_link: z.string().optional(),
  Issued_by: z.string().optional(),
});

// extracting the type
type Formation = z.infer<typeof formationScheam>;
type Cert = z.infer<typeof certSchema>;
type General = z.infer<typeof generalSchema>;
type AllInfos = General & { fromations: Formation[]; certifications: Cert[] };
