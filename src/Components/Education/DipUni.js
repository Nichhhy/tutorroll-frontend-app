import { useStepperContext } from "../../Contexts/StepperContext";

export default function Education(props) {
  const { userData, setUserData } = useStepperContext();

  const onChange = (e) => {
    setUserData({
      ...userData,
      subjectTaught: userData.subjectTaught.map((object, index) => {
        if (index === props.index) {
          return { ...object, [e.target.name]: e.target.value };
        } else return object;
      }),
    });
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Education Level
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
          name="level"
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Institution
        </p>
        <select
          name="subjects"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Course
        </p>
        <select
          name="minimum"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex  justify-start gap-[6px] w-full">
        <div className="w-full flex flex-col justify-start">
          <p className="font-normal text-[#475467] text-[14px] text-left">
            Start date
          </p>
          <select
            name="minimum"
            className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
            placeholder="Select Level"
            onChange={onChange}
          >
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="meat">Meat</option>
          </select>
        </div>
        <div className="w-full flex flex-col justify-start">
          <p className="font-normal text-[#475467] text-[14px] text-left">
            End date (or expected)
          </p>
          <select
            name="minimum"
            className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
            placeholder="Select Level"
            onChange={onChange}
          >
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="meat">Meat</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Grade
        </p>
        <select
          name="minimum"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
    </div>
  );
}