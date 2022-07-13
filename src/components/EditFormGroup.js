import { Alert, Grid } from "@mui/material";
import { MSG_NO_DATA } from "constants/messages";
import { checkValid, getValidationMessage } from "lib/strings";
import { isEmpty } from "lodash";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import EditFormControl from "./EditFormControl";
import LabelControl from "./LabelControl";
import { formatArray } from "lib/arrayObject";

export const tblFields2FormLayout = (fields = [], additionalOptions = {}) =>
  formatArray(fields).map((field) => ({
    ...(field ?? {}),
    name: field?.selector ?? "",
    label: field?.label || field?.selector || "",
    type: field?.format || field?.type || "text",
    options: field?.options,
    ...(additionalOptions ?? {}),
  }));

export default forwardRef(function EditFormGroup(
  {
    name: formName = new Date().getTime().toString(),
    // type, name, label, placeholder lg, md, sm, xs
    layout = [],
    data: propsData = {},
    onChange = () => {},
    // define onchange parameter 'state', 'event', 'name-value'
    type = "state",

    itemSize: { lg = false, md = false, sm = false, xs = false } = {},

    //
    justifyContent,
    alignItems,
    direction = "column",
    spacing = 1,

    isLabel = false,

    readOnly = false,
  },
  ref
) {
  const [error, setError] = useState({});

  useImperativeHandle(ref, () => ({ prepare: checkFormValid }));

  const [data, setData] = useState({});
  const dataRef = useRef(null);
  dataRef.current = data;

  const checkFormValid = () => {
    const newError = (layout ?? []).reduce(
      (ret, control, controlIndex, self) => {
        if (control?.required) {
          const type = control?.type ?? "";
          const name = control?.name ?? "";
          const controlValue = dataRef.current?.[name];

          const isValid =
            name === "password_confirm"
              ? controlValue === dataRef.current?.password
              : checkValid(type, controlValue);

          const msg = isValid ? "" : getValidationMessage(type, name);
          return { ...(ret ?? {}), [name]: msg };
        }
        return ret;
      },
      {}
    );
    setError(newError, Object.values(newError).join(""));
    if (!Object.values(newError).join("")) {
      return dataRef.current ?? {};
    } else {
      console.log(newError);
      return false;
    }
  };

  const handleValidate = (name = "", value = "") => {
    const control = layout.find((item) => item?.name === name) ?? {};
    if (control?.required) {
      const type = control?.type ?? "";
      const isValid = checkValid(type, value);
      const msg = isValid ? "" : getValidationMessage(type);
      setError((s = {}) => ({ ...(s ?? {}), [name]: msg }));
    }
  };

  const handleChange = (e = {}) => {
    if (e?.target?.name) {
      handleValidate(e?.target?.name, e?.target?.value);

      if (type === "state") {
        const closure = (s = {}) => ({
          ...(s ?? {}),
          [e?.target?.name ?? ""]: e?.target?.value,
        });
        setData(closure);
        if (typeof onChange === "function") {
          onChange(closure);
        }
      }
      if (type === "name-value") {
        const newData = {
          ...(data ?? {}),
          [e?.target?.name ?? ""]: e?.target?.value,
        };
        setData(newData);
        if (typeof onChange === "function") {
          onChange(newData);
        }
      }
    }
  };

  useEffect(() => {
    if (!isEmpty(propsData) || !isEmpty(data)) {
      console.log("init");
      setData(propsData);
    }
    // eslint-disable-next-line
  }, [propsData]);

  return (
    <div>
      {Array.isArray(layout) && layout?.length > 0 ? (
        <Grid
          container
          justifyContent={justifyContent}
          alignItems={alignItems}
          direction={direction}
          spacing={spacing}
        >
          {layout.map((control, controlIndex) => {
            const renderControl = (
              <EditFormControl
                data={data ?? {}}
                onChange={handleChange}
                isLabel={isLabel}
                {...(control ?? {})}
                error={error ?? {}}
                readOnly={control?.readOnly || readOnly}
              />
            );
            const isHide =
              typeof control?.hide === "function" ? control?.hide(data) : false;

            return isHide ? null : isLabel ? (
              <Grid key={controlIndex} item lg={12} md={12} sm={12} xs={12}>
                <LabelControl
                  label={control?.hideLabel ? "" : control?.label ?? ""}
                  control={renderControl}
                  lg={lg || 9}
                  md={md || 9}
                  sm={sm || 9}
                  xs={xs || 9}
                />
              </Grid>
            ) : (
              <Grid key={controlIndex} item lg={lg} md={md} sm={sm} xs={xs}>
                {renderControl}
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Alert variant="info">{MSG_NO_DATA.SHORT}</Alert>
      )}
    </div>
  );
});
