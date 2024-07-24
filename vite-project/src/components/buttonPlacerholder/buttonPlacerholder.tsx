import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface MultilineTextFieldsProps {
  placeholder: string;
  nameButton: string;
  idButton: string;
  width?: string;
  autoComplete?: boolean;
}

const MultilineTextFields: React.FC<MultilineTextFieldsProps> = ({
  placeholder,
  nameButton,
  idButton,
  width = "25ch",
  autoComplete = true,
}) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          background: "",
          "& .MuiTextField-root": { m: 1, width },
        }}
        noValidate
        autoComplete={autoComplete ? "on" : "off"}
      >
        <div className="grid justify-center">
          <TextField
            id={idButton}
            label={nameButton}
            placeholder={placeholder}
            multiline
            sx={{
              background: "#ffc047",
              borderRadius: "5px",
              "&:hover .MuiFormControl": {
                outline: "1px solid white",
              },
            }}
          />
        </div>
      </Box>
    </>
  );
};

export default MultilineTextFields;
