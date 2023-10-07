import { Select, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useEffect } from "react";
import { GiTrashCan } from "react-icons/gi";
import { z } from "zod";

const AddressForm = ({ studentDetailsForm, index }) => {




  return (
    <div className="input_fields">
      <div onClick={()=>  studentDetailsForm.removeListItem("addresses", index)} className="delete_address_icon">
      <GiTrashCan />
      </div>
      <div className="grid_2">
        <TextInput
          size={"md"}
          label={"City"}
          placeholder={"Enter city"}
          {...studentDetailsForm.getInputProps(`addresses.${index}.city`)}
        />
        <TextInput
          size={"md"}
          label={"State"}
          placeholder={"Enter state"}
          {...studentDetailsForm.getInputProps(`addresses.${index}.state`)}
        />
      </div>
      <div className="grid_2">
        <TextInput
          size={"md"}
          label={"Street"}
          placeholder={"Enter street"}
          {...studentDetailsForm.getInputProps(`addresses.${index}.street`)}
          />
        <Select
          placeholder="Select address type"
          label={"Address type"}
          data={["SCHOOL", "HOME"]}
          {...studentDetailsForm.getInputProps(`addresses.${index}.addressType`)}
        />
      </div>
    </div>
  );
};

export default AddressForm;
