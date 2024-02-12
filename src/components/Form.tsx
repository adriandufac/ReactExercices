import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/** USING zod Lib for validation rules  => */
const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }), // il y a un message par default  mais on peut le custom comme ceci
  age: z.number({ invalid_type_error: "Age field is required" }).positive(),
});
type formData2 = z.infer<typeof schema>; // si on utilise z on peut extraire le type de la formData comme ceci pour éviter d'etre redondant
interface formData {
  name: string;
  age: number;
}

const Form = () => {
  const person = { name: "", age: 0 };
  /** methode 1 (utilisation de useRef + ref) */
  const nameRef = useRef<HTMLInputElement>(null); // useRef hook sert a référencer un element du DOM
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit1 = (event: FormEvent) => {
    event.preventDefault(); // evite que le formulaire soit envoyé et qu'on perde notre log
    if (nameRef.current !== null && ageRef.current !== null) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      console.log(person);
      console.log(person.name);
      console.log(person.age);
    }
  };
  /**Methode 2 usestate + onchange + value attention, la page est rechargé dès qu'un input est modifié*/
  const [person2, setPerson2] = useState({
    name: "",
    age: 0,
  });
  const handleSubmit2 = (event: FormEvent) => {
    event.preventDefault();
    console.log(person2);
  };
  /**Methode 3 librairie react-hook-form */
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) }); // on destructure l'objet form renvoyé par useForm pour avoir les fonctions necessaires
  const handleSubmit3 = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmit3)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name" /*, { required: true, minLength: 3 } sans zod*/)}
          /* onChange={(event) =>
            setPerson2({ ...person2, name: event.target.value })
          }
          value={person2.name}
          ref={nameRef} */
          id="name"
          type="text"
          className="form-control"
        />
        {/** SANS ZOD */}
        {/*
          errors.name?.type === "required" && (
            <p className="text-danger">The name Field is required</p>
          ) /* le ? est pour optionnal chaining, si pas de propriété name on cherche pas le type */}
        {/*errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name Field need to be bigger than 3 characters
          </p>
        )*/}
        {/** Avec ZOD */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          /* onChange={(event) =>
            setPerson2({ ...person2, age: parseInt(event.target.value) })
          }
          value={person2.age}
          ref={ageRef} */
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
