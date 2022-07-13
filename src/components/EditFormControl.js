import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { formatArray } from "lib/arrayObject";

export default function EditFormControl({
  data = {},
  type = "text",
  name = "",
  label = "",
  placeholder = "",
  onChange = () => {},
  size,
  variant = "outlined",
  fullWidth = false,

  optionLabel = (option) => (typeof option === "string" ? option : option?.id),
  options = [],

  onKeyDown = () => {},

  // error
  error = {},

  readOnly = false,

  isLabel = false,

  // for file upload
  destination = "",

  // preview
  preview = false,

  // no sort for the auto completes
  noSort = false,

  start = 1,
  end = 60,

  // multiline
  rows = 5,

  ...props
}) {
  type = String(type).toLowerCase();

  // const isError = isRequire && data?.value && !checkValid(type, data?.value);
  const isError = Boolean(error?.[name]);

  const basicProps = {
    name: name ?? "",
    label: isLabel ? "" : label ?? "",
    placeholder: placeholder ?? "",
  };

  const generalProps = {
    ...basicProps,
    size: size ?? "",
    variant: variant,
    fullWidth: Boolean(fullWidth),
    disabled: readOnly,
  };

  const propsValue = data?.[name ?? ""];

  const textProps = {
    value: data?.[name ?? ""] ?? "",
    onChange: onChange,
    // onChange: console.log,
    onKeyDown: onKeyDown,
  };

  const errorProps = {
    error: isError,
    helperText: error?.[name],
  };

  const handleSelectChange = (e = {}, value = {}) => {
    onChange({ target: { name: name, value: value } });
  };

  const handleCheck = (e) => {
    onChange({ target: { name: name, value: Boolean(e?.target?.checked) } });
  };

  return (
    <div>
      {type === "select" ? (
        readOnly ? (
          optionLabel(propsValue)
        ) : (
          <Autocomplete
            // disablePortal
            options={
              noSort
                ? formatArray(options)
                : formatArray(options).sort((a, b) =>
                    optionLabel(a) < optionLabel(b) ? -1 : 1
                  )
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label={isLabel ? "" : label}
                {...errorProps}
              />
            )}
            {...generalProps}
            getOptionLabel={optionLabel}
            value={propsValue ?? null}
            onChange={handleSelectChange}
          />
        )
      ) : type === "switch" ? (
        isLabel ? (
          readOnly ? (
            propsValue ? (
              "Yes"
            ) : (
              "No"
            )
          ) : (
            <Switch
              {...basicProps}
              checked={Boolean(propsValue)}
              onChange={handleCheck}
              size={size}
              disabled={readOnly}
            />
          )
        ) : readOnly ? (
          propsValue ? (
            "Yes"
          ) : (
            "No"
          )
        ) : (
          <FormControlLabel
            label={label}
            control={
              <Switch
                {...generalProps}
                checked={Boolean(propsValue)}
                onChange={handleCheck}
              />
            }
          />
        )
      ) : type === "checkbox" ? (
        isLabel ? (
          readOnly ? (
            propsValue ? (
              "Yes"
            ) : (
              "No"
            )
          ) : (
            <Checkbox
              {...basicProps}
              checked={Boolean(propsValue)}
              onChange={handleCheck}
              size={size}
              disabled={readOnly}
            />
          )
        ) : readOnly ? (
          propsValue ? (
            "Yes"
          ) : (
            "No"
          )
        ) : (
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                {...generalProps}
                checked={Boolean(propsValue)}
                onChange={handleCheck}
              />
            }
          />
        )
      ) : type === "custom" ? (
        <div></div>
      ) : type === "multiline" ? (
        readOnly ? (
          <div className="whitespace-pre-line">{propsValue}</div>
        ) : (
          <TextField
            type="text"
            {...generalProps}
            {...textProps}
            {...errorProps}
            multiline
            rows={rows}
          />
        )
      ) : readOnly ? (
        propsValue
      ) : (
        // number, text, password, email,
        <TextField
          type={type}
          {...generalProps}
          {...textProps}
          {...errorProps}
        />
      )}
    </div>
  );
}
