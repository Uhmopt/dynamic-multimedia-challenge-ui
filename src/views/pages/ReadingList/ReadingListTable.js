import { Add } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import EditFormGroup from "components/EditFormGroup";
import { MSG_INPUT_ALL } from "constants/messages";
import { formatArray } from "lib/arrayObject";
import { getReadingList } from "models/readingListModel";
import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
import ReadingListCard from "./ReadingListCard";

export default function ReadingListTable({ user = {} }) {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  const formRef = useRef();

  const handleAdd = () => {
    const submitData = formRef.current.prepare();
    if (!submitData) {
      enqueueSnackbar(MSG_INPUT_ALL.LONG, { variant: "warning" });
      return false;
    }
  };

  const loadData = () => {
    getReadingList({
      user_id: user?.id ?? "",
      onFinish: (res) => {
        setData(formatArray(res));
      },
    });
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {formatArray(data).map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={12} md={12} sm={12} xs={12}>
            <ReadingListCard
              title={item?.title ?? ""}
              caption={item?.author ?? ""}
            />
          </Grid>
        ))}

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <EditFormGroup
            ref={formRef}
            data={formData}
            onChange={setFormData}
            layout={[
              {
                label: "Book Title",
                name: "title",
                required: true,
                fullWidth: true,
              },
              {
                label: "Author",
                name: "author",
                required: true,
                fullWidth: true,
              },
            ]}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handleAdd}
            variant="contained"
            color="warning"
            startIcon={<Add />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
