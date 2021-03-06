import { Add } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";
import EditFormGroup from "components/EditFormGroup";
import {
  ERR_NETWORK,
  MSG_INPUT_ALL,
  MSG_SUCCESS_DELETED,
  MSG_SUCCESS_SAVED,
} from "constants/messages";
import { formatArray } from "lib/arrayObject";
import { openLoading } from "lib/store";
import {
  deleteReadingList,
  getReadingList,
  saveReadingList,
} from "models/readingListModel";
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

    openLoading(true);
    saveReadingList({
      data: submitData,
      onFinish: (res) => {
        if (res) {
          console.log("1");
          setFormData({});
          enqueueSnackbar(MSG_SUCCESS_SAVED.LONG, { variant: "success" });
          loadData();
          return;
        } else {
          console.log("2");
          enqueueSnackbar(ERR_NETWORK.LONG, { variant: "warning" });
          openLoading(false);
          return;
        }
      },
    });
  };

  const handleDelete = (value) => {
    openLoading(true);
    deleteReadingList({
      data: value,
      onFinish: (res) => {
        if (res) {
          setFormData({});
          enqueueSnackbar(MSG_SUCCESS_DELETED.LONG, { variant: "success" });
          loadData();
        } else {
          enqueueSnackbar(ERR_NETWORK.LONG, { variant: "warning" });
          openLoading(false);
        }
      },
    });
  };

  const loadData = () => {
    getReadingList({
      user_id: user?.id ?? "",
      onFinish: (res) => {
        setData(formatArray(res));
        openLoading(false);
      },
    });
  };

  useEffect(() => {
    openLoading(true);
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
              onDelete={() => handleDelete(item, itemIndex)}
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
          <Fab
            onClick={handleAdd}
            variant="extended"
            color="warning"
            size="small"
          >
            <Add />
            Create
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
