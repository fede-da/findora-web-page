import { FunctionComponent, useState } from "react";

export type FormType = {
  className?: string;
  onClose: () => void;
};

const Form: FunctionComponent<FormType> = ({ className = "", onClose }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    option: "",
    email: "",
    message: "",
  });

  const toggleOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const selectOption = (option: string) => {
    setFormData({ ...formData, option });
    setSelectedOption(option);
    setIsOptionOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const data = {
      access_key: "247f4231-3ac0-467c-be74-c9e18b09643e",
      ...formData,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form submitted successfully!");
      console.log("Success", res);
    } else {
      setResult("Failed to submit form.");
      console.log("Error", res);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={onSubmit}
        className={`w-[840px] bg-white max-w-full overflow-hidden flex flex-col items-center justify-center text-center text-45xl text-white font-gotham ${className}`}
      >
        <div className="w-[840px] bg-nero-1-findora box-border flex flex-col items-center justify-center py-[30px] px-0 max-w-[840px] border-[4px] border-solid border-nero-3-findora relative">
          <div className="self-stretch flex flex-col items-start justify-start py-[5px] px-0 relative gap-[35px]">
            <div className="self-stretch flex flex-row items-start justify-start z-[0]">
              <div className="flex-1 flex flex-col items-start justify-start py-[15px] px-0 gap-[30px]">
                <b className="relative self-stretch">LISTA D’ATTESA</b>
                <div className="relative self-stretch text-xl">
                  Entra e scopri un mondo di infinite opportunità
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] z-[1] text-left text-xl text-gray">
              <div className="flex flex-row flex-wrap items-start self-stretch justify-start">
                <div className="flex-1 flex flex-col items-center justify-start py-2.5 px-[30px] box-borderz max-h-[80px]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome"
                    className="w-full bg-nero-3-findora box-border h-[60px] flex flex-row items-start justify-start py-0 px-[30px] max-w-[370px] md:max-w-[none] border-[1px] border-solid border-bianco-1-findora"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start py-2.5 px-[30px] box-border max-h-[80px]">
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Cognome"
                    className="w-full bg-nero-3-findora box-border h-[60px] flex flex-row items-start justify-start py-0 px-[30px] max-w-[370px] md:max-w-[none] border-[1px] border-solid border-bianco-1-findora"
                    required
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-5 px-10 box-border min-w-[370px] text-center text-base text-bianco-1-findora">
                <div
                  className="self-stretch bg-verde-1-findora h-[60px] flex flex-col items-center justify-center py-0 px-[15px] box-border cursor-pointer relative"
                  onClick={toggleOption}
                >
                  <b className="relative flex items-center justify-center flex-1">
                    {selectedOption
                      ? selectedOption
                      : "SELEZIONA UNA OPZIONE +"}
                  </b>
                  {isOptionOpen && (
                    <div className="absolute top-[100%] left-0 right-0 bg-nero-3-findora z-10 border-solid border-bianco-1-findora">
                      <div
                        className="h-[60px] flex items-center justify-center cursor-pointer border-t border-bianco-1-findora"
                        onClick={() => selectOption("FREELENCER")}
                      >
                        FREELENCER
                      </div>
                      <div
                        className="h-[60px] flex items-center justify-center cursor-pointer border-t border-bianco-1-findora"
                        onClick={() => selectOption("UTENTE")}
                      >
                        UTENTE
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch justify-start">
                <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="self-stretch bg-nero-3-findora box-border h-[60px] flex flex-row items-start justify-start py-0 px-[15px] border-[1px] border-solid border-bianco-1-findora"
                    required
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px]">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Condividi le tue aspettative, suggerimenti, feedback"
                    className="self-stretch bg-nero-3-findora box-border h-[180px] flex flex-row items-start justify-start p-[15px] border-[1px] border-solid border-bianco-1-findora"
                    required
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px] text-center text-13xl text-white">
                <button
                  type="submit"
                  className="self-stretch bg-verde-1-findora h-[60px] flex flex-row items-start justify-start py-0 px-[15px] box-border cursor-pointer"
                >
                  <b className="relative flex items-center self-stretch justify-center flex-1">
                    SUBMIT
                  </b>
                </button>
              </div>
            </div>
            {/* {result && (
              <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-[30px] box-border min-w-[370px] text-center text-13xl text-white">
                <p className="relative flex items-center self-stretch justify-center flex-1">
                  {result}
                </p>
              </div>
            )} */}
            <div
              className="!m-[0] absolute top-[0px] right-[0px] flex flex-row items-start justify-start py-0 px-[30px] z-[2] cursor-pointer"
              onClick={onClose}
            >
              <img
                className="w-[30px] relative h-[30px]"
                alt="close"
                src="/public/X - Black.svg"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
