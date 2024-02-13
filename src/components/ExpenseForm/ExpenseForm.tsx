import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Item } from "../../Interfaces";

const categories = ["Groceries", "Utilities", "Entertainement"] as const;

interface ExpenseFormProps {
  onSubmitItem: (item: Item) => void; // utilisée pour remonter item vers component app
}
const options = [
  { value: "groceries", label: "Groceries" },
  { value: "utilities", label: "Utilities" },
  { value: "entertainement", label: "Entertainement" },
];
const schema = z.object({
  Description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" }),
  Amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .positive(),
  Categorie: z.enum(categories),
});

type formData = z.infer<typeof schema>;

const ExpenseForm = (props: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) }); // on destructure l'objet form renvoyé par useForm pour avoir les fonctions necessaires
  const Submit = (data: FieldValues) => {
    const item: Item = {
      id: data.Description.length,
      description: data.Description,
      number: data.Amount,
      category: data.Categorie,
    };
    console.log(item);
    props.onSubmitItem(item);
  };
  return (
    <>
      <form onSubmit={handleSubmit(Submit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("Description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.Description && (
            <p className="text-danger">{errors.Description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("Amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.Amount && (
            <p className="text-danger">{errors.Amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="categorie" className="form-label">
            Categorie
          </label>
          <select
            {...register("Categorie")}
            id="categorie"
            className="form-control"
          >
            {options.map((option) => (
              <option value={option.label}>{option.label}</option>
            ))}
          </select>
          {errors.Categorie && (
            <p className="text-danger">{errors.Categorie.message}</p>
          )}
        </div>
        <button
          /* disabled={!isValid} */ className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
